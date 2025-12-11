import { Router } from 'express'; const router = Router();
router.get('/withdrawals', (req,res)=>{ return res.json({withdrawals:[]}); });
router.post('/withdrawals/approve', (req,res)=>{ return res.json({ok:true}); });
export default router;
