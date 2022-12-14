import express from 'express';
import routes from './src/routes/crmRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// Mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/CRMdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// bodyParser setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

// serving static files
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send(`Express running on port ${PORT}`);
});

app.listen(PORT, () => {
  console.log(`The server is running on the port: ${PORT}`);
});
