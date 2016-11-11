import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';



class App extends Component {
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDYvfp4yCNxiyF-39mPrAC0fqdRkOTaLvU',
            authDomain: 'udemy-rn-auth.firebaseapp.com',
            databaseURL: 'https://udemy-rn-auth.firebaseio.com',
            storageBucket: 'udemy-rn-auth.appspot.com',
            messagingSenderId: '454126433225'
        });
    }
    render() {
        return (
            <View>
                <Header headerText='Auth Header' />
                <Text>An App!</Text>
            </View>
        );
    }
}

export default App;
