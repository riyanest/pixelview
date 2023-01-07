import { useRouter } from "next/router"
import Header from '../components/header'
import { useState } from "react";
import db from '../api/firebase'
import { collection, doc, getDocs } from "firebase/firestore"; 
import { useEffect } from "react";
export default function Bloglist(){
    // const router=useRouter()
    // const blogid=router.query.blogid
    const [blogs,setBlog]=useState([{}])
    useEffect(()=>{
        ;(async (done)=>{
                const colref=collection(db,'blogs')
                const snapshots=await getDocs(colref)
                snapshots.forEach((doc) => {
                    let temp=blogs
                    temp.push(doc.data())
                    setBlog(temp)                    
                  });

        })()
    },[])
    
    return(
        <>  
            <Header/>
                   {blogs.map((doc,i) => 
                    <div>         
                <h1>{doc.title}</h1>
                <p>{doc.param1}</p>
                </div>
                )} 

        </> )
}


