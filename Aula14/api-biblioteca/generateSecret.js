import crypto from 'crypto';

function generateSecretKey() {
  return crypto.ramdomBytes(64).toString('hex');
}

const secretKey = generateSecretKey();
console.log('Chave Secreta Gerada: ', secretKey);