<template>
   <div class="grid">
    <basic-button to="/tools" >Tools</basic-button>
   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BasicButton from "@/components/BasicButton.vue"
export default defineComponent({
  
  components:{
    BasicButton
  }
});

</script>


<style lang="scss" scoped>
.grid{
  margin: 5rem 0;
  display: grid;
  justify-items: center;
}
</style>