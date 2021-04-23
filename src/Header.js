import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <div className="column is-half is-offset-one-quarter">
                <h1 className="title">{this.props.text}</h1>
            </div>
        );
    }
}

export default Header;
