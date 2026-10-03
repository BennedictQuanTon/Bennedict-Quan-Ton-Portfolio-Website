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
    <path d="M12 .0387C5.3729.0384.0003 5.3931 0 11.9988c-.001 6.6066 5.372 11.9628 12 11.9625 6.628.0003 12.001-5.3559 12-11.9625-.0003-6.6057-5.3729-11.9604-12-11.96m-.829 5.4153h7.55l-7.5805 5.3284h5.1828L5.279 18.5436q2.9466-6.5444 5.892-13.0896" />
  </svg>
);

export const NextjsIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.195 18.062l-6.398-8.156v6.394H8.438V7.59h1.36l6.234 8.016V7.59h1.359v10.472h-1.196z" />
  </svg>
);

export const TypescriptIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
  </svg>
);

export const DockerIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z" />
  </svg>
);

export const PostgresqlIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 128 128" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M115.731 77.44c-13.925 2.873-14.882-1.842-14.882-1.842 14.703-21.816 20.849-49.51 15.545-56.287C101.924.823 76.875 9.566 76.457 9.793l-.135.024c-2.751-.571-5.83-.911-9.291-.967-6.301-.103-11.08 1.652-14.707 4.402 0 0-44.684-18.408-42.606 23.151.442 8.842 12.672 66.899 27.26 49.363 5.332-6.412 10.483-11.834 10.483-11.834 2.559 1.699 5.622 2.567 8.833 2.255l.25-.212c-.078.796-.042 1.575.1 2.497-3.758 4.199-2.654 4.936-10.167 6.482-7.602 1.566-3.136 4.355-.22 5.084 3.534.884 11.712 2.136 17.237-5.598l-.221.882c1.473 1.18 2.507 7.672 2.334 13.557-.174 5.885-.29 9.926.871 13.082 1.16 3.156 2.316 10.256 12.192 8.14 8.252-1.768 12.528-6.351 13.124-13.995.422-5.435 1.377-4.631 1.438-9.49l.767-2.3c.884-7.367.14-9.743 5.225-8.638l1.235.108c3.742.17 8.639-.602 11.514-1.938 6.19-2.871 9.861-7.667 3.758-6.408z" />
  </svg>
);

export const RedisIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.71 13.145c-1.66 2.092-3.452 4.483-7.038 4.483-3.203 0-4.397-2.825-4.48-5.12.701 1.484 2.073 2.685 4.214 2.63 4.117-.133 6.94-3.852 6.94-7.239 0-4.05-3.022-6.972-8.268-6.972-3.752 0-8.4 1.428-11.455 3.685C2.59 6.937 3.885 9.958 4.35 9.626c2.648-1.904 4.748-3.13 6.784-3.744C8.12 9.244.886 17.05 0 18.425c.1 1.261 1.66 4.648 2.424 4.648.232 0 .431-.133.664-.365a100.49 100.49 0 0 0 5.54-6.765c.222 3.104 1.748 6.898 6.014 6.898 3.819 0 7.604-2.756 9.33-8.965.2-.764-.73-1.361-1.261-.73zm-4.349-5.013c0 1.959-1.926 2.922-3.685 2.922-.941 0-1.664-.247-2.235-.568 1.051-1.592 2.092-3.225 3.21-4.973 1.972.334 2.71 1.43 2.71 2.619z" />
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
    {/* Monochromatic Face outline + subtle fill */}
    <circle cx="12" cy="12" r="8.5" fill="currentColor" fillOpacity="0.12" stroke="currentColor" strokeWidth="1.6" />
    {/* Smiling eyes */}
    <path d="M8.5 10.2c.4-.8 1.1-1 1.7-.6M13.8 9.6c.6-.4 1.3-.2 1.7.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    {/* Open happy smile */}
    <path d="M9.2 13.5c.7 1.6 1.8 2.3 2.8 2.3s2.1-.7 2.8-2.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    {/* Hugging hands */}
    <path d="M4 14.5c.8-1.5 2.1-1.6 3.2-.8l.8.8c.4.4.4 1.1-.1 1.5l-1.8 1.1c-.7.4-1.5.3-1.9-.4-.4-.6-.4-1.5-.2-2.2z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
    <path d="M20 14.5c-.8-1.5-2.1-1.6-3.2-.8l-.8.8c-.4.4-.4 1.1.1 1.5l1.8 1.1c.7.4 1.5.3 1.9-.4.4-.6.4-1.5.2-2.2z" fill="currentColor" fillOpacity="0.3" stroke="currentColor" strokeWidth="1" />
  </svg>
);

