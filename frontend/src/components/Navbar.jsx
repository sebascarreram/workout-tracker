import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import { useState } from 'react';

export default function NavBar() {
//   const user = JSON.parse(localStorage.getItem("user"));
  const [user, setUser] = useState(() => {
  const storedUser = localStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
});
  return (
    <nav className="bg-gray-800 text-white p-4 fixed w-full top-0 left-0 shadow z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-400">
          Workout Tracker 🏋️‍♂️
        </Link>

        <div className="flex items-center gap-4">
          <Link to="/" className="hover:text-blue-300">
            Home
          </Link>
          {user ? (
            <>
              <span>Hola, {user.name}</span>
              <LogoutButton setUser={setUser} />
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-300">
                Login
              </Link>
              <Link to="/register" className="hover:text-blue-300">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
