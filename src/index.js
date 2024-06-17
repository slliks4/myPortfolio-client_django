import React from 'react';
import ReactDOM from 'react-dom/client';

// Style
import './assets/scss/index.scss';
// import './layouts/__DataLayout1/scss/DataLayout1.scss';

// Component Import
import App from './App';

// Services import
import reportWebVitals from './services/reportWebVitals';

// Library Import
import { QueryClient, QueryClientProvider } from "./imports/Library";

// Creating query client
const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
