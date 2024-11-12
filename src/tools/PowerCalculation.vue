<template>
    <div :class="{ 'dark-mode': isDarkMode }">
     <SidebarComponent :isCollapsed="isSidebarCollapsed" />
      <main :class="{ 'collapsed-sidebar': isSidebarCollapsed }">
        <HeaderComponent
          :isDarkMode="isDarkMode"
          @toggleSidebar="toggleSidebar"
          @toggleDarkMode="toggleDarkMode"
        />
        <div class="tools-grid">
          Hallo
        </div>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    components: {
    },
    data() {
      return {
        isDarkMode: false,
        isSidebarCollapsed: false,
      };
    },
    methods: {
      toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
      },
      toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
      },
      toggleCategory(index) {
        this.categories[index].isCollapsed = !this.categories[index].isCollapsed;
      }
    }
  };
  </script>