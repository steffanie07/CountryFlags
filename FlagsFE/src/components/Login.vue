<template>
  <div class="login-container">
    <button @click="login">Log in</button>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue';

export default {
  setup() {
    const { loginWithRedirect } = useAuth0();

    return {
      login: () => {
        loginWithRedirect();
      }
    };
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Make the container full height of the viewport */
}

button {
  padding: 15px 30px; /* Bigger padding for a larger button */
  font-size: 20px; /* Larger font size for better readability */
  cursor: pointer; /* Cursor changes to pointer when hovering over the button */
  outline: none; /* Removes the outline to clean up the appearance */
  border: none; /* Removes the border */
  background-color: #007BFF; /* A nice blue background color */
  color: white; /* White text color */
  border-radius: 5px; /* Rounded corners */
  transition: background-color 0.3s; /* Smooth transition for hover effect */
}

button:hover {
  background-color: #0056b3; /* Darker blue when hovered */
}
</style>
