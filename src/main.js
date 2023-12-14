import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

try {
    const [,src] = import.meta.url.split("?")
    const target = document.querySelector(new URLSearchParams(src).get('s'))
    target.insertAdjacentHTML('afterbegin', '<div id="app"></div>')
} catch(e) {
    console.error(e)
}
createApp(App).mount('#app')
