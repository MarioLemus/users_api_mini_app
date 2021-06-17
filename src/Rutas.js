import {
        BrowserRouter as Router,
        Switch,
        Route
      } from "react-router-dom";

import Home from "./Home"
import UserDetails from './UserDetails';

const Rutas = () => {

        return (
                <Router>
                        <Switch>
                                <Route exact path='/'>
                                        <Home/>
                                </Route>
                                <Route exact path={ `/user/:id_param` }>
                                        <UserDetails />
                                </Route>
                        </Switch>
                </Router>
        )
}

export default Rutas;