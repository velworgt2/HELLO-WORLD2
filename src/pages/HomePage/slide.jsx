/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";

const images = [
//   "../../../public/prograamacion.jpg",
//   "../../../public/programacion-3.jpg",
//   "../../../public/Cursos-Gratuitos.png",
    'https://llerosadreams.es/wp-content/uploads/2020/04/lenguajes-programacion.png',
    'https://www.globbit.com/wp-content/uploads/2016/07/lenguaje-programaci%C3%B3n-portada.jpg',
    'https://blog.ssd.com.py/wp-content/uploads/2022/06/informatica-lenguajes-de-programacion-SSD-Paraguay-jpg-1.jpg'
];

const FadeCarousel = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const prev = () => {
    setCurrIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const next = () => {
    setCurrIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (

    <>

    <div className="panel_carousel">
      <div className="contenido_estatico">
        <h3>explore your own world</h3>
        <p>
          You'll find a list of categories and subcategories covering a variety of topics.
        </p>
      </div>
    </div>

    <div className="relative">
      <div className="overflow-hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`slide ${index + 1}`}
            className={`absolute top-0 left-0 transition-opacity duration-1000 ${index === currIndex ? 'opacity-100' : 'opacity-0'}`}
            style={{ width: '100%', height: '300px', objectFit: 'cover',  zIndex:-2 }}
          />
        ))}
      </div>
      <div className="absolute  inset-y-0 left-2 flex  mt-40 items-center  ">
        <button onClick={prev}  style={{zIndex:1}} className="p-2 rounded-full bg-gray-800 text-white mr-2 hover:bg-gray-700">
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-2 flex  mt-40 items-center">
        <button onClick={next}   style={{zIndex:1}}  className="p-2 rounded-full bg-gray-800 text-white ml-2 hover:bg-gray-700">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
    </>
  );
}

export default FadeCarousel;
