<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '@/components/ListItem';
import bus from '@/utils/bus.js'

export default {
  name: 'JobsNews',
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_JOBS')
      .then(() => {
        bus.$emit('end:spinner');
      })
      .catch((error) => {
        console.log (error)
      })
  }
}
</script>