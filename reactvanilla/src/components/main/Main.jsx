import React from 'react';
import {Switch, Route} from 'react-router-dom';
import styles from './main.scss';
import Aside from '../aside/Aside';
import Description from '../description/Description';
import Contacts from '../contacts/Contacts';
import Products from '../products/Products';
import Naujienos from '../naujienos/Naujienos';

// const Main = () = > ()

function Main() {
    return (
        <main className="col-10">
            <Switch>
                <Route exact path='/' component={Description}/>
                <Route path ='/aside' component={Aside}/>
                <Route path ='/contacts' component={Contacts}/>
                <Route path ='/products' component={Products}/>
                <Route path ='/naujienos' component={Naujienos}/>
            </Switch>
        </main>
    );
}

export default Main;