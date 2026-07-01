export interface LocationData {
    slug: string;
    municipioName: string;
    priorityZone: number; // 1: Velilla area, 2: Rest of Madrid
    puntosFuertes: string[];
    keywords: string[];
    descriptionLocal: string;
}

export const LOCATIONS_DATA: LocationData[] = [
    // Sede Principal
    {
        slug: "toldos-velilla-de-san-antonio",
        municipioName: "Velilla de San Antonio",
        priorityZone: 1,
        puntosFuertes: [
            "Taller y central localizados en el propio municipio para un servicio directo",
            "Consulta técnica personalizada en tu domicilio adaptada a tu disponibilidad",
            "Fabricación propia y atención directa de fábrica sin intermediarios"
        ],
        keywords: ["toldos a medida", "pérgolas bioclimáticas", "toldos cofre motorizados", "cambio de lona de toldo"],
        descriptionLocal: "Velilla de San Antonio alberga nuestro taller y central principal. Como fabricantes locales de toldos, ofrecemos a nuestros vecinos atención directa, materiales de primera calidad y un asesoramiento adaptado a sus necesidades."
    },
    // Prioridad 1: Alrededor de Velilla de San Antonio (Cercanía)
    {
        slug: "toldos-loeches",
        municipioName: "Loeches",
        priorityZone: 1,
        puntosFuertes: [
            "Servicio cercano y directo coordinado desde nuestra central en Velilla de San Antonio",
            "Presupuesto detallado adaptado a las necesidades de tu espacio",
            "Soporte técnico post-venta directo y cercano"
        ],
        keywords: ["toldos brazo extensible", "pérgolas bioclimáticas", "cambio de lona de toldo", "cerramientos de aluminio"],
        descriptionLocal: "Loeches se sitúa a muy poca distancia de nuestro taller en Velilla de San Antonio. Ofrecemos instalación de pérgolas bioclimáticas y toldos a medida con tarifas competitivas y trato personalizado."
    },
    {
        slug: "toldos-mejorada-del-campo",
        municipioName: "Mejorada del Campo",
        priorityZone: 1,
        puntosFuertes: [
            "Estudio y medición técnica personalizada a domicilio",
            "Instalación profesional y cuidadosa realizada por especialistas",
            "Uso de lonas y materiales de alta calidad con resistencia UV"
        ],
        keywords: ["toldos cofre", "pérgolas de aluminio", "toldos punto recto", "lonas impermeables"],
        descriptionLocal: "Instalamos toldos en Mejorada del Campo con la garantía de cercanía de un taller local. Desde toldos cofre motorizados hasta pérgolas para terrazas y patios con la máxima durabilidad."
    },
    {
        slug: "toldos-arganda-del-rey",
        municipioName: "Arganda del Rey",
        priorityZone: 1,
        puntosFuertes: [
            "Asistencia técnica cualificada y servicio de montaje profesional",
            "Instaladores con amplia experiencia en la zona",
            "Presupuestos transparentes sin sorpresas"
        ],
        keywords: ["toldos para terrazas", "pérgolas bioclimáticas motorizadas", "toldos cortavientos", "reparación de toldos"],
        descriptionLocal: "Especialistas en toldos en Arganda del Rey. Diseñamos pérgolas y sistemas de sombreado resistentes para el clima del sureste de Madrid, priorizando siempre la calidad y el trato directo."
    },
    {
        slug: "toldos-rivas-vaciamadrid",
        municipioName: "Rivas-Vaciamadrid",
        priorityZone: 1,
        puntosFuertes: [
            "Montaje profesional adaptado a la estética de tu vivienda o local",
            "Asesoramiento sobre normativas estéticas y de comunidad",
            "Opción de automatización y sensores de viento Somfy"
        ],
        keywords: ["toldos para chalets", "pérgolas bioclimáticas", "toldos verticales guiados", "cambio de motor de toldo"],
        descriptionLocal: "Fabricamos e instalamos toldos en Rivas-Vaciamadrid. Adaptamos nuestros diseños a los colores de tu urbanización y configuramos automatismos de alta gama para tu mayor comodidad."
    },
    {
        slug: "toldos-torres-de-la-alameda",
        municipioName: "Torres de la Alameda",
        priorityZone: 1,
        puntosFuertes: [
            "Medición detallada y asesoramiento directo",
            "Precios directos de taller sin intermediarios",
            "Servicio de reparación y motorización de toldos"
        ],
        keywords: ["toldos planos", "cambio de lona acrílica", "cerramientos acristalados", "toldos monobloc"],
        descriptionLocal: "Toldos de alta calidad en Torres de la Alameda. Brindamos servicios de renovación de lonas y montaje de pérgolas bioclimáticas con la garantía de cercanía de nuestro taller de Velilla."
    },
    {
        slug: "toldos-san-fernando-de-henares",
        municipioName: "San Fernando de Henares",
        priorityZone: 1,
        puntosFuertes: [
            "Servicio de instalación profesional en el Corredor del Henares",
            "Instalaciones de alta seguridad con anclajes homologados",
            "Presupuestos por escrito claros y detallados"
        ],
        keywords: ["toldos para balcones", "toldos cofre motorizados", "toldos de capota", "pérgolas bioclimáticas"],
        descriptionLocal: "Instalación profesional de toldos en San Fernando de Henares. Ofrecemos soluciones a medida con tejidos técnicos de alta resistencia ante la radiación solar extrema."
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
        descriptionLocal: "Ofrecemos servicios de instalación y renovación de toldos en Madrid capital. Creamos espacios confortables en áticos, pisos y locales comerciales con sistemas modernos de protección solar."
    },
    {
        slug: "toldos-coslada",
        municipioName: "Coslada",
        priorityZone: 2,
        puntosFuertes: [
            "Instalación experta con el respaldo de un taller local en el este madrileño",
            "Garantía en la calidad y durabilidad del color de la lona ante el sol",
            "Servicio de mantenimiento y puesta a punto de toldos"
        ],
        keywords: ["toldos brazo extensible", "pérgolas de aluminio", "cambio de lona", "cerramientos de terrazas"],
        descriptionLocal: "Toldos resistentes y duraderos en Coslada. Te ayudamos a climatizar tu terraza de forma natural reduciendo notablemente la entrada de calor solar en tu vivienda."
    },
    {
        slug: "toldos-torrejon-de-ardoz",
        municipioName: "Torrejón de Ardoz",
        priorityZone: 2,
        puntosFuertes: [
            "Asistencia de medición y presupuesto personalizado",
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
            "Visita técnica y presupuesto detallado",
            "Instaladores oficiales homologados por las principales marcas de automatismos",
            "Soporte post-venta directo con repuestos oficiales garantizados"
        ],
        keywords: ["toldos para locales comerciales", "pérgolas bioclimáticas", "toldos monobloc de alta resistencia", "lonas técnicas acrílicas"],
        descriptionLocal: "Expertos en instalación de toldos en Alcalá de Henares. Diseñamos e instalamos toldos y capotas para comercios, balcones y chalets a precios altamente competitivos."
    }
];
