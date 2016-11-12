import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = () => (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator hidesWhenStopped={false} />
        </View>
    );

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
