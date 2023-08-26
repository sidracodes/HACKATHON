import { createClient } from "next-sanity";
import {apiVersion,dataset,projectId,token } from '../env'
 export const client = createClient({
    token,
    apiVersion,
    dataset,
    projectId,
    useCdn: true
})
