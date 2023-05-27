import {Request,Response} from 'express'
import pool from "../confing/db";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// register
export const register = async(req:Request,res:Response)=>{
    try { 
        const {username,email,password} = req.body
        const hashedPassword = await bcrypt.hash(password, 10);
        const client =await pool.connect()
        await client.query('INSERT INTO users(username,email,password) VALUES($1,$2,$3)',
        [username,email,hashedPassword])
        client.release();
        res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
      
      res.status(500).send('Internal Server Error');
  }
}

// login 
export const login = async(req:Request,res:Response)=>{
    try {
        const { email, password } = req.body;
  
        const client = await pool.connect();
        const result = await client.query(
        'SELECT * FROM users WHERE email = $1',
        [email]
      );
      client.release();
  
      const user = result.rows[0]
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ message: 'Invalid username or password' });
      }
      const token = jwt.sign({ userId: user.id }, 'secret_key', { expiresIn: '1h' });
      res.status(200).json({ token });
       } catch (error) {
        res.status(500).send('Internal Server Error');
       }
}

