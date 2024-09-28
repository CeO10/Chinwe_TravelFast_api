import express from 'express';
import AuthController from "../../controllers/auth.controller.js";
import AuthMiddleware from "../../middleware/auth.middleware.js";


const Router = express.Router();
router.registerRoutes(routes)

// Mock database
const users = [{
    id: 'UUID',
    email: 'johndoe@example.com',
}];

// CRUD functions
Router.get('/', (req, res) => {
    res.send(users)
});

Router.post('/', authMiddleware, authController)

Router.get('/id', authMiddleware)

Router.put('/id', authMiddleware)

Router.delete('/id', authMiddleware)


export default Router