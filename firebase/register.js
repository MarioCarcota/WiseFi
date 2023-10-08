import { useRouter } from "next/navigation";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import firebase_app from "./firebaseStart";

const auth = getAuth(firebase_app);


export default async function signUp( email, password) {
    let result = null,
        error = null;
        const router = useRouter()

    try {
        const result = await createUserWithEmailAndPassword(auth, email, password);

        if (result) {
           router.push("/platform")
        } else {
           
        }

    } catch (e) {
        error = e;
    }

    return { result, error };
}