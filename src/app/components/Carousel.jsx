import { Carousel } from "@material-tailwind/react";
import Searchbar from "../(main)/searchbar/SearchBar";


export default function CarouselPage() {
  return (
    <div className="relative">
      
      <Carousel
        className="relative h-[400px]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-red-600" : "w-4 bg-white/50"
                  }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
          <div className="relative h-full w-full">
            <img
              src="/pic2.jpeg"
              alt="image 2"
              className="h-full w-full object-cover"
            />
           
          </div>
          <div className="relative h-full w-full">
            <img
              src="/pic1.jpeg"
              alt="image 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative h-full w-full">
            <img
              src="/pic3.jpeg"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </div>
      </Carousel>
    </div>

  );
}