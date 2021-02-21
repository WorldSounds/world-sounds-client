import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import {
  ArtistList,
  Home,
  LandingPage,
  Children,
  PLaylistList
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
          <Route exact path="/playlists" >
            <PLaylistList />
          </Route>
          <Route path="/:children">
            <Children/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