export const ScikitLearnIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Monochromatic lobes with tonal contrast */}
    <path d="M18.4 16.5c2.9-2.9 3.4-7.2 1.1-9.5-2.3-2.3-6.6-1.8-9.5 1.1-2.9 2.9-2.1 8.5-1.1 9.5.8.8 6.6 1.8 9.5-1.1z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1" />
    <path d="M6.4 12.3c-1.7-1.7-4.2-2-5.5-.6-1.3 1.3-1.1 3.8.6 5.5 1.7 1.7 4.9 1.2 5.5.6.5-.5 1.1-3.8-.6-5.5z" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1" />
    {/* Connected 3 nodes */}
    <circle cx="5" cy="15" r="1.6" fill="currentColor" />
    <circle cx="12" cy="11" r="1.6" fill="currentColor" />
    <circle cx="16" cy="14" r="1.6" fill="currentColor" />
    <path d="M5 15l7-4 4 3" stroke="currentColor" strokeWidth="1.2" />
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
    <ellipse cx="14.5" cy="12" rx="6.8" ry="6.2" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1" />
    <ellipse cx="9.5" cy="12" rx="6.8" ry="6.2" fill="currentColor" fillOpacity="0.5" stroke="currentColor" strokeWidth="1" />
    <path d="M 14.5 12 c 0 3.4 -2.8 6.2 -6.5 6.2 V 12 Z M 9.5 12 C 9.5 8.6 12.3 5.8 14.5 5.8 V 12 Z" fill="currentColor" fillOpacity="0.85" />
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

export const McpIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.85 0a4.16 4.16 0 0 0-2.95 1.217L1.456 10.66a.835.835 0 0 0 0 1.18.835.835 0 0 0 1.18 0l9.442-9.442a2.49 2.49 0 0 1 3.541 0 2.49 2.49 0 0 1 0 3.541L8.59 12.97l-.1.1a.835.835 0 0 0 0 1.18.835.835 0 0 0 1.18 0l.1-.098 7.03-7.034a2.49 2.49 0 0 1 3.542 0l.049.05a2.49 2.49 0 0 1 0 3.54l-8.54 8.54a1.96 1.96 0 0 0 0 2.755l1.753 1.753a.835.835 0 0 0 1.18 0 .835.835 0 0 0 0-1.18l-1.753-1.753a.266.266 0 0 1 0-.394l8.54-8.54a4.185 4.185 0 0 0 0-5.9l-.05-.05a4.16 4.16 0 0 0-2.95-1.218c-.2 0-.401.02-.6.048a4.17 4.17 0 0 0-1.17-3.552A4.16 4.16 0 0 0 13.85 0m0 3.333a.84.84 0 0 0-.59.245L6.275 10.56a4.186 4.186 0 0 0 0 5.902 4.186 4.186 0 0 0 5.902 0L19.16 9.48a.835.835 0 0 0 0-1.18.835.835 0 0 0-1.18 0l-6.985 6.984a2.49 2.49 0 0 1-3.54 0 2.49 2.49 0 0 1 0-3.54l6.983-6.985a.835.835 0 0 0 0-1.18.84.84 0 0 0-.59-.245" />
  </svg>
);

