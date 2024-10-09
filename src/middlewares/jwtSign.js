import jwt from 'jsonwebtoken';

 export const SECRET_KEY = process.env.JWT_SECRET || 'supersecreto';

export const jwtSign = (user) => {

     const payload = {
       id: user.id,        
    username: user.username,
       email: user.email,
    };
  

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    
    return token;
  };

