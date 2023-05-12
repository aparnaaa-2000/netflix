
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Component/header/Header'
import Home from './Pages/Home/Home';
import MovieList from './Component/Movielist/Movielist';
import Movie from './Component/Movie/Movie';
import Searchdata from './Component/Searchdata/Searchdata';



function App() {
  return (
    <div className='App'>
      <Router>
        <header/>
        <Routes>
          <Route path='/header' element={<Header/>}/>
          <Route path='/' element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='/movies/:type' element={<MovieList/>}></Route>
          <Route path='errorpage' element={<h1>Error page</h1>}></Route>
          <Route path='/result' element={<Searchdata/>}/>
        </Routes>
      </Router>

    </div>
    
  );
}

export default App;
