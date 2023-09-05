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
import ItemPage from './components/editItemPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/app" element={<App />} />
          <Route path="/app/item/:id" element={<ItemPage />} />
          <Route path="/app/item/edit/:id" element={<ItemPage />} />
          <Route path="/login" element={<div>LoginPage</div>} />
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
