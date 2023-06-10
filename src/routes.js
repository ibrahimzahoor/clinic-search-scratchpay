const express = require('express');
const router = express.Router();

const SearchClinics = require('./controller/clinics');

/**
 * @api {get} /search-clinics Query Clinics
 * @apiDescription Get a list of clinics
 * @apiVersion 1.0.0
 * @apiName SearchClinics
 * @apiGroup Clinics
 *
 *
 * @apiParam  {String}    [name]                        Clinic's name
 * @apiParam  {String}    [state=CA or California]      State code or name
 * @apiParam  {String}    [to=09:00]                    Availability to
 * @apiParam  {String}    [from]                        Availability from
 *
 * @apiSuccess {Object[]} List of clinics.
 *
 * @apiError (Internal Server Error 500)
 */
router.get("/search-clinics", SearchClinics);

module.exports = router;
