var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Stopwatch = require('Stopwatch');
var Timer = require('Timer');

//load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');


ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="stopwatch" component={Stopwatch}/>
            <IndexRoute component={Timer}/>
        </Route>
    </Router>,
    document.getElementById('app')
);

