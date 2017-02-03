<template>
  <div class="overview">
    <div class="overview-name-container">
      <div class="overview-detail">
        <input type="text" v-model="model.name" class="overview-name" />
        <label>Character Name</label>
      </div>
    </div>
    <div class="overview-details-container">
      <div class="overview-detail">
        <input type="text" v-model="model.class" class="overview-class" />
        <label>Class</label>
      </div>
      <div class="overview-detail">
        <input type="text" v-model="model.level" class="overview-level" />
        <label>Level</label>
      </div>
      <div class="overview-detail">
        <input type="text" v-model="model.background" class="overview-background" />
        <label>Background</label>
      </div>
      <div class="overview-detail">
        <input type="text" v-model="model.playerName" class="overview-playerName" />
        <label>Player Name</label>
      </div>
      <div class="overview-detail">
        <input type="text" v-model="model.race" class="overview-race" />
        <label>Race</label>
      </div>
      <div class="overview-detail">
        <input type="text" v-model="model.alignment" class="overview-alignment" />
        <label>Alignment</label>
      </div>
      <div class="overview-detail">
        <input type="text" v-model="model.xp" class="overview-xp" />
        <label>Experience Points</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'overview',
  props: ['model'],
  data () {
    return {}
  }
}
</script>

<style scoped>
  .overview {
    display: flex;
    flex-direction: row;
  }

  .overview-name-container {
    flex: 1;
  }

  .overview-details-container {
    flex: 2;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .overview-detail {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin: 20px 20px 20px;
  }
</style>
