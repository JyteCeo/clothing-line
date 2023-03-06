import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, 
  signInWithPopup, GoogleAuthProvider, 
  createUserWithEmailAndPassword ,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy4f7Qc3u4LCBOGOGMqcq19gDis5mx12I",
  authDomain: "clothing-line-db-3dc34.firebaseapp.com",
  projectId: "clothing-line-db-3dc34",
  storageBucket: "clothing-line-db-3dc34.appspot.com",
  messagingSenderId: "230223607506",
  appId: "1:230223607506:web:184514fd8ed0b2d751df0b"
};

// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth , additionalInformation = {}) => {
  if(!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  // if the user snapshot date does not exist.
  // then this code will run , if not then it won't even run at all
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('there was an error creating the user', error.message);
    }
  }

  return userDocRef;
};


export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return ;

  return await createUserWithEmailAndPassword(auth, email, password);
};


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return ;

  return await signInWithEmailAndPassword(auth, email, password);
};