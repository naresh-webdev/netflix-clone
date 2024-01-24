import img1 from "./../img/homepage1.jpg";
import intro from "./../img/intro.mp4";
function HomePage() {
  return (
    <div className="max-h-screen max-w-screen">
      <div className="absolute hidden h-screen justify-center ml-8 flex-col gap-2 font-medium text-gray-50 md:flex">
        <h3 className="text-6xl">Interstellar</h3>
        <p className="max-w-[40ch]">
          Interstellar is a 2014 epic science fiction film co-written, directed,
          and produced by Christopher Nolan.
        </p>
      </div>

      {/* <img
        src={intro}
        alt="homepage Image"
        className="max-w-full overflow-y-hidden"
      /> */}
      <video autoPlay loop muted className="w-full h-full object-cover">
        <source src={intro} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default HomePage;
