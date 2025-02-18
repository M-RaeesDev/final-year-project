import express from 'express';
import { google, signin, signOut, signup } from '../controllers/auth.controller.js';

const authRouter = express.Router()

authRouter.post('/signup', signup)
authRouter.post('/signin', signin)
authRouter.post('/google', google)
authRouter.get('/signout', signOut)

export default authRouter;