import React from 'react'
 import PropTypes from 'prop-types';

const HideableComponent = (WrappedComponent) =>
    class Hide extends React.Component {
        render() {
            return this.props.show ? <WrappedComponent
                {...this.state}
                {...this.props}
            /> : null;
        }
    };

HideableComponent.propTypes = {
    // Required
    WrappedComponent: PropTypes.element.isRequired
};

export default HideableComponent;
