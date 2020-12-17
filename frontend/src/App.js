import './App.css';
import { Route, Switch,Redirect } from 'react-router-dom';
import Owner from './Components/Owner';
import User from './Components/User';
import Home from './Components/Home';
import CityRestaurants from './Components/CityRestaurants';
import Details from './Components/Details';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Home/user/CityRestaurants/Details" component={Details}/>
        <Route path="/Home/user/CityRestaurants" component={CityRestaurants}/>
        <Route path="/Home/Owner" component={Owner}/>
        <Route path="/Home/User" component={User} />
        <Route path="/Home" component={Home} />
        <Redirect to='/Home' />
      </Switch>
    </div>
  );
}

export default App;
