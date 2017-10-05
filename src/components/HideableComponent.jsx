import React from 'react'

const HideableComponent = (WrappedComponent) =>
    class Hide extends React.Component {
        render() {
            return this.props.show ? <WrappedComponent
                {...this.state}
                {...this.props}
            /> : null;
        }
    };

export default HideableComponent;
