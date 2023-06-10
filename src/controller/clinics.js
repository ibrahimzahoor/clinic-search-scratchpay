const axios = require("axios");

const { DENTAL_CLINICS_SOURCE, VET_CLINICS_SOURCE } = require("../utils/constants");
const { updateVetClinicsKeys, transformState } = require("../utils/helpers");

/**
 * Return clinics based on query
 * @public
 */
const SearchClinics = async (req, res) => {
    try {
        const { name: queryName, state: queryState, from: queryFrom, to: queryTo } = req.query;

        const [dentalClinics, vetClinics] = await Promise.all([
            axios.get(DENTAL_CLINICS_SOURCE).then(res => res.data),
            axios.get(VET_CLINICS_SOURCE).then(res => res.data)
        ]);
        
        const allClinics = dentalClinics.concat(updateVetClinicsKeys(vetClinics));

        const filteredClinics = allClinics.filter(({ name, stateName: state, from, to }) => (
            queryName ? name.toLowerCase().includes(queryName.toLowerCase()) : true &&
            queryState ? state.toLowerCase() == transformState(queryState) : true &&
            queryFrom ? from == queryFrom : true &&
            queryTo ? to == queryTo : true))
        
        res.send(filteredClinics);
    }
    catch (error) {
        console.log(error)
        res.sendStatus(500);
    }
};

module.exports = SearchClinics;
