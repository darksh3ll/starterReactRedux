import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from "../screens/Home";
import NotFound from "../screens/NotFound";


class PublicRouter extends Component {
    render() {


        return (
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="*"component={NotFound}/>
              </Switch>
        );
    }
}

export default PublicRouter;
