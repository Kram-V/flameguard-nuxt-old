<template>  
  <GoogleMap
    :api-key="apiKey"
    style="width: 100%; height: 100%"
    :center="{ lat, lng }"
    :zoom="15"
  >
    <Marker :options="{ position: { lat, lng } }" />
  </GoogleMap> 
</template>

<script>
import { GoogleMap, Marker } from "vue3-google-map";

export default {
components: { GoogleMap, Marker }, 
data() {
  return {
    lat: 14.684689,
    lng: 121.071133,
    apiKey: import.meta.env.VITE_API_KEY 
  };
},
};
</script>
