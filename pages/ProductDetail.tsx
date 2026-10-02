import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./data/products";

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const product = products.find(p => p.id === Number(id));

    if (!product) {
        return (
            <div className="p-6 text-white">
                <h2 className="text-xl text-red-400 font-bold mb-4">Товар не знайдено!</h2>
                <button 
                    onClick={() => navigate(-1)} 
                    className="px-4 py-2 bg-purple-800 hover:bg-purple-700 rounded-xl transition"
                >
                    Назад
                </button>
            </div>
        );
    }

    return (
        <div className="p-6 text-white max-w-2xl mx-auto">
            <button 
                onClick={() => navigate(-1)} 
                className="mb-6 px-4 py-2 bg-purple-800 hover:bg-purple-700 rounded-xl transition shadow-md"
            >
                Назад
            </button>
            
            <div className="bg-slate-900/60 border border-purple-900/50 rounded-2xl overflow-hidden shadow-xl p-6">
                <div className="w-full h-80 bg-slate-950 rounded-xl overflow-hidden mb-6 border border-purple-900/30">
                    <img 
                        src={product.img} 
                        alt={product.title} 
                        className="w-full h-full object-cover"
                    />
                </div>

                <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
                <p className="text-sm text-purple-300 mb-3">Категорія: <span className="font-semibold">{product.category}</span></p>
                <p className="text-2xl text-amber-400 font-semibold mb-4">{product.price} грн</p>
                
                <p className="text-purple-200/90 leading-relaxed bg-slate-950/50 p-4 rounded-xl border border-purple-900/30">
                    {product.description}
                </p>
            </div>
        </div>
    );
};

export default ProductDetail;