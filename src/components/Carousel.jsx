import React, { useEffect, useRef, useState } from "react";
import { CarouselSlide } from "@/components/CarouselSlide.jsx";

export const Carousel = ({ intervalTime = 8000 }) => {
	const [activeSlide, setActiveSlide] = useState(0);
	let intervalRef = useRef(null);
	const slides = [
		{
			title: (<>Toldos en Velilla de San Antonio y Madrid - ToldoPerfil</>),
			description: 'Creación y montaje de toldos a medida en Velilla de San Antonio, Loeches y Madrid',
			image: '/img/carousel/protrait01.webp',
			content: (
				<div className="w-full h-full flex flex-col justify-center items-center sm:items-start gap-4 px-4">
					<h1 className='text-3xl sm:text-5xl text-white font-bold'>
						Creación y Montaje de <br aria-hidden='true' />
						<span className=" font-extrabold">Toldos a Medida</span>
					</h1>
					<p className="text-[14px] sm:text-xl font-light text-center tracking-wider text-white">Toldos y pérgolas en Velilla de San Antonio, Loeches y todo Madrid.</p>
					<a
						href='#contact-us'
						aria-label='Solicitar presupuesto gratuito para instalación de toldos'
						className="py-3 px-5 bg-indigo-50 font-bold [transition-property: translate] duration-200 ease-linear delay-0 hover:-translate-y-0.5 secondary-button z-10"
					>
						Presupuesto Gratuito
					</a>
				</div>
			)
		},
		{
			title: 'Pérgolas y Cerramientos a Medida',
			description: 'Diseño e instalación de pergolas bioclimáticas y cerramientos de terrazas',
			image: '/img/carousel/protrait02.webp',
			content: (
				<div className="w-full h-full flex flex-col justify-center items-center gap-4 px-4">
					<h2 className='text-3xl sm:text-5xl text-white font-bold'>
						Pérgolas y Cerramientos
					</h2>
					<p className="text-[14px] sm:text-xl font-light text-center tracking-wider text-white">Soluciones robustas a medida para hogares y comercios.</p>
				</div>
			)
		},
		{
			title: 'Montaje de Toldos de Brazo Extensible y Cofres',
			description: 'Toldos cofre y capotas con materiales altamente resistentes y motorizados',
			image: '/img/carousel/protrait03.webp',
			content: (
				<div className="w-full h-full flex flex-col justify-center items-center gap-4 py-4">
					<h2 className='text-3xl sm:text-5xl text-white font-bold'>
						Toldos Cofre y Extensibles
					</h2>
					<p className="text-[14px] sm:text-xl font-light text-center tracking-wider text-white">Máxima durabilidad y automatización para tu confort.</p>
				</div>
			)
		},
		{
			title: 'Instalación de Toldos en Velilla, Loeches y todo Madrid',
			description: 'Servicio técnico especializado en fabricación e instalación de sistemas de protección solar',
			image: '/img/carousel/protrait04.webp',
			content: (
				<div className="w-full h-full flex flex-col justify-center items-center gap-4 py-4">
					<h2 className='text-3xl sm:text-5xl text-white font-bold'>
						Instalación en todo Madrid
					</h2>
					<p className="text-[14px] sm:text-xl font-light text-center tracking-wider text-white">Cobertura local rápida en Velilla de San Antonio y Loeches.</p>
				</div>
			)
		},
	];

	const handlePrevSlide = () => {
		setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
		resetTimer();
	};

	const handleNextSlide = () => {
		setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
		resetTimer();
	};

	const resetTimer = () => {
		clearInterval(intervalRef.current)
		intervalRef.current = setInterval(handleNextSlide, 3000);
	}

	useEffect(() => {
		intervalRef.current = setInterval(handleNextSlide, 3000);
		return () => clearInterval(intervalRef.current);
	}, [])

	return (
		<>

			{/* Carousel items */}
			<div className="relative w-full aspect-[4:3] sm:aspect-[16/9] min-h-[400px] sm:min-h-[600px] overflow-hidden bg-neutral-900">
				{slides.map(({ title, description, image, content }, index) => {
					let isActive = index === activeSlide;
					return (
						<CarouselSlide
							key={image + title}
							title={title}
							description={description}
							image={image}
							isActive={isActive}
							content={content}
							loading={index === 0 ? "eager" : "lazy"}
						/>)
				})}
			</div>

			<div className="absolute top-0 left-0 w-full h-full grid grid-flow-col">
				<button
					id="arrowLeft"
					aria-label="Flecha izquierda"
					onClick={handlePrevSlide}
					className="cursor-[url(/img/carousel/arrow-left.png),_pointer] text-transparent">arrowLeft</button>
				<button
					id="arrowRigth"
					aria-label="Flecha derecha"
					onClick={handleNextSlide}
					className="cursor-[url(/img/carousel/arrow-right.png),_pointer] text-transparent">arrowRigth</button>
			</div>
		</>
	);
}