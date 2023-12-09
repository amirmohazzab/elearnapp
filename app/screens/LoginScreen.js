import React from 'react'
import {View, StyleSheet, Image} from 'react-native'
import * as Yup from 'yup'
import {BestlearnFormField, BestlearnForm, SubmitButton} from '../components/forms';
import Screen from '../components/shared/Screen'


const validationSchema = Yup.object().shape({
  email: Yup.string().required('this field is required').email('Email is not valid'),
  password: Yup.string().required('this field is required').min(4, "Password must not less than four character")
});


const LoginScreen = ({navigation}) => {

    return ( 
        <Screen style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo.png')}/>
          <BestlearnForm
            initialValues={{email: "", password: ""}}
            onSubmit={() => navigation.navigate('Home')}
            // validationSchema={validationSchema}
          >
                    <BestlearnFormField
                      placeholder='Email'
                      autoCompleteType="email"
                      autoCorrect={false}
                      keyboardType='email-address'
                      icon='email'
                      name='email'
                      placeholderTextColor="royalblue"
                    />
                 
                    <BestlearnFormField
                      placeholder='Password'
                      autoCompleteType="password"
                      autoCorrect={false}
                      keyboardType='password'
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
