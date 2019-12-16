import express from 'express';
import bodyparser from 'body-parser';
import path from  'path';
import userRoute from './Src/routes/userRoute';
import flagRoute from './Src/routes/flagRoute';

const app = express();

app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.send({
  status:(200),
  message: ' Welcome to Broadcaster API endpoints!'
  + 'The platform of reg flags and intervations'
}));

app.use('/api/v2/auth', userRoute);
app.use('/api/v2', flagRoute);

let port = process.env.PORT || 6000;

const server = app.listen(port, console.log(`App running on port ${port}`));

export default server;
