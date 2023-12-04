// import { useState, useEffect } from "react"
// export default function useScrollPositionActive(reference){
//     const [active,setActive] = useState("")
//     useEffect(()=>{
//         const scrollActive = ()=>{
//             console.log(reference.current.getBoundingClientRect().top);
//         }
//         document.addEventListener("scroll",scrollActive)
//         return ()=>{
//             document.removeEventListener("scroll",scrollActive)
//         }
//     })
//     return {active}
// }
