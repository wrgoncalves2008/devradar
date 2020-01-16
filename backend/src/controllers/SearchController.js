const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/ParseStringAsArray')

module.exports = {

    async index(req, res) {
        const { latitude, longitude, techs } = req.query;

        const techArray = parseStringAsArray(techs);

        const devs = Dev.find({
            techs: { $in: techArray },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                }
            }
        });

        return res.json(devs);

    }
}