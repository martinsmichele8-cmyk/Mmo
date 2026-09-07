import React from 'react';
import { Header, Card } from '../components/YODComponents';
import MaiaPanel from '../components/MaiaPanel';

export const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-950 to-black text-white">
      <Header />
      <main className="p-6 grid grid-cols-1 md:grid-cols-[1fr,320px] gap-6">
        <section>
          <div className="flex flex-col gap-6">
            <Card>
              <h2 className="text-lg font-semibold">Visão Geral (KPIs)</h2>
              <div className="mt-3 grid grid-cols-2 gap-3">
                <div className="p-3 bg-zinc-800/30 rounded">Tickets abertos: <strong>124</strong></div>
                <div className="p-3 bg-zinc-800/30 rounded">SLA médio: <strong>4h 12m</strong></div>
              </div>
            </Card>

            <Card>
              <h3 className="font-medium">Tickets recentes</h3>
              <ul className="mt-2 text-sm text-zinc-300 space-y-2">
                <li className="p-2 bg-zinc-900/20 rounded">#10234 - Falha no abastecimento - Prioridade Alta</li>
                <li className="p-2 bg-zinc-900/20 rounded">#10233 - Vazamento - Prioridade Média</li>
              </ul>
            </Card>
          </div>
        </section>

        <MaiaPanel />
      </main>
    </div>
  );
};

export default Dashboard;
