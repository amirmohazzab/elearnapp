import React, {useEffect} from 'react'
import {View, StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'
import {BestlearnFormField, BestlearnForm, SubmitButton} from '../components/forms';
import Screen from '../components/shared/Screen'
import { loginUser } from '../services/user';
import { customToast, loadingToast, successToast } from '../utils/toast';
import Toast from 'react-native-tiny-toast';


const validationSchema = Yup.object().shape({
  email: Yup.string().required('this field is required').email('Email is not valid'),
  password: Yup.string().required('this field is required').min(4, "Password must not less than four character")
});


const LoginScreen = ({navigation, route}) => {

  useEffect(()=> {
    if (route.params.successRegister === true)
      successToast('Registration successful')
  }, [])

  const handleUserLogin = async (user) => {
    try {
      loadingToast('Connection...')
      const data = await loginUser(user);
      if (data.data.status === 200) {
        Toast.hide();
        successToast("Login was successful"); 
      
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}]
        })
      } else {
        Toast.hide();
        customToast('Email or Password are wrong')
      }
    } catch (err) {
      Toast.hide();
    }
}

    return ( 
        <Screen style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
          <BestlearnForm
            initialValues={{email: "", password: ""}}
            onSubmit={user => handleUserLogin(user)}
            validationSchema={validationSchema}
          >
                    <BestlearnFormField
                      placeholder='Email'
                      autoCompleteType="email"
                      autoCorrect={false}
                      inputMode='email'
                      icon='email'
                      name='email'
                      placeholderTextColor="royalblue"
                    />
                 
                    <BestlearnFormField
                      placeholder='Password'
                      autoCompleteType="password"
                      autoCorrect={false}
                      icon='onepassword'
                      name='password'
                      placeholderTextColor="royalblue"
                    />

                  <View style={{ width: "60%" }}>
                    <SubmitButton title="Enter"/>
                  </View>
          </BestlearnForm>
        </Screen>
     );
}
 
export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff'
  },
  logo: {
    width: 270,
    height: 200,
    marginTop: 20, 
    marginBottom: 40,
  }
})
