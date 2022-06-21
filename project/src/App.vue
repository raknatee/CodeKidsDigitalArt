<template>
  
  <router-view/>
</template>

<style lang="scss">


@font-face {
    font-family: eina;
    src: url(/eina/Eina01-SemiBold.ttf);
}
@keyframes fade-up {
  0%   {
    opacity: 0;
    transform: translateY(-3rem);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
    }

}
*{
      animation: fade-up;
    animation-duration: 1s;
}
body{
    font-family: 'eina';
    margin: 0;
    padding: 0;

}
.img-slide{
  width: 100vw;
}




</style>


<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup(){
    document.title = "Procreate"
  }

});
</script>
