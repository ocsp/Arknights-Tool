import Vue from 'vue';
import Vuex from 'vuex';
import level from "@/assets/levels/obt/campaign/level_camp_03.json";
import range1 from "@/assets/range_table.json";
Vue.use(Vuex);
const state = {
  enemyBaseData: {
    'maxHp': 10000,
    'atk': 5000,
    'baseAttackTime': 1,
    'atkTimes': 1,
    'def': 1000,
    'magicResistance': 40,
    'moveSpeed': 1,
    'hpRecoveryPerSec': 0,
    'massLevel': 0,
    'magicAtk': false,
    'stunImmune': false,
    'silenceImmune': false,
  },
  charBaseData: {
    "maxHp": 200000,
    "atk": 1200,
    "def": 200,
    "magicResistance": 100.0,
    "cost": 3,
    "blockCnt": 1,
    "moveSpeed": 1.0,
    "attackSpeed": 100.0,
    "baseAttackTime": 1,
    'atkTimes': 1,
    "respawnTime": 200,
    "hpRecoveryPerSec": 0.0,
    "spRecoveryPerSec": 1.0,
    "maxDeployCount": 1,
    "maxDeckStackCnt": 0,
    "tauntLevel": 0,
    "massLevel": 0,
    "baseForceLevel": 0,
    'magicAtk': false,
    "stunImmune": false,
    "silenceImmune": false
  },
  // 需要初始化才能调用
  temporaryED: {
  },
  temporaryCD: {
  },
  //配置
  config: {
    runTime: 30000,
    runSpeed: 1.0,
    fullSimulation: false,
    autoRelease: false,
    autoStop: false,
    charAtk: true,
    enemyAtk: true,
    assault: false,
    cV: 'maxHp',
    eV: 'maxHp'
  },
  mapMeta: {
    mapData: level.mapData,
    runData: [],
    attackDisplay:true,
    char: {
      position: 70,
      range: range1["3-1"]
    }
  }
};
const getters = {
  getEnemyData() {
    return state.enemyBaseData
  },
  getCharData() {
    return state.charBaseData
  },
  getTemporaryED() {
    return state.temporaryED
  },
  getTemporaryCD() {
    return state.temporaryCD
  },
  getConfig() {
    return state.config
  }
};
const mutations = {
  newEnemyData(state, a) {
    state.enemyBaseData = a;
  },
  newCharData(state, a) {
    state.charBaseData = a;
  },
  changeTemporaryED(state, a) {
    state.temporaryED = a;
  },
  changeTemporaryCD(state, a) {
    state.temporaryCD = a;
  },
  changeConfig(state, a) {
    state.config = a;
  },
  changeState(state, a) {
    state.config.fullSimulation = a;
  }
};
const actions = {/*
  setNewEnemyData(context, n) {
    context.commit('newEnemyData', n)
  },*/
  setCharData(context, n) {
    context.commit('newCharData', n)
  },
  setTemporaryED(context, n) {
    context.commit('changeTemporaryED', n)
  },
  setTemporaryCD(context, n) {
    context.commit('changeTemporaryCD', n)
  },
  setConfig(context, n) {
    context.commit('changeConfig', n)
  },
  setState(context, n) {
    context.commit('changeState', n)
  }
};
const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
export default store;