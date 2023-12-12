import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import Toast from 'react-native-tiny-toast'
import * as Yup from 'yup'
import {BestlearnFormField, BestlearnForm, SubmitButton} from '../components/forms'
import Screen from '../components/shared/Screen';
import { registerUser } from '../services/user';
import { customToast, loadingToast } from '../utils/toast';



const validationSchema = Yup.object().shape({
  fullname: Yup.string().required('this field is required'),
  email: Yup.string().required('this field is required').email('Email is not valid'),
  password: Yup.string().required('this field is required').min(4, "Password must not less than four character"),
  confirmationPassword: Yup.string().required('password repeat is required')
  .oneOf([Yup.ref('password'), null], 'passwords must be equal')
});


const RegisterScreen = ({navigation}) => {

    const handleUserRegisteration = async (user) => {
        try {
          loadingToast('User registering...');
          const data = await registerUser(user);
          console.log(data);
          if (data.data.status === 201) {
            Toast.hide();
            navigation.navigate('Login', {successRegister: true})
          } else {
            Toast.hide();
            customToast('Error happened')
          }
        } catch (err) {
          console.log(err)
          Toast.hide();
        }
    }

    return ( 
        <Screen style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
          <BestlearnForm
            initialValues={{fullname: "", email: "", password: "", confirmationPassword: ""}}
            onSubmit={user => {console.log(user); handleUserRegisteration(user)}}
            validationSchema={validationSchema}
          >
                  <BestlearnFormField
                    placeholder='Fullname'
                    autoCorrect={false}
                    icon='account-circle'
                    name='fullname'
                    placeholderTextColor="royalblue"
                  />

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
                    autoCorrect={false}
                    icon='onepassword'
                    name='password'
                    placeholderTextColor="royalblue"
                  />

                  <BestlearnFormField
                    placeholder='Password Repeat'
                    autoCorrect={false}
                    icon='onepassword'
                    name='confirmationPassword'
                    placeholderTextColor="royalblue"
                  />

                  <View style={{ width: "60%" }}>
                    <SubmitButton title="Register" />
                  </View>
          </BestlearnForm>
        </Screen>
     );
}
 
export default RegisterScreen;


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
