<template>
  <div class="browser">
    <div class="url-bar">
      <span class="input">{{ url }}</span>
      <button @click="refresh">Refresh</button>
    </div>
    <iframe ref="browserFrame" frameborder="0" />
  </div>
</template>

<script>
export default {
  props: {
    url: { type: String, required: true }
  },
  methods: {
    refresh() {
      this.$refs.browserFrame.src = 'about:blank';
      setTimeout(() => {
        this.$refs.browserFrame.src = this.url;
      }, 50);
    }
  }
}
</script>

<style scoped>
.browser {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.url-bar {
  display: flex;
  padding: 2px 0;
  border-bottom: 1px solid #ddd;
}

.url-bar .input {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 14px;
}

.url-bar button {
  padding: 4px;
  border: none;
  border-radius: 5px;
  background-color: #4CAF50;
  color: white;
  cursor: pointer;
}

.url-bar button:hover {
  background-color: #45a049;
}

iframe {
  flex: 1;
  border: none;
}
</style>
