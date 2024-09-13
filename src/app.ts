import type {NextFunction, Request, Response} from 'express';
import express from 'express';

const app = express();
const port = 8080;

// TODO: Configure cors policy
app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({sup: true});
});

// TODO: Add to seperate file
app.use((req: Request, res: Response, next: NextFunction) => {
  // FIXME: Call SDK/API in authorize user token
  if (req.headers.authorization === undefined) {
    return res.status(403).json({error: 'User Not Authorized'});
  }
  next();
});

app.get('/user', (req: Request, res: Response) => {
  return res.status(200).json({name: 'Victor', id: '12345'});
});

// TODO: Configure environment with zod and add port 8080 as ENV.PORT
app.listen(port, () => {
  console.log('API listening on port http://localhost:8080/');
});
