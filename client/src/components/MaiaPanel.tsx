import React from 'react';
import { Card } from './YODComponents';

export const MaiaPanel: React.FC = () => {
  return (
    <aside className="w-full md:w-96 p-4">
      <Card>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-300 flex items-center justify-center text-zinc-900 font-bold">M</div>
          <div>
            <div className="text-sm font-semibold text-white">Maia — Assistente</div>
            <div className="text-xs text-zinc-400">Assistente de IA para análise de manifestações</div>
          </div>
        </div>

        <div className="mt-3 text-sm text-zinc-300">
          Peça a Maia para resumir, sugerir prioridade ou gerar um plano de ação para tickets críticos.
        </div>

        <div className="mt-3">
          <textarea rows={4} placeholder="Pergunte algo para Maia..." className="w-full bg-zinc-900/20 rounded-md p-2 text-sm text-white placeholder-zinc-500" />
        </div>
      </Card>
    </aside>
  );
};

export default MaiaPanel;
