import { createStore } from 'vuex'
import ColumnListProp, {
  testData,
  testPosts,
  PostProps
} from '@/types/ColumnList'
interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
}
export interface GlobalDataProps {
  columns: ColumnListProp[]
  posts: PostProps[]
  user: UserProps
}
export default createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: {
      isLogin: false
    }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'viking' }
    }
  },
  getters: {
    biggerColumnLen(state) {
      return state.columns.filter((c) => c.id > 2).length
    },
    getColumnById: (state) => (id: number) => {
      return state.columns.find((c) => c.id === id)
    },
    getPostsByCid: (state) => (cid: number) => {
      return state.posts.filter((post) => post.columnId === cid)
    }
  },
  actions: {},
  modules: {}
})
