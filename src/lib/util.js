export default {
  getAbilityMod (abilityScore) {
    let retval = 0
    if (abilityScore > 10) {
      retval = Math.floor(abilityScore / 2) - 5
      if (retval > 0) {
        retval = '+' + retval
      }
    } else if (abilityScore < 10) {
      retval = Math.ceil(abilityScore / 2) - 6
    }

    return retval
  }
}
