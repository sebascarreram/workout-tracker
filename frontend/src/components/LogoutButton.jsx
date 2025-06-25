import { useNavigate } from "react-router-dom";

function LogoutButton({ setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("user"); // ❌ Borra del almacenamiento
    setUser(null); // ✅ Actualiza el estado del usuario en React
    navigate("/login"); // 🔁 Redirige
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
    >
      Cerrar sesión
    </button>
  );
}

export default LogoutButton;
