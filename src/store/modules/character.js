import * as types from '../mutation-types'
import Util from '../../lib/util'
// import api from '../../api'

// initial state
const state = {
  abilities: [
    {
      handle: 'str',
      label: 'Strength',
      value: 10,
      modifier: 0
    },
    {
      handle: 'dex',
      label: 'Dexterity',
      value: 10,
      modifier: 0
    },
    {
      handle: 'con',
      label: 'Constitution',
      value: 10,
      modifier: 0
    },
    {
      handle: 'int',
      label: 'Intelligence',
      value: 10,
      modifier: 0
    },
    {
      handle: 'wis',
      label: 'Wisdom',
      value: 10,
      modifier: 0
    },
    {
      handle: 'cha',
      label: 'Charisma',
      value: 10,
      modifier: 0
    }
  ]
}

// getters
const getters = {
  allAbilities: state => state.abilities
}

// actions
const actions = {
//   getAllProducts ({ commit }) {
//     api.getAbilities(abilities => {
//       commit(types.UPDATE_ABILITY, { abilities })
//     })
//   }
}

// mutations
const mutations = {
  [types.UPDATE_ABILITY] (state, { e }) {
    let ability = state.abilities.find(a => a.handle === e.target.dataset.ability)
    ability.value = e.target.value
    ability.modifier = Util.getAbilityMod(ability.value)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
