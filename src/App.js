import Nav from './components/Nav'
import Home from './components/Home'
import About from './components/About'
import Shop from './components/Shop'
import PersonInfo from './components/PersonInfo'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
          <Switch> 
            <Route path="/about" component={About}/>
            <Route path="/shop/:id" exact component={PersonInfo}/>
            <Route path="/shop" exact component={Shop}/>
            <Route path="/"  component={Home}/>
          </Switch>
      </div>
    </Router> 
  );
}

export default App;
