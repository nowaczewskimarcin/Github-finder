<template>
  <div class="fullscreen text-white text-center q-pa-md flex flex-center"
    style="background: linear-gradient(90deg, rgba(2, 0, 36, 1) 3%, rgba(8, 8, 108, 1) 18%, rgba(9, 9, 121, 1) 85%, rgba(158, 0, 255, 1) 117%)">
    <div>
      <div style="font-size: 30vh">
        404
      </div>
      <div class="text-h2" style="opacity:.4">
        Oops. Nothing here...
      </div>
      <q-btn class="button" text-color="white" unelevated to="/" label="Go Home" no-caps />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>

<style scoped>
.button {
  background-color: #2ea44f;
  color: white;
  height: 50px;
  width: 200px;
  border: 0;
  transition: box-shadow 0.2s;
  border-radius: 0.375rem;
  text-align: center;
}
</style>