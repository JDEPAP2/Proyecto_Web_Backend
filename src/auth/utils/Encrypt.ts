const { createHash }  = require('crypto');

export const generateHash = (text: string) =>  {
    return createHash('sha256').update(text).digest('hex');
  }

export const validateHash = (text: string, hash: string) => {
      return createHash('sha256').update(text).digest('hex') === hash;
  }