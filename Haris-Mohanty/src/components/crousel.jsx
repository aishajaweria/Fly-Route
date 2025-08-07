import { useState } from "react";
import "./crouselscript";
import "./crousle.css";

const cards = [
  {
    title: "Explore The World",
    image:
      "https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Wild Forest",
    image:
      "https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
  {
    title: "Sunny Beach",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1353&q=80",
  },
  {
    title: "City on Winter",
    image:
      "https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
  },
  {
    title: "Mountains - Clouds",
    image:
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  },
];

export default function Crousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container">
      {/* Text at the top */}
      <div className="crousel-text">
        <h2>Discover Your Next Adventure</h2>
        <p>Explore breathtaking destinations and create unforgettable memories.</p>
      </div>

      {/* Carousel below */}
      <div className="carousel-wrapper">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`panel ${activeIndex === index ? "active" : ""}`}
            style={{ backgroundImage: `url('${card.image}')` }}
            onClick={() => setActiveIndex(index)}
          >
            <h3>{card.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
