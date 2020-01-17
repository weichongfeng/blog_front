<template>
    <div class="card rec-card">
        <div class="rec-info">
            <div class="rec-search-wrapper">
            <el-input class="rec-search" v-model="input" placeholder="请输入内容"></el-input>
            <el-button class="rec-search-button">搜索</el-button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MainSearch",
    data () {
      return {
          input: ''
      }
    }
}
</script>