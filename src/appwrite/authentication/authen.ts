import { Account, Client, ID } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6683f65a00202c6169d7");

const account = new Account(client);

export type userType = {
  email: string;
  password: string;
  name:string
};

//Creating an Account
export const createAccount = async (userData: userType) => {
  const {email,password,name} = userData;
  try {
    const response = await account.create(
      ID.unique(),
      email,
      password,
      name
    );

    if (response) {
      return response;
    }
  } catch (error) {
    console.error(`Error in creating a account ${error}`);
  }
};

//Verification of account
export const verification = async ()=>{
  try {
    const res = await account.get()
    if(res){
      return res;
    }
  } catch (error) {
    console.error(`Error is from verification of account ${error}`)
  }
}

//For Logging Out
export const logout = async ()=>{
  try {
    const res = await account.deleteSessions();
    if(res){
      return res
    }
  } catch (error) {
    console.error(`The Error is from loging out ${error}`)
  }
}