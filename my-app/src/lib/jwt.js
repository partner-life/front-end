import jwt, { JwtPayload } from "jsonwebtoken";
import * as jose from "jose";

const SECRET_KEY = process.env.JWT_SECRET;

export const createToken = (paylod) => {
  return jwt.sign(paylod, SECRET_KEY);
};

export const readPayload = (token) => {
  return jwt.verify(token, SECRET_KEY);
};

export const readPayloadJose = async (token) => {
  const secretKey = new TextEncoder().encode(SECRET_KEY);
  const payloadJose = (await jose.jwtVerify)(token, secretKey);

  return payloadJose.payload;
};
