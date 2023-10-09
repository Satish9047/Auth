import {useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setIsLogin } from "../slices/authSlice";

const Dashboard = () => {
  const navigate = useNavigate()
  // const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  useEffect(()=>{
    const token = localStorage.getItem("jwtToken")
    const validateJWT = async ()=>{
      if(token){
        const res = await fetch("http://localhost:3000/profile", {
          method: "get",
          headers: {
            "authorization": `Bearer ${token}`
          }
        })

        if(!res.ok){
          const data = res.json()
          console.log(data.err)
          localStorage.removeItem("jwtToken")
          dispatch(setIsLogin(false));
          navigate("/login");
        }
      }
    }
    validateJWT()
  },[])

  return (
    <div>Dashboard</div>
  )
}
export default Dashboard