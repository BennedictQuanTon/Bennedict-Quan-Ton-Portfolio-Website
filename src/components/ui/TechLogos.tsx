import React from 'react';

interface TechIconProps {
  className?: string;
  size?: number;
  strokeWidth?: number;
}

// Custom inline SVG icons for Bennedict's tech stack
export const ReactIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="8" fill="currentColor" />
    <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" strokeWidth="4" transform="rotate(30 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" strokeWidth="4" transform="rotate(90 50 50)" />
    <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" strokeWidth="4" transform="rotate(150 50 50)" />
  </svg>
);

export const PythonIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.966 0c-2.316 0-3.328.188-4.526.54-2.128.625-2.617 1.83-2.617 4.195v1.272h7.323v1.02H4.823c-2.378 0-4.103.54-4.664 2.658-.625 2.366-.54 3.738 0 6.079.49 2.115 1.947 2.637 4.325 2.637h1.492v-2.029c0-2.366.862-4.526 4.316-4.526h4.315c2.316 0 4.104-1.393 4.104-3.738V4.316c0-2.316-1.572-3.87-4.104-4.156C13.568.04 12.83 0 11.966 0zm-3.818 1.488a.936.936 0 1 1 0 1.872.936.936 0 0 1 0-1.872zm11.029 4.341v2.028c0 2.366-.862 4.526-4.316 4.526h-4.315c-2.316 0-4.104 1.393-4.104 3.738v3.743c0 2.316 1.572 3.87 4.104 4.156 1.033.118 1.77.158 2.634.158 2.316 0 3.328-.188 4.526-.54 2.128-.625 2.617-1.83 2.617-4.195v-1.272H13.12v-1.02h7.323c2.378 0 4.103-.54 4.664-2.658.625-2.366.54-3.738 0-6.079-.49-2.115-1.947-2.637-4.325-2.637h-1.492zM15.82 20.64a.936.936 0 1 1 0 1.872.936.936 0 0 1 0-1.872z" />
  </svg>
);

export const FastapiIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.822 9.544l-4.57 7.643a.584.584 0 0 1-1.037.039l-2.036-3.395a.584.584 0 0 0-.965-.052l-2.909 3.878a.584.584 0 0 1-.951-.689l3.527-5.834a.584.584 0 0 1 1.037-.039l1.984 3.308a.584.584 0 0 0 .965.052l3.053-4.062a.584.584 0 0 1 .907.091l.995 1.553z" />
  </svg>
);

export const NextjsIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.195 18.062l-6.398-8.156v6.394H8.438V7.59h1.36l6.234 8.016V7.59h1.359v10.472h-1.196z" />
  </svg>
);

export const TypescriptIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0V0zm22.484 22.25v-2.029h-1.636c-.469 0-.756-.255-.756-.703v-4.992c0-.448.287-.703.756-.703h1.636v-2.029h-5.267v2.029h1.492c.469 0 .756.255.756.703v4.992c0 .448-.287.703-.756.703h-1.492v2.029h5.267zm-7.64 0c1.782 0 3.011-.99 3.011-2.602 0-2.316-2.586-2.585-2.586-3.55 0-.495.39-.778 1.053-.778.683 0 1.258.281 1.705.815l1.41-1.385c-.886-.99-2.024-1.458-3.328-1.458-1.748 0-2.842 1.042-2.842 2.551 0 2.235 2.585 2.502 2.585 3.568 0 .546-.469.846-1.139.846-.867 0-1.572-.416-2.062-1.092l-1.388 1.28c.94 1.222 2.228 1.805 3.581 1.805z" />
  </svg>
);

export const DockerIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.983 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM11.266 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM11.266 8.361h2.119c.102 0 .186-.084.186-.186V6.056c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM8.577 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H8.577c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM8.577 8.361h2.119c.102 0 .186-.084.186-.186V6.056c0-.102-.084-.186-.186-.186H8.577c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM5.888 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H5.888c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM3.172 11.078h2.119c.102 0 .186-.084.186-.186V8.773c0-.102-.084-.186-.186-.186H3.172c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM11.266 5.644h2.119c.102 0 .186-.084.186-.186V3.34c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119c0 .102.084.186.186.186zM23.766 12.368c-.144-.415-.551-.695-.992-.695h-2.61v-2.119c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119h-5.466V5.644h2.119c.102 0 .186-.084.186-.186V3.34c0-.102-.084-.186-.186-.186h-2.119c-.102 0-.186.084-.186.186v2.119h-1.637V11.218c.034 5.212-3.805 6.008-3.805 6.008.102.017.203.034.305.034 2.153 0 4.144-.958 5.483-2.585 1.348 1.627 3.339 2.585 5.492 2.585 2.144 0 4.135-.958 5.483-2.585 1.339 1.627 3.33 2.585 5.483 2.585.508 0 .992-.093 1.441-.271 1.483-.585 2.178-2.169 1.83-3.958-.339-1.288-.932-2.186-1.576-2.652z" />
  </svg>
);

