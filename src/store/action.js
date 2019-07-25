// 如果需要在一个动作中多次提交mutation 则这种场景下最好定义一个action
import * as types from './mutation-types'
// 注意第二个参数接受的是一个对象 但是用的时候直接用的哦
export const selectPlay = function ({commit, state}, {list, index}) {
  commit(types.SET_SQUENCE_LIST, list)
  commit(types.SET_PLAYING_STATE, true)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_CURRENT_INDEX, index)
}