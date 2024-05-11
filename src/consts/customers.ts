export const getStaticProductsPaths = () => {
	let staticProductsPaths = [];
	
	brandsAndFranchisesCustomers.map((client) => {
		staticProductsPaths.push(
			{params: {clientId: client.id}}
		)
	});

	return staticProductsPaths;
}

export const brandsAndFranchisesCustomers = [
	{
		id: 'AlainAfflelou',
		title: 'Alain Afflelou',
		isVisible: true,
		images: [
			'AlainAfflelou01.webp',
			'AlainAfflelou02.webp',
			'AlainAfflelou03.webp',
			'AlainAfflelou04.webp',
			'AlainAfflelou05.webp',
			'AlainAfflelou06.webp',
			'AlainAfflelou07.webp',
			'AlainAfflelou08.webp',
			'AlainAfflelou09.webp',
		],
	},
	{
		id: 'AnaquelArmarios',
		title: 'Anaquel Armarios',
		isVisible: false,
		images: [
			'AnaquelArmarios01.webp',
		],
	},
	{
		id: 'CantinaCanalla',
		title: 'Cantina Canalla',
		isVisible: true,
		images: [
			'CantinaCanalla01.webp',
			'CantinaCanalla02.webp',
			'CantinaCanalla03.webp',
			'CantinaCanalla04.webp',
			'CantinaCanalla05.webp',
			'CantinaCanalla06.webp',
			'CantinaCanalla07.webp',
			'CantinaCanalla08.webp',
		],
	},
	{
		id: 'CodereApuestas',
		title: 'Codere Apuestas',
		isVisible: false,
		images: [
			'CodereApuestas01.webp',
		],
	},
	{
		id: 'GredosRestaurante',
		title: 'Gredos Restaurante',
		isVisible: true,
		images: [
			'GredosRestaurante01.webp',
			'GredosRestaurante02.webp',
			'GredosRestaurante03.webp',
		],
	},
	{
		id: 'IsabellaBeauty',
		title: 'Isabella Beauty',
		isVisible: false,
		images: [
			'IsabellaBeauty01.webp',
		],
	},
	{
		id: 'LeonardoBoutiqueHotel',
		title: 'Leonardo Boutique Hotel',
		isVisible: true,
		images: [
			'LeonardoBoutiqueHotel01.webp',
			'LeonardoBoutiqueHotel02.webp',
			'LeonardoBoutiqueHotel03.webp',
			'LeonardoBoutiqueHotel04.webp',
			'LeonardoBoutiqueHotel05.webp',
			'LeonardoBoutiqueHotel06.webp',
			'LeonardoBoutiqueHotel07.webp',
			'LeonardoBoutiqueHotel08.webp',
		],
	},
	{
		id: 'Por303Motivos',
		title: 'Por303Motivos',
		isVisible: true,
		images: [
			'Por303Motivos01.webp',
			'Por303Motivos02.webp',
			'Por303Motivos03.webp',
		],
	},
	{
		id: 'Shifu',
		title: 'Shifu',
		isVisible: true,
		images: [
			'Shifu01.webp',
			'Shifu02.webp',
			'Shifu03.webp',
			'Shifu04.webp',
		],
	},
];

export const PrivateCustomers = [
	{
		id: 'privatecostumerone',
		title: 'cliente particular',
		isVisible: true,
		images: [
			'privatecostumerone.webp',
		]
	},
	{
		id: 'privatecostumertwo',
		title: 'cliente particular',
		isVisible: true,
		images: [
			'privatecostumertwo.webp',
		],
	},
	{
		id: 'privatecostumerthree',
		title: 'cliente particular',
		isVisible: true,
		images: [
			'privatecostumerthree.webp',
		],
	},
	{
		id: 'privatecostumerfour',
		title: 'cliente particular',
		isVisible: true,
		images: [
			'privatecostumerfour.webp',
		],
	},
];