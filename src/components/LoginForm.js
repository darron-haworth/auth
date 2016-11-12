import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };

    onButtonPress() {
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({ error: 'Authentication Failed' });
                    });
            });
    }

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
                <Text style={styles.errorTextStyle}>{this.state.error}</Text>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Log In
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;
