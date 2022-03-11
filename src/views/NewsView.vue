<template>
    <list-item></list-item>
</template>

<script>
import ListItem from '@/components/ListItem';
import bus from '@/utils/bus.js'

export default {
  name: 'NewsView',
  components: {
    ListItem,
  },
  created() {
    bus.$emit('start:spinner')
    setTimeout(() => {
      this.$store.dispatch('FETCH_NEWS')
          .then(() => {
            bus.$emit('end:spinner')
          })
          .catch((error) => {
            console.log ('error', error);
          })
    }, 300)
  }
}
</script>