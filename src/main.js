import { createApp } from 'vue'
import './style.css'
import App from './App.vue'





try {
    const currentScript = document.querySelector('#someUniqueId')
    const selector = currentScript.dataset.s

    document.querySelector(selector) //'#dashLeftCol'
        .insertAdjacentHTML('afterbegin', '<div id="app"></div>')
} catch(e) {
    console.error(e)
}
createApp(App).mount('#app')
