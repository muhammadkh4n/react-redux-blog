import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import routes from './routes';
import './app.less';

class App extends Component {
  renderRoutes() {
    return routes.map((route, key) => (
      <Route 
        key={key} 
        path={route.path} 
        render={props => <AppRoute route={route} props={props} />} 
        exact={route.exact}
      />
    ));
  }

  render() {
    return (
      <Router>
        <Switch>
          {this.renderRoutes()}
        </Switch>
      </Router>
    );
  }
}
export default App;

const AppRoute = ({ route, props }) => {
  const Layout = route.layout;
  const Component = route.component;

  if (Layout) return <Layout {...props}><Component {...props} /></Layout>;
  else return <Component {...props} />;
};