export const OllamaIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M16.361 10.26a.894.894 0 0 0-.558.47l-.072.148.001.207c0 .193.004.217.059.353.076.193.152.312.291.448.24.238.51.3.872.205a.86.86 0 0 0 .517-.436.752.752 0 0 0 .08-.498c-.064-.453-.33-.782-.724-.897a1.06 1.06 0 0 0-.466 0zm-9.203.005c-.305.096-.533.32-.65.639a1.187 1.187 0 0 0-.06.52c.057.309.31.59.598.667.362.095.632.033.872-.205.14-.136.215-.255.291-.448.055-.136.059-.16.059-.353l.001-.207-.072-.148a.894.894 0 0 0-.565-.472 1.02 1.02 0 0 0-.474.007Zm4.184 2c-.131.071-.223.25-.195.383.031.143.157.288.353.407.105.063.112.072.117.136.004.038-.01.146-.029.243-.02.094-.036.194-.036.222.002.074.07.195.143.253.064.052.076.054.255.059.164.005.198.001.264-.03.169-.082.212-.234.15-.525-.052-.243-.042-.28.087-.355.137-.08.281-.219.324-.314a.365.365 0 0 0-.175-.48.394.394 0 0 0-.181-.033c-.126 0-.207.03-.355.124l-.085.053-.053-.032c-.219-.13-.259-.145-.391-.143a.396.396 0 0 0-.193.032zm.39-2.195c-.373.036-.475.05-.654.086-.291.06-.68.195-.951.328-.94.46-1.589 1.226-1.787 2.114-.04.176-.045.234-.045.53 0 .294.005.357.043.524.264 1.16 1.332 2.017 2.714 2.173.3.033 1.596.033 1.896 0 1.11-.125 2.064-.727 2.493-1.571.114-.226.169-.372.22-.602.039-.167.044-.23.044-.523 0-.297-.005-.355-.045-.531-.288-1.29-1.539-2.304-3.072-2.497a6.873 6.873 0 0 0-.855-.031zm.645.937a3.283 3.283 0 0 1 1.44.514c.223.148.537.458.671.662.166.251.26.508.303.82.02.143.01.251-.043.482-.08.345-.332.705-.672.957a3.115 3.115 0 0 1-.689.348c-.382.122-.632.144-1.525.138-.582-.006-.686-.01-.853-.042-.57-.107-1.022-.334-1.35-.68-.264-.28-.385-.535-.45-.946-.03-.192.025-.509.137-.776.136-.326.488-.73.836-.963.403-.269.934-.46 1.422-.512.187-.02.586-.02.773-.002zm-5.503-11a1.653 1.653 0 0 0-.683.298C5.617.74 5.173 1.666 4.985 2.819c-.07.436-.119 1.04-.119 1.503 0 .544.064 1.24.155 1.721.02.107.031.202.023.208a8.12 8.12 0 0 1-.187.152 5.324 5.324 0 0 0-.949 1.02 5.49 5.49 0 0 0-.94 2.339 6.625 6.625 0 0 0-.023 1.357c.091.78.325 1.438.727 2.04l.13.195-.037.064c-.269.452-.498 1.105-.605 1.732-.084.496-.095.629-.095 1.294 0 .67.009.803.088 1.266.095.555.288 1.143.503 1.534.071.128.243.393.264.407.007.003-.014.067-.046.141a7.405 7.405 0 0 0-.548 1.873c-.062.417-.071.552-.071.991 0 .56.031.832.148 1.279L3.42 24h1.478l-.05-.091c-.297-.552-.325-1.575-.068-2.597.117-.472.25-.819.498-1.296l.148-.29v-.177c0-.165-.003-.184-.057-.293a.915.915 0 0 0-.194-.25 1.74 1.74 0 0 1-.385-.543c-.424-.92-.506-2.286-.208-3.451.124-.486.329-.918.544-1.154a.787.787 0 0 0 .223-.531c0-.195-.07-.355-.224-.522a3.136 3.136 0 0 1-.817-1.729c-.14-.96.114-2.005.69-2.834.563-.814 1.353-1.336 2.237-1.475.199-.033.57-.028.776.01.226.04.367.028.512-.041.179-.085.268-.19.374-.431.093-.215.165-.333.36-.576.234-.29.46-.489.822-.729.413-.27.884-.467 1.352-.561.17-.035.25-.04.569-.04.319 0 .398.005.569.04a4.07 4.07 0 0 1 1.914.997c.117.109.398.457.488.602.034.057.095.177.132.267.105.241.195.346.374.43.14.068.286.082.503.045.343-.058.607-.053.943.016 1.144.23 2.14 1.173 2.581 2.437.385 1.108.276 2.267-.296 3.153-.097.15-.193.27-.333.419-.301.322-.301.722-.001 1.053.493.539.801 1.866.708 3.036-.062.772-.26 1.463-.533 1.854a2.096 2.096 0 0 1-.224.258.916.916 0 0 0-.194.25c-.054.109-.057.128-.057.293v.178l.148.29c.248.476.38.823.498 1.295.253 1.008.231 2.01-.059 2.581a.845.845 0 0 0-.044.098c0 .006.329.009.732.009h.73l.02-.074.036-.134c.019-.076.057-.3.088-.516.029-.217.029-1.016 0-1.258-.11-.875-.295-1.57-.597-2.226-.032-.074-.053-.138-.046-.141.008-.005.057-.074.108-.152.376-.569.607-1.284.724-2.228.031-.26.031-1.378 0-1.628-.083-.645-.182-1.082-.348-1.525a6.083 6.083 0 0 0-.329-.7l-.038-.064.131-.194c.402-.604.636-1.262.727-2.04a6.625 6.625 0 0 0-.024-1.358 5.512 5.512 0 0 0-.939-2.339 5.325 5.325 0 0 0-.95-1.02 8.097 8.097 0 0 1-.186-.152.692.692 0 0 1 .023-.208c.208-1.087.201-2.443-.017-3.503-.19-.924-.535-1.658-.98-2.082-.354-.338-.716-.482-1.15-.455-.996.059-1.8 1.205-2.116 3.01a6.805 6.805 0 0 0-.097.726c0 .036-.007.066-.015.066a.96.96 0 0 1-.149-.078A4.857 4.857 0 0 0 12 3.03c-.832 0-1.687.243-2.456.698a.958.958 0 0 1-.148.078c-.008 0-.015-.03-.015-.066a6.71 6.71 0 0 0-.097-.725C8.997 1.392 8.337.319 7.46.048a2.096 2.096 0 0 0-.585-.041Zm.293 1.402c.248.197.523.759.682 1.388.03.113.06.244.069.292.007.047.026.152.041.233.067.365.098.76.102 1.24l.002.475-.12.175-.118.178h-.278c-.324 0-.646.041-.954.124l-.238.06c-.033.007-.038-.003-.057-.144a8.438 8.438 0 0 1 .016-2.323c.124-.788.413-1.501.696-1.711.067-.05.079-.049.157.013zm9.825-.012c.17.126.358.46.498.888.28.854.36 2.028.212 3.145-.019.14-.024.151-.057.144l-.238-.06a3.693 3.693 0 0 0-.954-.124h-.278l-.119-.178-.119-.175.002-.474c.004-.669.066-1.19.214-1.772.157-.623.434-1.185.68-1.382.078-.062.09-.063.159-.012z" />
  </svg>
);

