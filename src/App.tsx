import "./App.css";
import { Hero } from "components/hero";

function App() {
  return (
    <main>
      <Hero
        autoplay
        screens={[
          {
            media: "/bg-7.jpeg",
            caption: <span className="p-10">Jai sia ram!</span>,
            captionStyles: { margin: 100 },
            captionTextStyles: { background: "rbg(0,0,0,0.7)" },
          },
          {
            media: "/bg-6.jpeg",
            caption: <span className="p-10 opacity-100">Jai sia ram!</span>,
          },
        ]}
      />
    </main>
  );
}

export default App;
