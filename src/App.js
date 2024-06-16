// In this project i am using the movie db api and it is not working without vpn or without dns setting go to the chorome setting > search
// dns > select security > go on select dns provider > choose cloudflare(1.1.1.1)
import './App.css';
import {BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Header from './component/header/Header';
import Home from './pages/home/home';
import MovieList from './component/movieList/movieList';
import Movie from './pages/movieDetail/movie';
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path='movie/:id' element={<Movie/>}></Route>
          <Route path='movies/:type' element={<MovieList/>}></Route>
          <Route path='/*' element={<h1>Error page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
