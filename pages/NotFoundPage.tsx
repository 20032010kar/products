import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => (
    <div className="p-10 text-center text-white flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-7xl text-red-500 uppercase font-bold mb-4">404 Not Found</h1>
        <p className="text-gray-400 mb-6">Сторінку не знайдено або її не існує.</p>
        <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors">
            Головна сторінка
        </Link>
    </div>
);

export default NotFoundPage;