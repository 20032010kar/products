import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen bg-slate-950 text-white">
            <header className="h-16 bg-slate-900 border-b border-purple-900/50 px-6 flex items-center justify-between">
                <span className="text-xl font-bold text-cyan-400">Магазин</span>
                
                <nav className="flex items-center gap-6">
                    <NavLink 
                        to="/" 
                        end
                        className={({ isActive }) => {
                            if (isActive) {
                                return "text-cyan-400 font-bold no-underline";
                            } else {
                                return "text-purple-200 hover:text-cyan-300 no-underline";
                            }
                        }}
                    >
                        Головна
                    </NavLink>
                    
                    <NavLink 
                        to="/products" 
                        className={({ isActive }) => {
                            if (isActive) {
                                return "text-cyan-400 font-bold no-underline";
                            } else {
                                return "text-purple-200 hover:text-cyan-300 no-underline";
                            }
                        }}
                    >
                        Каталог
                    </NavLink>
                </nav>
            </header>

            <main className="flex-1">
                <Outlet />
            </main>

            <footer className="h-16 bg-slate-900 border-t border-purple-900/50 px-6 flex items-center justify-center text-sm text-purple-300">
                
            </footer>
        </div>
    );
};

export default MainLayout;