import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountriesListView from '../views/CountriesListView/CountriesListView';
import CountriesDetailsView from '../views/CountriesDetailsView/CountriesDetailsView';

const Router = ({ countriesData }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <CountriesListView countriesData={countriesData} />
        </Route>
        <Route path="/details" >
          <CountriesDetailsView countriesData={countriesData} />
        </Route>
      </Switch>
  </BrowserRouter>
  )
}

export default Router;