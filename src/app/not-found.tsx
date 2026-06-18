import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <p className="mb-2 text-sm uppercase tracking-[0.2em] text-blue-600">
        404
      </p>
      <h1 className="mb-3 text-3xl font-bold text-gray-900">
        Page introuvable
      </h1>
      <p className="mb-8 max-w-md text-gray-600">
        La page demandée n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="rounded-lg bg-[#0a1628] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0a1628]/90"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
