<template>
  <div id="gallery">
    <img :src="$store.state.list[$route.params.id].image">
    <b-alert show variant='info'>
      <b>{{$store.state.list[$route.params.id].brand}}</b> {{$store.state.list[$route.params.id].model}}
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
