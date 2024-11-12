<template>
  <div :class="{ 'dark-mode': isDarkMode }">
    <SidebarComponent :isCollapsed="isSidebarCollapsed" />
    <main :class="{ 'collapsed-sidebar': isSidebarCollapsed }">
      <HeaderComponent
        :isDarkMode="isDarkMode"
        @toggleSidebar="toggleSidebar"
        @toggleDarkMode="toggleDarkMode"
      />
      <div class="tool-page">
        <h1>{{ toolId }} - Tool Details</h1>
        <p>Hier können Sie das Tool {{ toolId }} benutzen.</p>
        <!-- Tool-spezifischer Inhalt wird hier angezeigt -->
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'ToolPage',
  data() {
    return {
      isDarkMode: false,
      isSidebarCollapsed: false,
    };
  },
  computed: {
    toolId() {
      // Der Parameter wird aus der Route extrahiert
      return this.$route.params.toolId;
    }
  },
  methods: {
    toggleSidebar() {
      this.isSidebarCollapsed = !this.isSidebarCollapsed;
    },
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
    }
  }
};
</script>

<style scoped>
.tool-page {
  padding: 20px;
}
</style>
