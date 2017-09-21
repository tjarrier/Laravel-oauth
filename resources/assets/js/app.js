
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */


function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

global.oauth_token = JSON.parse(decodeURIComponent(readCookie('oauth_token')))
global.access_token = oauth_token != null ? oauth_token.access_token : 'Unauthenticated'
axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
axios.post('http://laravelauth.dev/api/user')
    .then(response => {
    console.log(response)
});
console.log(access_token)

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#root'
});
