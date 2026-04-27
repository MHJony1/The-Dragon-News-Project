import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient(process.env.MONGODB_AUTH_URI);
const db = client.db("dragonNews");

export const auth = betterAuth({
  trustedOrigins: [
    "https://the-dragon-news-project-alpha.vercel.app",
    "http://localhost:3000"
  ],

  emailAndPassword: { 
    enabled: true, 
  },
 
  socialProviders: {
    google: { 
      clientId: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    }, 
    github: { 
      clientId: process.env.GITHUB_CLIENT_ID, 
      clientSecret: process.env.GITHUB_CLIENT_SECRET, 
    }, 
  },

  database: mongodbAdapter(db, {
    client
  }),

  advanced: {
    useSecureCookies: true, // Vercel-এ HTTPS এর জন্য এটি জরুরি
  }
});