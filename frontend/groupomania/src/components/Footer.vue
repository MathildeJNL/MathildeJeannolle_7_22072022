<template>

<div v-if="isFixed">
  <footer class="main-footer fixed-footer">
    <div class="footer-phrases"></div>
    <ul class="main-list">
      <li>Version 1</li>
      <li>Developed by Mathilde</li>
    </ul>
  </footer>
</div>
<div v-else>
    <footer class="main-footer">
    <div class="footer-phrases"></div>
    <ul class="main-list">
      <li>Version 1</li>
      <li>Developed by Mathilde</li>
    </ul>
  </footer>
</div>
</template>

<style scoped>
.fixed-footer{
    position:fixed;
    bottom:0;
}
footer{
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
}

footer ul li{
  list-style-type: none;
}

.main-list{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 16px;
  align-items: center;
  padding: 0;
}

@media all and (max-width: 768px) {
.main-list{
  font-size: 11px;
}

}

</style>

<script>
// @ is an alias to /src
export default {
  name: 'Footer',
  props:{
    isFixed:false
  }
}
</script>