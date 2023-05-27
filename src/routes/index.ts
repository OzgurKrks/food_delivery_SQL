import express,{Router} from 'express'
import authRouter from './authRoute'
import orderRouter from './orderRoute'


const router:Router = express.Router()

router.use("/auth",authRouter)
router.use("/order",orderRouter)



export default router