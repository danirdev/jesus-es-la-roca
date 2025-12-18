import React from 'react';
import SectionTitle from '../components/SectionTitle';
import {DATA} from '../data/content';

const Contact = () => (
    <div className="animate-fade-in min-h-screen bg-white pt-20 flex flex-col">
        <div className="flex-grow flex flex-col md:flex-row">

            {/* Texto */}
            <div className="w-full md:w-1/2 p-12 md:p-24 flex flex-col justify-center">
                <SectionTitle title="Contacto" subtitle="Ubicación" />

                <div className="space-y-12">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Dirección</h4>
                        <p className="text-xl text-slate-900">{DATA.address}</p>
                        <p className="text-slate-500">{DATA.location}</p>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Digital</h4>
                        <a href={`https://wa.me/${DATA.whatsapp}`} className="block text-lg text-slate-900 hover:text-blue-600 transition-colors mb-1">
                            WhatsApp: +54 9 388 123 4567
                        </a>
                        <a href={DATA.facebook} target="_blank" rel="noreferrer" className="block text-lg text-slate-900 hover:text-blue-600 transition-colors">
                            Facebook Oficial
                        </a>
                    </div>
                </div>
            </div>

            {/* Mapa */}
            <div className="w-full md:w-1/2 min-h-[400px] bg-slate-100">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908.077603193736!2d-65.16313007301635!3d-24.440013432522317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bade12948477b%3A0x6621546aeca1ebb!2sMinisterio%20&#39;Jesus%20es%20la%20Roca&#39;!5e0!3m2!1ses-419!2sar!4v1766079683213!5m2!1ses-419!2sar"
                    width="100%"
                    height="100%"
                    style={{border: 0}}
                    allowFullScreen=""
                    loading="lazy"
                    title="Mapa"
                    className="w-full h-full"
                ></iframe>
            </div>
        </div>
    </div>
);

export default Contact;
