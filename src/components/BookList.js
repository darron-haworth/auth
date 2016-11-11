import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import * as firebase from 'firebase';

import BookDetail from './BookDetail';

// Initialize Firebase
const firebaseConfig = {
    apiKey: 'AIzaSyBv8OifPeKdFsvsL5uRmRyz14apdku_RGA',
    authDomain: 'zenderbooks-e950f.firebaseapp.com',
    databaseURL: 'https://zenderbooks-e950f.firebaseio.com',
    storageBucket: 'zenderbooks-e950f.appspot.com',
    messagingSenderId: '105742931350'
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

class BookList extends Component {

    state = { books: [] };

    componentWillMount() {
        const rootRef = firebaseApp.database().ref();
        const itemsRef = rootRef.child('Books');

        itemsRef.once('value').then(
            (snapshot) => {
                this.mapListData(snapshot);
            }
        );
    }

    mapListData(snapshot) {
        this.setState({ books: snapshot.val() });
    }

    renderBooks() {
        return this.state.books.map(book =>
            <BookDetail key={book.id} book={book} />);
    }
    render() {
        return (
            <ScrollView>
                {this.renderBooks()}
            </ScrollView>
        );
    }
}

export default BookList;
