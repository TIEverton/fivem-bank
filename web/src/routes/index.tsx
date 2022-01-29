import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Deposit } from '../pages/Deposit';

export function SystemRoutes() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/deposit" exact component={Deposit} />
      </Switch>
    </>
  );
}