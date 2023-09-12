import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { setUser } from './redux/user';
import { useNavigate } from 'react-router-dom';

// auth state observer
export function useFirebaseAuth() {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const dispatch = useDispatch();
  const auth = getAuth();
  const nav = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in.
        console.log("User is signed in with email:", user.email);
        dispatch(setUser(user));
        setFirebaseUser(user);
      } else {
        // User is signed out.
        console.log("No user is signed in.");
        setFirebaseUser(null);
        nav('/login');
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [dispatch, auth]);

  return firebaseUser;
}

// logs out user from firebase
export const firebaseLogout = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully!");
    })
    .catch((error) => {
      console.error("Error signing out:", error);
    });
};