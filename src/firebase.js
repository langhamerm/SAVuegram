import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_ZQDwxoatmd7i56PZHxzve90_Y6m0FGM",
  authDomain: "fcc-social.firebaseapp.com",
  databaseURL: "https://fcc-social.firebaseio.com",
  projectId: "fcc-social",
  storageBucket: "fcc-social.appspot.com",
  messagingSenderId: "307314994355",
  appId: "1:307314994355:web:ac9a6c17162c8aeb7454c6",
  measurementId: "G-3JX7DY5RE2"
};
firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')

// export utils/refs
export {
  db,
  auth,
  usersCollection,
  postsCollection,
  commentsCollection,
  likesCollection
}
