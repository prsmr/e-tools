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
        <div v-for="(category, index) in categories" :key="index" class="category-section">
          <div class="category-header" @click="toggleCategory(index)">
            <h2>{{ category.name }}</h2>
            <span class="toggle-icon">{{ category.isCollapsed ? '▼' : '▲' }}</span>
          </div>
          <div v-show="!category.isCollapsed" class="tools">
            <div
              v-for="tool in category.tools"
              :key="tool.name"
              class="tool-tile"
            >
              <!-- Router-Link für jedes Tool -->
              <router-link :to="{ name: 'ToolPage', params: { toolId: tool.name } }">
                <div class="tool-icon">
                  <i :class="tool.icon"></i>
                </div>
                <div class="tool-info">
                  <h3>{{ tool.name }}</h3>
                  <p class="tool-description">{{ tool.description }}</p>
                </div>
              </router-link>
            </div>
          </div>
        </div>
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
            { name: 'hallo', description: 'Berechnung des Widerstands', icon: 'fas fa-voltmeter' },
            { name: 'Leistungsberechnung', description: 'Berechnung der elektrischen Leistung', icon: 'fas fa-bolt' },
            { name: 'Kurzschlussstromberechnung', description: 'Widerstand eines Bauteils', icon: 'fas fa-plug' }
          ]
        },
        {
          name: 'Messgeräte',
          isCollapsed: false,
          tools: [
            { name: 'Oszilloskop', description: 'Visualisierung von Signalwellen', icon: 'fas fa-wave-square' },
            { name: 'Multimeter', description: 'Messung von Spannung, Strom und Widerstand', icon: 'fas fa-tachometer-alt' },
            { name: 'Frequenzgenerator', description: 'Erzeugung von Testfrequenzen', icon: 'fas fa-random' }
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

<style scoped>
/* Die Grid-Layout-Styles bleiben unverändert */
.tools-grid {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
}

.category-section {
  margin-bottom: 40px;
}

.category-header {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  padding: 10px 20px;
  background-color: var(--primary-color-light);
  border-radius: 5px;
  color: #fff;
}

.category-header h2 {
  margin: 0;
}

.category-header .toggle-icon {
  font-size: 1.2rem;
  color: #fff;
}

.category-header:hover {
  background-color: var(--primary-color);
}

.tools {
  padding-left: 20px;
}

.tool-tile {
  background-color: var(--tile-bg);
  padding: 15px;
  text-align: left;
  border: 1px solid #ccc;
  transition: border 0.3s;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.tool-tile:hover {
  border: 1px solid #0578ff;
}

.tool-icon i {
  font-size: 24px;
  margin-bottom: 10px;
}

.tool-info h3 {
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-color);
  margin: 0;
}

.tool-description {
  font-size: 14px;
  color: var(--secondary-color);
  margin-top: 5px;
}

/* Router-Link-Styles */
router-link {
  text-decoration: none;
  color: inherit;
}
</style>
