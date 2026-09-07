import React from 'react';

export const Header: React.FC<{ title?: string }> = ({ title = 'YOD — Gestão de Ouvidoria' }) => {
  return (
    <header className="w-full py-4 px-6 bg-gradient-to-r from-transparent via-zinc-900/30 to-transparent backdrop-blur-md border-b border-zinc-800/50">
      <h1 className="text-xl font-semibold text-white/90 tracking-tight">{title}</h1>
    </header>
  );
};

export const Card: React.FC<React.PropsWithChildren<{ className?: string }>> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-xl p-4 bg-zinc-900/40 border border-zinc-700/40 shadow-sm ${className}`}>
      {children}
    </div>
  );
};

export const NeonButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className = '', ...rest }) => {
  return (
    <button
      {...rest}
      className={`px-4 py-2 rounded-md text-sm font-medium bg-gradient-to-r from-cyan-500/30 to-purple-500/20 border border-cyan-500/10 hover:shadow-[0_0_14px_rgba(67,240,224,0.06)] transition ${className}`}
    >
      {children}
    </button>
  );
};

export default { Header, Card, NeonButton };
