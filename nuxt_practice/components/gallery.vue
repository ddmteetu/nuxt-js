<template>
  <div id="gallery">
    <img src="@/assets/suv.jpeg" alt="Land Cruiser">
    <b-alert show variant='info'>
      <b>Toyota</b> Land Cruiser
    </b-alert>
  </div>
</template>

<style scoped>
  #gallery {
    text-align: center;
    border: 1px solid rgb(201, 201, 201);
    border-radius: 5px;
  }

  #gallery img {
    width: 360px;
  }

  #gallery h2 {
    font-size: 24px;
    line-height: 60px;
  }
</style>
