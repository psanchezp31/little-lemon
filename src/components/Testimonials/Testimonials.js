import Slider from "react-slick";
import userAvatar from "../../images/user-avatar.png";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./testimonials.scss";

const Testimonials = () => {
  const testimonialsContent = [
    {
      avatar: userAvatar,
      name: "Sara Lopez",
      username: "saralopez20",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quidem sit officia cupiditate! Explicabo, quis totam. Delectus amet molestias facere.",
    },
    {
      avatar: userAvatar,
      name: "Sara Lopez",
      username: "saralopez20",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quidem sit officia cupiditate! Explicabo, quis totam. Delectus amet molestias facere.",
    },
    {
      avatar: userAvatar,
      name: "Sara Lopez",
      username: "saralopez20",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quidem sit officia cupiditate! Explicabo, quis totam. Delectus amet molestias facere.",
    },
    {
      avatar: userAvatar,
      name: "Sara Lopez",
      username: "saralopez20",
      testimonial:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis quidem sit officia cupiditate! Explicabo, quis totam. Delectus amet molestias facere.",
    },
  ];

  const slider = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="testimonials-wrapper">
      <div className="title">What our customers say!</div>
      <div className="cards">
        <Slider {...slider}>
          {testimonialsContent.map((card, index) => (
            <ReviewCard {...card} key={index + 1} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
