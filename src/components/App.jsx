import React from "react";
import emojis from "../emojipedia";
import Card from "./Card";

const meanings = emojis.map(emoji => emoji.meaning.substring(0, 100));

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        { emojis.map(emoji => (
            <Card
            key={ emoji.id }
            id={ emoji.id }
            img={ emoji.img }
            name={ emoji.name }
            meaning={ emoji.meaning }
            />
          ))}
        { console.log(meanings) }
      </dl>
    </div>
  );
}

export default App;
