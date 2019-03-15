import React, { Component } from 'react';
import { View,StyleSheet } from 'react-native';
import { LoginButton, AccessToken, LoginManager } from 'react-native-fbsdk';
import { ShareApi } from 'react-native-fbsdk';
export default class Login extends Component {
      onLoginFacebook = () => {
        LoginManager
            .logInWithReadPermissions(['public_profile', 'email'])
            .then((result) => {
                if (result.isCancelled) {
                    return Promise.reject(new Error('The user cancelled the request'));
                }
                console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`);
                // get the access token
                return AccessToken.getCurrentAccessToken();
            })
            .then(data => {
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);      
                return firebase.auth().signInWithCredential(credential);
            })
            .then((currentUser) => {
                console.log(`Facebook Login with user : ${JSON.stringify(currentUser.toJSON())}`);            
            })
            .catch((error) => {
                console.log(`Facebook login fail with error: ${error}`);
            });
    }


//   componentDidMount() {
//     LoginManager.logInWithReadPermissions(['public_profile']).then(
//       function(result) {
//         if (result.isCancelled) {
//           console.log('Login cancelled');
//         } else {
//           console.log(
//             'Login success with permissions: ' +
//               result.grantedPermissions.toString()
//           );
//         }
//       },
//       function(error) {
//         console.log('Login fail with error: ' + error);
//       }
//     );
//   }

//   initUser(token) {
//       fetch(`https://graph.facebook.com/me?fields=id,name,email,birthday&access_token=${token}`)
//       .then((response) => response.json())
//       .then((json) => {
//         // Some user object has been set up somewhere, build that user here
//         user.name = json.name
//         console.log(user.name);
//         user.id = json.id
//         user.user_friends = json.friends
//         user.email = json.email
//         user.username = json.name
//         user.loading = false
//         user.loggedIn = true
//         user.avatar = setAvatar(json.id)     
//         console.log(`Hello: ${user.name}`) 
//       })
//       .catch(() => {
//         reject('ERROR GETTING DATA FROM FACEBOOK')
//       })
//     }
// //     _onLoginFacebook = () => {
//       publishPermissions=['publish_actions']
//       onLoginFinished=(error, result) => {
//             if (error) {
//               console.log(error.message);
//               console.log('login has error: ' + result.error);
//             } else if (result.isCancelled) {
//               console.log('login is cancelled.');
//             } else {
//               AccessToken.getCurrentAccessToken().then(data => {
//                 console.log(data.accessToken.toString());
//                   const { accessToken } = data
//                   initUser(accessToken)
//               });
//             }
//           }
//           onLogoutFinished=() => console.log('logout.')
//     }
  render() {
        
    return (
      <View style={styles.container}>
        <LoginButton
            onPress={this.onLoginFacebook}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});