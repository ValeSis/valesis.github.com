/*
const listTweets = document.getElementById('lista-tweets');

//event listeners

eventListeners();

function eventListeners(){
    //cuando se envia el formulario
    document.querySelector('#formulario').addEventListener('submit', agregarTweet);
    
    
    listTweets.addEventListener('click', borrarTwett);

    document.addEventListener('DOMContentLoaded',localStorageListo);

}

function agregarTweet(e){
    e.preventDefault();

    const tweet=document.getElementById('tweet').value;//lee el valor del textarea
    
  //console.log(tweet);

    //local storage
    agregarTweetLocalStorage(tweet);
}
console.log('probando');

function borrarTwett(e){
    e.preventDefault();
    if(e.target.className === 'borrar-tweet')
    {
        e.target.parentElement.remove();
        borrarTweetLocalStorage(e.target.parentElement.innerText);

        //console.log('diste click en eliminar');
       // console.log(e.target.parentElement.remove() );
      
       alert('twett eliminado');
    }
}

//local storage solo recibe cadenas de texto, tambien arreglo para q no reescriba

// Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    // Añadir el nuevo tweet
    tweets.push(tweet);
    // Convertir de string a arreglo para local storage
    localStorage.setItem('tweets', JSON.stringify(tweets) );
}

// Comprobar que haya elementos en localstorage, retorna un arreglo
function obtenerTweetsLocalStorage() {
    let tweets;
    // Revisamos los valoes de local storage
    if(localStorage.getItem('tweets') === null) {
         tweets = []; 
    } else {
         tweets = JSON.parse(localStorage.getItem('tweets') );
    }
    return tweets;
}

//mostrar datos de LocalStorage en la lista
function localStorageListo(){
    let tweets;
    tweets = obtenerTweetsLocalStorage();
    tweets.forEach(function(tweet) {

           //boton de borrar
    const botonBorrar=document.createElement('a');
    botonBorrar.classList='borrar-tweet';
    botonBorrar.innerText='X';
    
    
    const li=document.createElement('li');//crear elemento y añadir el contenido a la lista
    li.innerText=tweet;
    li.appendChild(botonBorrar);//AÑADE el boton de borrar tweet
    listTweets.appendChild(li);//añade el tweet a la lista
   
        
    });
    console.log(tweets);
}

//eliminar tweet de local storage
function borrarTweetLocalStorage(tweet){

    console.log(tweet);
    let tweets, tweetBorrar;
    tweetBorrar= tweet.substring(0,tweet.length-1);
    tweets = obtenerTweetsLocalStorage();

    tweets.forEach(function(tweet, index){//index valor del arreglo
        if(tweetBorrar === tweet){
            tweets.splice(index,1);//
        }
        //console.log(tweet);
    });
    //console.log(tweetBorrar);
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

*/

// Variables
const listaTweets = document.getElementById('lista-tweets');



// Event Listeners

eventListeners();

function eventListeners() {
     //Cuando se envia el formulario
     document.querySelector('#formulario').addEventListener('submit', agregarTweet);

     // Borrar Tweets
     listaTweets.addEventListener('click', borrarTweet);

     // Contenido cargado
     document.addEventListener('DOMContentLoaded', localStorageListo);
}



// Funciones


// Añadir tweet del formulario
function agregarTweet(e) {
     e.preventDefault();
     // leer el valor del textarea
     const tweet = document.getElementById('tweet').value;
     // crear boton de eliminar
     const botonBorrar = document.createElement('a');
     botonBorrar.classList = 'borrar-tweet';
     botonBorrar.innerText = 'X';

     // Crear elemento y añadirle el contenido a la lista
     const li = document.createElement('li');
     li.innerText = tweet;
     // añade el botón de borrar al tweet
     li.appendChild(botonBorrar);
     // añade el tweet a la lista
     listaTweets.appendChild(li);

     // Añadir a Local Storage
     agregarTweetLocalStorage(tweet);
}
// Elimina el Tweet del DOM
function borrarTweet(e) {
     e.preventDefault();
     if(e.target.className === 'borrar-tweet') {
          e.target.parentElement.remove();
          borrarTweetLocalStorage(e.target.parentElement.innerText);
     } 
}
// Mostrar datos de LocalStorage en la lista
function localStorageListo() {
     let tweets;

     tweets = obtenerTweetsLocalStorage();

     tweets.forEach(function(tweet) {
          // crear boton de eliminar
          const botonBorrar = document.createElement('a');
          botonBorrar.classList = 'borrar-tweet';
          botonBorrar.innerText = 'X';

          // Crear elemento y añadirle el contenido a la lista
          const li = document.createElement('li');
          li.innerText = tweet;
          // añade el botón de borrar al tweet
          li.appendChild(botonBorrar);
          // añade el tweet a la lista
          listaTweets.appendChild(li);
     });
}

// Agrega tweet a local storage
function agregarTweetLocalStorage(tweet) {
     let tweets;
     tweets = obtenerTweetsLocalStorage();
     // Añadir el nuevo tweet
     tweets.push(tweet);
     // Convertir de string a arreglo para local storage
     localStorage.setItem('tweets', JSON.stringify(tweets) );
}

// Comprobar que haya elementos en localstorage, retorna un arreglo
function obtenerTweetsLocalStorage() {
     let tweets;
     // Revisamos los valoes de local storage
     if(localStorage.getItem('tweets') === null) {
          tweets = []; 
     } else {
          tweets = JSON.parse(localStorage.getItem('tweets') );
     }
     return tweets;
}

// Eliminar tweet de Local Storage

function borrarTweetLocalStorage(tweet) {

     let tweets, tweetBorrar;
     // Elimina la X del tweet
     tweetBorrar = tweet.substring(0, tweet.length - 1);

     tweets = obtenerTweetsLocalStorage();

     tweets.forEach(function(tweet, index) {
          if(tweetBorrar === tweet) {
               tweets.splice(index, 1);
          }
     }) ;

     localStorage.setItem('tweets', JSON.stringify(tweets) );
}