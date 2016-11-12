import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '' };

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        onChangeText={text => this.setState({ email: text })}
                        value={this.state.email}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        secureTextEntry
                        placeholder='password'
                        onChangeText={text => this.setState({ password: text })}
                        value={this.state.password}
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
