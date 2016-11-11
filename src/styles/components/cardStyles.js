const React = require('react-native');


module.exports = React.StyleSheet.create({
    containerStyle: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10
    },
    headerContentStyle: {
        flexDirection: 'column',
        maxWidth: 250,
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontWeight: '500',
        color: '#890120',
        fontSize: 15
    },  
    thumbnailStyle: {
        height: 70,
        width: 50,
        borderRadius: 8
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    imageStyle: {
        height: 475,
        flex: 1,
        width: null,
        borderRadius: 50
    },
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#3EDA31',
        borderColor: '#298622',
        borderWidth: 1,
        borderRadius: 5,
        marginLeft: 5,
        marginRight: 5
    },
    buttonTextStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
});
