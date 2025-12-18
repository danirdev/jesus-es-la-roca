import React from 'react';
import SectionTitle from '../components/SectionTitle';
import {MINISTRIES} from '../data/content';

const About = () => (
    <div className="animate-fade-in pt-32 pb-24 px-6 bg-white min-h-screen">
        <div className="max-w-5xl mx-auto">
            <SectionTitle title="Nuestra Identidad" subtitle="Quiénes Somos" />

            <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
                <div className="text-lg text-slate-600 font-light leading-relaxed space-y-6">
                    <p>
                        <strong className="text-slate-900 font-medium">Ministerio Jesús es la Roca</strong> nace con la visión de ser un refugio espiritual en Monterrico. Creemos en el poder de la comunidad y en la transformación a través del mensaje de Jesús.
                    </p>
                    <p>
                        No somos perfectos, pero servimos a un Dios perfecto. Nuestra misión es simple: Amar a Dios, amar a las personas y servir al mundo.
                    </p>
                </div>
                <div className="bg-slate-100 aspect-[4/3] relative overflow-hidden">
                    <img
                        src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                        alt="Comunidad"
                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>
            </div>

            <div className="border-t border-slate-100 pt-16">
                <h3 className="text-xl font-bold text-slate-900 mb-12">Áreas de Servicio</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {MINISTRIES.map((m, i) => (
                        <div key={i} className="group p-6 border border-slate-100 hover:border-slate-300 transition-colors bg-white">
                            <m.icon size={24} className="text-slate-400 group-hover:text-slate-900 mb-4 transition-colors" strokeWidth={1.5} />
                            <h4 className="font-bold text-sm text-slate-900 uppercase tracking-wide mb-2">{m.title}</h4>
                            <p className="text-xs text-slate-500">{m.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

export default About;
