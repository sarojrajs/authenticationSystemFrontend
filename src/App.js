import './App.css';
import Login from './Login';
import Register from './Register';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/home'>
            <Home/>
          </Route>
          <Route path='/register'>
            <Register/>
          </Route>
          <Route path='/' exact>
            <Login/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
