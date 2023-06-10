const { states } = require("./constants");

const updateVetClinicsKeys = (vetClinics) => {
  return vetClinics.map(({
    clinicName: name,
    stateCode,
    opening: availability
  }) => ({
    name,
    stateName: states[stateCode],
    availability
  }));
};

const transformState = (state) => {
  if (state.length === 2) {
    return states[state.toUpperCase()];
  }
  return state.toLowerCase();
};                  

module.exports = {
  updateVetClinicsKeys,
  transformState
};