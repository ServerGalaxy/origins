import express, {Request, Response} from 'express';

const app = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
  const name = 'Victor';
  return res.status(200).json({sup: true, name: name});
});

app.listen(port, () => {
  // TODO: Update 8080 to port const
  console.log('API listening on port http://localhost:8080/');
});
