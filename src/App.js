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
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setLoginStatus } from './store/actions/userAction'

function App() {
  const dispatch = useDispatch()
  const { isLogin } = useSelector(state => state.userReducer)

  // useEffect(() => {
  //   if (localStorage.access_token) dispatch(setLoginStatus(true))
  // }, [localStorage.access_token])
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
          <Route path="/dashboard/:access_token/:refresh_token" >
            <Home />
          </Route>
          <Route exact path="/profile" >
           { (localStorage.access_token_local || localStorage.access_token ) ? <ProfilePage /> : <Redirect to="/home" />}
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
