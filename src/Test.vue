<template>
  <div>
    <h1>List</h1>
    <button @click="loginUser1">login</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{item}}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';
import { handleException } from '@/utils/handler';

export default {
  data() {
    return {
      items: []
    }

  },
  methods: {
    loginUser() {
      axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
          if(response.data.id === 1) {
            axios.get('https://jsonplaceholder.typicode.com/todos')
                .then(response => {
                  this.items = response.data
                })
                .catch(error => console.log(error))
          }
        })
        .catch(error => console.log(error))
    },
    async loginUser1() {
      try { //비동기 처리 뿐만 아니라 자바스크립트 코드 예외 처리까지 사용 가능
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
        if(response.data.id === 1) {
          alert('인증되었습니다.')
          const list = await  axios.get('https://jsonplaceholder.typicode.com/todos');
          this.items = list.data
        }
      } catch(error) {
        handleException(error);
        console.log (error)
      }
    }
  },
}
</script>

<style scoped>

</style>