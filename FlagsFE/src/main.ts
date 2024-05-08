import { createAuth0 } from '@auth0/auth0-vue';
import App from './App.vue';
import { createApp } from 'vue';


const auth0Domain ="dev-0hw5pig3p0b5ke57.uk.auth0.com";
const auth0ClientId ="YWeNtzoz1kjoyz9jxgBVc2SQrmBnDsVS";

const auth0Client = createAuth0({
  clientId: auth0ClientId,
  domain: auth0Domain,
  authorizationParams: {
      redirect_uri: window.location.origin
    },
  audience: "http://127.0.0.1:8000/api/countries",
});
createApp(App)
  .use(auth0Client) 
  .mount('#app');