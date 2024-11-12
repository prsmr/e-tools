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
      categories: [
        {
          name: 'Grundlagen',
          isCollapsed: false,
          tools: [
            { name: 'Spannungsfallberechnung', description: 'Berechnung des Spannungsfalls', icon: 'fas fa-voltmeter' },
            { name: 'Kabeldimensionierung', description: 'Dimensionierung von Kabeln und Leitungen', icon: 'fas fa-voltmeter' },
            { name: 'Leistungsberechnung', description: 'Berechnung der elektrischen Leistung', icon: 'fas fa-bolt' },
            { name: 'Kurzschlussstromberechnung', description: 'Berechnung des Kurzschlussstroms', icon: 'fas fa-plug' }
          ]
        },
        {
          name: 'Mittelspannung',
          isCollapsed: false,
          tools: [
            { name: 'Schaltgruppen', description: 'Gängige Schaltgruppen von Transformatoren', icon: 'fas fa-wave-square' },
            { name: ' ', description: ' ', icon: 'fas fa-tachometer-alt' },
            { name: ' ', description: ' ', icon: 'fas fa-random' }
          ]
        },
        {
          name: 'Brandmeldetechnik',
          isCollapsed: false,
          tools: [
            { name: 'BMA Cheat Sheet', description: ' ', icon: 'fas fa-wave-square' },
            { name: '0,6 Regel', description: ' ', icon: 'fas fa-tachometer-alt' },
            { name: ' ', description: ' ', icon: 'fas fa-random' }
          ]
        },
        {
          name: 'Datentechnik',
          isCollapsed: false,
          tools: [
            { name: ' ', description: ' ', icon: 'fas fa-wave-square' },
            { name: ' ', description: ' ', icon: 'fas fa-tachometer-alt' },
            { name: ' ', description: ' ', icon: 'fas fa-random' }
          ]
        }           
      ]
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