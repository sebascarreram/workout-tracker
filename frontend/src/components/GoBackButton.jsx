import { Link } from "react-router-dom";

export default function GoBackButton() {
  return (
    <Link
      to="/"
      className="mt-4 text-blue-600 underline hover:text-blue-800"
    >
      ← Volver atrás
    </Link>
  );
}
