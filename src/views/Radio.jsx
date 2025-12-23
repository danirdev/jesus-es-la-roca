import React, {useState, useRef} from 'react';
import {Pause, Play} from 'lucide-react';
import {DATA} from '../data/content';

const Radio = () =>
{
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

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
        <div className="animate-fade-in min-h-screen bg-slate-950 pt-32 pb-20 px-6 flex flex-col items-center justify-center">

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
                    <p className="text-slate-500 text-sm mb-2">Próximo Programa</p>
                    <p className="text-white text-lg font-light">Mensaje de Poder <span className="text-slate-600 mx-2">|</span> 20:00 hs</p>
                </div>

                <audio ref={audioRef} src={DATA.stream} />
            </div>
        </div>
    );
};

export default Radio;
