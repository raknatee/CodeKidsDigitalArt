<template>
  
    <img v-for="imgPath in imgPaths" :key="imgPath" :src="imgPath" class="img-slide" alt="">
    <home/>

</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from "@/components/HomeButton.vue"
import { useRouter } from 'vue-router';
import { units} from "@/router/constant"
export default defineComponent({
  
  components:{
    Home
  },
  
  setup(){
    const router = useRouter()
    const unitId:number = parseInt(router.currentRoute.value.path.replace("/unit",""))
   
    const currentUnit = units[unitId-1]
    const imgPaths:string[] = []
    for(let i=1;i<=currentUnit.end!;i++){
        imgPaths.push(`/img/Unit${currentUnit.unitId}/Unit${currentUnit.unitId}-${i}.JPG`)
    }
    return {imgPaths}
  }
});
</script>