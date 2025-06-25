"use client";

import { ErrorState } from "@/components/error-state";
import { LoadingState } from "@/components/loading-state";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const AgentsView = () => {
  const trpc = useTRPC();
  const { data } = useSuspenseQuery(trpc.agents.getMany.queryOptions());

  return <div>{JSON.stringify(data, null, 2)}</div>;
};

export const AgentsViewLoading = () => {
  return (
    <LoadingState
      title="Carregando Agentes"
      description="Por favor, aguarde enquanto carregamos os agentes."
    />
  );
};

export const AgentsViewError = () => {
  return (
    <ErrorState
      title="Erro ao Carregar Agentes"
      description="Ocorreu um erro ao tentar carregar os agentes. Por favor, tente novamente mais tarde."
    />
  );
};
