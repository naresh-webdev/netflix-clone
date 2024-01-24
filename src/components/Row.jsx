import Movie from "./Movie";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const className =
  "flex  gap-6 pl-6 mt-4 inline-block w-1/2 flex-nowrap overflow-x-auto overflow-y-hidden hover:translate-x-[-25%]";
function Row({ movies, selector }) {
  const slideLeft = () => {
    let slider = document.getElementById(selector);
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    let slider = document.getElementById(selector);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className="">
      <div className="relative flex items-center group">
        <MdChevronLeft
          onClick={slideLeft}
          size={40}
          className="bg-white left-0 rounded-full z-[100] absolute opacity-50 hover:opacity-100 cursor-pointer group-hover:block hidden"
        />
        <div
          id={selector}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth relative scrollbar-hide overflow-x-hidden"
        >
          {movies.map((movie) => (
            <Movie movie={movie} key={movie.id} />
          ))}
        </div>
        <MdChevronRight
          size={40}
          onClick={slideRight}
          className="bg-white right-0 rounded-full  absolute opacity-50 hover:opacity-100 cursor-pointer group-hover:block hidden"
        />
      </div>
    </div>
  );
}

export default Row;
