import { Router } from 'express'; const router = Router();
router.post('/deposit/initiate', (req,res)=>{ return res.json({ok:true,message:'binance init placeholder'}); });
router.post('/withdraw/initiate', (req,res)=>{ return res.json({ok:true,message:'binance withdraw placeholder'}); });
router.post('/webhook', (req,res)=>{ console.log('binance webhook', req.body); return res.json({ok:true}); });
export default router;
