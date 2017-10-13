'use strict';
var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function () {
        return (
            <div>
                <h1>Oops!! Page Not Found</h1>
                <p>Sorry!! page not found, Please go back to home screen</p>
                <Link to="app">Back to home</Link>
            </div>
        );
    }
});
module.exports = NotFoundPage;
