import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, ImageBackground, TextInput} from 'react-native';
import {IMAGES, FONTS, COLORS} from '../../constants';
import OutLineButton from '../../components/OutLineButton';
import {useDispatch,useSelector} from 'react-redux';
import {login, hideAuthError} from '../../redux/actions';

function Login() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const authError = useSelector(state => state.authError);
  const loginHandler = () => {
    dispatch(login(username, password));
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(hideAuthError())
    }, 5000)
  }, [authError])
  return (
    <View style={styles.container}>
      <ImageBackground
        source={IMAGES.background}
        resizeMode="cover"
        style={styles.image}>
        <View>
          <Text style={styles.label}>Username</Text>
          <TextInput
            style={styles.input}
            onChangeText={setUsername}
            value={username}
          />
        </View>
        <View>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </View>
        {authError && (
          <View style={styles.authErrorContainer}>
            <Text style={styles.authErrorMessage}>{authError}</Text>
          </View>
        )}
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
    ...FONTS.h4
  },
  authErrorContainer: {
    backgroundColor: COLORS.alert_color,
    margin: 12,
    padding: 8,
    borderRadius: 5
  },
  authErrorMessage: {

  }
});

export default Login;