export const PostgresqlIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z" />
  </svg>
);

export const RedisIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L1.13 6.25v11.5L12 24l10.87-6.25v-11.5L12 0zm0 3.61L18.87 7.5l-2.74 1.58L12 6.78 7.87 9.08l-2.74-1.58L12 3.61zm-7.61 5.92l2.74 1.58V16.8l-2.74-1.58V9.53zm8.74 10.86L6.26 16.8l2.74-1.58 4.13 2.3v3.74v-1.87zm1.13.06v-3.74l4.13-2.3 2.74 1.58-6.87 3.96v.5zm6.48-4.65v-5.69l2.74-1.58v5.69l-2.74 1.58z" />
  </svg>
);

export const SupabaseIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M21.36 10.158l-8.91 5.15a1.2 1.2 0 0 1-1.748-1.042V9.116a1.2 1.2 0 0 0-1.748-1.042l-6.31 3.65A1.2 1.2 0 0 0 2.04 12.83l8.91-5.15a1.2 1.2 0 0 1 1.748 1.042v5.15a1.2 1.2 0 0 0 1.748 1.042l6.31-3.65a1.2 1.2 0 0 0 .604-1.106z" />
  </svg>
);

export const LangchainIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.796 0a6.93 6.93 0 0 0-4.91 2.019L5.451 5.455l3.273 3.27 3.432-3.432a2.284 2.284 0 0 1 3.277 0 2.28 2.28 0 0 1 0 3.275L12 12.001l3.273 3.273 3.433-3.435c2.692-2.692 2.692-7.127 0-9.82A6.92 6.92 0 0 0 13.796 0m-5.07 8.728-3.433 3.434c-2.692 2.693-2.692 7.126 0 9.819A6.92 6.92 0 0 0 10.203 24a6.93 6.93 0 0 0 4.911-2.02l3.432-3.432-3.271-3.272-3.433 3.433a2.284 2.284 0 0 1-3.277 0 2.28 2.28 0 0 1 0-3.276L12 12z" />
  </svg>
);

export const LanggraphIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
    <circle cx="6" cy="18" r="3" fill="currentColor" />
    <circle cx="18" cy="6" r="3" fill="currentColor" />
    <circle cx="18" cy="18" r="3" fill="currentColor" />
    <path d="M8.5 16.5l7-7M18 9v6M9 18h6" />
  </svg>
);

export const NvidiaIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.5 17c-2.3 0-4.2-1.5-4.8-3.5h9.3c-.5 2-2.3 3.5-4.5 3.5zM7.2 12c0-2.3 1.5-4.2 3.5-4.8v9.3c-2-.5-3.5-2.3-3.5-4.5zm8.3-4.8c2 .5 3.5 2.3 3.5 4.5 0 2.3-1.5 4.2-3.5 4.8V7.2z" />
  </svg>
);

export const GitIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M23.384 11.233L12.767.616c-.822-.822-2.155-.822-2.977 0L8.273 3.132l2.946 2.946c.712-.241 1.527-.08 2.096.488.571.571.729 1.391.482 2.106l2.936 2.936c.715-.247 1.535-.089 2.106.482.784.784.784 2.054 0 2.838-.784.784-2.054.784-2.838 0-.582-.582-.735-1.42-.469-2.144l-2.812-2.812v4.887c.287.172.531.428.694.741.526 1.011.135 2.253-.876 2.779-1.011.526-2.253.135-2.779-.876-.526-1.011-.135-2.253.876-2.779.351-.183.74-.252 1.119-.215V8.892c-.379.037-.768-.032-1.119-.215-.571-.297-.962-.832-1.077-1.455L6.096 9.426c.266.724.113 1.562-.469 2.144-.784.784-2.054.784-2.838 0-.784-.784-.784-2.054 0-2.838.582-.582 1.42-.735 2.144-.469l2.809-2.809c-.112-.612-.006-1.258.324-1.812.379-.636.985-1.047 1.677-1.138L6.877 1.737c-.822-.822-2.155-.822-2.977 0L.616 12.354c-.822.822-.822 2.155 0 2.977l10.617 10.617c.822.822 2.155.822 2.977 0l10.617-10.617c.823-.822.823-2.155 0-2.977z"/>
  </svg>
);

