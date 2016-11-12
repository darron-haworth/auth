import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { text: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        onChangeText={text => this.setState({ text })}
                        value={this.state.text}
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
