import express from 'express';
import { getTopUsers} from '../Controllers/userController.js';
const userRouter = express.Router();
userRouter.get("/hostname/users",getTopUsers);
export default userRouter;