import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to our pizza Home, where we believe
         that pizza is more than just a meal—it's a p
         art of life's greatest moments. At our establishment, 
         we strive to create an unforgettable experience for our 
         guests by serving mouthwatering pizzas made with the finest 
         ingredients and crafted with love. Each part of our 
         pizza-making process is carefully executed, from hand-tossing
          the dough to selecting the freshest toppings. We take pride 
          in our extensive menu, offering a wide variety of classic and 
          innovative flavors that cater to every palate. Whether you're 
          dining in with friends and family or ordering for delivery, 
          we guarantee that every part of your pizza journey will be filled with e
          xceptional taste, exceptional service, and exceptional memories. Come 
          and be a part of our pizza-loving community, and let us create a memorable 
          experience for you.
        </p>
      </div>
    </div>
  );
}

export default About;
