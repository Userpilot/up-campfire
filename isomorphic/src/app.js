import React from 'react'
import { Provider } from 'react-redux'
import GlobalStyles from '@iso/assets/styles/globalStyle'
import { store } from './redux/store'
import Boot from './redux/boot'
import Routes from './router'
import AppProvider from './AppProvider'
import firebase from 'firebase'

import {
  signInWithEmail,
  createUserWithEmailAndPassword,
  signUpWithEmailAndPassword,
  resetPassword,
} from '@iso/lib/firebase/firebase.authentication.util';

createUserWithEmailAndPassword(email, password).catch(function (error) {
  // Handle Errors here.
  var errorCode = error.code
  var errorMessage = error.message
  // ...
})

const App = () => (
  <Provider store={store}>
    <AppProvider>
      <>
        <GlobalStyles />
        <Routes />
      </>
    </AppProvider>
  </Provider>
)
Boot()
  .then(() => App())
  .catch(error => console.error(error))

export default App
