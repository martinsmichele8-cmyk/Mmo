import React from 'react';

type State = { hasError: boolean };

export class ErrorBoundary extends React.Component<React.PropsWithChildren<{}>, State> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // TODO: report to monitoring service
    // console.error(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-6">
          <h2 className="text-xl text-white">Algo deu errado</h2>
          <p className="text-zinc-400">Tente recarregar a página ou contate o suporte.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
