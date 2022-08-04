import { createStore } from 'vuex'
import ColumnListProp, { testData, testPosts } from '@/types/ColumnList'
interface UserProps {
  isLogin: boolean
  name?: string
  id?: number
  columnId?: number
}

export interface PostProps {
  id: number
  title: string
  content?: string
  image?: string
  createdAt?: string
  columnId: number
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
      isLogin: true,
      name: 'viking',
      columnId: 1
    }
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: 'viking' }
    },
    createPost(state, newPost) {
      state.posts.push(newPost)
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
