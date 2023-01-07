import { useRouter } from "next/router"
import Header from '../components/header'
import { useState } from "react";
import db from '../api/firebase'
import { collection, doc, getDocs } from "firebase/firestore"; 
import { useEffect } from "react";
// const { pid } = req.query
    // const ref = doc(collection(db,"blogs"));
    // const querySnapshot=await getDoc(ref);
    

const Blog=()=>{
    const router=useRouter()
    const blogid=router.query.blogid
    const [blogs,setBlog]=useState([{}])
    useEffect(()=>{
        ;(async (done)=>{
                const colref=collection(db,'blogs')
                const snapshots=await getDocs(colref)
                snapshots.forEach((doc) => {
                    let temp=blogs
                    temp.push(doc.data())
                    setBlog(temp)                    
                    console.log(blogs)
                  });

        })()
    },[])
    
    return(
        <>  
            <Header/>
            <h2>blog no.{blogid}</h2>
                   {blogs.forEach((doc) => 
                    <div>         
                {/* <h1>{doc.data()}</h1> */}
                {/* <p>{doc.data()}</p> */}
                </div>
                )} 

        </>
    )
}
export default Blog