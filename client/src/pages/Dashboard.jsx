import {useEffect} from "react"
import { useNavigate } from "react-router-dom"


const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(()=>{
    const token = localStorage.getItem("jwtToken")
    if(!token){
      return navigate("/login")
    }

    const validateJWT = async ()=>{
      if(token){
        const res = await fetch("http://localhost:3000/profile", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
          }
        })

        if(!res.ok){
          const data = await res.json()
          console.log(data.err)
          localStorage.removeItem("jwtToken")
          navigate("/login");
        }
      }
    }
    validateJWT()
  }, [])

  return (
    <div>Dashboard</div>
  )
}
export default Dashboard