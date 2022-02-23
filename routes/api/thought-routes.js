const router = require('express').Router();
const { 
    getAllThought,
    getThoughtById,
    addThought, 
    updateThought,
    removeThought,
    addReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

// set up GET all and POST at /api/thoughts
router
    .route('/')
    .get(getAllThought)
    .post(addThought),

// set up GET, PUT and DELETE at /api/thoughts/<thoughtId>
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(removeThought),

// set up POST and DELETE at /api/thoughts/<thoughtId>/reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteReaction),

module.exports = router;