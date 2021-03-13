import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import HeaderBar from './Shared/HeaderBar';
import Home from './Pages/Home';
import Error404 from './Shared/Error404';
import GlobalStyle from './Shared/GlobalStyle';
import ScrollToTop from './ScrollToTop';
import Book from './Pages/Book';

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <HeaderBar stickyHeader />
        <Switch>
          <Route exact path={`${process.env.PUBLIC_URL}`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/book`} component={Book} />
          <Route exact path={`${process.env.PUBLIC_URL}/vision-boarding`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/events`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/Life-balance-checker`} component={Home} />
          <Route exact path={`${process.env.PUBLIC_URL}/about`} component={Home} />
          <Route component={Error404} />
        </Switch>
      </Router>
      <GlobalStyle />
  </>
  );
}

export default App;
