import express,{Application, Request, Response, NextFunction} from 'express';
import palindrome from './palindrome';
import journal from '@ct-shipping/journal'
import milieu from '@ct-shipping/milieu';

const app: Application = express();

const PORT = 3003;
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  const traceID = req.headers.traceid;
  milieu.set('x-trace-id', traceID);
  milieu.run(() => {
    journal.registerContext('x-trace-id');
    journal.info(`Trace ID was injected: ${traceID}`);
    next();
  });
});

app.post('/d', (req, res) => {
  const { str } = req.body;
  const constr = str.concat("D-micro")
  res.send(constr); 
})

app.get('/test/:string', (req: Request, res: Response) => {
  const str: String = req.params.string;
  const bool = palindrome(str);
  res.status(200).send(bool);
})

app.listen(PORT, () => {
  console.log("listening")
});
