import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AllNotes =()=>{


    const [notes, setNotes] = useState("");

    useEffect(() => {


        fetch("https://talented-pear-shirt.cyclic.app/notes", {
            headers: {
                "Authorization": localStorage.getItem("token")
            }


        })
            .then((res) => res.json())
            .then((res) => {
                
                console.log(res)
                setNotes(res)
            })
            .catch((error) => console.log(error))

    }, []);

    const handleDelete = (noteID) => {
        fetch(`https://ruby-agreeable-greyhound.cyclic.app/notes/delete/${noteID}`, {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
    }

    return (
        <div>
            <h1>All Notes</h1>

            <Link to="/register"><button>REGISTER</button></Link>


            {notes ? notes.map((el) => {


                return (

                    <div>


                        <h3>Title: {el.title}</h3>
                        <p>Note: {el.note}</p>
                        <button onClick={() => handleDelete(el._id)}>DELETE</button>

                        
                    </div>
                )
            })

                : <h2>Notes section is empty</h2>}

        </div>
    )
}
export default AllNotes;