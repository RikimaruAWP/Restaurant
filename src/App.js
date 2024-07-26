import 'bootstrap/dist/css/bootstrap.min.css';
import { RestaurantList } from './components/RestaurantList';
import { RestaurantCreate } from './components/RestaurantCreate';
import { RestaurantDetail } from './components/RestaurantDetail';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Restaurant Reviews</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to = '/list-restaurants' className = "nav-link" >Home</Link>
              </li>
              <li className="nav-item">
                <Link to = '/create-restaurants' className="nav-link">Create Restaurant</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path='/list-restaurants' element={<RestaurantList />} />
        <Route path='/create-restaurants' element={<RestaurantCreate />} />
        <Route path='/detail-restaurants/:id' element={<RestaurantDetail/>}></Route>
      </Routes>

  </Router>

  );
}

export default App;
