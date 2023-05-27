import { Request, Response, NextFunction } from 'express';
import jwt, { VerifyErrors } from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
  user?: any;
}

// authenticate middleware
function authenticateToken(req: AuthenticatedRequest, res: Response, next: NextFunction) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Access token not found' });
  }

  jwt.verify(token, 'secret_key', (error: VerifyErrors | null, user: any) => {
    if (error) {
      return res.status(403).json({ message: 'Invalid token' });
    }

    req.user = user;
    next();
  });
}

export default authenticateToken;
