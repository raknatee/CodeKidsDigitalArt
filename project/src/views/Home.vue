<template>
  <div class="home">
    <img src="/img/main.jpeg" class="img-slide" alt="">

    <div class="title-grid">
      <UnitButton  v-for="unit in units" :key="unit.unitId" :unit="unit"/>
    </div>
    
  </div>
</template>

<style lang="scss" scoped>
h1{
  text-align: center;
  text-decoration: underline  $color-1 .5rem;
}



.title-grid{
  margin: 5rem 0;
  display: grid;
  width: 100vw;
  grid-template-columns: 1fr;
  justify-items: center;
  gap: 1rem;
}


</style>

<script lang="ts">
import { defineComponent } from 'vue';
import UnitButton from "@/components/UnitButton.vue"
import {units} from "@/router/constant"
export default defineComponent({
  name: 'Home',
  components:{
    UnitButton
  },
  setup() {
    return {units}
  }

});
</script>
