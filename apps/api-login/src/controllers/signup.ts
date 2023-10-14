import { Request, Response, Router } from 'express';
import { z } from 'zod';

export const signupController = Router();

const PASSWORD_PATTERN =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*]).*$/;

const SignUpFormData = z.object({
  email: z.string().min(1, 'Required').email('Invalid email'),
  password: z.string().min(1, 'Required').regex(PASSWORD_PATTERN, 'Too easy'),
});

function signupHandler(req: Request, res: Response) {
  // validation should also happen here
  try {
    SignUpFormData.parse(req.body);
  } catch (e) {
    return res.status(422).send(e.issues);
  }
  // then processing/db storage
  return res.status(201).send();
}

signupController.post('/signup', signupHandler);
