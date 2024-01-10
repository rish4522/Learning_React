import React from "react";

const items = [
  {
    name : "Pizza",
    image : "https://e0.pxfuel.com/wallpapers/389/311/desktop-wallpaper-food-graphy-pizza.jpg"
  },
  {
    name : "Soya Chaap",
    image : "https://wallpapercave.com/wp/wp11934989.jpg"
  },
  {
    name : "Pani Puri",
    image : "https://t3.ftcdn.net/jpg/04/94/92/18/360_F_494921881_UCVG7kgihpMUbbDC5VxuufeI7B5TQBr0.jpg"
  }
]

function Card(props) {
  return (
    <div className='list-item'>
      <img src={props.image} alt='Food Items'></img>
      <li>{props.name}</li>
    </div>
  );
}

function createCard(items) {
  return (
    <Card
      key = {items.name}
      image = {items.image}
      name = {items.name}
    />
  );
}

function FoodItems() {
    return <ul className='favList'>
      {items.map(createCard)}
  </ul>
}

export default FoodItems;