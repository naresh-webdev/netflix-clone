import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Row from "./components/Row";

import row1 from "./data/row1.json";
import row2 from "./data/row2.json";
import row3 from "./data/row3.json";

import "./utils/firebase";

function App() {
  return (
    <div className="bg-stone-400">
      <Header />
      <HomePage />
      <h1 className="text-gray-50 font-semibold text-3xl pl-6 pt-6">
        Popular on Netflix
      </h1>
      <Row movies={row1} selector="slider-1" />

      <h1 className="text-gray-50 font-semibold text-3xl pl-6 mt-5">
        Continue Watching
      </h1>
      <Row movies={row2} selector="slider-2" />

      <h1 className="text-gray-50 font-semibold text-3xl pl-6 mt-5">
        Popular TV shows
      </h1>
      <Row movies={row3} selector="slider-3" />
    </div>
  );
}

export default App;
