import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../services/postService";

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
        navigate('/posts')
    }

    return ( 
        <div>
            <h1>NEW ENTRY</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nme">Item:</label><br />
                <input type="text" id="nme" ref={subjectRef} /><br /><br />

                <label htmlFor="clr">Price:</label><br /> <i>$</i>
                <input type = "double" id="clr"  ref={bodyRef} /><br /><br />

                <button>Submit</button>
            </form>
        </div>
     );
}

export default New;