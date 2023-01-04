import { useRouter } from "next/router"
import Header from '../components/header'
import db from '../api/firebase'
import { collection, doc, getDoc } from "firebase/firestore"; 
// const { pid } = req.query
    const ref = doc(collection(db,"blogs"));
    const querySnapshot=await getDoc(ref);
    

const Blog=()=>{
    const router=useRouter()
    const blogid=router.query.blogid
    return(
        <>  
            <Header/>
            <h1>blog no.{blogid}</h1>
            <p>

                {querySnapshot.exists()? querySnapshot.data(): "No such document!"}
            </p>
        </>
    )
}
export default Blog