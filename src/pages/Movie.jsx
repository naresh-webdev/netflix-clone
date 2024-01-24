import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../utils/firebase";

function Movie() {
  const { id } = useParams();
  console.log("id is :", id);
  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState("");
  const [img, setImg] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    async function getData(id) {
      const {
        rating: rat,
        description: des,
        img: image,
        name,
      } = await getMovieDetails(id);
      console.log(rat, des, image);
      setRating(rat);
      setDescription(des);
      setImg(image);
      setTitle(name);
    }
    getData(id);
  }, [id]);

  return (
    <>
      <Header />
      <div className="pt-[50px] bg-stone-300">
        <div className="w-screen">
          <img src={img} alt={title} className="w-full h-full" />
        </div>
        <h2 className="text-center text-2xl font-bold text-slate-800 pt-8">
          {title}
        </h2>
        <span className="text-center text-yellow-700 font-medium block pt-1">
          Rating : {rating} / 10
        </span>
        <p className="pt-3 p-2">{description}</p>
      </div>
    </>
  );
}

export default Movie;
