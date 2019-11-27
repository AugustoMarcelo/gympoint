import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Students from '../pages/Students';
import ManageStudents from '../pages/ManageStudents';
import ManagePlans from '../pages/ManagePlans';
import ManageRegistrations from '../pages/ManageRegistrations';
import Registrations from '../pages/Registrations';
import Plans from '../pages/Plans';
import HelpOrders from '../pages/HelpOrders';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route
        path="/students/create"
        exact
        component={ManageStudents}
        isPrivate
      />
      <Route
        path="/students/:id/edit"
        exact
        component={ManageStudents}
        isPrivate
      />
      <Route path="/students" component={Students} isPrivate />
      <Route
        path="/registrations/:id/edit"
        component={ManageRegistrations}
        isPrivate
      />
      <Route
        path="/registrations/create"
        component={ManageRegistrations}
        isPrivate
      />
      <Route path="/registrations" component={Registrations} isPrivate />
      <Route path="/plans/:id/edit" exact component={ManagePlans} isPrivate />
      <Route path="/plans/create" exact component={ManagePlans} isPrivate />
      <Route path="/plans" component={Plans} isPrivate />
      <Route path="/help-orders" component={HelpOrders} isPrivate />
    </Switch>
  );
}
