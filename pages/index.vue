<template>
  <div>
    <s-notes />
    <m-popup v-show="popupVisible" />
  </div>
</template>

<script setup>
const popupVisible = ref(false);

</script>