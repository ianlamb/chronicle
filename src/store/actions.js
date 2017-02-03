import * as types from './mutation-types'

export const updateAbility = ({ commit }, e) => {
  commit(types.UPDATE_ABILITY, { e })
}
