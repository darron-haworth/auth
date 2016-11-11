import React, { Component } from 'react';
import { Image, Linking, Text, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

const styles = require('../styles/components/cardStyles');

class BookDetail extends Component {
    purchasePressed(url) {
        Linking.openURL(url);
    }

    render() {
        const {
            id,
            authorPic,
            title,
            author,
            copyRightYear,
            coverImage,
            orderUrl,
            subTitle
        } = this.props.book;

        return (
            <Card>
                <CardSection>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image style={styles.thumbnailStyle} source={{ uri: authorPic }} />
                    </View>
                    <View style={styles.headerContentStyle}>
                        <Text style={styles.headerTextStyle}>{title}</Text>
                        <Text>{`${author} - ${copyRightYear}`}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Image style={styles.imageStyle} source={{ uri: coverImage }} />
                </CardSection>

                <CardSection>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontSize: 10, color: '#890120' }}>{subTitle}</Text>
                    </View>
                </CardSection>

                <CardSection>
                    <View style={{ flex: 1, alignItems: 'center' }}>
                        <Text style={{ fontWeight: '500', fontSize: 10, color: '#5D4B30' }}>
                            {`ISBN: ${id}`}
                        </Text>
                    </View>
                </CardSection>

                <CardSection>
                    <Button buttonText={'Buy Now'} onPress={() => this.purchasePressed(orderUrl)} />
                </CardSection>
            </Card>
        );
    }
}

export default BookDetail;
