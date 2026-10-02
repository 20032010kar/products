import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { products } from "./data/products";

const ProductsPage: React.FC = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const categoryFilter = searchParams.get("category");

    let filteredProducts;
    if (categoryFilter) {
        filteredProducts = products.filter(p => p.category === categoryFilter);
    } else {
        filteredProducts = products;
    }

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-6 text-cyan-300">Каталог товарів</h1>
            
            <div className="flex gap-3 mb-6">
                <button 
                    onClick={() => setSearchParams({})} 
                    className={`px-4 py-2 rounded-xl transition-colors ${!categoryFilter ? 'bg-cyan-600 font-bold text-white' : 'bg-purple-900/60 text-purple-200 hover:bg-purple-800'}`}
                >
                    Усі
                </button>
                <button 
                    onClick={() => setSearchParams({ category: "phones" })} 
                    className={`px-4 py-2 rounded-xl transition-colors ${categoryFilter === "phones" ? 'bg-cyan-600 font-bold text-white' : 'bg-purple-900/60 text-purple-200 hover:bg-purple-800'}`}
                >
                    Телефони
                </button>
                <button 
                    onClick={() => setSearchParams({ category: "laptops" })} 
                    className={`px-4 py-2 rounded-xl transition-colors ${categoryFilter === "laptops" ? 'bg-cyan-600 font-bold text-white' : 'bg-purple-900/60 text-purple-200 hover:bg-purple-800'}`}
                >
                    Ноутбуки
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredProducts.map(product => (
                    <div key={product.id} className="p-4 bg-slate-900/80 border border-purple-900/40 rounded-xl flex flex-col justify-between">
                        <div>
                            <h2 className="text-xl font-semibold mb-2 text-white">{product.title}</h2>
                            <p className="text-amber-400 font-bold mb-4">{product.price} грн</p>
                        </div>
                        <Link 
                            to={`/products/${product.id}`} 
                            className="inline-block text-center px-4 py-2 bg-white hover:bg-lime-300 rounded-lg transition-colors text-white font-medium"
                        >
                            Детальніше
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductsPage;