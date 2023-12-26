import './App.css';
import Heading from './Heading';
import FoodItems from './FoodItems';
import Greetings from './Greetings';

function App() {
  return (
    <>
    <div className='main-container'>
      <Greetings />
      <Heading />
      <FoodItems />
    </div>
    </>
  );
}

export default App;