export const ViteIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.056 23.238a.57.57 0 0 1-1.02-.355v-5.202c0-.63-.512-1.143-1.144-1.143H5.148a.57.57 0 0 1-.464-.903l3.777-5.29c.54-.753 0-1.804-.93-1.804H.57a.574.574 0 0 1-.543-.746.6.6 0 0 1 .08-.157L5.008.78a.57.57 0 0 1 .467-.24h14.589a.57.57 0 0 1 .466.903l-3.778 5.29c-.54.755 0 1.806.93 1.806h5.745c.238 0 .424.138.513.322a.56.56 0 0 1-.063.603z" />
  </svg>
);

export const PytorchIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M100.1 38.3l-9.2 9.2c15.1 15.1 15.1 39.4 0 54.3-15.1 15.1-39.4 15.1-54.3 0-15.1-15.1-15.1-39.4 0-54.3l24-24 3.4-3.4V2L27.8 38.2C7.7 58.3 7.7 90.8 27.8 111s52.6 20.1 72.4 0c20.1-20.2 20.1-52.5-.1-72.7z" />
    <circle cx="82.1" cy="29.4" r="7.2" />
  </svg>
);

export const HtmlCssIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L2 2.85v15.3L12 24V0zm-2 15.6l-3.5-.95-.2-2.5h2.1l.1 1.2 1.5.4v1.85zM10 11H6.1l-.2-2h4.1v2zm0-4H5.7l-.1-1.7h4.4V7z" opacity="0.9" />
    <path d="M12 0v24l10-5.85v-15.3L12 0zm6 11.1l-.5 4.5-5.5 1.5v-2l3.4-.9.2-2.1h-3.6v-2h5.7zm0-4.1h-6V5h6.2l-.2 2z" opacity="0.75" />
  </svg>
);

export const CursorIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.106 5.68L12.5.135a.998.998 0 00-.998 0L1.893 5.68a.84.84 0 00-.419.726v11.186c0 .3.16.577.42.727l9.607 5.547a.999.999 0 00.998 0l9.608-5.547a.84.84 0 00.42-.727V6.407a.84.84 0 00-.42-.726zm-.603 1.176L12.228 22.92c-.063.108-.228.064-.228-.061V12.34a.59.59 0 00-.295-.51l-9.11-5.26c-.107-.062-.063-.228.062-.228h18.55c.264 0 .428.286.296.514z"/>
  </svg>
);

export const AntigravityIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L16.5 7H7.5L12 2Z" opacity="0.95" />
    <path d="M6.6 9H17.4L18.7 12H5.3L6.6 9Z" opacity="0.75" />
    <path d="M4.4 14H19.6L21.5 19H2.5L4.4 14Z" opacity="0.55" />
    <ellipse cx="12" cy="22" rx="7" ry="1.5" opacity="0.25" />
  </svg>
);

export const TailwindIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 0.913 0.228 1.565 0.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-0.913-0.228-1.565-0.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8 0.913 0.228 1.565 0.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-0.913-0.228-1.565-0.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/>
  </svg>
);

export const ClaudeIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M4.5 10.5C3.67 10.5 3 11.17 3 12s.67 1.5 1.5 1.5h1.76l-1.24 1.24a1.5 1.5 0 1 0 2.12 2.12l1.24-1.24V17.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-1.88l1.24 1.24a1.5 1.5 0 0 0 2.12-2.12L13.76 13.5h1.74c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-1.74l1.24-1.24a1.5 1.5 0 0 0-2.12-2.12L11.12 8.38V6.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v1.88L6.88 7.14a1.5 1.5 0 0 0-2.12 2.12l1.24 1.24H4.5z"/>
  </svg>
);

