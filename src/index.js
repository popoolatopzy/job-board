import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./pages/Login";
import Test from "./pages/test";
import Dashboard from "./pages/dashboard";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Apply from './pages/apply';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="test" element={<Test />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="apply" element={<Apply />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
