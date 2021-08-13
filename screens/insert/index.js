import React, {useState, useCallback} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useFocusEffect } from '@react-navigation/native';
import {View, Text, StyleSheet, ImageBackground, TextInput} from 'react-native';
import {COLORS, FONTS, IMAGES} from '../../constants';
import {addEntry} from '../../redux/actions';
import {useDispatch} from 'react-redux';
import {getEntries} from '../../redux/actions';

import FillButton from '../../components/FillButton';
import DataHistory from '../../components/DataHistory';

function Insert() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(null);
  const [times, setTimes] = useState(null);

  const addHandler = () => {
    dispatch(addEntry(number, times));
    setNumber(null);
    setTimes(null);
  };

  useFocusEffect(useCallback(() => {
    dispatch(getEntries())
  }, []))

  return (
      <ImageBackground
        source={IMAGES.background}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.label}>Number</Text>
            <TextInput
              style={styles.input}
              onChangeText={setNumber}
              value={number}
              keyboardType="numeric"
            />
          </View>

          <View>
            <Text style={styles.label}>Timer</Text>
            <TextInput
              style={styles.input}
              onChangeText={setTimes}
              value={times}
              keyboardType="numeric"
            />
          </View>
        </View>
        <FillButton text="Add" onPress={addHandler} />
        <DataHistory />
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  },
  label: {
    margin: 12,
    ...FONTS.h5,
    color: COLORS.textColor,
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
    ...FONTS.h3,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
  },
});

export default Insert;
