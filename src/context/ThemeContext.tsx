import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { flushSync } from 'react-dom';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: (event?: React.MouseEvent) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // A theme the visitor picked earlier wins; everyone else starts in light mode
    // (the site's black-and-white look), regardless of the OS setting.
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
    // Keep the Safari / Chrome toolbar tint in sync with the active theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#09100B' : '#FFFFFF');
  }, [theme]);

  const toggleTheme = useCallback((event?: React.MouseEvent) => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';

    const switchTheme = () => {
      const root = document.documentElement;
      setTheme(nextTheme);
      root.setAttribute('data-theme', nextTheme);
      root.classList.toggle('dark', nextTheme === 'dark');
      localStorage.setItem('theme', nextTheme);
    };

    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };

    if (!doc.startViewTransition) {
      switchTheme();
      return;
    }

    const x = event ? event.clientX : window.innerWidth / 2;
    const y = event ? event.clientY : window.innerHeight / 2;
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const styleId = 'theme-transition-styles';
    let styleElement = document.getElementById(styleId) as HTMLStyleElement;
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = `
      ::view-transition-image-pair(root) {
        isolation: auto;
      }
      ::view-transition-group(root) {
        animation-duration: 0.75s;
        animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
      }
      ::view-transition-new(root) {
        animation: reveal-circle 0.75s cubic-bezier(0.16, 1, 0.3, 1);
        mix-blend-mode: normal;
      }
      ::view-transition-old(root) {
        animation: none;
        z-index: -1;
        mix-blend-mode: normal;
      }
      @keyframes reveal-circle {
        from {
          clip-path: circle(0px at ${x}px ${y}px);
        }
        to {
          clip-path: circle(${endRadius}px at ${x}px ${y}px);
        }
      }
    `;

    try {
      doc.startViewTransition(() => {
        flushSync(() => {
          switchTheme();
        });
      });
    } catch (err) {
      switchTheme();
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
