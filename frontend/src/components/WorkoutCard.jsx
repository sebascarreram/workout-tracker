function WorkoutCard({ workout }) {
  return (
    <div className="bg-slate-800 text-white p-4 rounded-xl shadow-md mb-4 w-full max-w-3xl mx-auto">
      <h2 className="text-xl font-bold text-center">{workout.type}</h2>

      <div className="mt-2 space-y-2">
        {workout.exercises && workout.exercises.length > 0 ? (
          workout.exercises.map((exercise) => (
            <div key={exercise._id} className="bg-slate-700 rounded p-2">
              <p className="font-semibold">{exercise.name}</p>
              <p className="text-sm text-gray-300">
                {exercise.reps} reps - {exercise.weight} kg
              </p>
              {exercise.duration && (
                <p className="text-sm text-gray-400 italic">
                  {exercise.duration}
                </p>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400">
            No hay ejercicios registrados.
          </p>
        )}
      </div>

      {workout.notes && (
        <div className="mt-3 bg-slate-900 p-2 rounded text-sm text-gray-300 italic">
          Nota: {workout.notes}
        </div>
      )}
    </div>
  );
}

export default WorkoutCard;
