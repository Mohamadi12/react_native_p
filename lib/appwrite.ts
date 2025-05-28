import { Client, Databases, Account } from 'react-native-appwrite';

export const client = new Client()
    .setEndpoint(process.env.NEXT_APPWRITE_PUBLIC_ENDPOINT!) // Your Appwrite endpoint
    .setProject(process.env.NEXT_APPWRITE_PUBLIC_PROJECT_ID!) // Your Appwrite project ID
    .setPlatform(process.env.NEXT_APPWRITE_PUBLIC_PLATFORM_ID!); // Your Appwrite platform ID


export const databases = new Databases(client);
export const account = new Account(client);