export const HuggingFaceIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Yellow Emoji Face */}
    <circle cx="12" cy="12" r="8.5" fill="#FFD21E" stroke="#EAB308" strokeWidth="0.8" />
    {/* Happy smiling eyes */}
    <path d="M8.5 10.2c.4-.8 1.1-1 1.7-.6M13.8 9.6c.6-.4 1.3-.2 1.7.6" stroke="#1F2937" strokeWidth="1.6" strokeLinecap="round" />
    {/* Open happy smile */}
    <path d="M9.2 13.2c.7 1.8 1.8 2.6 2.8 2.6s2.1-.8 2.8-2.6H9.2z" fill="#991B1B" />
    <path d="M10.5 14.5c.5.5 1 .6 1.5.6s1-.1 1.5-.6" fill="#F87171" />
    {/* Hugging hands */}
    <path d="M4 14.5c.8-1.5 2.1-1.6 3.2-.8l.8.8c.4.4.4 1.1-.1 1.5l-1.8 1.1c-.7.4-1.5.3-1.9-.4-.4-.6-.4-1.5-.2-2.2z" fill="#FFB703" stroke="#D97706" strokeWidth="0.8" />
    <path d="M20 14.5c-.8-1.5-2.1-1.6-3.2-.8l-.8.8c-.4.4-.4 1.1.1 1.5l1.8 1.1c.7.4 1.5.3 1.9-.4.4-.6.4-1.5.2-2.2z" fill="#FFB703" stroke="#D97706" strokeWidth="0.8" />
  </svg>
);

export const ScikitLearnIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Orange lobe */}
    <path d="M18.4 16.5c2.9-2.9 3.4-7.2 1.1-9.5-2.3-2.3-6.6-1.8-9.5 1.1-2.9 2.9-2.1 8.5-1.1 9.5.8.8 6.6 1.8 9.5-1.1z" fill="#F89939" />
    {/* Blue lobe */}
    <path d="M6.4 12.3c-1.7-1.7-4.2-2-5.5-.6-1.3 1.3-1.1 3.8.6 5.5 1.7 1.7 4.9 1.2 5.5.6.5-.5 1.1-3.8-.6-5.5z" fill="#3499CD" />
    {/* Connected 3 nodes */}
    <circle cx="5" cy="15" r="1.3" fill="#ffffff" />
    <circle cx="12" cy="11" r="1.3" fill="#ffffff" />
    <circle cx="16" cy="14" r="1.3" fill="#ffffff" />
    <path d="M5 15l7-4 4 3" stroke="#ffffff" strokeWidth="0.8" opacity="0.8" />
  </svg>
);

export const XgboostIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    {/* Gradient Boosted Decision Tree */}
    <path d="M12 3v5M12 8L6 13M12 8l6 5M6 13v3M18 13v3M3 19h6M15 19h6" />
    <circle cx="12" cy="4" r="2" fill="currentColor" />
    <circle cx="6" cy="13" r="1.8" fill="currentColor" />
    <circle cx="18" cy="13" r="1.8" fill="currentColor" />
  </svg>
);

export const ChromaDbIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="14.5" cy="12" rx="6.8" ry="6.2" fill="#FFDE2D" />
    <ellipse cx="9.5" cy="12" rx="6.8" ry="6.2" fill="#327EFF" />
    <path d="M 14.5 12 c 0 3.4 -2.8 6.2 -6.5 6.2 V 12 Z M 9.5 12 C 9.5 8.6 12.3 5.8 14.5 5.8 V 12 Z" fill="#FF6446" />
  </svg>
);

export const QdrantIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="m12 16.5 3.897-2.25v-4.5L12 7.5 8.103 9.75v4.5zM1.607 18 12 24l3.897-2.25v-4.5L12 19.5l-6.495-3.75v-7.5L12 4.5l6.495 3.75v15L22.393 21V6L12 0 1.607 6Z"/>
  </svg>
);

export const TransformersIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <polygon points="12 2 2 7 12 12 22 7 12 2" fill="currentColor" fillOpacity="0.4" />
    <polyline points="2 12 12 17 22 12" />
    <polyline points="2 17 12 22 22 17" />
  </svg>
);

export const LlmIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.5a.75.75 0 0 1 .7.48l1.7 4.54a2.25 2.25 0 0 0 1.28 1.28l4.54 1.7a.75.75 0 0 1 0 1.4l-4.54 1.7a2.25 2.25 0 0 0-1.28 1.28l-1.7 4.54a.75.75 0 0 1-1.4 0l-1.7-4.54a2.25 2.25 0 0 0-1.28-1.28l-4.54-1.7a.75.75 0 0 1 0-1.4l4.54-1.7a2.25 2.25 0 0 0 1.28-1.28l1.7-4.54a.75.75 0 0 1 .7-.48zm7 12a.5.5 0 0 1 .47.33l.66 1.77a1.5 1.5 0 0 0 .87.87l1.77.66a.5.5 0 0 1 0 .94l-1.77.66a1.5 1.5 0 0 0-.87.87l-.66 1.77a.5.5 0 0 1-.94 0l-.66-1.77a1.5 1.5 0 0 0-.87-.87l-1.77-.66a.5.5 0 0 1 0-.94l1.77-.66a1.5 1.5 0 0 0 .87-.87l.66-1.77a.5.5 0 0 1 .47-.33z"/>
  </svg>
);

