import express from 'express';


const app = express();


app.get('/', (req, res) => res.json('My API running'));

app.listen(3031, ()=> console.log('server listening on port 3031'));