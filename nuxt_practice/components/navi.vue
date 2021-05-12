<template>
  <div id="navi_bar">
    <a href="/">Introduction</a>
    <a href="/spec">Tech Spec</a>
    <a href="/history">History</a>
  </div>
</template>

<style scoped>
  #navi_bar {
    text-align: center;
  }

  #navi_bar a {
    text-decoration: none;
    display: inline-block;
    width: 150px;
    margin: 10px;
    background-color: white;
    color: green;
    border: 1px solid green;
    font-size: 20px;
    line-height: 32px;
    font-family: Arial, Helvetica, sans-serif;
    padding: 10px;
    border-radius: 4px;
  }

  #navi_bar a:hover {
    background-color: green;
    color: white;
    border: 1px solid green;
  }

  #navi_bar a:active {
    background-color: green;
    color: white;
    border: 1px solid green;
    text-decoration: underline;
  }
</style>
