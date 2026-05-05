import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import mongoose from "mongoose";
import User from '@/models/User';
import Payment from '@/models/Payment';



export const authOption = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (account.provider = "github") {
        //connect to database
        const client = await mongoose.connect(process.env.MONGODB_URI)
        console.log("MongoDB Connected");
        //Check if the user already exists in the database
        const currentUser = User.findOne({email: email})
        if (!currentUser) {
          //create a new user
          const newUser = new User({
            email: email,
            username: email.split("@")[0],
            
          })
          await newUser.save()
          console.log(newUser).username
          user.name = newUser.username
        } else {
          user.name = currentUser.username
        }
        return true;
      }
    }

    // async session({ session, token, user }) {
    //   const dbUser = await User.find({email: session.user.email})
    //   session.user.name = dbUser.username
    //   return session
    // },

  }
};
const authOptions = NextAuth(authOption);
export {authOptions as GET, authOptions as POST}