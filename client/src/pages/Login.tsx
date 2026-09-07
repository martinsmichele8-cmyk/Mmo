import React from 'react';
import { Header, Card, NeonButton } from '../components/YODComponents';

export const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <Card className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">Entrar — YOD</h2>
        <label className="block text-sm text-zinc-300">Email</label>
        <input className="w-full p-2 rounded bg-zinc-900/20 mb-3" />
        <label className="block text-sm text-zinc-300">Senha</label>
        <input type="password" className="w-full p-2 rounded bg-zinc-900/20 mb-4" />
        <div className="flex justify-end">
          <NeonButton>Entrar</NeonButton>
        </div>
      </Card>
    </div>
  );
};

export default Login;
