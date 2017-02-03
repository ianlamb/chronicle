<template>
  <div class="character">
    <div class="overview-container">
      <overview :model="overview"></overview>
    </div>
    <div class="details-container">
      <abilities></abilities>
      <div class="skills-container">
        <skill v-for="skill in skills" :model="skill"></ability>
      </div>
      <div class="status-container">
      </div>
      <div class="traits-container">
      </div>
    </div>
  </div>
</template>

<script>
import Overview from './Overview'
import Abilities from './Abilities'
import Skill from './Skill'

export default {
  name: 'character',
  components: {
    Overview,
    Abilities,
    Skill
  },
  data () {
    return {
      overview: {
        name: '',
        class: '',
        level: '',
        background: '',
        playerName: '',
        race: '',
        alignment: '',
        xp: ''
      },
      skills: [
        {
          name: 'Athletics',
          abilityMod: 'str'
        }
      ]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.character {
  display: flex;
  flex-direction: column;
}

.overview-container {
  flex: 1;
  display: flex;
  flex-direction: row;
  border: 1px solid dimgray;
  margin: 20px;
}

.details-container {
  flex: 9;
  display: flex;
  flex-direction: row;
  border: 1px solid dimgray;
  margin: 20px;
}

.abilities-container {
  flex: 1;
  border: 1px solid dimgray;
  margin: 20px;
}

.skills-container {
  flex: 2;
  border: 1px solid dimgray;
  margin: 20px;
}

.status-container {
  flex: 3;
  border: 1px solid dimgray;
  margin: 20px;
}

.traits-container {
  flex: 3;
  border: 1px solid dimgray;
  margin: 20px;
}
</style>
