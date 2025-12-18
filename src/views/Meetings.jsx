import React from 'react';
import SectionTitle from '../components/SectionTitle';
import {WEEKLY_AGENDA, DATA} from '../data/content';

const Meetings = () => (
    <div className="animate-fade-in pt-32 pb-24 px-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
            <SectionTitle title="Agenda Semanal" subtitle="Nuestros Horarios" />

            <div className="space-y-8 relative">
                {/* Línea de tiempo decorativa */}
                <div className="absolute left-4 md:left-24 top-4 bottom-4 w-px bg-slate-100 hidden md:block"></div>

                {WEEKLY_AGENDA.map((item) => (
                    <div key={item.id} className="relative flex flex-col md:flex-row gap-6 md:gap-12 items-start group">

                        {/* Columna Tiempo */}
                        <div className="flex items-center gap-4 md:w-24 md:flex-col md:items-end md:text-right shrink-0">
                            <div className="md:hidden w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-900">
                                <item.icon size={16} />
                            </div>
                            <div>
                                <span className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-1">{item.day}</span>
                                <span className="block text-xl font-bold text-slate-900">{item.time}</span>
                            </div>
                        </div>

                        {/* Punto en línea de tiempo (Desktop) */}
                        <div className="hidden md:flex absolute left-24 -ml-1.5 w-3 h-3 rounded-full bg-white border-2 border-slate-200 group-hover:border-slate-900 group-hover:scale-125 transition-all mt-2"></div>

                        {/* Tarjeta de Contenido */}
                        <div className="flex-grow bg-slate-50 p-6 md:p-8 rounded-sm hover:bg-slate-100 transition-colors duration-300 border-l-2 border-transparent hover:border-slate-900">
                            <div className="flex items-start justify-between">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                                <item.icon className="hidden md:block text-slate-300 group-hover:text-slate-900 transition-colors" size={24} strokeWidth={1} />
                            </div>
                            <p className="text-slate-600 font-light leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>

                    </div>
                ))}
            </div>

            <div className="mt-16 p-8 bg-slate-900 text-white text-center">
                <h4 className="text-lg font-bold mb-2">¿Tienes alguna duda sobre los horarios?</h4>
                <p className="text-slate-400 text-sm mb-6 max-w-lg mx-auto">
                    Algunas actividades especiales como vigilias o eventos extraordinarios se anuncian en nuestras redes.
                </p>
                <a href={DATA.facebook} target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-white text-slate-900 text-xs font-bold tracking-widest uppercase hover:bg-blue-50 transition-colors">
                    Consultar en Facebook
                </a>
            </div>
        </div>
    </div>
);

export default Meetings;
