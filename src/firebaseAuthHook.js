import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { setUser } from './redux/user'; 

export function useFirebaseAuth() {
  const [firebaseUser, setFirebaseUser] = useState(null);
  const dispatch = useDispatch();
  const auth = getAuth();

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
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, [dispatch, auth]);

  return firebaseUser;
}
