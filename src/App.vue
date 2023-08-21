<script setup>
import { ref, onMounted } from 'vue'
import ChildButton from 'common/components/button.vue'
import { judgeIsEqual, formatNumber } from 'common/libs/util.js'

const isFlag = ref(false)
const number = ref(123456789)

function testCommonFun() {
  return judgeIsEqual(1, 1)
}
onMounted(() => {
  isFlag.value = testCommonFun()
  number.value = formatNumber(number.value)
})

</script>

<template>
  <ChildButton/>
  {{ isFlag }}
  {{ number }}
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
