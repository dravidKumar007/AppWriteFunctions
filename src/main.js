import { Client, Users } from 'node-appwrite';

export default async ({ req, res, log, error }) => {

  return res.json({
   message:process.env.ALCHEMY_URL
  });
};
