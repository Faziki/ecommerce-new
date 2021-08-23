
//Dependencies
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { checkUserSession } from './redux/user/user.actions';
//HOC
import WithAuth from './hoc/withAuth';
//Layouts
import MainLayout from './layouts/MainLayout';

// Page imports
import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Recovery from './pages/Recovery';
import './App.scss';


const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
          <MainLayout >
            <Homepage />
          </MainLayout>
        )} />
        <Route path="/registration"
          render={() => (
            <MainLayout>
              <Registration />
            </MainLayout>
          )} />
        <Route path="/login"
          render={() => (
            <MainLayout>
              <Login />
            </MainLayout>
          )} />
        <Route path="/recovery" render={() => (
          <MainLayout>
            <Recovery />
          </MainLayout>
        )} />
        <Route path="/dashboard" render={() => (
          <WithAuth>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </WithAuth>
        )} />
      </Switch>
    </div>
  );

}

export default App;