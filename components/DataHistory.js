import React from 'react';
import { FlatList, View, Text, StyleSheet, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { FONTS } from '../constants';

const { width } = Dimensions.get('window')

const Item = ({ number, times }) => (
    <View style={styles.itemContainer}>
        <View style={styles.itemDataContainer}>
            <Text style={styles.itemDataText}>{number}</Text>
            <Text style={styles.itemDataText}>{times}</Text>
        </View>
        <View style={{ flex: 1, height: 1, backgroundColor: 'black', margin: 10 }} />
    </View>
)

function DataHistory() {
    const entries = useSelector(state => state.entries);
    const renderItem = ({ item }) => (
        <Item number={item.number} times={item.times} />
    )
    return (
        <View style={styles.container}>
            <FlatList
                data={entries}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    itemContainer: {
        flex: 1
    },
    itemDataContainer: {
        flex: 1,
        width: width * 0.8,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    itemDataText: {
        ...FONTS.h3
    }
})

export default DataHistory;