import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react';
const Header = () => {
  const [closed, setClosed] = useState(true);
  const menu=()=>{
      var bar1=document.getElementById('bar1')
      var bar2=document.getElementById('bar2')
      var bar3=document.getElementById('bar3')
      var menu=document.getElementById('menu')
      if(closed) {
        setClosed(false)
        bar1.classList.add('pressedButton1')
        bar2.classList.add('pressedButton2')
        bar3.classList.add('pressedButton3')
        menu.style.width="100%"
        menu.style.height="100%"
      } 
      else{ 
        setClosed(true)
        bar1.classList.remove('pressedButton1')
        bar2.classList.remove('pressedButton2')
        bar3.classList.remove('pressedButton3')
        menu.style.width="0"
        menu.style.height="0"
      }
  }
  return (
    <>
    <div className="header">
        <h1 style={{margin:"10px"}}>PIXEL VIEW</h1>
        <button class="menuButton" onClick={menu}>
            
              <div id="bar1" className="bar"></div>
              <div id="bar2" className="bar"></div>
              <div id="bar3" className="bar"> </div>
            
        </button>
    </div>
    <ul     id="menu">
      <li className="menuelem">
        <Link href="/">Home</Link>
      </li>
      <li className="menuelem">
        <Link href="/about">About Us</Link>
      </li>
      <li className="menuelem">
        <Link href="/blog">Blogs</Link>
      </li>
    </ul>
    </>
  )
}
 export default Header
