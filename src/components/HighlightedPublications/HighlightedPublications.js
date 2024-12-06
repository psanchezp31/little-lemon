import greekSalad from "../../images/greek salad.jpg";
import bruchetta from "../../images/bruchetta.svg";
import lemonDessert from "../../images/lemon dessert.jpg";
import Card from "../Card/Card";
import "./highlighted-publications.scss";

const HighlightedPublications = () => {
  const cardsContent = [
    {
      image: greekSalad,
      title: "Greek Salad",
      price: "$12.99",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reiciendis culpa, ducimus unde facilis incidunt aut dolores odio excepturi iure.",
      buttonText: "Order a delivery",
    },
    {
      image: bruchetta,
      title: "Bruchetta",
      price: "$5.99",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reiciendis culpa, ducimus unde facilis incidunt aut dolores odio excepturi iure.",
      buttonText: "Order a delivery",
    },
    {
      image: lemonDessert,
      title: "Lemon Dessert",
      price: "$5.00",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium reiciendis culpa, ducimus unde facilis incidunt aut dolores odio excepturi iure.",
      buttonText: "Order a delivery",
    },
  ];

  return (
    <>
      <div className="header">
        <div className="title">This Week Specials</div>
        <button>Menu</button>
        <div className="cards">
          {cardsContent.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </div>
    </>
  );
};

export default HighlightedPublications;
