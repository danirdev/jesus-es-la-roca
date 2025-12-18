import React from 'react';
import {Radio, Calendar, MapPin, Globe, ArrowRight} from 'lucide-react';
import {DATA} from '../data/content';

const Home = ({setView}) => (
    <div className="animate-fade-in">
        {/* Hero Section */}
        <div className="relative h-screen flex flex-col justify-center items-center text-center px-6">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                <img
                    src="https://images.unsplash.com/photo-1510936111840-65e151ad71bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Church Atmosphere"
                    className="w-full h-full object-cover grayscale-[30%]"
                />
            </div>

            <div className="relative z-20 max-w-4xl mx-auto text-white space-y-8">
                <div className="inline-block border border-white/30 backdrop-blur-sm px-4 py-1 rounded-full mb-4">
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase">Monterrico, Jujuy</span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none">
                    Jesús es la Roca
                </h1>

                <p className="text-lg md:text-xl text-slate-200 font-light max-w-xl mx-auto">
                    Un lugar de pertenencia, fe y propósito.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                    <button
                        onClick={() => setView('radio')}
                        className="px-8 py-4 bg-white text-slate-900 text-xs font-bold tracking-widest uppercase hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
                    >
                        <Radio size={16} /> Radio En Vivo
                    </button>
                    <button
                        onClick={() => setView('meetings')}
                        className="px-8 py-4 border border-white text-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-slate-900 transition-colors"
                    >
                        Ver Horarios
                    </button>
                </div>
            </div>
        </div>

        {/* Quick Info Grid */}
        <div className="bg-white py-24 px-6 border-b border-slate-100">
            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 text-center md:text-left">

                {/* Horarios (Resumen) */}
                <div className="space-y-4">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-900 mx-auto md:mx-0">
                        <Calendar size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Reuniones</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Tenemos actividades durante toda la semana para diferentes edades y propósitos.
                    </p>
                    <button onClick={() => setView('meetings')} className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 hover:opacity-70">
                        Ver Agenda Completa
                    </button>
                </div>

                {/* Dirección */}
                <div className="space-y-4">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-900 mx-auto md:mx-0">
                        <MapPin size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Ubicación</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        {DATA.address} <br /> {DATA.location}
                    </p>
                    <button onClick={() => setView('contact')} className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-900 pb-0.5 hover:opacity-70">
                        Ver Mapa
                    </button>
                </div>

                {/* Social */}
                <div className="space-y-4">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center rounded-full text-slate-900 mx-auto md:mx-0">
                        <Globe size={20} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">Conéctate</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">
                        Sigue nuestras actividades y transmisiones en vivo a través de Facebook.
                    </p>
                    <a href={DATA.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-900 hover:text-blue-600 transition-colors">
                        Ir a Facebook <ArrowRight size={14} />
                    </a>
                </div>

            </div>
        </div>
    </div>
);

export default Home;
