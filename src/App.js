import './App.css';

function App() {
  return (
    <>
    <div className='main-container'>
      <h1 className="heading-1" draggable>My Favourite Foods</h1>
      <ul className='favList'>
        <div className='list-item'>
          <img src='https://e0.pxfuel.com/wallpapers/389/311/desktop-wallpaper-food-graphy-pizza.jpg' alt='Pizza'></img>
          <li>Pizza</li>
        </div>
        <div className='list-item'>
          <img src='https://wallpapercave.com/wp/wp11934989.jpg' alt='Soya Chaap'></img>
          <li>Soya Chaap</li>
        </div>
        <div className='list-item'>
          <img src='https://t3.ftcdn.net/jpg/04/94/92/18/360_F_494921881_UCVG7kgihpMUbbDC5VxuufeI7B5TQBr0.jpg' alt='Pani Puri'></img>
          <li>Pani Puri</li>
        </div> 
      </ul>
    </div>
    </>
  );
}

export default App;
