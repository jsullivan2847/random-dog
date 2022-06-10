import {useState, useEffect} from 'react';
import Form from './components/Form';
import Dog from './components/Dog';
import './App.css';

function App() {
  const URL  = 'https://dog.ceo/api/breeds/image/random'
  const [dogState, setDogState] = useState(null);

  const getDog = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setDogState(data);
  }

  useEffect(() => {getDog()}, []);

  return (
    <div className="App">
      <Dog dog={dogState}/>
      <Form getDog={getDog}/>
    </div>
  );
}

export default App;
