import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom';
import Owner from './Components/Owner';
import User from './Components/User';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Owner" component={Owner}/>
        <Route path="/User" component={User} />
        <Route path="/Home" component={Home} />
        <Redirect to='/Home' />
      </Switch>
    </div>
  );
}

export default App;
