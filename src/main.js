import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const scriptSource = (function(scripts) {
    var scripts = document.getElementsByTagName('script'),
           script = scripts[scripts.length - 1];
   if (script.getAttribute.length !== undefined) {
      return script.src
   }
   return script.getAttribute('src', -1)
}());

const getParamsFromURI = ( uri ) => {
    // Get everything after the `?`
    const [ , paramString ] = uri.split( '?' );
  
    // Return parameters
    return new URLSearchParams( paramString );
  };

const selector = getParamsFromURI(scriptSource).get('s')
try {
    document.querySelector(selector) //'#dashLeftCol'
        .insertAdjacentHTML('afterbegin', '<div id="app"></div>')
} catch(e) {
    console.error(e)
}
createApp(App).mount('#app')
