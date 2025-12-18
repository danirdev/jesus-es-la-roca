import React, {useState, useEffect} from 'react';
import Navbar from './components/Navbar';
import Home from './views/Home';
import About from './views/About';
import Meetings from './views/Meetings';
import Radio from './views/Radio';
import Contact from './views/Contact';

const App = () =>
{
  const [view, setView] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() =>
  {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() =>
  {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen selection:bg-slate-900 selection:text-white">

      <Navbar view={view} setView={setView} scrolled={scrolled} />

      {/* MAIN */}
      <main>
        {view === 'home' && <Home setView={setView} />}
        {view === 'about' && <About />}
        {view === 'meetings' && <Meetings />}
        {view === 'radio' && <Radio />}
        {view === 'contact' && <Contact />}
      </main>

      {/* FOOTER */}
      {view !== 'radio' && (
        <footer className="bg-white py-12 border-t border-slate-100 text-center">
          <div className="flex justify-center items-center gap-2 mb-4 text-slate-300">
            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
            <div className="w-2 h-2 rounded-full bg-slate-200"></div>
          </div>
          <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
            © 2025 Ministerio Jesús es la Roca
          </p>
        </footer>
      )}
    </div>
  );
};

export default App;
