import React from 'react';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-zinc-400 mt-2">Página não encontrada</p>
      </div>
    </div>
  );
};

export default NotFound;
