import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.AUTH_TOKEN);
    const userId = decodedToken.userId;
    if (userId) {
      req.userId = userId;
      next();
    } else {
      return res.status(403).json({ message: 'Wrongly Signed' });
    }
  } catch {
    res.status(401).json({
      message: 'Request is not authenticated',
    });
  }
};