import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GoBackButton from "../components/GoBackButton";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/api/v1/users/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem("token", response.data.token);
      console.log("Login success:", response.data);

      // Guarda el usuario (o token) en localStorage
      localStorage.setItem("user", JSON.stringify(response.data.data.user));

      navigate("/");
      // Aquí puedes guardar el usuario o token si lo usas
    } catch (err) {
      console.error(err);
      setError("Email o contraseña incorrectos");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-4 border rounded shadow">
      <h2 className="text-xl font-bold mb-4">Iniciar Sesión</h2>
      <p className="mb-4 text-gray-600">
        ¿No tienes una cuenta?{" "}
        <Link to="/register" className="text-blue-600 hover:underline">
          Regístrate aquí
        </Link>
      </p>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full border px-2 py-1 rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full border px-2 py-1 rounded"
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Ingresar
        </button>
      </form>
      <GoBackButton />
    </div>
  );
}

export default Login;
