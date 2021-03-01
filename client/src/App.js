import React, { useEffect } from 'react';
import Home from './components/Home';
import 'react-bootstrap'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/Contact/About';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Hub from './components/Hub/Hub';
import { ActionCreators } from './redux/action/profile'
import { useDispatch } from 'react-redux'
import Equipment from './components/Equipment/Equipment';


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('/api/users/current')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.error){
        console.log('no user')
      }else{
        dispatch(ActionCreators.login(data))
      }
    })
  },[dispatch])

  return (
    <>
    
    
      <Switch>
      
        <Route exact path='/'  component={Home} />
        <Route  path="/about" component={About} />
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login} />
        <Route exact path="/hub" component={Hub} />
        <Route exact path="/equipment" component={Equipment} />
      </Switch>
    


    
    </>
  );
}

export default App;
