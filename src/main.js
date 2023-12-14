import { createApp } from 'vue'
import './style.css'
import App from './App.vue'





try {
    const [,src] = import.meta.url.split("?")
    const root = document.querySelector(new URLSearchParams(src).get('s'))
    .attachShadow({ mode: "open" })
    root.insertAdjacentHTML('afterbegin', '<div id="app"></div>')
} catch(e) {
    console.error(e)
}
createApp(App).mount('#app')
