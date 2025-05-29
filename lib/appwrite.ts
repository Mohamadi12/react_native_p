import { Account, Client, Databases } from "react-native-appwrite";

export const client = new Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1") // Your Appwrite endpoint
  .setProject("68369fdf000ea2c29b13") // Your Appwrite project ID
  .setPlatform("co.nana.habit-tracker"); // Your Appwrite platform ID

export const databases = new Databases(client);
export const account = new Account(client);
