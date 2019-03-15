import React, { Component } from 'react'
import { View } from 'react-native'
import LoginFacebook from './login_social/LoginFacebook'
import LoginGoogle from './login_social/LoginGoogle'

export default class App extends Component {
      render(){
            return(
                  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', alignSeft: 'Stretch'}}>
                        <LoginGoogle/>
                        <LoginFacebook/>
                  </View>
            );
      }
}