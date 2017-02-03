<template>
  <div class="abilities-container">
    <div v-for="ability in model" class="ability">
      <h5>{{ ability.label }}</h5>
      <input type="number" min="0" max="20" class="ability-score" :value="ability.value" :data-ability="ability.handle" @change="updateAbility" />
      <div class="ability-modifier">{{ ability.modifier }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
// import Util from '../lib/util'

export default {
  name: 'abilities',
  data () {
    return {}
  },
  computed: mapGetters({
    model: 'characterAbilities'
  }),
  methods: mapActions([
    'updateAbility'
  ]),
  created () {
    // this.$store.dispatch('getAllAbilities')
  }
}
</script>

<style scoped>
  .ability {
    border: 1px solid dimgray;
    margin: 20px;
  }

  .ability-score {
    width: 40px;
    text-align: center;
    padding-left: 20px;
  }

  .ability-modifier {
    line-height: 20px;
    padding: 5px;
    font-size: 20px;
    font-weight: bold;
  }
</style>
