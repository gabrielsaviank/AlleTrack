import React, {useContext} from 'react';
import { SafeAreaView } from 'react-navigation';
import { View, StyleSheet, Text } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import {Context} from '../context/AuthContext';

const SigninScreen = () => {
  const {state, signin, clearErrorMessage} = useContext(Context);

  //JSX
  return(
    <SafeAreaView forceInset={{top: 'always'}}>
      <View style={styles.container}>
        <NavigationEvents
          onWillFocus={clearErrorMessage}
        />
        <AuthForm
          headerText="Sign In to Your Account"
          errorMessage={state.errorMessage}
          onSubmit={signin}
          submitButtonText="Sign In"
        />

        <NavLink 
          text="Don't have an account? Sign Up Instead" 
          routeName="Signup"

        />
      </View>
    </SafeAreaView>
  )
};

// Deactivate Header
SigninScreen.navigationOptions = () => {
  return {
    header: () => false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    marginBottom: 250
  }
});

export default SigninScreen;
