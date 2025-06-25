import Navbar from "../components/Navbar";

export default function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user); // 👉 Aquí tendrás el objeto del usuario
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <header className="flex-grow flex items-center justify-center text-center p-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Registra y sigue tu progreso de entrenamiento
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Lleva un control de tus entrenamientos, ejercicios y repeticiones
            fácilmente.
          </p>
          <div className="mt-6 space-x-4">
            {!user && (
              <a
                href="/register"
                className="bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-medium hover:bg-blue-700"
              >
                Comienza Ahora
              </a>
            )}
            <a
              href="/workouts"
              className="text-blue-600 text-lg font-medium hover:underline"
            >
              Ver entrenamientos
            </a>
          </div>
        </div>
      </header>

      <footer className="bg-gray-800 text-gray-300 text-center py-4 text-sm">
        © 2025 Workout Tracker - Sebastián Carrera
      </footer>
    </div>
  );
}
