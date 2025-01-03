import React from 'react'
import ReactDOM from 'react-dom/client'
import  App  from './App.js'
 
async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
 
  const { worker } = await import('./mocks/browser.js')
 
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start()
}

enableMocking().then(() => {
  const rootElement = document.getElementById('root'); // Ensure 'root' element exists
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Create root
    root.render(<App />); // Render app using createRoot
  } else {
    console.error('Root element not found!');
  }
});