import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, Dimensions } from 'react-native';
import { IMAGES, FONTS, COLORS } from '../../constants';
import FillButton from '../../components/FillButton';
import DataHistory from '../../components/DataHistory';

const { width } = Dimensions.get('window');
function ViewData() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={IMAGES.background}
                resizeMode="cover"
                style={styles.image}
            >
                <View style={styles.inputContainer}>
                    <View>
                        <Text style={styles.label}>Filter</Text>
                        <TextInput
                            style={styles.input}
                        />
                    </View>
                    <FillButton text="Check" />
                </View>
                <View style={styles.summaryContainer}>
                    <View style={styles.summaryItem}>
                        <Text style={styles.summaryText}>73 In</Text>
                        <Text style={styles.summaryText}>34 Out</Text>
                    </View>
                    <View style={[styles.summaryItem, { marginTop: 10 }]}>
                        <Text style={[styles.summaryText, { color: COLORS.in_color }]}>₹17000</Text>
                        <Text style={[styles.summaryText, { color: COLORS.out_color }]}>₹38000</Text>
                    </View>
                    <View style={styles.shareButtonContainer}>
                        <FillButton text="Share" />
                    </View>
                </View>
                <DataHistory />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        alignItems: 'center',
    },
    label: {
        margin: 12,
        ...FONTS.h5,
        color: COLORS.textColor
    },
    input: {
        width: 150,
        height: 60,
        margin: 12,
        marginTop: 0,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: COLORS.borderColor,
        ...FONTS.h3
    },
    inputContainer: {
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    summaryContainer: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    summaryItem: {
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    summaryText: {
        ...FONTS.h2
    },
    shareButtonContainer: {
        marginTop: 10
    }
})

export default ViewData;