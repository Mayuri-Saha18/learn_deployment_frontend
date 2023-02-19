import { useState } from "react";
const Login=()=>{

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleLogin =()=>{
        const payload ={ email, password };
        console.log(payload);


            fetch("https://ruby-agreeable-greyhound.cyclic.app/users/login", {
                method: "POST",
                body: JSON.stringify(payload),
                headers: {
                    "Content-type": "application/json"
            }
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res)
                localStorage.setItem("token", res.token)
            })
            .catch((error) => console.log(error))
    }

    return(
        <div>
            <h1>Login Page</h1>


            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
            />


            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
            />


            <button onClick={handleLogin}>LOGIN</button>


        </div>
    )
}
export default Login;