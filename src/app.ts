import express, {Request, Response} from 'express';

const app = express();
const port = 8080;
// TESTING

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({sup: true});
});

app.get('/woah', (req: Request, res: Response) => {
  return res.status(200).json({sup: true, endpoint: 'woah'});
});
app.get('/service', (req: Request, res: Response) => {
  return res.status(200).json({sup: true, endpoint: 'woah'});
});

app.listen(port, () => {
  // TODO: Update 8080 to port const
  console.log('API listening on port http://localhost:8080/');
});
