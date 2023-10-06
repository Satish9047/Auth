import {useState} from "react";
import {Link, useNavigate} from "react-router-dom"

const Register = () => {
    const [email, setEmail]=useState("");
    const [userName, setUserName]=useState("");
    const [password, setPassword]=useState("");

    const handleRegister = (ev)=>{
        ev.preventDefault();
    }
  return (
    <div>
        <div>
            Register
        </div>
        <form onSubmit={handleRegister}>
            <label>Email</label>
            <input value={email} onChange={(ev)=>setEmail(ev.target.value)}/>
            <label htmlFor="">User Name</label>
            <input value={userName} onChange={(ev)=>setUserName(ev.target.value)}/>
            <label>Password</label>
            <input value={password} onChange={(ev)=>setPassword(ev.target.value)}/>

            <button type="submit">Register</button>
        </form>
        <label>Already have account? <strong><Link to={"/login"}>Click Here</Link></strong></label>
    </div>
  )
}
export default Register