import express,{Application, Request, Response, NextFunction} from 'express';
import palindrome from './palindrome';
import { v4 as uuid } from 'uuid';
import journal from '@ct-shipping/journal'
import milieu from '@ct-shipping/milieu';

const app: Application = express();
const PORT = 3005;
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  const id = req.headers['x-correlation-id'];
  const traceID = id || uuid();
  milieu.set('x-correlation-id', traceID);
  milieu.run(() => {
    journal.registerContext('x-correlation-id');
    if (id) {
      journal.info(`Request received with valid x-correlation-id:${id}`);
    } else {
      journal.info(
        `x-correlation-id was missing from the request. Generated new: ${traceID}`
      );
    }
    next();
  });
});

app.post('/', (req, res) => {
  const { value } = req.body;
  const constr = value.concat("D")
  journal.info(
    `Calling 5th microservice with data: ${JSON.stringify({ value: constr })}`
  );
  res.send({value : constr}); 
})

app.get('/test/:string', (req: Request, res: Response) => {
  const str: String = req.params.string;
  const bool = palindrome(str);
  res.status(200).send(bool);
})

app.listen(PORT, () => {
  console.log("listening")
});