export const VllmIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="m23.6 0-8.721 4.59L9.829 24h7.41zM9.83 24V5.142H.4Z" />
  </svg>
);

export const AssemblyAiIcon: React.FC<TechIconProps> = ({ className = "w-6 h-6", size = 24 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    {/* Speech waveform mark */}
    <rect x="2" y="9.5" width="2.4" height="5" rx="1.2" />
    <rect x="6.4" y="5.5" width="2.4" height="13" rx="1.2" />
    <rect x="10.8" y="2" width="2.4" height="20" rx="1.2" />
    <rect x="15.2" y="6.5" width="2.4" height="11" rx="1.2" />
    <rect x="19.6" y="9" width="2.4" height="6" rx="1.2" />
  </svg>
);

export const genericTechIcon = (name: string, size: number = 24, className?: string) => {
  const normalized = name.toLowerCase().replace(/[\s\.\-\:_•\/&]/g, '');
  const finalClass = className || "w-6 h-6 transition-colors fill-current";

  switch (normalized) {
    case 'mcp':
    case 'modelcontextprotocol':
    case 'modelcontextprotocolmcp':
      return <McpIcon size={size} className={finalClass} />;
    case 'ollama':
      return <OllamaIcon size={size} className={finalClass} />;
    case 'vllm':
      return <VllmIcon size={size} className={finalClass} />;
    case 'assemblyai':
      return <AssemblyAiIcon size={size} className={finalClass} />;
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

