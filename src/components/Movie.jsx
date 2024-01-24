import { Link } from "react-router-dom";

function Movie({ movie }) {
  const { img, title } = movie;
  const className =
    "bg-stone-900 rounded-sm shadow-sm inline-block transition-all ease-in duration-300s";
  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
      <Link to={typeof movie.id == "string" ? `/movie/${movie.id}` : "#"}>
        <img
          src={img}
          alt={title}
          className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] block"
        />
      </Link>
    </div>
  );
}

export default Movie;
