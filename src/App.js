/*global swal*/

import React,{useState,useEffect} from 'react';
import logo from './logo.svg';
import loading from './loading.svg';
import './App.css';
import Sound from 'react-sound';
import Button from './Button';

const apiToken = 'BQAqdoRrt93qimthB-v5JrOn1LKaFiiECC4r_ps5fdRJVWqogBKQOmscjazi4wSrLVi5AqgQXFWAuvkh46SSRFTBhdg8pCGMEdf5__QLrxOT9LPJ07GiqfXkTVUwKgoY6M8HAyK5j1FiXXt_Xp_KMCqsy7XWwRn_nDufmd8TNA';

function shuffleArray(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = getRandomNumber(counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

/* Return a random number between 0 included and x excluded */
function getRandomNumber(x) {
  return Math.floor(Math.random() * x);
}

const App = () => {
  const [tracks,setTracks]=useState();
  const [songsLoaded,setLoaded]=useState(false);
  useEffect(()=>{
    fetch('https://api.spotify.com/v1/me/tracks',{
      method: 'GET',
      headers: {
        Authorization: 'Bearer '+apiToken,
      },
    })
      .then(response=>response.json())
      .then((data)=>{
        setTracks(data.items);
        console.log("Réponse reçue ! Voilà ce que j'ai reçu : ", data);
        setLoaded(true);
      });
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        {songsLoaded ?
          <img src={logo} className="App-logo" alt="logo"/>
        :<img src={loading} className="App-logo" alt="loading"/>}
        <h1 className="App-title">Bienvenue sur le Blindtest</h1>
      </header>
      <div className="App-images">
        <p>Titre de la première chanson : {tracks}</p>
      </div>
      <div className="App-buttons">
      </div>
    </div>
  );
}

export default App;
