import conf from '../config/conf.js'
import{Client,Account,ID} from "appwrite";

export class AuthService{
    client=new Client();
    account;
    constructor(){
this.client //reference of the client
.setEndpoint(conf.appwriteUrl)
.setProject(conf.appwriteProjectId);
this.account=new Account(this.client)

    }
async createAccount({email,password,name}){
    try{
const userAccount=await this.account.create(ID.unique(),email,password,name);
if(userAccount){
    //call another method of login if account exist
    return this.login({email,password});
}
else{
    return userAccount;
}
    }
    catch(error){
        throw error;
    }
}
 
async login({email,password}){
try{
return await this.account.createEmailSession(email,password);
}
catch(error){
throw error;
}
}

async getCurrentUser(){
    try{
    return await this.account.get();
    }
    catch(error){
        throw error;
    }
    return null;
}


async logout(){
    try{
await this.account.deleteSessions()
    }
    catch(error){
        throw error;
    }
}
}
const authService=new AuthService();

//we made authService as object that when its created so the constructor automatically calls itself nd we can simply apply the methods as authService.login() etc
export default authService;


/* purpose of this file is that all the info is stored in one file we ca acceess the info of the obj by dot so when later we chnge anything in appwrite so we will do changes only in this file*/