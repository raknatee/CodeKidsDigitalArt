<template>
  <BasicButton :to="`/unit${unit.unitId}`">
    <div class="star">
      <div class="star-element" v-for="i in unit.starPoint" :key="i"></div>
    </div>
    <h1>Unit {{ unit.unitId }}: {{ unit.title }}</h1>
  </BasicButton>
</template>

<style lang="scss" scoped>
a {
  color: white;
  background-color: $color-1;
  padding: 1.5rem;
  font-size: 1.5rem;
  text-decoration: none;
  border-radius: 1rem;
  transition: all;
  transition-duration: 0.5s;
}
.star {
  display: flex;
  &-element {
    background-image: url("/img/star.png");
    background-size: cover;
    background-position: center;
    $star_size: 5rem;
    width: $star_size;
    height: $star_size;
  }
}

a:hover {
  box-shadow: 5px 5px 10px 1px $color-2;
}
</style>

<script lang="ts">
import { defineComponent, ref, PropType } from "vue";
import BasicButton from "./BasicButton.vue";
import { Unit } from "@/router/constant";
export default defineComponent({
  props: {
    unit: Object as PropType<Unit>,
  },
  components: {
    BasicButton,
  },
});
</script>
