import React, {useState, useRef, useEffect} from 'react';
import {Pause, Play, Calendar, User, Clock} from 'lucide-react';
import {DATA, RADIO_PROGRAMMING} from '../data/content';

const Radio = () =>
{
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);
    const [currentProgram, setCurrentProgram] = useState(null);

    useEffect(() =>
    {
        // Simple logic to find a "current" or "next" program based on time could go here.
        // For now, we'll just pick the first one as an example or leave the hardcoded one if it matches none.
        // Or better, let's just show the first one as "Próximo" for the example.
        if(RADIO_PROGRAMMING.length > 0)
        {
            setCurrentProgram(RADIO_PROGRAMMING[4]); // Example: "Mensaje de Poder"
        }
    }, []);

    const togglePlay = () =>
    {
        if(!audioRef.current) return;
        if(isPlaying)
        {
            audioRef.current.pause();
        } else
        {
            audioRef.current.play().catch(e => console.error(e));
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="animate-fade-in min-h-screen bg-slate-950 pt-32 pb-20 px-6 flex flex-col items-center">

            <div className="max-w-md w-full text-center space-y-12">
                <div>
                    <span className="text-xs font-bold tracking-[0.3em] uppercase text-slate-500">Transmisión Online</span>
                    <h2 className="text-2xl text-white font-bold mt-4">Radio FM Vida</h2>
                </div>

                <div className="relative group cursor-pointer" onClick={togglePlay}>
                    <div className={`absolute inset-0 bg-blue-500 rounded-full blur-[60px] opacity-10 transition-opacity duration-1000 ${isPlaying ? 'opacity-20' : ''}`}></div>

                    <div className="relative w-64 h-64 mx-auto bg-slate-900 border border-slate-800 rounded-full flex items-center justify-center shadow-2xl hover:scale-105 transition-transform duration-500">
                        {isPlaying ? <Pause size={48} className="text-white fill-white" /> : <Play size={48} className="text-white fill-white ml-2" />}
                    </div>

                    <div className="mt-8 flex items-center justify-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-green-500 animate-pulse' : 'bg-slate-700'}`}></div>
                        <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                            {isPlaying ? 'En Vivo' : 'Offline'}
                        </span>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8">
                    <p className="text-slate-500 text-sm mb-2">Programa Actual</p>
                    <p className="text-white text-lg font-light">
                        {currentProgram ? currentProgram.title : "Programa 1"}
                        <span className="text-slate-600 mx-2">|</span>
                        {currentProgram ? currentProgram.time : "08:00 - 10:00"}
                    </p>
                </div>

                {/* Programming List */}
                <div className="pt-8 text-left">
                    <h3 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
                        <Calendar size={20} className="text-blue-500" />
                        Programación
                    </h3>

                    <div className="space-y-4">
                        {RADIO_PROGRAMMING.map((prog) => (
                            <div key={prog.id} className="bg-slate-900/50 border border-white/5 rounded-xl p-4 hover:bg-slate-900 transition-colors">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="text-white font-medium">{prog.title}</h4>
                                    <span className="text-xs font-bold text-blue-400 bg-blue-500/10 px-2 py-1 rounded-full">
                                        {prog.time}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-slate-400">
                                    <span className="flex items-center gap-1">
                                        <User size={14} /> {prog.host}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock size={14} /> {prog.days}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <audio ref={audioRef} src={DATA.stream} />
            </div>
        </div>
    );
};

export default Radio;
