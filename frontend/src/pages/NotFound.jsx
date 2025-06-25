/* eslint-disable */

import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <motion.div
      className="flex items-center justify-center min-h-screen bg-gray-900 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="text-center">
        <motion.h1
          className="text-8xl font-bold mb-4"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          404
        </motion.h1>

        <motion.p
          className="text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Oops... Página no encontrada
        </motion.p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.8, type: "spring", stiffness: 120 }}
        >
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
