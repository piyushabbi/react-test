'use strict';

var React = require('react');
var AuthorForm = require('./authorForm');

var ManageAuthorPage = React.createClass({
    getInitialState: function() {
        return {
            authorInfo: {
                id: '',
                firstName: '',
                lastName: ''
            }
        };
    },

    //Updating state that is bubbled up from child elements. This method is called on every keypress
    setAuthorState: function (event) {
        var inputField = event.target.name;
        var value = event.target.value;

        this.state.authorInfo[inputField] = value;  //set state of that field equal to the value passed

        return this.setState({
            authorInfo: this.state.authorInfo
        });
    },

    render: function() {
        return (
            <section className="container">
                <h1>Manage Author</h1>
                <AuthorForm
                    authorInfo={ this.state.authorInfo }
                    onChange={ this.setAuthorState } />
            </section>
        );
    }
});

module.exports = ManageAuthorPage;
