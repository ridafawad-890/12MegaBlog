const conf={
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE_PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE_DATABASE_ID),
    appwriteCollectionID: String(import.meta.env.VITE_COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE_BUCKET_ID)
     
}
export default conf

//we make this file bcz before it we wrote in app.jsx that import.meta.env.VITE_APPWRITE_URl so writing this again nd again may lead o not loadin the enviornment variable so thats why we used it
//environemnt variables should always be in string