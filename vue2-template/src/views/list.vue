<template>
  <div>
    <div class="conts">
      <div class="title">
        <span>翻译成的语言：</span>
        <el-select v-model="qeruy.lang" placeholder="请选择">
          <el-option value="意大利"></el-option>
          <el-option value="日语"></el-option>
          <el-option value="英语"></el-option>
          <el-option value="德语"></el-option>
        </el-select>
      </div>

      <div class="inputs">
        <textarea class="texts" v-model="qeruy.vords" @input="change"></textarea>
        <textarea class="texts" v-model="val" disabled="true"></textarea>
      </div>
    </div>
  </div>
</template>

<script>
import { getlistApi } from "@/api/index"
export default {
  data() {
    return {
      qeruy: {
        vords: '',
        lang: '意大利',
      },
      val: '',
    };
  },
  methods: {
    getlist() {
      getlistApi(this.qeruy).then(res => {
        this.val = res.data.data
      })
    },
    change() {
      this.getlist()

    }
  },
  computed: {},
  components: {},
  filters: {},
  watch: {
    'qeruy.lang':{
      handler(){
         this.getlist()
      }
    }
  },
  created() {

  },
};
</script>

<style lang="scss" scoped>
.conts {
  margin: 50px auto;
  width: 600px;
  height: 300px;
  border: 1px solid #ccc
}

.inputs {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.texts {
  width: 280px;
  height: 200px;
  margin: 10px 0 0 0;
  resize: none;
}
</style>
