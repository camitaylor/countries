import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountriesListView from '../views/CountriesListView/CountriesListView';
import CountriesDetailsView from '../views/CountriesDetailsView/CountriesDetailsView';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={CountriesListView} />
        <Route path="/details" component={CountriesDetailsView} />
      </Switch>
  </BrowserRouter>
  )
}

export default Router;