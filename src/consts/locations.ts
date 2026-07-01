export interface LocationData {
    slug: string;
    municipioName: string;
    priorityZone: number; // 1: Velilla area, 2: Rest of Madrid
    puntosFuertes: string[];
    keywords: string[];
    descriptionLocal: string;
}

export const LOCATIONS_DATA: LocationData[] = [
    // Prioridad 1: Alrededor de Velilla de San Antonio (Cercanía Extrema)
    {
        slug: "toldos-loeches",
        municipioName: "Loeches",
        priorityZone: 1,
        puntosFuertes: [
            "Desplazamiento urgente gratuito en menos de 20 minutos desde nuestra central en Velilla",
            "Presupuesto sin compromiso con medición presencial en el mismo día",
            "Atención técnica inmediata de post-venta sin esperas"
        ],
        keywords: ["toldos brazo extensible", "pérgolas bioclimáticas", "cambio de lona de toldo", "cerramientos de aluminio"],
        descriptionLocal: "Loeches se sitúa a solo un paso de nuestro taller principal en Velilla de San Antonio. Ofrecemos instalación de pérgolas bioclimáticas y toldos a medida con tarifas sin intermediarios y servicio post-venta inmediato."
    },
    {
        slug: "toldos-mejorada-del-campo",
        municipioName: "Mejorada del Campo",
        priorityZone: 1,
        puntosFuertes: [
            "Medición a domicilio gratis en menos de 30 minutos",
            "Instalación preferente prioritaria para vecinos de Mejorada",
            "Garantía extendida de 5 años en todas nuestras lonas técnicas"
        ],
        keywords: ["toldos cofre", "pérgolas de aluminio", "toldos punto recto", "lonas impermeables"],
        descriptionLocal: "Instalamos toldos en Mejorada del Campo con la garantía de cercanía de un instalador local. Desde toldos cofre motorizados hasta pérgolas para patios y jardines a precios directos de fábrica."
    },
    {
        slug: "toldos-arganda-del-rey",
        municipioName: "Arganda del Rey",
        priorityZone: 1,
        puntosFuertes: [
            "Desplazamiento y asistencia técnica en menos de 25 minutos por la R-3",
            "Instaladores homologados con más de 15 años de experiencia en la zona",
            "Financiación a medida sin intereses hasta en 24 meses"
        ],
        keywords: ["toldos para terrazas", "pérgolas bioclimáticas motorizadas", "toldos cortavientos", "reparación de toldos"],
        descriptionLocal: "Especialistas en toldos en Arganda del Rey. Protégete del sol de forma eficiente con nuestras pérgolas y toldos de gran durabilidad, diseñados específicamente para el clima del sureste de Madrid."
    },
    {
        slug: "toldos-rivas-vaciamadrid",
        municipioName: "Rivas-Vaciamadrid",
        priorityZone: 1,
        puntosFuertes: [
            "Instalación exprés sin cargos extra en toda la zona de Rivas",
            "Asesoramiento a domicilio para cumplimiento de normativas estéticas de comunidad",
            "Sistemas inteligentes con sensores de viento Somfy"
        ],
        keywords: ["toldos para chalets", "pérgolas bioclimáticas", "toldos verticales guiados", "cambio de motor de toldo"],
        descriptionLocal: "Fabricamos e instalamos toldos en Rivas-Vaciamadrid. Adaptamos nuestros diseños a los colores de tu urbanización y garantizamos un comportamiento óptimo frente al viento con automatismos de alta gama."
    },
    {
        slug: "toldos-torres-de-la-alameda",
        municipioName: "Torres de la Alameda",
        priorityZone: 1,
        puntosFuertes: [
            "Mediciones a domicilio inmediatas y asesoramiento directo en Torres",
            "Precios de fábrica sin comisiones de intermediarios ni agencias",
            "Reparación y motorización de toldos existentes en tiempo récord"
        ],
        keywords: ["toldos planos", "cambio de lona acrílica", "cerramientos acristalados", "toldos monobloc"],
        descriptionLocal: "Toldos de alta calidad en Torres de la Alameda. Brindamos servicios rápidos de cambio de lona y montaje de pérgolas bioclimáticas directos desde nuestro taller central en Velilla."
    },
    {
        slug: "toldos-san-fernando-de-henares",
        municipioName: "San Fernando de Henares",
        priorityZone: 1,
        puntosFuertes: [
            "Servicio técnico en menos de 25 minutos en el Corredor del Henares",
            "Instalaciones limpias con fijaciones químicas de alta seguridad",
            "Presupuestos transparentes cerrados y por escrito"
        ],
        keywords: ["toldos para balcones", "toldos cofre motorizados", "toldos de capota", "pérgolas bioclimáticas"],
        descriptionLocal: "Instalación profesional de toldos en San Fernando de Henares. Soluciones premium de protección solar con tejidos técnicos de máxima resistencia UV y herrajes de aluminio lacado."
    },
    // Prioridad 2: Resto de la Comunidad de Madrid
    {
        slug: "toldos-madrid",
        municipioName: "Madrid",
        priorityZone: 2,
        puntosFuertes: [
            "Cobertura integral en todos los distritos de la capital con instaladores móviles",
            "Cumplimiento garantizado de normativas municipales y de comunidad",
            "Catálogo premium de pérgolas bioclimáticas y toldos motorizados inteligentes"
        ],
        keywords: ["toldos madrid capital", "pérgolas bioclimáticas", "cambio de lona de toldo", "toldos cofre inteligentes"],
        descriptionLocal: "Ofrecemos servicios de instalación y renovación de toldos en Madrid capital. Creamos espacios confortables en áticos, pisos y locales comerciales con sistemas modernos de accionamiento automático."
    },
    {
        slug: "toldos-coslada",
        municipioName: "Coslada",
        priorityZone: 2,
        puntosFuertes: [
            "Instalación experta con el respaldo de una fábrica local en el este madrileño",
            "Garantía en la durabilidad del color de la lona ante el sol extremo",
            "Servicio de mantenimiento preventivo y limpieza de toldos"
        ],
        keywords: ["toldos brazo extensible", "pérgolas de aluminio", "cambio de lona", "cerramientos de terrazas"],
        descriptionLocal: "Toldos resistentes y duraderos en Coslada. Te ayudamos a climatizar tu terraza o ventana de forma natural reduciendo hasta un 80% la entrada de calor solar en tu vivienda."
    },
    {
        slug: "toldos-torrejon-de-ardoz",
        municipioName: "Torrejón de Ardoz",
        priorityZone: 2,
        puntosFuertes: [
            "Asistencia de medición sin costo programada en menos de 24 horas",
            "Especialistas en toldos anti-viento con tejidos técnicos transpirables",
            "Sistemas modernos con sensores solares y domótica integrada"
        ],
        keywords: ["toldos cofre motorizados", "pérgolas de jardín", "toldos cortavientos de guía", "cambio de motor de toldo"],
        descriptionLocal: "Mejora el confort térmico de tu hogar en Torrejón de Ardoz con nuestros toldos cofre. El tejido acrílico de alta densidad protege del sol y resiste el paso de los años."
    },
    {
        slug: "toldos-alcala-de-henares",
        municipioName: "Alcalá de Henares",
        priorityZone: 2,
        puntosFuertes: [
            "Visita técnica gratuita y presupuesto detallado llave en mano",
            "Instaladores oficiales homologados por las principales marcas de domótica",
            "Soporte post-venta rápido con repuestos oficiales garantizados"
        ],
        keywords: ["toldos para locales comerciales", "pérgolas bioclimáticas", "toldos monobloc de alta resistencia", "lonas técnicas acrílicas"],
        descriptionLocal: "Expertos en instalación y motorización de toldos en Alcalá de Henares. Diseñamos e instalamos toldos y capotas para comercios, balcones y chalets a precios altamente competitivos."
    }
];
