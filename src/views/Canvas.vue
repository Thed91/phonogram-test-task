<template>
  <div class="canvas">
    <ToHome/>
    <CanvasComponent/>
  </div>
</template>

<script>
import ToHome from '@/components/ToHome.vue'
import CanvasComponent from '@/components/CanvasComponent.vue'

export default {
  name: 'Canvas',
  components: {
    ToHome,
    CanvasComponent
  }
}
</script>
