
import { db } from '../src/db/client';
import { Customers } from '../src/db/schema';

async function seed() {
    console.log('🌱 Seeding database...');

    try {
        await db.delete(Customers);

        await db.insert(Customers).values([
            // Enterprise Customers
            {
                title: 'Alain Afflelou',
                category: 'enterprise',
                images: [
                    '/img/works/AlainAfflelou/AlainAfflelou01.webp',
                    '/img/works/AlainAfflelou/AlainAfflelou02.webp',
                    '/img/works/AlainAfflelou/AlainAfflelou03.webp',
                    '/img/works/AlainAfflelou/AlainAfflelou04.webp',
                    '/img/works/AlainAfflelou/AlainAfflelou05.webp',
                    '/img/works/AlainAfflelou/AlainAfflelou06.webp',
                    '/img/works/AlainAfflelou/AlainAfflelou07.webp',
                    '/img/works/AlainAfflelou/AlainAfflelou08.webp',
                    '/img/works/AlainAfflelou/AlainAfflelou09.webp',
                ],
                isVisible: true,
                published: new Date(),
            },
            {
                title: 'Anaquel Armarios',
                category: 'enterprise',
                images: ['/img/works/AnaquelArmarios/AnaquelArmarios01.webp'],
                isVisible: false,
                published: new Date(),
            },
            {
                title: 'Cantina Canalla',
                category: 'enterprise',
                images: [
                    '/img/works/CantinaCanalla/CantinaCanalla01.webp',
                    '/img/works/CantinaCanalla/CantinaCanalla02.webp',
                    '/img/works/CantinaCanalla/CantinaCanalla03.webp',
                    '/img/works/CantinaCanalla/CantinaCanalla04.webp',
                    '/img/works/CantinaCanalla/CantinaCanalla05.webp',
                    '/img/works/CantinaCanalla/CantinaCanalla06.webp',
                    '/img/works/CantinaCanalla/CantinaCanalla07.webp',
                    '/img/works/CantinaCanalla/CantinaCanalla08.webp',
                ],
                isVisible: true,
                published: new Date(),
            },
            {
                title: 'Codere Apuestas',
                category: 'enterprise',
                images: ['/img/works/CodereApuestas/CodereApuestas01.webp'],
                isVisible: false,
                published: new Date(),
            },
            {
                title: 'Gredos Restaurante',
                category: 'enterprise',
                images: [
                    '/img/works/GredosRestaurante/GredosRestaurante01.webp',
                    '/img/works/GredosRestaurante/GredosRestaurante02.webp',
                    '/img/works/GredosRestaurante/GredosRestaurante03.webp',
                ],
                isVisible: true,
                published: new Date(),
            },
            {
                title: 'Isabella Beauty',
                category: 'enterprise',
                images: ['/img/works/IsabellaBeauty/IsabellaBeauty01.webp'],
                isVisible: false,
                published: new Date(),
            },
            {
                title: 'Leonardo Boutique Hotel',
                category: 'enterprise',
                images: [
                    '/img/works/LeonardoBoutiqueHotel/LeonardoBoutiqueHotel01.webp',
                    '/img/works/LeonardoBoutiqueHotel/LeonardoBoutiqueHotel02.webp',
                    '/img/works/LeonardoBoutiqueHotel/LeonardoBoutiqueHotel03.webp',
                    '/img/works/LeonardoBoutiqueHotel/LeonardoBoutiqueHotel04.webp',
                    '/img/works/LeonardoBoutiqueHotel/LeonardoBoutiqueHotel05.webp',
                    '/img/works/LeonardoBoutiqueHotel/LeonardoBoutiqueHotel06.webp',
                    '/img/works/LeonardoBoutiqueHotel/LeonardoBoutiqueHotel07.webp',
                    '/img/works/LeonardoBoutiqueHotel/LeonardoBoutiqueHotel08.webp',
                ],
                isVisible: true,
                published: new Date(),
            },
            {
                title: 'Por303Motivos',
                category: 'enterprise',
                images: [
                    '/img/works/Por303Motivos/Por303Motivos01.webp',
                    '/img/works/Por303Motivos/Por303Motivos02.webp',
                    '/img/works/Por303Motivos/Por303Motivos03.webp',
                ],
                isVisible: true,
                published: new Date(),
            },
            {
                title: 'Shifu',
                category: 'enterprise',
                images: [
                    '/img/works/Shifu/Shifu01.webp',
                    '/img/works/Shifu/Shifu02.webp',
                    '/img/works/Shifu/Shifu03.webp',
                    '/img/works/Shifu/Shifu04.webp',
                ],
                isVisible: true,
                published: new Date(),
            },

            // Private Customers
            {
                title: 'cliente particular',
                category: 'privateCustomer',
                images: ['/img/works/privatecostumerone/privatecostumerone.webp'],
                isVisible: true,
                published: new Date(),
            },
            {
                title: 'cliente particular',
                category: 'privateCustomer',
                images: ['/img/works/privatecostumertwo/privatecostumertwo.webp'],
                isVisible: true,
                published: new Date(),
            },
            {
                title: 'cliente particular',
                category: 'privateCustomer',
                images: ['/img/works/privatecostumerthree/privatecostumerthree.webp'],
                isVisible: true,
                published: new Date(),
            },
            {
                title: 'cliente particular',
                category: 'privateCustomer',
                images: ['/img/works/privatecostumerfour/privatecostumerfour.webp'],
                isVisible: true,
                published: new Date(),
            }
        ]);

        console.log('✅ Seeding completed!');
    } catch (e) {
        console.error('❌ Seeding failed:', e);
        process.exit(1);
    }
}

seed();
