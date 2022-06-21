<template>
    <router-link :to="to">
        <slot></slot>
    </router-link>
    
</template>

<style lang="scss" scoped>
a{
    color: black;
    background-color: $blue-mint;
    padding: 1.5rem;
    font-size: 1.5rem;
    text-decoration: none;
    border-radius: 1rem;
    transition: all;
    transition-duration: .5s;
}
  
a:hover{
    box-shadow: 5px 5px 10px 1px $pink-1;
}
</style>

<script lang="ts">
import { defineComponent,ref } from 'vue';

export default defineComponent({
  props:{
      to: String
  },
  
  

});
</script>
