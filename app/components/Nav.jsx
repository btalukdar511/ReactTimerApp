var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text">
                            React Timer App
                        </li>
                        <li>
                            <IndexLink to="/Timer" activeClassName="active-class">
                                Timer
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/Stopwatch" activeClassName="active-class">
                                Stopwatch
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="top-bat-right">
                    <ul className="menu">
                        <li className="menu-text">Created by <a href="http://xCalifier.com">xCalifier</a></li>
                    </ul>
                </div>
            </div>
        );
    }
});

module.exports = Nav;