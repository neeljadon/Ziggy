import { Link } from "react-router-dom";
import CircularGallery from "./CircularGallery/CircularGallery";
import ScrambledText from "./ScrambledText/ScrambledText";
import TiltedCard from "./TiltedCard/TiltedCard";

const menuItems = [
  { text: "Biryani", link: "/biryani", image: "Biryani.jpg" },
  { text: "Pizza", link: "/pizza", image: "Pizza.jpg" },
  { text: "Burger", link: "/burger", image: "Burger.jpg" },
  { text: "Sandwich", link: "/sandwich", image: "Sandwich.jpg" },
  { text: "Dosa", link: "/dosa", image: "Dosa.jpg" },
];

const foodItems = [
  { text: "Biryani", link: "/biryani", image: "Biryani.jpg" },
  { text: "Pizza", link: "/pizza", image: "Pizza.jpg" },
  { text: "Burger", link: "/burger", image: "Burger.jpg" },
  { text: "Sandwich", link: "/sandwich", image: "Sandwich.jpg" },
  { text: "Ice Cream", link: "/icecream", image: "IceCream.jpg" },
  { text: "Pasta", link: "/pasta", image: "Pasta.jpg" },
  { text: "Dosa", link: "/dosa", image: "Dosa.jpg" },
  { text: "Vada Pao", link: "/vada", image: "Vada.jpg" },
];

const cardData = [
  {
    id: 3,
    imageSrc: "Kfc.jpg",
    altText: "KFC",
    captionText: "Chicken so yumm",
    overlayText: "KFC",
  },
  {
    id: 2,
    imageSrc: "Starbucks.jpg",
    altText: "Starbucks",
    captionText: "Coffee anytime!",
    overlayText: "Starbucks",
  },
  {
    id: 1,
    imageSrc: "Mcdonalds.jpg",
    altText: "MCD",
    captionText: "Burgerrrrr",
    overlayText: "McDonalds",
  },
  {
    id: 4,
    imageSrc: "Baskin.jpg",
    altText: "BR",
    captionText: "Ice creammm",
    overlayText: "Baskin Robbins",
  },
  {
    id: 5,
    imageSrc: "Haldiram.jpg",
    altText: "Haldiram",
    captionText: "Indian Masala",
    overlayText: "Haldirams",
  },
  {
    id: 6,
    imageSrc: "Cake.jpg",
    altText: "Cake",
    captionText: "Cakes & pastries",
    overlayText: "Monginis",
  },
  {
    id: 7,
    imageSrc: "Dosa.jpg",
    altText: "Dosa",
    captionText: "Dosa, idli",
    overlayText: "South Palace",
  },
  {
    id: 8,
    imageSrc: "Rolls.jpg",
    altText: "Rolls",
    captionText: "Rolls and Wraps",
    overlayText: "Roll King",
  },
  {
    id: 9,
    imageSrc: "Sweets.jpg",
    altText: "Sweets",
    captionText: "Kuch meetha ho jaye",
    overlayText: "Mithayi Ghar",
  },
  {
    id: 10,
    imageSrc: "Vada.jpg",
    altText: "Pav",
    captionText: "Vada pav",
    overlayText: "Mumbai Feels",
  },
  {
    id: 11,
    imageSrc: "Samosa.jpg",
    altText: "Samosa",
    captionText: "Chatpata",
    overlayText: "Chatpata Ghar",
  },
  {
    id: 12,
    imageSrc: "Chole.jpg",
    altText: "Chole",
    captionText: "Chole Bhature",
    overlayText: "Punjabi Restro",
  },
];

function Home() {
  const chunkedCardData = [];
  for (let i = 0; i < cardData.length; i += 4) {
    chunkedCardData.push(cardData.slice(i, i + 4));
  }

  return (
    <div>
      <ScrambledText>Welcome to Ziggy</ScrambledText>
      <h3 className="ziggy-subheading">Food delivery in 10 mins!</h3>

      <CircularGallery
        items={menuItems}
        bend={3}
        textColor="#333"
        borderRadius={0.05}
        font="bold 24px Arial"
      />

      <hr />
      <ScrambledText className="ziggy-heading">
        What's on your mind?
      </ScrambledText>

      <div className="scrollable-circles">
        {foodItems.map((item, index) => (
          <div key={index} className="circle-item">
            <img src={item.image} alt={item.text} className="circle-image" />
            <p className="circle-label">{item.text}</p>
          </div>
        ))}
      </div>

      <hr />
      <ScrambledText className="ziggy-heading">Top Restaurants</ScrambledText>

      {chunkedCardData.map((row, rowIndex) => (
        <div
          key={rowIndex}
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "40px",
            gap: "60px",
          }}
        >
          {row.map((card, index) => (
            <Link
              key={`${rowIndex}-${index}`}
              to={`/restaurant/${card.id}`}
              style={{ textDecoration: "none" }}
            >
              <TiltedCard
                imageSrc={card.imageSrc}
                altText={card.altText}
                captionText={card.captionText}
                containerHeight="200px"
                containerWidth="200px"
                imageHeight="200px"
                imageWidth="200px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">{card.overlayText}</p>
                }
              />
            </Link>
          ))}
        </div>
      ))}

      <div className="near-me-section">
        <div className="near-me-heading">Popular Categories Near You</div>
        <div className="near-me-grid">
          {[
            "Chinese Restaurant Near Me",
            "Korean Restaurant Near Me",
            "Punjabi Restaurant Near Me",
            "South Indian Restaurant Near Me",
            "North Indian Restaurant Near Me",
            "Italian Restaurant Near Me",
            "Indian Restaurant Near Me",
            "Seafood Restaurant Near Me",
            "Andhra Restaurant Near Me",
            "Kerala Restaurant Near Me",
            "Bengali Restaurant Near Me",
            "Biryani Restaurant Near Me",
          ].map((text, index) => (
            <div key={index} className="near-me-item">
              {text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
