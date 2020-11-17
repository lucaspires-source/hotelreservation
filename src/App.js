import React from 'react'
import {Switch,Route} from "react-router-dom";
import './App.css'
import Error from './pages/Error'
import Home from './pages/Home'
import SingleRoom from './pages/SingleRoom'
import Rooms from './pages/Rooms'
import NavBar from './components/Navbar'
const App = () => {
        return (
            <>
            <NavBar/>
                <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/rooms" component={Rooms}/>
                        <Route exact path="/rooms/:slug" component={SingleRoom}/>
                        <Route  component={Error}/>
                </Switch>
            </>
        )
    
}
export default App