import express from 'express';

import path from 'path';
import fs from 'fs';
import routes from './routes';


const app = express();

app.use('/clinic-router', routes);
app.use((req,res)=>{
    res.status(404).send('404: page not found')
})
app.listen(5000, ()=>{
    console.log('running on port')

})