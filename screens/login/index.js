import React from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput} from 'react-native';
import {IMAGES, FONTS, COLORS} from '../../constants';
import OutLineButton from '../../components/OutLineButton';
import {useDispatch} from 'react-redux';

function Login() {
  const dispatch = useDispatch();
  const loginHandler = () => {
    dispatch({type: 'SET_AUTHENTICATED', payload: true});
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.background}
        resizeMode="cover"
        style={styles.image}>
        <View>
          <Text style={styles.label}>Username</Text>
          <TextInput style={styles.input} />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.buttonContainer}>
          <OutLineButton text="Login >" onPress={loginHandler} />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    margin: 12,
    ...FONTS.h5,
    color: COLORS.textColor,
  },
  input: {
    height: 40,
    margin: 12,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: COLORS.borderColor,
  },
});

export default Login;
