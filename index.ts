import express from 'express';
import bodyParser from 'body-parser';
import paystack from './routes/paystack';
import binance from './routes/binance';
import admin from './routes/admin';
const app = express(); app.use(bodyParser.json());
app.use('/api/paystack', paystack); app.use('/api/binance', binance); app.use('/api/admin', admin);
app.get('/api/status',(req,res)=>res.json({ok:true, name:'Vaultara Backend'}));
const port = process.env.PORT || 4000; app.listen(port, ()=>console.log('listening', port));
