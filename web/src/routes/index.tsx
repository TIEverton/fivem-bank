import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Deposit } from '../pages/Deposit';
import { Login } from '../pages/Login';
import { DashboardLayout } from '../pages/layout/Dashboard';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <DashboardLayout>
        <Route path="/home" exact component={Home} />
        <Route path="/deposit" exact component={Deposit} />
      </DashboardLayout>
    </Switch>
  );
}