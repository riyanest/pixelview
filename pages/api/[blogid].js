import {db} from './firebase'
import { collection, doc, getDocs } from "firebase/firestore"; 
// const { pid } = req.query
const querySnapshot = await getDocs(collection(db, "blogs"));

export default function handler(req, res) {
    if (querySnapshot.exists()) {
        res.send(querySnapshot.data())
      } else {
        res.send("No such document!");
      }
    

  }
  