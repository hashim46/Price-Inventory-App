import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getCommentFromPost, updateCommentOfIdFromPost } from '../../services/commentService'

function Edit() {

    const [comment, setComment] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    const bodyRef = useRef()

    useEffect(() => {
        getCommentFromPost(params.cid, params.id).then(data => setComment(data))
    }, [params.id, params.cid])

    async function handleSubmit(e) {
        e.preventDefault()

        let updatedComment = {
            body: bodyRef.current.value
        }
       
        await updateCommentOfIdFromPost(updatedComment, params.cid, params.id)
        navigate(`/posts/${params.id}`)
    }

    return ( 
        <div>
            <h1>Edit Comment</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>

                    <label htmlFor="clr">Body:</label><br />
                    <textarea ref={bodyRef} id="clr" cols="30" rows="10" defaultValue={comment.body} /><br /><br />

                    <button>Submit</button>
                </form>
                <Link to={`/posts/${params.id}`}>
                    <button>Back</button>
                </Link>
            </div>
        </div>
    );
}

export default Edit;