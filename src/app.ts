import type {NextFunction, Request, Response} from 'express';
import express from 'express';

const app = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({sup: true});
});

app.use((req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization === undefined) {
    return res.status(403).json({error: 'User Not Authorized'});
  }
  next();
});

app.get('/user', (req: Request, res: Response) => {
  return res.status(200).json({name: 'Victor', id: '12345'});
});

app.listen(port, () => {
  console.log('API listening on port http://localhost:8080/');
});
