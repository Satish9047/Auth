import {useState} from "react";
import {Link} from "react-router-dom";
const Login = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword] = useState("");
    const handleLogin = (ev)=>{
        ev.preventDefault()
    }
  return (
    <div>
        <div>
            Login
        </div>
        <form onSubmit={handleLogin}>
            <label>email</label>
            <input  value={email} onChange={(ev)=>setEmail(ev.target.value)}/>
            <label>password</label>
            <input value={password} onChange={(ev)=>setPassword(ev.target.value)}/>

            <button type="submit">Login</button>
        </form>

        <label>Don't have account? <strong><Link to={"/register"}>Click Here</Link></strong></label>
    </div>
  )
}
export default Login