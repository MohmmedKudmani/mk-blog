import NextAuth from 'next-auth'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import dbConnect from '../../../lib/dbConnect'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
  adapter: MongoDBAdapter(dbConnect),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
})
