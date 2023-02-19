import { Link } from "react-router-dom";
const Home = ()=>{
    return (
        <div>

            <h1>Welcome to Full-Stack CRUD App</h1>
            
            
            <Link to="/notes"><button>NOTEData</button></Link>

        </div>
    )
}
export default Home;