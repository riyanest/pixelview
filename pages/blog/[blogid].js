import { useRouter } from "next/router"
import Header from '../components/header'
const Blog=()=>{
    const router=useRouter()
    const blogid=router.query.blogid
    return(
        <>  
            <Header/>
            <h1>blog no.{blogid}</h1>
        </>
    )
}
export default Blog