<template>
    <header>企朋六一幸运抽</header>
    <div class="container">{{gift}}</div>
    <div class="btn" v-if="!isStart" @click="start">start</div>
    <div class="btn" v-else @click="end">stop</div>
    <div class="clear" @click="clear">clear</div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { getConfig } from './config/config'
let giftListFlag = []
let giftConfig = {}
const giftList = ref([])
const random = ref(0)
const isStart = ref(false)
let time = null;
let randomFlag = 0  // 临时变量
const gift = computed(() => {
  if(giftList.value[random.value]) {
    return giftList.value[random.value]
  } else {
    return giftList.value[0]
  }
})

const changeNum = () => {
  const length = giftList.value.length
  randomFlag = getRandom(0, length)
  if(randomFlag == random.value) {
    changeNum()
  } else {
    random.value = randomFlag
  }
}

const start = () => {
  isStart.value = true
  if(giftListFlag.length <= 1) return
  giftList.value = giftListFlag
  time = setInterval(() => {
    changeNum()
  }, 100)
}

const end = () => {
  isStart.value = false
  clearInterval(time)
  const choose = giftList.value[random.value]
  giftConfig[choose] -= 1
  if(giftConfig[choose] == 0) {
    giftListFlag.splice(random.value, 1)
    delete giftConfig[choose]
  }
  localStorage.setItem('wjlChoujiang', JSON.stringify(giftConfig))
}

const clear = () => {
  localStorage.setItem('wjlChoujiang', '')
  window.location.reload()
}

const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

onMounted(() => {
  giftConfig = getConfig()
  giftListFlag = Object.keys(giftConfig)
})

</script>

<style lang="less">
html,
body,
#app{
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
* {
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("./assets/bg.jpeg") no-repeat;
  background-size: 100% 100%;
  padding-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  header {
    color: #ff6699;
    font-size: 66px;
    letter-spacing: 20px;
  }
  .container {
    width: 1000px;
    height: 420px;
    background-color: rgba(255, 102, 153, 0.3);
    border-radius: 12px;
    margin-top: 88px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 120px;
    color: #0099ff;
  }
  .btn {
    width: 200px;
    height: 80px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 32px;
    justify-content: center;
    font-size: 32px;
    font-weight: bold;
    animation: btnAn 0.8s infinite;
    color: #0099ff;
    background-color: #ffff99;
  }
  .clear {
    width: 50px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
}

@keyframes btnAn {
  0% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(0.8);
  }
  100% {
    transform: scale(1.1);
  }
}
</style>