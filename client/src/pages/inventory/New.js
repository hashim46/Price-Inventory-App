import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/inventoryService";

function New({ user }) {

    let subjectRef = useRef()
    let bodyRef = useRef()
    let navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()
        let post = {
            subject: subjectRef.current.value,
            body: bodyRef.current.value,
            user
        }
        await createPost(post)
        navigate('/inventory')
    }

    return ( 
        <div>
            <h1 style = {{fontWeight: 'bold', color: '#DB534D'}}>NEW ENTRY</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nme" style = {{fontWeight: 'bold', color: 'black'}}>Item:</label><br />
                <input type="text" id="nme" ref={subjectRef} /><br /><br />

                <label htmlFor="clr" style = {{fontWeight: 'bold', color: 'black'}}>Price:</label><br /> <i style = {{fontWeight: 'bold', color: 'black'}}>$</i>
                <input type = "double" id="clr"  ref={bodyRef} /><br /><br />

                <button>Submit</button>
            </form>
        </div>
     );
}

export default New;