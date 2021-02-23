import './App.css';
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import {
  ArtistList,
  Home,
  LandingPage,
  Children,
  Artists,
  Songs,
  DetailArtist,
  ProfilePage
} from './pages'
import { useSelector } from 'react-redux';

function App() {
  const { isLogin } = useSelector(state => state.userReducer)

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
          <Route path="/user/:access_token/:refresh_token" >
            <ProfilePage />
          </Route>
          <Route exact path="/profile" >
           { isLogin ? <ProfilePage />: <Redirect to="/home" />}
          </Route>
          <Route exact path="/artists" >
            <ArtistList />
          </Route>
          <Route exact path="/artist/:id">
            <DetailArtist />
          </Route>
          <Route exact path="/artists/:genre" >
            <Artists />
          </Route>
          <Route exact path="/songs/:genre" >
            <Songs />
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
