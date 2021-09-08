<<<<<<< HEAD
const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    
    window.location.hostname === '[::1]' ||
    
=======

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
>>>>>>> 94d90a3731ac6aff96c9233b2fdc86a2caadc9ae
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export default function register() {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
<<<<<<< HEAD
    
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
      
      
      
=======
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location);
    if (publicUrl.origin !== window.location.origin) {
>>>>>>> 94d90a3731ac6aff96c9233b2fdc86a2caadc9ae
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
<<<<<<< HEAD
        
        checkValidServiceWorker(swUrl);
      } else {
        
=======
        checkValidServiceWorker(swUrl);
      } else {
>>>>>>> 94d90a3731ac6aff96c9233b2fdc86a2caadc9ae
        registerValidSW(swUrl);
      }
    });
  }
}

function registerValidSW(swUrl) {
  navigator.serviceWorker
    .register(swUrl)
    .then(registration => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
<<<<<<< HEAD
              
              
              
              
              console.log('New content is available; please refresh.');
            } else {
              
              
              
=======
              console.log('New content is available; please refresh.');
            } else {
>>>>>>> 94d90a3731ac6aff96c9233b2fdc86a2caadc9ae
              console.log('Content is cached for offline use.');
            }
          }
        };
      };
    })
    .catch(error => {
      console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swUrl) {
<<<<<<< HEAD
  
  fetch(swUrl)
    .then(response => {
      
=======
  fetch(swUrl)
    .then(response => {
>>>>>>> 94d90a3731ac6aff96c9233b2fdc86a2caadc9ae
      if (
        response.status === 404 ||
        response.headers.get('content-type').indexOf('javascript') === -1
      ) {
<<<<<<< HEAD
        
=======
>>>>>>> 94d90a3731ac6aff96c9233b2fdc86a2caadc9ae
        navigator.serviceWorker.ready.then(registration => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
<<<<<<< HEAD
        
=======
>>>>>>> 94d90a3731ac6aff96c9233b2fdc86a2caadc9ae
        registerValidSW(swUrl);
      }
    })
    .catch(() => {
      console.log(
        'No internet connection found. App is running in offline mode.'
      );
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    });
  }
}
