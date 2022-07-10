import PropTypes from 'prop-types';
import { Component } from 'react';

class Section extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.array.isRequired,
    };

    render() {
        return (
        <div className="container">
            <h2>{this.props.title}</h2>
            {this.props.children}
        </div>
        );
    }
}

export default Section;