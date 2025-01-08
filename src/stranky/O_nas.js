import Pozadi from "../obrazky/Pozadi.jpeg";
import "../styl/O_nas.css";
function O_nas() {
  return (
    <div className="o_nas">
      <div
        className="o_nasTop"
        style={{ backgroundImage: `url(${Pozadi})` }}
      ></div>
      <h1>O nás</h1>  
      <div className="o_nasBottom">
        <p>
          Naši pekárnu najdete v srdci Libiše. Můžete nás navštívit osobně nebo si 
          objednat naše produkty online s doručením až k vám domů.
        </p>
        <h2>Naše hodnoty</h2>
        <ul>
          <li>🌾 Používáme pouze nejkvalitnější suroviny</li>
          <li>👐 Každá vánočka je pletena ručně s láskou</li>
          <li>📜 Dodržujeme tradiční postupy</li>
          <li>🤝 Zakládáme si na osobním přístupu k zákazníkům</li>
        </ul>

      </div>
    </div>
  );
}

export default O_nas;