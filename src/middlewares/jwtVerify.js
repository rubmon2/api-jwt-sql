import React from 'react'
import { SECRET_KEY } from './jwtSign';


export const jwtVerify = (req,res, next) => {
  const headers = req.headers['authorization'];
  const token= headers && headers.split(" ")[1]

  if (!token) {
   res.status(403).json({ message: 'No se proporcionó un token' });
   return
  }

 jwt.verify(token, SECRET_KEY, (error, decoded) => {
    if (error) {
      res.status(401).json({ message: 'Token inválido' });
      return
    }

    req.user = decoded;  // Decodificamos y guardamos los datos del usuario en req.user
    next();  // Permitimos el acceso a la ruta protegida
  });
  
}
