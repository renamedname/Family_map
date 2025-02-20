const firebaseConfig = {
    storageBucket: "recipes-7d99a.appspot.com",
    // ... остальные настройки Firebase
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Включаем CORS для Storage
  firebase.storage().setCustomAuthenticationHeaders({
    'Access-Control-Allow-Origin': '*'
  });