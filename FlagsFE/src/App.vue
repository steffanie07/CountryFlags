<template>
  <div>
    <Login v-if="!isAuthenticated" />
    <CountryList v-else />
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';
import Login from './components/Login.vue';
import CountryList from './components/CountryList.vue';

export default {
  components: {
    Login,
    CountryList

  },
  setup() {
    const { isAuthenticated } = useAuth0();
    return { isAuthenticated };
  }
};
</script>
