import { Request, Response, Router } from 'express';

export const signupController = Router();

function signupHandler(req: Request, res: Response) {
  // validation should also happen here
  // then processing/db storage
  return res.status(201).send();
}

signupController.post('/signup', signupHandler);
