import {useState} from "react";
import {Link} from "react-router-dom";
const Login = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (ev)=>{
        ev.preventDefault()
    }
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#FFF]">
        <div className="flex flex-col justify-center items-center w-4/12 bg-[#45FFCA] rounded-lg">
        <div>
            Login
        </div>
        <form onSubmit={handleLogin} className=" flex flex-col w-10/12">
            <label>email</label>
            <input  value={email} onChange={(ev)=>setEmail(ev.target.value)}/>
            <label>password</label>
            <input value={password} onChange={(ev)=>setPassword(ev.target.value)}/>

            <button type="submit">Login</button>
        </form>

        <label>Don't have account? <strong><Link to={"/register"}>Click Here</Link></strong></label>
        </div>
    </div>
  )
}
export default Login