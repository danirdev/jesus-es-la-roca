import {Users, Star, Music, Sun, Moon, Heart, Video} from 'lucide-react';

export const DATA = {
    name: "Jesús es la Roca",
    location: "Monterrico, Jujuy",
    address: "Rufino Arias 825",
    facebook: "https://www.facebook.com/JESUSESLAROCA12/",
    whatsapp: "549388-1234567",
    stream: "https://stream.zeno.fm/tu-radio-stream"
};

export const WEEKLY_AGENDA = [
    {
        id: 1,
        day: "Lunes",
        time: "20:00",
        title: "Reunión de Líderes",
        desc: "Tiempo de capacitación, planificación y visión para el equipo de liderazgo.",
        icon: Users
    },
    {
        id: 2,
        day: "Miércoles",
        time: "20:30",
        title: "Reunión General",
        desc: "Un servicio poderoso de adoración y enseñanza de la Palabra para toda la familia.",
        icon: Star
    },
    {
        id: 3,
        day: "Sábados",
        time: "Horario a confirmar",
        title: "Red de Jóvenes / Prejuveniles",
        desc: "Actividades dinámicas, plenarias y compañerismo. (Rotativo según fecha).",
        icon: Music
    },
    {
        id: 4,
        day: "Domingos",
        time: "08:00",
        title: "Reunión de Oración",
        desc: "Intercesión matutina para comenzar la semana en victoria.",
        icon: Sun
    },
    {
        id: 5,
        day: "Domingos",
        time: "17:00",
        title: "Reunión General",
        desc: "Nuestra celebración central de la semana. ¡Ven con toda tu familia!",
        icon: Moon
    }
];

export const MINISTRIES = [
    {title: "Escuela Bíblica", icon: Heart, desc: "Formación infantil"},
    {title: "Multimedia", icon: Video, desc: "Comunicación visual"},
    {title: "Alabanza", icon: Music, desc: "Adoración y música"},
    {title: "Liderazgo", icon: Users, desc: "Equipo de liderazgo"},
];
