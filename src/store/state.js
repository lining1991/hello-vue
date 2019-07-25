import {playMode} from 'common/js/config'
const state = {
  singer: {},
  playing: false,
  fullScree: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequence,
  currentIndex: -1
}
export default state
// export let a = 3;
// let b = 3;
// export {b};
// let c = 4;
// export {c as d};
// export {d as default}

// import {a} from 'a.js';
// import {b as A} from 'a.js';
// import c; 注意如果什么都不加 会执行这个模块
