import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  ArtistList,
  Home,
  LandingPage
} from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/artists" >
            <ArtistList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
