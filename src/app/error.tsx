"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function GlobalError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <h2 className="mb-3 text-2xl font-bold text-gray-900">
        Une erreur est survenue
      </h2>
      <p className="mb-8 max-w-md text-gray-600">
        Un problème inattendu s&apos;est produit. Vous pouvez réessayer.
      </p>
      <button
        onClick={reset}
        className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-700"
      >
        Réessayer
      </button>
    </div>
  );
}
