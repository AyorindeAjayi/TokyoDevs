import logo from "./logo.svg";
import "./App.css";
import dark from "./image-about-dark.jpg";
import light from "./image-about-light.jpg";

function App() {
  return (
    <section className="homepage">
      <img src={dark} alt="dark room" />
      <div className="about">
        <h4>ABOUT OUR FURNITURE</h4>

        <p>
          Our multifunctional collection blends design and function to suit your
          individual taste. Make each room unique, or pick a cohesive theme that
          best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything
          in between. Product specialists are available to help you create your
          dream space.
        </p>
      </div>
      <img src={light} alt="light room" />
    </section>
  );
}

export default App;
