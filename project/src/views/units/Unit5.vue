<template>
  
    <img v-for="imgPath in imgPaths" :key="imgPath" :src="imgPath" class="img-slide" alt="">
    <home/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from "@/components/HomeButton.vue"
export default defineComponent({
  
  components:{
    Home
  },
  setup(){
    const imgPaths:string[] = []
    for(let i=1;i<=11;i++){
        imgPaths.push(`/img/Unit5/Unit5-${i}.JPG`)
    }
    return {imgPaths}
  }
});
</script>