import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));




//Header => header element with an h1 element that calls a prop "name" DONE


//About section => aside element with an image. the src of that image is the prop "image"
//body 
    //each post on a card with props
    //call the props to populate whats on the card
//article list => main element, .map() through the array to get the information of the posts to populate the cards
    // article => a child of article list. uses props.title etc to grab information from the array