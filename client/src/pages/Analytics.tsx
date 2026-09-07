import React from 'react';
import { Header, Card } from '../components/YODComponents';

export const Analytics: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-950 to-black text-white">
      <Header title="Analytics" />
      <main className="p-6">
        <Card>
          <h2 className="text-lg font-semibold">Dash de Analytics</h2>
          <p className="text-zinc-400 mt-2">Gráficos e tendências do volume de manifestações, atendimentos e SLA.</p>
        </Card>
      </main>
    </div>
  );
};

export default Analytics;
