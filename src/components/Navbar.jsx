import React, {useState} from 'react';
import {Menu, X} from 'lucide-react';

const Navbar = ({view, setView, scrolled}) =>
{
    const [menuOpen, setMenuOpen] = useState(false);

    const NavItem = ({to, label}) => (
        <button
            onClick={() => setView(to)}
            className={`text-xs font-bold uppercase tracking-widest transition-colors ${(view === 'home' && !scrolled && to !== 'mobile') ? 'text-white/80 hover:text-white' : 'text-slate-500 hover:text-slate-900'
                } ${view === to ? (view === 'home' && !scrolled ? 'text-white' : 'text-slate-900') : ''}`}
        >
            {label}
        </button>
    );

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || view !== 'home' ? 'bg-white/95 backdrop-blur-sm py-4 border-b border-slate-100' : 'bg-transparent py-8'
                }`}>
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

                    {/* Logo */}
                    <div onClick={() => setView('home')} className="flex items-center gap-3 cursor-pointer group z-50">
                        <div className={`leading-none transition-colors ${scrolled || view !== 'home' ? 'text-slate-900' : 'text-white'}`}>
                            <span className="font-bold text-sm tracking-wide block">JESÚS ES LA ROCA</span>
                        </div>
                    </div>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        <NavItem to="home" label="Inicio" />
                        <NavItem to="about" label="Nosotros" />
                        <NavItem to="meetings" label="Reuniones" />
                        <NavItem to="contact" label="Contacto" />
                        <button
                            onClick={() => setView('radio')}
                            className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${scrolled || view !== 'home'
                                    ? 'bg-slate-900 text-white hover:bg-slate-700'
                                    : 'bg-white text-slate-900 hover:bg-slate-100'
                                }`}
                        >
                            Radio
                        </button>
                    </div>

                    {/* Mobile Menu Btn */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className={`md:hidden z-50 p-2 ${scrolled || view !== 'home' ? 'text-slate-900' : 'text-white'}`}
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* MOBILE MENU FULLSCREEN */}
            {menuOpen && (
                <div className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center space-y-8 animate-fade-in">
                    <button onClick={() => {setView('home'); setMenuOpen(false);}} className="text-xl font-bold uppercase tracking-widest text-slate-900">Inicio</button>
                    <button onClick={() => {setView('about'); setMenuOpen(false);}} className="text-xl font-bold uppercase tracking-widest text-slate-900">Nosotros</button>
                    <button onClick={() => {setView('meetings'); setMenuOpen(false);}} className="text-xl font-bold uppercase tracking-widest text-slate-900">Reuniones</button>
                    <button onClick={() => {setView('contact'); setMenuOpen(false);}} className="text-xl font-bold uppercase tracking-widest text-slate-900">Contacto</button>
                    <button onClick={() => {setView('radio'); setMenuOpen(false);}} className="px-8 py-3 bg-slate-900 text-white text-sm font-bold uppercase tracking-widest">Radio En Vivo</button>
                </div>
            )}
        </>
    );
};

export default Navbar;
