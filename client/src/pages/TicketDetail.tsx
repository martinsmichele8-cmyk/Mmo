import React from 'react';
import { Header, Card } from '../components/YODComponents';

export const TicketDetail: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header title="Detalhe do Ticket" />
      <main className="p-6">
        <Card>
          <h2 className="text-lg font-semibold">#10234 — Falha no abastecimento</h2>
          <p className="text-zinc-400 mt-2">Descrição resumida do caso, histórico, ações e responsáveis.</p>
        </Card>
      </main>
    </div>
  );
};

export default TicketDetail;
