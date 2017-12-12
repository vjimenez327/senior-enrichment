const router = require('express').Router();
const Student = require('../db/models/student'); 

router.param('id', (req, res, next, id) => {
    Student.findById(id)
    .then(student => {
        if(student) {
            req.student = student;
            next();
        } else {
            const error = new Error('Student not found');
            error.status(404);
            throw error;
        }
    })
    .catch(next);
});

router.get('/', (req, res, next) => {
    Student.findAll()
    .then(students => res.send(students))
    .catch(next);
})

router.get('/:id', (req, res, next) => {
    res.json(req.student);
})



router.put('/:id', (req, res, next) => {
    req.student.update(req.body)
    .then(student => {
        res.json(student)
    })
    .catch(next);
})

router.post('/', (req, res, next) => {
    Student.create(req.body)
    .then(newStudent => res.send(newStudent))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
    req.student.destroy()
    .then((response) => {
        res.sendStatus(202)})
    .catch(next)
})

module.exports = router;