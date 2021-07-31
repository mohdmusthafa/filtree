import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TextInput,
  Dimensions,
  Share,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect } from '@react-navigation/core'; 
import { IMAGES, FONTS, COLORS } from '../../constants';
import FillButton from '../../components/FillButton';
import DataHistory from '../../components/DataHistory';
import { filterData, getEntries, flushData } from '../../redux/actions';
import DeleteButton from '../../components/DeleteButton';

const generateShareMessage = data => {
  let messageString = '';
  data.forEach(item => {
    messageString = messageString + `${item.number} - ${item.times} \n`;
  });
  return messageString;
};

const { width } = Dimensions.get('window');
function ViewData() {
  const dispatch = useDispatch();
  const { in_value, out_value, in_amount, out_amount } = useSelector(
    state => state.summary,
  );
  const entries = useSelector(state => state.entries);
  const [filter, setFilter] = useState(null);

  const filterHandler = (condition) => {
    dispatch(filterData(filter, condition));
    setFilter(null);
  };

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: generateShareMessage(entries),
      });
    } catch (err) {
      alert(err.message);
    }
  };

  const flushHandler = () => {
    dispatch(flushData())
  }

  
  useFocusEffect(useCallback(() => {
    dispatch(getEntries())
  }, []))

  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.background}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.inputContainer}>
          <View>
            <Text style={styles.label}>Filter</Text>
            <TextInput
              style={styles.input}
              onChangeText={setFilter}
              value={filter}
              keyboardType="numeric"
            />
          </View>
          <View style={styles.filterButtons}>
            <FillButton text="Check In" onPress={() => filterHandler('lte')} />
            <FillButton text="Check Out" onPress={() => filterHandler('gt')} />
          </View>

        </View>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryText}>{in_value} In</Text>
            <Text style={styles.summaryText}>{out_value} Out</Text>
          </View>
          <View style={[styles.summaryItem, { marginTop: 10 }]}>
            <Text style={[styles.summaryText, { color: COLORS.in_color }]}>
              ₹{in_amount}
            </Text>
            <Text style={[styles.summaryText, { color: COLORS.out_color }]}>
              ₹{out_amount}
            </Text>
          </View>
          <View style={styles.shareButtonContainer}>
            <FillButton text="Share" onPress={onShare} />
            <DeleteButton text="Flush" onPress={flushHandler} />
          </View>
        </View>
        <DataHistory />
      </ImageBackground>
    </View>
  );
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
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryItem: {
    width: width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  summaryText: {
    ...FONTS.h2,
  },
  shareButtonContainer: {
    marginTop: 10,
    width: width * 0.7,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  filterButtons: {
    width: width * 0.7,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

export default ViewData;
