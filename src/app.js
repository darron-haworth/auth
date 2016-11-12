import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    state = { loggedIn: null }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDYvfp4yCNxiyF-39mPrAC0fqdRkOTaLvU',
            authDomain: 'udemy-rn-auth.firebaseapp.com',
            databaseURL: 'https://udemy-rn-auth.firebaseio.com',
            storageBucket: 'udemy-rn-auth.appspot.com',
            messagingSenderId: '454126433225'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
            return (
                <Button onPress={() => firebase.auth().signOut()} >Log Out!</Button>
                );
            case false:
            return (<LoginForm />);
            default:
                return (
                    <View 
                        style={{ flex: 1, alignItems: 'center', alignSelf: 'center' }}
                    >
                    <Spinner 
                        style={{ alignItems: 'center', alignSelf: 'center' }}
                    /></View>);
        }
    }
        
    
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;
