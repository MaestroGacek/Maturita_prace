import { BrowserRouter, Route, Routes, HashRouter, Switch } from "react-router-dom";
import './styl/App.css'; 
import Navigace from './componenty/Navigace';
import Home from './stranky/Home';


function App() {
  return (
    <div className='App'>
      <HashRouter basename='/'>
      <Navigace/>
      <Switch>
        <Route path="/" exact component={Home}></Route>
      </Switch>

      </HashRouter>
      </div>
    
  
  );
}

export default App;
