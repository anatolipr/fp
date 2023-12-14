import { createApp } from 'vue'
import './style.css'
import App from './App.vue'




const getParamsFromURI = ( uri ) => {
    // Get everything after the `?`
    const [ , paramString ] = uri.split( '?' );
  
    // Return parameters
    return new URLSearchParams( paramString );
  };


try {
    var currentScript = document.currentScript?.src
    const selector = getParamsFromURI(currentScript).get('s')

    document.querySelector(selector) //'#dashLeftCol'
        .insertAdjacentHTML('afterbegin', '<div id="app"></div>')
} catch(e) {
    console.error(e)
}
createApp(App).mount('#app')
