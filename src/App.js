import React, { useState } from "react";
import "./styles.css";

var songListDb = {
  Rock: [
    {
      name: "Sweet child O' Mine",
      artist: "Guns N' Roses",
      rating: "9.5/10"
    },
    {
      name: "Stairway to Heaven",
      artist: "Led Zeppelin",
      rating: "9/10"
    },
    {
      name: "It's my life",
      artist: "Bon Jovi",
      rating: "8/10"
    }
  ],

  Metal: [
    {
      name: "Welcome to the jungle",
      artist: "Guns N' Roses",
      rating: "9.5/10"
    },

    {
      name: "Choup sey",
      artist: "System of a Down",
      rating: "9/10"
    },
    {
      name: "unforgiven",
      artist: "Metallica",
      rating: "8.5/10"
    }
  ],

  Alternative: [
    {
      name: "Smells like teen spirit",
      artist: "Nirvana",
      rating: "9.5/10"
    },

    {
      name: "Radioactive",
      artist: "Imagine Dragons",
      rating: "9/10"
    },
    {
      name: "Everlong",
      artist: "FooFighters",
      rating: "8.5/10"
    }
  ]
};

var songDb = Object.keys(songListDb);

export default function App() {
  var [selectedGenre, setSelectedGenre] = useState("Rock");

  function buttonClickHandler(genre) {
    setSelectedGenre(genre);
  }

  return (
    <div className="App">
      <h1>Music App</h1>
      <h2>Select a genre</h2>
      <div>
        {songDb.map(function (genre) {
          return (
            <button key={genre} onClick={() => buttonClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>

      <hr />

      <div className="section">
        <ul>
          {songListDb[selectedGenre].map(function (song) {
            return (
              <li className="list" key={song.name}>
                <div className="name">{song.name}</div>
                <div style={{ fontStyle: "italic" }}>{song.artist}</div>
                <div>{song.rating}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
