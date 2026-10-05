import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { IntroLoader } from './components/layout/IntroLoader';
import { AnimatedRoutes } from './routes';

export const App: React.FC = () => {
  return (
    <Router>
      <IntroLoader />
      <div className="relative min-h-screen flex flex-col">
        {/* Fixed navigation */}
        <Navbar />

        {/* Page content */}
        <main className="flex-grow pt-24 pb-12 w-full">
          <AnimatedRoutes />
        </main>

        <Footer />

        {/* Vercel Web Analytics: anonymous page views, including in-app route changes */}
        <Analytics />
      </div>
    </Router>
  );
};

export default App;
