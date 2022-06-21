<template>
   <div class="grid">
    <tool to="/opacity">Opacity</tool>
    <tool to="/brush-size">Brush Size</tool>
    <tool to="/actions">Actions</tool>
    <tool to="/mask-tool">Mask Tool</tool>
    <tool to="/brush">Brush</tool>
    <tool to="/smudge-tool">Smudge</tool>
    <tool to="/layers">Layers</tool>
    <tool to="/colors">Colors</tool>


   </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Tool from "@/components/ToolsButton/Tool.vue"
export default defineComponent({
  
  components:{
    Tool
  }
});

</script>


<style lang="scss" scoped>
.grid{
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap:2rem;
}
</style>