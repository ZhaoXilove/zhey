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
  getters: {},
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'viking' }
    }
  },
  actions: {},
  modules: {}
})
