var React = require('react');
var Clock = require('Clock');

var Stopwatch = React.createClass({
    render: function () {
        return (
            <div>
                <Clock totalSeconds={129}/>
            </div>
        );
    }
});

module.exports = Stopwatch;