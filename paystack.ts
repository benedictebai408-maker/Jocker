import { Router } from 'express'; const router = Router();
router.post('/deposit/initiate', (req,res)=>{ return res.json({ok:true,message:'paystack init placeholder'}); });
export default router;
