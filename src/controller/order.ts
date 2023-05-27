import {Request,Response} from 'express'
import pool from '../confing/db';

interface AuthenticatedRequest extends Request {
    user?: any;
  }

// to order
export const order = async(req:AuthenticatedRequest,res:Response)=>{
    try {
        const {userId} = req.user
        const {id} = req.params

        const client = await pool.connect()
        await client.query('INSERT INTO orders(food_id,user_id) VALUES($1,$2)',
        [id,userId])
        client.release()
        
        res.status(200).json({
            message:"succes",
            data:client
        })
        
    } catch (error) {
        res.status(500).json({message:"Error"})
    }
}

// remove product
export const remove = async(req:AuthenticatedRequest,res:Response)=>{
        try {
            const {id} = req.params
            const client = await pool.connect()
            await client.query('DELETE FROM orders WHERE id = $1',[id])
            client.release()
            
            res.status(200).json({
                message:"succes",
                data:client
            })
            
        } catch (error) {
            res.status(500).json({message:"Error"})
        }
}
