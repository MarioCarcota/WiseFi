
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase_app from "./firebaseStart";

const auth = getAuth(firebase_app);

export default async function signIn(email, password) {
  let result = null,
    error = null;
  try {
    result = await signInWithEmailAndPassword(auth, email, password).then(() => {
     
        router.push("/platform")
    
    });
  } catch (e) {
    error = e;
  }

  return { result, error };
}