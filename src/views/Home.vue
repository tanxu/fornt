<template>
  <div>
    <panel-comp />

    <router-view />

  </div>
</template>

<script>
import PanelComp from '@/components/Panel'

export default {
  name: 'Home',
  components: { PanelComp }
}
</script>

<style scoped>

</style>
