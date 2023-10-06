import {Request, Response, Router} from "express";

export const signupController = Router();

function signupHandler(req: Request, res: Response) {
  return res.status(201).send()
}

signupController.post('/signup', signupHandler)
