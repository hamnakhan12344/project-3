import React from "react";
import Carousel from "react-material-ui-carousel";

function CustomCarousel(props) {
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "assets/images/slide-3-surface.png",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      image: "assets/images/slide-3-surface.png",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "assets/images/slide-3-surface.png",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "assets/images/slide-3-surface.png",
    },
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      image: "assets/images/slide-3-surface.png",
    },
  ];

  return (
    <Carousel
      navButtonsAlwaysVisible
      indicators={false}
      animation="slide"
      duration={500}
      swipe
      navButtonsProps={{          // Change the colors and radius of the actual buttons. THIS STYLES BOTH BUTTONS
        style: {
            // backgroundColor: 'cornflowerblue',
            // borderRadius: 0
            width: 20,
            height: 20,
            top: '50%'
        }
    }} 
    >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props) {
  return (
    <img
      src={props.item.image}
      className="rounded-lg"
      style={{ width: "100%", objectFit: "contain" }}
      alt=""
    />
  );
}

export default CustomCarousel;
