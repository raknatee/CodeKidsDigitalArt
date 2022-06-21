<template>
    <router-link :to="to">
        <slot></slot>
    </router-link>
    
</template>

<style lang="scss" scoped>
a{
    color: white;
    background-color: $color-1;
    padding: 1.5rem;
    font-size: 1.5rem;
    text-decoration: none;
    border-radius: 1rem;
    transition: all;
    transition-duration: .5s;
}
  
a:hover{
    box-shadow: 5px 5px 10px 1px $color-2;
}
</style>

<script lang="ts">
import { defineComponent,ref } from 'vue';

export default defineComponent({
  props:{
      to: String
  },
  name:"BasicButton",
  

});
</script>
