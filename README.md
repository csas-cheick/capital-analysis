# Capital Analysis

Site Next.js App Router pour Capital Analysis.

## Architecture

- `app/` contient les routes Next.js, le layout racine, les pages globales et les API routes.
- `app/(routes)/` regroupe les pages publiques sans ajouter de segment dans l'URL.
- `components/layout/` contient les composants de structure comme le header et le footer.
- `components/ui/` contient les composants UI reutilisables et neutres.
- `components/sections/` contient les sections composees utilisees par les pages.
- `components/blog/` contient les composants lies aux actualites.
- `data/` contient les donnees statiques partagees par les pages et composants.
- `hooks/` contient les hooks React reutilisables.
- `lib/` contient les helpers et utilitaires techniques.
- `types/` contient les types TypeScript partages.
- `public/` contient les assets statiques servis tels quels par Next.js.

L'alias TypeScript `@/...` pointe vers la racine du projet. Par exemple,
`@/components/layout/Header` correspond a `components/layout/Header.tsx`.

## Commandes

```bash
npm run dev
npm run lint
npm run build
```
