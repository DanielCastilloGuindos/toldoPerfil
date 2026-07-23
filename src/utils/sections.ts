import { db } from "@/db/client";
import { PageSections } from "@/db/schema";
import { asc } from "drizzle-orm";

export async function getAllSections() {
    return await db.select().from(PageSections).orderBy(asc(PageSections.order));
}

export async function ensureDefaultSections() {
    const existing = await db.select().from(PageSections).limit(1);
    if (existing.length > 0) return;

    // Seed defaults if empty
    const defaults = [
        {
            type: "carousel_slide",
            order: 1,
            isEnabled: true,
            data: {
                cloudinaryUrl: "",
                localFallback: "/img/carousel/protrait01.webp",
                alt: "Imagen de Toldos en Velilla de San Antonio y Madrid",
                title: "Creación y Montaje de Toldos a Medida",
                subtitle: "Toldos y pérgolas en Velilla de San Antonio, Loeches y todo Madrid.",
                cta: { text: "Presupuesto Gratuito", href: "#contact-us" }
            }
        },
        {
            type: "carousel_slide",
            order: 2,
            isEnabled: true,
            data: {
                cloudinaryUrl: "",
                localFallback: "/img/carousel/protrait02.webp",
                alt: "Imagen de Pérgolas y Cerramientos a Medida",
                title: "Pérgolas y Cerramientos",
                subtitle: "Soluciones robustas a medida para hogares y comercios.",
                cta: null
            }
        },
        {
            type: "carousel_slide",
            order: 3,
            isEnabled: true,
            data: {
                cloudinaryUrl: "",
                localFallback: "/img/carousel/protrait03.webp",
                alt: "Imagen de Montaje de Toldos de Brazo Extensible y Cofres",
                title: "Toldos Cofre y Extensibles",
                subtitle: "Máxima durabilidad y automatización para tu confort.",
                cta: null
            }
        },
        {
            type: "carousel_slide",
            order: 4,
            isEnabled: true,
            data: {
                cloudinaryUrl: "",
                localFallback: "/img/carousel/protrait04.webp",
                alt: "Imagen de Instalación de Toldos en Velilla, Loeches y todo Madrid",
                title: "Instalación en todo Madrid",
                subtitle: "Cobertura local rápida en Velilla de San Antonio y Loeches.",
                cta: null
            }
        },
        {
            type: "about",
            order: 5,
            isEnabled: true,
            data: {
                title: "Sobre Nosotros",
                heading: "Pasión por la calidad y el servicio.",
                paragraphs: [
                    "TOLDOPERFIL, fue creada como marca de JCDESIGN ROTULOS, en 2014 para la fabricación de Toldos, Pérgolas, Capotas, Terrazas, Balaustradas de cristal para escaleras, piscinas y cerramientos.",
                    "Nuestros clientes querían aprovechar desplazamientos y mano de obra de los programas de imagen corporativa que llevábamos a cabo a nivel nacional. Nos brindaron la oportunidad de establecer otra línea de negocio.",
                    "Este fue el inicio y punto de partida para la fabricación, diseño y montaje de toldos a medida, ofreciendo hoy en día cobertura especializada en Velilla de San Antonio, Loeches y toda la Comunidad de Madrid.",
                    "Después de 10 años, TOLDOPERFIL es líder en la industria de la protección solar en la zona este de Madrid (Velilla de San Antonio y Loeches), distinguiéndose por su compromiso con la excelencia y la satisfacción de nuestros clientes.",
                    "Nuestro equipo es experto en proporcionar soluciones a medida, desde la selección de materiales y confección de lonas hasta la instalación profesional de capotas, toldos y pérgolas.",
                    "Únete a nuestra familia y transforma tu espacio exterior en Velilla de San Antonio, Loeches o Madrid con estilo, protección y funcionalidad incomparables."
                ],
                stats: [
                    { value: "10+", label: "Años de experiencia" },
                    { value: "300+", label: "Proyectos realizados" }
                ],
                cloudinaryUrl: ""
            }
        },
        {
            type: "gallery_enterprise",
            order: 6,
            isEnabled: true,
            data: {
                title: "Primeras Marcas y Franquicias",
                heading: "Trabajamos con primeras marcas a nivel nacional para cadenas hoteleras, restaurantes, ópticas, automoción, bancos, etc.",
                linkText: "Ver todos los proyectos",
                linkHref: "/proyectos/empresas"
            }
        },
        {
            type: "communities",
            order: 7,
            isEnabled: true,
            data: {
                title: "Comunidades",
                heading: "Realizamos presupuestos a comunidades o a constructoras para nueva obra",
                cloudinaryUrl: "",
                localFallback: "/img/carousel/protrait02.webp",
                cta: { text: "Obtén tu presupuesto", href: "#contact-us" }
            }
        },
        {
            type: "gallery_private",
            order: 8,
            isEnabled: true,
            data: {
                title: "Particulares",
                heading: "Asesoramos a nuestros clientes el tipo de toldo que le conviene en cada caso",
                linkText: "Ver Nuestros Proyectos",
                linkHref: "/proyectos/particulares"
            }
        },
        {
            type: "products_split",
            order: 9,
            isEnabled: true,
            data: {
                title: "Amplia Gama de Productos",
                heading: "Fabricación y montaje de toldos a medida, pérgolas bioclimáticas y cerramientos de terrazas en Velilla de San Antonio, Loeches y todo Madrid.",
                cloudinaryUrl: "",
                localFallback: "/img/products/products.webp",
                listType: "check",
                items: [
                    "Sustitución de lonas en mal estado de tu toldo",
                    "Rotulación de faldones de toldos para tiendas, comercios, franquicias etc..",
                    "Incorporación de iluminación de tecnología led en los toldos",
                    "Faldones con logotipos luminosos",
                    "Pergolas BIOCLIMATICAS",
                    "Pergolas con palillería y lona acrílica",
                    "Cerramientos y Terrazas para Hostelería",
                    "Balaustradas de cristal para escaleras y separación de piscinas"
                ],
                cta: null
            }
        },
        {
            type: "faq",
            order: 10,
            isEnabled: true,
            data: {
                question: "¿Qué tipo de tela utilizan en sus toldos y qué ventajas ofrece?",
                answer: "En nuestra tienda, utilizamos lona acrílica de alta calidad para nuestros toldos. Esta tela es duradera, resistente a la intemperie, resistente al desvanecimiento y está disponible en una amplia gama de colores y diseños. Además, la lona acrílica ofrece una excelente protección contra los rayos UV, lo que ayuda a mantener frescos los espacios exteriores y a proteger los muebles y pisos de la decoloración."
            }
        },
        {
            type: "faq",
            order: 11,
            isEnabled: true,
            data: {
                question: "¿Cuáles son las características de sus estructuras de toldos?",
                answer: "Nuestros toldos están diseñados con estructuras robustas y duraderas que garantizan una instalación segura y estable. Utilizamos materiales resistentes como el aluminio y el acero galvanizado que ofrecen una excelente resistencia a la corrosión y una larga vida útil. Además, nuestras estructuras están diseñadas para soportar cargas de viento y nieve, lo que garantiza su rendimiento incluso en condiciones climáticas adversas."
            }
        },
        {
            type: "faq",
            order: 12,
            isEnabled: true,
            data: {
                question: "¿Ofrecen garantía en sus toldos?",
                answer: "Sí, ofrecemos una garantía integral en todos nuestros toldos para brindar a nuestros clientes tranquilidad y confianza en su compra. Nuestra garantía cubre defectos de fabricación y mano de obra, así como el rendimiento y la durabilidad del producto. Estamos comprometidos a garantizar la satisfacción de nuestros clientes y a brindar un servicio excepcional en todo momento."
            }
        },
        {
            type: "faq",
            order: 13,
            isEnabled: true,
            data: {
                question: "¿Qué servicios de instalación ofrecen y qué experiencia tienen sus instaladores?",
                answer: "Ofrecemos servicios profesionales de instalación realizados por nuestro equipo altamente capacitado de instaladores certificados. Nuestros instaladores tienen una amplia experiencia en la instalación de toldos y están comprometidos con los más altos estándares de calidad y seguridad. Nos aseguramos de que cada instalación se realice de manera profesional y eficiente, garantizando la satisfacción del cliente en todo momento."
            }
        }
    ];

    for (const val of defaults) {
        await db.insert(PageSections).values(val);
    }
}
