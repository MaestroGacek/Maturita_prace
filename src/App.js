import { BrowserRouter, Route, Routes, HashRouter, Switch } from "react-router-dom";
import './styl/App.css'; 
import Navigace from './componenty/Navigace';
import Home from './stranky/Home';
import Jidlo from './componenty/Spodek';
import Produkty from './stranky/Produkty';
import Kontakty from './stranky/Kontakty';
import O_nas from './stranky/O_nas';


function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
      <Navigace/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/menu" exact component={Produkty}></Route>
        <Route path="/about" exact component={O_nas}></Route>
        <Route path="/kontakty" exact component={Kontakty}></Route>
      </Switch>
      <Jidlo/>
      </HashRouter>
      </div>
    
  
  );
}

export default App;
