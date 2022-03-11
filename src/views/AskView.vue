<template>
  <list-item></list-item>
</template>

<script>
import ListItem from '@/components/ListItem';
import bus from '@/utils/bus.js'

export default {
  name: 'AskView',
  components: {
    ListItem
  },
  created() {
    bus.$emit('start:spinner');
    this.$store.dispatch('FETCH_ASK')
        .then(() => {
          bus.$emit('end:spinner');
        })
        .catch((error) => {
          console.log (error)
        })
  }
}
</script>