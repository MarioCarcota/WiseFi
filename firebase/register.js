import { useRouter } from "next/navigation";
import firebase_app from "./config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

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