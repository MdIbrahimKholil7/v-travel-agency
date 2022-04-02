import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Places from './components/places/Places';

function App() {
  return (
    <div className="App">
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Places/>
    </div>
  );
}

export default App;
