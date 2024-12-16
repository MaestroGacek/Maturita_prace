import { BrowserRouter, Route, Routes, HashRouter, Switch } from "react-router-dom";
import './styl/App.css'; 
import Navigace from './componenty/Navigace';
import Home from './stranky/Home';
import Jidlo from './componenty/Jidlo';
import Produkty from './stranky/Produkty';


function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
      <Navigace/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/menu" exact component={Produkty}></Route>
      </Switch>
      <Jidlo/>
      </HashRouter>
      </div>
    
  
  );
}

export default App;
