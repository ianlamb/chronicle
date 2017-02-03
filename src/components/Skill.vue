<template>
  <div class="skill">
    <input type="checkbox" v-model="specialized" class="skill-specialized" />
    <input type="text" v-model="model.value" class="skill-value" disabled />
    <label class="skill-label">{{ model.name }}</label>
  </div>
</template>

<script>
import Util from '../lib/util'

export default {
  name: 'skill',
  props: ['model', 'abilities'],
  data () {
    return {
      specialized: false
    }
  },
  computed: {
  },
  watch: {
    abilities: (val) => {
      let abilityMod = 0
      for (let i = 0; i < val.length; i++) {
        if (val[i].type === this.skill.abilityMod) {
          abilityMod = Util.getAbilityMod(val[i].value)
        }
      }
      this.skill.value = abilityMod + (this.specialized ? 2 : 0)
    },
    deep: true
  }
}
</script>

<style scoped>
  .skill {
    display: flex;
    flex-direction: row;
    margin: 20px;
  }

  .skill-specialized {
    flex: 0 40px;
    margin-top: 10px;
  }

  .skill-value {
    flex: 0 20px;
    width: 20px;
    text-align: center;
  }

  .skill-label {
    flex: 1;
    margin-top: 10px;
    text-transform: capitalize;
  }
</style>
