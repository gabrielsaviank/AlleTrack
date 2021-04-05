// Imports and Libraries
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { SafeAreaView } from 'react-navigation';

// Core
const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  console.log("heeereee")

  return (
      <View style={styles.container}>
      <NavigationEvents
        onWillFocus={clearErrorMessage}
      />

      <AuthForm
        headerText="Sign Up for Tracker"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        text="Already have an account? Sign in instead!"
      />
    </View>
  );
};

// Deactivate Header
SignupScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

// Styling CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginBottom: 250,
  },
});

// Export
export default SignupScreen;
