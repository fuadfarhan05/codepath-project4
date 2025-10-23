import logo from './logo.svg';
import { useState } from 'react';
import BanList from './banlist';
import './App.css';

function App() {
  const [art, setArt] = useState(null);



  function handleSubmit() {
    fetch("https://api.harvardartmuseums.org/object?apikey=36f711d6-2d7b-4866-8668-feb4aa7a50e7&size=50")
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const randomNum = Math.floor(Math.random() * data.records.length);
      const record = data.records[randomNum];
      setArt({
        title: record.title,
        image: record.primaryimageurl,
        century: record.century,
        technique: record.technique



      });
    });
  };

  const handleBan = (value) => {
    console.log(value);

  };

  return (
    <div className="App">
      <header className="App-header">
        <BanList/>
        <h1>Discover Harvard Museum Art</h1>
        <button className="discover" onClick={handleSubmit}>Discover</button>

        <div>
        {art && (
          <div className="art-card">
            <img src={art.image} alt={art.title} width="300" />
            <h2>{art.title}</h2>
            <button className="fact-style2" onClick={() => handleBan(art.century)}><strong>Century:</strong> {art.century}</button>
            <button className="fact-style"  onClick={() => handleBan(art.technique)}><strong>Technique:</strong> {art.technique}</button>
            



          </div>
        )}
        </div>
      </header>
    </div>
  );
}

export default App;
