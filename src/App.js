import { BrowserRouter, Route, Routes, HashRouter } from "react-router-dom";
import './App.css'; 
import './Home.js';

function App() {
  return (
    <HashRouter basename='/'>
    <Routes>
        <Route index element={<Home/>} />
   
    </Routes>
    </HashRouter>
   
  );
}

export default App;
