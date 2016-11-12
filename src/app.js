import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDYvfp4yCNxiyF-39mPrAC0fqdRkOTaLvU',
            authDomain: 'udemy-rn-auth.firebaseapp.com',
            databaseURL: 'https://udemy-rn-auth.firebaseio.com',
            storageBucket: 'udemy-rn-auth.appspot.com',
            messagingSenderId: '454126433225'
        });

        firebase.auth().onAuthStateChanged((user) => {

        });
    }
    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                <LoginForm />
            </View>
        );
    }
}

export default App;
