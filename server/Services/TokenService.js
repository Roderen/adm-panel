import jwt from 'jsonwebtoken';
import TokenModel from '../Models/TokenModel.js';

class TokenService {
  generateToken(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {expiresIn: '5m'});
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {expiresIn: '1d'});
    return {
      accessToken,
      refreshToken
    };
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await TokenModel.findOne({user: userId});
    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      return tokenData.save();
    }
    const token = await TokenModel.create({user: userId, refreshToken});
    return token;
  }
}

export default new TokenService();