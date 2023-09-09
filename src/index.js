import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import {
  BrowserRouter as Router,
  Route, 
  Routes
} from "react-router-dom";
import { LandingPage } from './components/landingPage';
import EditItemPage from './components/editItemPage';
import ViewItemPage from './components/viewItemPage';
import LoginPage from './components/loginPage';
import SignUpPage from './components/signUpPage';
import { initializeApp } from "firebase/app";

// Firebase configuration
// todo: move to env file
const firebaseConfig = {
  apiKey: "AIzaSyB98MsHJa3ffsavBYwfbxnAVoP6b5vYibo",
  authDomain: "resjam.firebaseapp.com",
  projectId: "resjam",
  storageBucket: "resjam.appspot.com",
  messagingSenderId: "149478649876",
  appId: "1:149478649876:web:0b6eaccec36896787a7701",
  measurementId: "G-Y5V1ZM8CQL"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<App />} />
          <Route path="/app/item/" element={<ViewItemPage />} />
          <Route path="/app/item/edit/" element={<EditItemPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/how_to" element={<div>How To</div>} />
          <Route path="/faq" element={<div>Frequently asked questions</div>} />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
