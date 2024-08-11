import * as jwt from 'jsonwebtoken';
import { Request } from 'express';

declare global {
  namespace Express {
    interface Request {
      user?: jwt.JwtPayload; // Adjust the type based on what `user` actually contains
    }
  }
}
