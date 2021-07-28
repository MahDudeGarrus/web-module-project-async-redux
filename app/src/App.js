import './App.css';
import FoodPicker from './components/FoodPicker';

function App() {
  return (
    <div className="App">
      <h1>Food Picker App</h1>
      <p>Don't know what you should eat for your next meal?</p>
      <p>Click the button below to reveal your food fortune!</p>
      <FoodPicker />
      
    </div>
  );
}

export default App;
