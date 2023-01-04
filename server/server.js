import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';


const PORT = 5000;
// App config
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DB config
mongoose.connect('mongodb://localhost:27017/mren-trecker', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log(err);
});

// API endpoints
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post('/transactions', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});