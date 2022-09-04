import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faDove, faUser, faHome, faPlus } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faInstagram, faFacebook, } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faDove, faUser, faPlus, faHome, faYoutube, faInstagram, faFacebook)
createApp(App).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
