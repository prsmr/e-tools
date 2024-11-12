<template>
  <div class="tool-tile">
    Hello
  </div>
</template>

<script>
export default {
  name: 'ToolTile',
  props: {
    tool: Object
  }
};
</script>

<style scoped>
.tool-tile {
  border: 1px solid #ccc;
  padding: 15px;
  text-align: left;
  background: #1a1d1e;
}

.tool-tile:hover {
  border-color: #0578ff;
}

router-link {
  text-decoration: none;
  color: inherit;
}
</style>
