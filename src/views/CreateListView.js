import ListView from '@/views/ListView'
import bus from '@/utils/bus'

// 하이 오더 컴포넌트, news,jobs,ask 행동들이 같았기 때문에 공통으로 따로 잡음
export default function createListView(name) {
  return {
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리
    name,
    mounted() {
      bus.$emit('end:spinner')
    },
    render(createElement) {
      return createElement(ListView)
    }
  }
}