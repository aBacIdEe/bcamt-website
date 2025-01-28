import { FC, useState } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

interface Slide {
  image: string;
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center' | 'right';
}

const slidesData: Slide[] = [
  {
    image: '/arml23group.jpg',
    title: 'Welcome to the BCA Math Team!',
    subtitle: 'Official website of the Bergen County Academies Math Team',
    alignment: 'center',
  },
  {
    image: '/math_team_lecture_reduced.jpg',
    title: 'Open to any high schoolers',
    subtitle: 'High school students with any interest and at any level of math knowledge',
    alignment: 'left',
  },
];

const Slider: FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slidesData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slidesData.length - 1 : prevIndex - 1
    );
  };

  const { image, title, subtitle, alignment } = slidesData[currentIndex];

  // For Tailwind alignment classes
  let alignmentClasses = 'items-center text-center'; // default center
  if (alignment === 'left') alignmentClasses = 'items-start text-left';
  if (alignment === 'right') alignmentClasses = 'items-end text-right';

  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      {/* Slide Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Overlay for text readability, optional */}
        <div className="w-full h-full bg-black bg-opacity-40 flex flex-col justify-center px-4 md:px-8">
          <div className={`max-w-2xl mx-auto text-white flex flex-col ${alignmentClasses} gap-2`}>
            <h3 className="text-2xl md:text-3xl font-bold">{title}</h3>
            <h5 className="text-base md:text-lg font-light">{subtitle}</h5>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2
                   bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
      >
        <MdChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2
                   bg-black bg-opacity-50 text-white rounded-full p-2 hover:bg-opacity-70"
      >
        <MdChevronRight size={24} />
      </button>
    </div>
  );
};

export default Slider;
