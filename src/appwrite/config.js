
import conf from "../conf.js";
import { Client, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    bucket;

    // Constructor: Initialize Appwrite client, database and storage
    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // Create a new post
    async createPost({
        title,
        slug,
        content,
        featuredImage,
        status,
        userId
    }) {
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            );
        }
        catch (error) {
            console.log(error);
        }
    }

    // Get all posts (only active posts by default)
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
                
            );
        }
        catch (error) {
            console.log(error);
        }
    }

    // Get a single post by ID
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        }
        catch (error) {
            console.log(error);
        }
    }

    // Update an existing post
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status
                }
            );
        }
        catch (error) {
            console.log(error);
        }
    }

    // Delete a post
    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );

            return true;
        }
        catch (error) {
            console.log(error);
            return false;
        }
    }

    //file upload service 
    async uploadFile(file){
        try{
return await this.bucket.createFile(
    conf.appwriteBucketId,
    ID.unique(), //yaha hamne unique id dydi mtlb file bngya
    file,

)
        }
        catch(error){
            console.log(error);
            return false;
        }
    }


    async deleteFile(fileId){
    try{

        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
        )
    }catch(error){
        console.log(error)
        return false;
    }
    }


    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

// Create an instance of Service class
const service = new Service();

// Export the service instance
export default service;
