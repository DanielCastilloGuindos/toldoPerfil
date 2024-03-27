export const CarouselSlide = ({ background, title, description, isActive = false }) => {
	let myOpacity = isActive ? 'opacity-100' : 'opacity-0';

	return (
		<figure className={`relative w-full float-left -mr-[100%] !transform-none ${myOpacity} transition-opacity duration-[600ms] ease-in-out motion-reduce:transition-none`}>
			<img className="w-full object-cover aspect-video" src={ background } alt={`Imagen de ${title}`}/>
			<figcaption className="absolute inset-0 w-full h-full flex flex-col sm:gap-4 justify-center items-center sm:items-start bg-gray-900 bg-opacity-50 text-center sm:text-start sm:px-16">
				<h2 className={`text-3xl sm:text-5xl text-indigo-950 font-bold {myOpacity}  transition-opacity duration-500 ease-linear delay-300`}>{ title }</h2>
				<p className="px-4 sm:px-0 text-[14px] sm:text-xl font-light text-center tracking-wider text-white">{ description }</p>
			</figcaption>
		</figure>
	);
}