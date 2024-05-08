<template>
  <div class="country-list">
    <ul>
      <li v-for="country in countries" :key="country.name">
        <img :src="country.flag" :alt="country.name + ' flag'" class="flag">
        {{ country.name }}
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  data() {
    return {
      countries: [],
    };
  },
  mounted() {
    this.fetchCountries();
  },
  methods: {
    async fetchCountries() {
      try {
        const { getAccessTokenSilently } = useAuth0();
        const token = await getAccessTokenSilently();

        console.log("Access Token:", token); 

        const response = await axios.get('http://localhost:8000/api/countries', {
           headers: {
          Authorization: `Bearer ${token}`
            }
        });

        this.countries = response.data;
      } catch (error) {
        console.error('Error fetching countries:', error);
        // Optionally, handle different types of errors or notify the user
      }
    }
  }
};
</script>


<style scoped>
.country-list ul {
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  grid-gap: 20px; 
  padding: 0;
}

.country-list li {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  justify-content: center; 
  padding: 10px; 
  border: 1px solid #ccc; 
  min-height: 150px; 
}

.flag {
  width: 80px; 
  height: auto;
  margin-bottom: 10px; 
}

.country-list li h2 {
  font-size: 16px; 
  color: #000; 
  text-align: center; 
  overflow: hidden; 
  text-overflow: ellipsis; 
  white-space: nowrap; 
}
</style>
