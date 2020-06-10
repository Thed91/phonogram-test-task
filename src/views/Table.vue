<template>
  <div class="table">
    <ToHome/>
    <TableComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import ToHome from '@/components/ToHome.vue'
import TableComponent from '@/components/TableComponent.vue'

export default {
  name: 'Table',
  components: {
    ToHome,
    TableComponent
  }
}
</script>
