const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

//Set up GET all and POST at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//Set up GET, UPDATE and DELETE at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//Set up POST and DELETE at /api/users/:id/friends/:friendId
router
    .route('/:userId/friends/:friendId')
    .post(addFriend)
    .delete(deleteFriend);

router.use((req, res) => {
    res.status(404).send('<h1>404 Error</h1>');
});

module.exports = router;