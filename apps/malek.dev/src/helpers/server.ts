import { createHash } from 'crypto';

import type { NextApiRequest } from 'next';

export const getSessionId = (req: NextApiRequest) => {
  const ipAddress = req.headers['x-forwarded-for'] || 'localhost';
  const salt = process.env.SALT_IP_ADDRESS;

  if (!salt) {
    throw new Error('SALT_IP_ADDRESS environment variable is not defined');
  }

  // hashes the user's IP address and combines it with a salt
  const currentSessionId = createHash('md5')
    .update(ipAddress + salt, 'utf-8')
    .digest('hex');

  return currentSessionId;
};
