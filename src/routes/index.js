//TODO: implement react router here and make routing for all of pages (home, mentors, mentee)
import React from "react";
import Home from '../pages/Home';
import Mentee from '../pages/Mentee';
import Mentors from '../pages/Mentors';
import {
    Switch,
    Route,
} from "react-router-dom";

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path="/dd">
                    <Home />
                </Route>
                <Route path="/mentee">
                    <Mentee />
                </Route>
                <Route path="/mentors">
                    <Mentors />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;
