import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CountriesListView from '../views/CountriesListView/CountriesListView';
import CountriesDetailsView from '../views/CountriesDetailsView/CountriesDetailsView';

const Router = ({ searchInput, setSearchInput }) => (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact >
          <CountriesListView searchInput={searchInput} setSearchInput={setSearchInput} />
        </Route>
        <Route path="/details" >
          <CountriesDetailsView />
        </Route>
      </Switch>
  </BrowserRouter>
);

export default Router;