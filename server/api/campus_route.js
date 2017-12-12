const router = require('express').Router();
const Campus = require('../db/models/campus');

router.param('id', (req, res, next, id) => {
    Campus.findById(id)
    .then(campus => {
        if (campus) {
            req.campus = campus;
            next();
        } else {
            const error = new Error('Can\'t find selected campus');
            error.status(404);
            throw error;
        }
    })
    .catch(next);
});


router.get('/', (req, res, next) => {
    Campus.findAll()
    .then(campuses => res.send(campuses))
    .catch(next);

});

router.get('/:id', (req, res, next) => {
    Campus.findById(req.params.id)
    .then(campus => res.send(campus))
    .catch(next);
});

router.post('/', (req, res, next) => {
    Campus.create(req.body)
    .then(newCampus => res.send(newCampus))
    .catch(next);
});

router.put('/:id', (req, res, next) => {
    req.campus.update(req.body)
    .then(campus => res.json(campus))
    .catch(next);
});

router.delete('/:id', (req, res, next) => {
    req.campus.destroy()
    .then(( ) => res.sendStatus(202))
    .catch(next);
});

module.exports = router;
