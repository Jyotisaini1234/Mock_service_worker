import React from 'react'
import ReactDOM from 'react-dom/client'
import  App  from './App'
import { worker } from './mocks/browser'
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
worker.start()

  }}
enableMocking().then(() => {
  const rootElement = document.getElementById('root'); // Ensure 'root' element exists
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Create root
    root.render(<App />); // Render app using createRoot
  } else {
    console.error('Root element not found!');
  }
});

