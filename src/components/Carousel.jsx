import React, { useEffect, useRef, useState } from "react";
import { CarouselSlide } from "@/components/CarouselSlide.jsx";

export const Carousel = ({ intervalTime= 8000 }) => {
  const [activeSlide, setActiveSlide] = useState(0);
	let intervalRef = useRef(null);
	const slides = [{
			title: (<>Bienvenido a <span className="text-indigo-600">ToldoPerfil</span></>),
			description: 'Su solución para toldos de alta calidad',
			image: '/img/carousel/protrait01.webp',
		},
		{
			title: 'Title 2',
			description: 'Description 2',
			image: '/img/carousel/protrait02.webp',
		},
		{
			title: 'Title 3',
			description: 'Description 3',
			image: '/img/carousel/protrait03.webp',
		},
		{
			title: 'Title 4',
			description: 'Description 4',
			image: '/img/carousel/protrait04.webp',
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
		intervalRef.current = setInterval( handleNextSlide, 3000 );
	}

	useEffect(() => {
		intervalRef.current = setInterval( handleNextSlide, 3000 );
		return () => clearInterval(intervalRef.current);
	}, [])

	return (
		<>

      {/* Carousel items */}
      <div className="h-fit">
        {slides.map(({ title, description, image }, index) => {
					let isActive = index === activeSlide;
					return (
						<CarouselSlide
							key={ image + title}
							title={ title }
							description={ description }
							image={ image }
							isActive={ isActive } />)
				})}
      </div>

			<div className="absolute top-0 left-0 w-full h-full grid grid-flow-col">
				<button
					id="arrowLeft"
					aria-label="Flecha izquierda"
					onClick={ handlePrevSlide }
					className="cursor-[url(/img/carousel/arrow-left.png),_pointer] text-transparent">arrowLeft</button>
				<button
					id="arrowRigth"
					aria-label="Flecha derecha"
					onClick={ handleNextSlide }
					className="cursor-[url(/img/carousel/arrow-right.png),_pointer] text-transparent">arrowRigth</button>
			</div>
    </>
	);
}