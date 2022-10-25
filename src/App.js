import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

// Import Components
import Navbar from './Components/Navbar';

// Import Pages
import Home from './Pages/Home'
import Calculator from './Pages/Calculator';
import ResultCarbon from './Pages/ResultCarbon';
import Leaderboard from './Pages/Leaderboard';
import Login from './Pages/Login';

// Firebase
import {
  app,
  provider,
  auth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut
} from './utils/firebase';

function App() {

  const [user, setUser] = useState({});

  const signInGoogle = () => {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          setUser(user)
        }).catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          console.log(error)
        });
    } catch (error) {
      console.log(error)
    }

  }

  const signOutGoogle = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      setUser({})
    }).catch((error) => {
      // An error happened.
      setUser({})
    });
  }

  return (
    <>
      <BrowserRouter>
        <Navbar user={user} signOut={signOutGoogle} />
        <div className="container py-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login signInGoogle={signInGoogle} />} />
            <Route path="calculator">
              <Route index element={<Calculator />} />
              <Route path="result" element={<ResultCarbon />} />
            </Route>
            <Route path="leaderboard" element={<Leaderboard />} />
          </Routes>
        </div>
      </BrowserRouter>

    </>
  );
}

export default App;
