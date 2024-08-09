import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const PalyerName = useRef();
  const [name,setName] = useState('');

  const handleClick = () =>
  {
    setName(PalyerName.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {name ?? 'Unkown Entity' }</h2>
      <p>
        <input type="text"  ref = {PalyerName}/>
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
