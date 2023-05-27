import express, { Request, Response } from 'express';
import router from './routes';
import * as dotenv from 'dotenv'
const app = express();
const port = 5000;

dotenv.config();

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  console.log(process.env.SA)
  res.send('Hello, TypeScript with Express!');
  
});

app.use("/api",router)


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
