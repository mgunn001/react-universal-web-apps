import React from 'react';
import {IndexLink} from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <header className="app-header">
                <h1 className="title blackbackground">
                    <IndexLink to={this.props.root}>My Sample App</IndexLink>
                </h1>


            </header>
        );
    }
}
