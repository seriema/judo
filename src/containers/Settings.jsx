import React, { Component } from 'react';
import { Button, Collapse, CardBody, Card } from 'reactstrap';
import settings from '../settings.svg';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
        <div>
            <Button color="secondary" size="sm" onClick={this.toggle} style={{ marginBottom: '1rem' }}>
                <img src={settings} alt='Open settings menu' width='14px' height='14px' style={{ marginRight: '0.1rem' }} />
                Settings
            </Button>
            <Collapse isOpen={this.state.collapse} style={{ marginBottom: '1rem' }}>
                <Card>
                    <CardBody>
                        {this.props.children}
                    </CardBody>
                </Card>
            </Collapse>
        </div>
    );
  }
}

export default Settings;
