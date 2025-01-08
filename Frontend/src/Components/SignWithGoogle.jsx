import React from 'react'
import { initializeApp } from 'firebase/app';
import {getAuth,signInWithPopup,GoogleAuthProvider} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";


const firebaseConfig = {
    apiKey: "AIzaSyBPbSLcJ00rEOCiyR_ECnfBcckW13kEzEo",
  authDomain: "authentication-project2-c3b69.firebaseapp.com",
  projectId: "authentication-project2-c3b69",
  storageBucket: "authentication-project2-c3b69.firebasestorage.app",
  messagingSenderId: "408731602726",
  appId: "1:408731602726:web:abea3a9cc276b5ec147be7"
}
const app = initializeApp(firebaseConfig);
const auth  = getAuth(app);

const SignWithGoogle = () => {

    const signInWithGoogle = async() =>{
        const provider = new GoogleAuthProvider()
        try{
           const result = await signInWithPopup(auth,provider);
           const userDetails = result.user
           console.log("User Signed-in:",userDetails)
           setUser({
            name :userDetails.displayName,
            photoURL : userDetails.photoURL,

           })
           navigate('/home');
        }
        catch(err){
            console.error(err)
        }
        

    }

  return (
    <div className='bg-Login'>
        
        <p>--- continue with Google ---</p>
        <button className="login-btn" onClick={signInWithGoogle}><FcGoogle size={20}/>
    continue with Google
    </button></div>
  )
}

export default SignWithGoogle