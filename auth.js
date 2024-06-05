import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import Facebook from "next-auth/providers/facebook";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import mongoClientPromise from "./db/mongoClientProvider";
import usermodel from "./db/models/usermodel";
import { connectToDataBase } from "./db/dbconnection";
import bcrypt from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(mongoClientPromise, { databaseName: "lwskart" }),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) return null;

        try {
          await connectToDataBase();
          const user = await usermodel.findOne({ email: credentials.email });

          if (user) {
            const match = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (match) {
              return user;
            } else {
              throw new Error("Password did not match");
            }
          } else {
            throw new Error("User not found");
          }
        } catch (error) {
          // console.log(error.message);
          throw new Error(error);
        }
      },
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
    Facebook({
      clientId: process.env.AUTH_FACEBOOK_ID,
      clientSecret: process.env.AUTH_FACEBOOK_SECRET,
    }),
  ],
});
