var React = require("react");
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Switch = ReactRouter.Switch;
var Nav = require('./nav');
var Home = require('./Home');
var Battle = require('./Battle');
var Popular = require('./Popular.js');
var Result = require('./Result.js');


class App extends React.Component{
  render(){
    return (
      <Router>
        <div className='container'>
          <Nav />

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/battle' component={Battle} />
            <Route path='/battle/results' component={Result} />
            <Route path='/popular' component={Popular} />
            <Route render={function () {
              return <p>Not found the page</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

module.exports = App;
