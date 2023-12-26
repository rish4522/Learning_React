import React from "react";

function Card(props) {
  return (
    <div className='list-item'>
      <img src={props.image} alt='Food Image'></img>
      <li>{props.name}</li>
    </div>
  );
}

function FoodItems() {
    return <ul className='favList'>
      <Card name = "Pizza" image = "https://e0.pxfuel.com/wallpapers/389/311/desktop-wallpaper-food-graphy-pizza.jpg" />
      <Card name = "Soya Chaap" image = "https://wallpapercave.com/wp/wp11934989.jpg" />
      <Card name = "Pani Puri" image = "https://t3.ftcdn.net/jpg/04/94/92/18/360_F_494921881_UCVG7kgihpMUbbDC5VxuufeI7B5TQBr0.jpg" />
  </ul>
}

export default FoodItems;