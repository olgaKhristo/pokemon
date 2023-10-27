
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ToDo from './components/ToDo';



function App() {

  const [data, setData] = useState();
  const [name, setName] = useState();
  const [number, setNumber] = useState(1);
 
 


URL = 'https://pokeapi.co/api/v2/pokemon/'+number+'/';
  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res.data);
      setData(res.data);
      setName(res.data.name);
    }).catch((err) => {
      console.log(err);
    })

  }, [URL]);
  return (
    <div className="App">
     <h1>Pokemon Love</h1>
     <input type={"number"} onChange={(e)=>{setNumber(e.target.value)}}/>
      <button>Show</button>
      <h2>Name: {name}</h2>
      <img src={data?data.sprites.other.dream_world.front_default:"<p>Loading</p>"} alt="pokemon" />
      <p> My abilities: </p>      
        {data ? data.abilities.map((value,key) => {
          return (
            <div key={key}>
            {value.ability.name}
            </div>
          )
          

        }) : ""}

       <ToDo/>

    </div>
  );
}

export default App;
