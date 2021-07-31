import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import { FONTS, IMAGES } from '../../constants';

function Splash(){
    return (
        <View style={styles.container}>
            <ImageBackground
                source={IMAGES.background}
                style={styles.image}
                resizeMode="cover"
            >
                <Text style={styles.splashText}>FILTREE</Text>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    splashText: {
        ...FONTS.h1,
        fontSize: 36,
        color: '#FFFFFF'
    }
})

export default Splash;