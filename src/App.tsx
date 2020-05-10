import React from 'react';
import "./App.css";
import {Route, Switch} from 'react-router-dom';
import BooksPage from "./components/BooksPage/BooksPage";
import {Header} from './components/Header/Header';
import OrderPage from "./components/OrderPage/OrderPage";
import CartPage from "./components/CartPage/CartPage";

function App() {
    return (
        <div className="container">
            <Header/>
            <Switch>
                <Route exact path="/" render={() => <BooksPage/>}/>
                <Route path="/order" render={() => <OrderPage/>}/>
                <Route path="/cart" render={() => <CartPage/>}/>
                <Route path="*" render={() => <div>404</div>}/>
            </Switch>
        </div>
    );
}

export default App;
