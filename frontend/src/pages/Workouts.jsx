import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import WorkoutCard from "../components/WorkoutCard";

function Entrenamientos() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const storedUser = localStorage.getItem("user");

      if (!storedUser) {
        navigate("/login");
        return;
      }

      const user = JSON.parse(storedUser);

      try {
        const res = await axiosInstance.get(`?user=${user._id}`);
        setWorkouts(res.data.data.workouts);
      } catch (err) {
        console.error(err);
        setError("Error al cargar entrenamientos");
      } finally {
        setLoading(false);
      }
    };

    fetchWorkouts();
  }, [navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-gray-500 text-lg animate-pulse">Cargando entrenamientos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-red-500 text-lg">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold text-center text-gray-800 my-6">
        Tus Entrenamientos 🏋️‍♂️
      </h1>

      {workouts.length === 0 ? (
        <p className="text-center text-gray-500">Aún no tienes entrenamientos registrados.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workouts.map((workout) => (
            <WorkoutCard key={workout._id} workout={workout} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Entrenamientos;
