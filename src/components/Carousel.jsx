import React, { useEffect, useRef, useState } from "react";
import { CarouselSlide } from "@/components/CarouselSlide.jsx";

export const Carousel = ({ intervalTime = 8000 }) => {
	const [activeSlide, setActiveSlide] = useState(0);
	let intervalRef = useRef(null);
	const slides = [
		{
			title: (<>Bienvenido a <span className="text-indigo-600">ToldoPerfil</span></>),
			description: 'Su solución para toldos de alta calidad',
			image: '/img/carousel/protrait01.webp',
			content: (
				<div className="w-full h-full flex flex-col justify-center items-center sm:items-start gap-4 px-4">
					<h1 className='text-3xl sm:text-5xl text-white font-bold'>
						Bienvenido a <br aria-hidden='true' />
						<span className=" font-extrabold">ToldoPerfil</span>
					</h1>
					<p className="text-[14px] sm:text-xl font-light text-center tracking-wider text-white">Su solución para toldos de alta calidad.</p>
					<a
						href='#contact-us'
						aria-label='Enlace a la sección "Contactanos"'
						className="py-3 px-5 bg-indigo-50 font-bold [transition-property: translate] duration-200 ease-linear delay-0 hover:-translate-y-0.5 secondary-button z-10"
					>
						Obtén tu presupuesto
					</a>
				</div>
			)
		},
		{
			title: 'Title 2',
			description: 'Description 2',
			image: '/img/carousel/protrait02.webp',
			content: (
				<div className="w-full h-full flex flex-col justify-center items-center gap-4 px-4">
					<h2 className='text-3xl sm:text-5xl text-white font-bold'>
						Soluciones para todos
					</h2>
					<p className="text-[14px] sm:text-xl font-light text-center tracking-wider text-white">Desde primeras marcas como particulares</p>
				</div>
			)
		},
		{
			title: 'Title 3',
			description: 'Description 3',
			image: '/img/carousel/protrait03.webp',
			content: (
				<div className="w-full h-full flex flex-col justify-center items-center gap-4 py-4">
					<h2 className='text-3xl sm:text-5xl text-white font-bold'>
						Amplia gama de productos
					</h2>
					<p className="text-[14px] sm:text-xl font-light text-center tracking-wider text-white">Las mejores calidades a tu servicio</p>
				</div>
			)
		},
		{
			title: 'Title 4',
			description: 'Description 4',
			image: '/img/carousel/protrait04.webp',
			content: (
				<div className="w-full h-full flex flex-col justify-center items-center gap-4 py-4">
					<h2 className='text-3xl sm:text-5xl text-white font-bold'>
						Obtén el control de tu día
					</h2>
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
			<div className="h-fit">
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