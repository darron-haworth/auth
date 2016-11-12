import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Spinner, Input } from './common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false, errorColor: 'red' };

    onLoginPress() {
        this.setState({ error: '', loading: true });

        const { email, password } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this))
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginSuccess() {
        this.setState({ 
            email: '',
            password: '',
            errorColor: 'green', 
            error: 'Logged In!', 
            loading: false });
    }

    onLoginFail() {
        this.setState({ error: 'Authentication Failed', loading: false });
    }


    changeInputText(field, text) {
        if (text.slice(-1) === ' ') {
            this.refs.pwInput.focus();
        }

        if (field === 'email') {
            this.setState({ email: text.trim() });
        } else {
            this.setState({ password: text.trim() });
        }
    }

    renderButton() {
        if (this.state.loading) {
            return <Spinner />;
        }
        return (
            <Button onPress={this.onLoginPress.bind(this)}>
                Log In
                    </Button>
        );
    }


    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="user@gmail.com"
                        onChangeText={text => this.changeInputText('email', text)}
                        value={this.state.email}
                        onSubmitEditing={() => {
                            this.refs.pwInput.focus();
                        }}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Password"
                        secureTextEntry
                        placeholder='password'
                        onChangeText={text => this.changeInputText('password', text)}
                        value={this.state.password}
                    />
                </CardSection>

                <Text style={[styles.errorTextStyle, { color: this.state.errorColor }]}>{this.state.error}</Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
    }
};

export default LoginForm;
