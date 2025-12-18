import React from 'react';

const SectionTitle = ({title, subtitle}) => (
    <div className="mb-16">
        <span className="block text-xs font-bold tracking-[0.2em] uppercase text-slate-400 mb-3">
            {subtitle}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            {title}
        </h2>
    </div>
);

export default SectionTitle;
