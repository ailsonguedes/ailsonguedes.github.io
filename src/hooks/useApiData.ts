import { useEffect, useState } from 'react';

export function useApiData<T>(loadData: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let isCurrent = true;
    setIsLoading(true);
    setError(null);

    loadData()
      .then((result) => {
        if (isCurrent) setData(result);
      })
      .catch((cause: unknown) => {
        if (isCurrent) {
          setError(cause instanceof Error ? cause.message : 'Erro inesperado ao consultar a API.');
        }
      })
      .finally(() => {
        if (isCurrent) setIsLoading(false);
      });

    return () => {
      isCurrent = false;
    };
  }, [attempt, loadData]);

  return {
    data,
    isLoading,
    error,
    retry: () => setAttempt((current) => current + 1),
  };
}
