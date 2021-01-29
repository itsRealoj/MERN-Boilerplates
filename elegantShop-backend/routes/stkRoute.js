import express from 'express'
const router = express.Router()
import { getStkPayment } from '../controllers/stkController.js'

router.route('/').get(getStkPayment)
router.get('/stk', getStkPayment)
router
  .get(getStkPayment)

export default router