export const DataProcessingIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="3" width="18" height="18" rx="2" strokeWidth="1.8" />
    <path d="M3 9h18M9 21V9" strokeWidth="1.8" />
    <path d="M12 17l2.5-3 2 1.5 2.5-3" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const DataAnalyticsIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
    <path d="M3 13l5-5 4 4 9-9" />
  </svg>
);

export const genericTechIcon = (name: string, size: number = 24, className?: string) => {
  const normalized = name.toLowerCase().replace(/[\s\.\-\:_•\/&]/g, '');
  const finalClass = className || "w-6 h-6 transition-colors fill-current";

  switch (normalized) {
    case 'react':
    case 'reactjs':
      return <ReactIcon size={size} className={finalClass} />;
    case 'python':
      return <PythonIcon size={size} className={finalClass} />;
    case 'fastapi':
      return <FastapiIcon size={size} className={finalClass} />;
    case 'nextjs':
    case 'next':
      return <NextjsIcon size={size} className={finalClass} />;
    case 'typescript':
    case 'ts':
      return <TypescriptIcon size={size} className={finalClass} />;
    case 'docker':
      return <DockerIcon size={size} className={finalClass} />;
    case 'postgresql':
    case 'postgres':
    case 'postgis':
      return <PostgresqlIcon size={size} className={finalClass} />;
    case 'redis':
      return <RedisIcon size={size} className={finalClass} />;
    case 'supabase':
      return <SupabaseIcon size={size} className={finalClass} />;
    case 'langchain':
      return <LangchainIcon size={size} className={finalClass} />;
    case 'langgraph':
      return <LanggraphIcon size={size} className={finalClass} />;
    case 'nvidia':
    case 'nvidianim':
    case 'nim':
      return <NvidiaIcon size={size} className={finalClass} />;
    case 'git':
    case 'github':
      return <GitIcon size={size} className={finalClass} />;
    case 'vite':
      return <ViteIcon size={size} className={finalClass} strokeWidth={2} />;
    case 'pytorch':
      return <PytorchIcon size={size} className={finalClass} />;
    case 'htmlcss':
      return <HtmlCssIcon size={size} className={finalClass} strokeWidth={2} />;
    case 'tailwind':
    case 'tailwindcss':
      return <TailwindIcon size={size} className={finalClass} />;
    case 'cursor':
      return <CursorIcon size={size} className={finalClass} strokeWidth={2} />;
    case 'antigravity':
      return <AntigravityIcon size={size} className={finalClass} strokeWidth={2} />;
    case 'claude':
    case 'claudecode':
    case 'anthropic':
      return <ClaudeIcon size={size} className={finalClass} />;
    case 'huggingface':
    case 'hf':
      return <HuggingFaceIcon size={size} className={finalClass} />;
    case 'transformers':
      return <TransformersIcon size={size} className={finalClass} />;
    case 'scikitlearn':
    case 'sklearn':
      return <ScikitLearnIcon size={size} className={finalClass} />;
    case 'xgboost':
      return <XgboostIcon size={size} className={finalClass} strokeWidth={2} />;
    case 'chromadb':
    case 'chroma':
      return <ChromaDbIcon size={size} className={finalClass} />;
    case 'qdrant':
      return <QdrantIcon size={size} className={finalClass} />;
    case 'localcloudllms':
    case 'llms':
    case 'localllms':
    case 'llm':
      return <LlmIcon size={size} className={finalClass} />;
    case 'dataprocessingeda':
    case 'datapreprocessingeda':
    case 'dataprocessing':
    case 'datapreprocessing':
    case 'datapipelines':
    case 'datapipelineseda':
    case 'eda':
    case 'scientificcomputing':
      return <DataProcessingIcon size={size} className={finalClass} />;
    case 'datascienceanalytics':
    case 'datascience':
    case 'dataanalytics':
    case 'dataanalysis':
      return <DataAnalyticsIcon size={size} className={finalClass} strokeWidth={2} />;
    default:
      // Fallback: A nice generic chip/tech node icon
      return (
        <svg viewBox="0 0 24 24" width={size} height={size} className={finalClass} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <rect x="9" y="9" width="6" height="6" />
          <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3" />
        </svg>
      );
  }
};

