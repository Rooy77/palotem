// src/app/not-found.tsx
export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <h1 className="text-6xl font-extrabold text-red-600 mb-4">404</h1>
      <p className="text-xl mb-8">Oups, la page que vous cherchez n’existe pas.</p>
      <a
        href="/"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Retour à l’accueil
      </a>
    </main>
  )
}
