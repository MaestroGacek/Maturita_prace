import { BrowserRouter, Route, Routes, HashRouter, Switch } from "react-router-dom";
import './styl/App.css'; 
import Navigace from './componenty/Navigace';
import Home from './stranky/Home';
import Spodek from './componenty/Spodek';
import Produkty from './stranky/Produkty';
import Kontakty from './stranky/Kontakty';
import O_nas from './stranky/O_nas';
import Login from './stranky/Login';
import Registrace from './stranky/FormRegistrace';
import ObjednavkaForm from './stranky/ObjednavkaForm';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className='App'>
        <HashRouter basename='/'>
          <Navigace/>
          <Switch>  
            <Route path="/" exact component={Home}></Route>
            <Route path="/menu" exact component={Produkty}></Route>
            <Route path="/about" exact component={O_nas}></Route>
            <Route path="/registrace" exact component={Registrace}></Route>
            <Route path="/login" exact component={Login}></Route>
            <Route path="/kontakty" exact component={Kontakty}></Route>
            <Route path="/objednavka" exact component={ObjednavkaForm}></Route>
          </Switch>
          <Spodek/>
        </HashRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
