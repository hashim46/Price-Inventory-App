import { useEffect, useState, useRef } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { getPost, updatePost } from '../../services/inventoryService'

function Edit() {

    const [post, setPost] = useState({})

    const navigate = useNavigate()
    const params = useParams()

    const bodyRef = useRef()
    const subjectRef = useRef()

    useEffect(() => {
        getPost(params.id).then(data => setPost(data))
    }, [params.id])

    async function handleSubmit(e) {
        e.preventDefault()
        let updatedPost = {
            subject: subjectRef.current.value,
            body: bodyRef.current.value
        }
        await updatePost(post._id, updatedPost)
        navigate(`/inventory/${post._id}`)
    }

    return ( 
        <div>
            <h1 style = {{fontWeight: 'bold', color: '#DB534D'}}>EDIT INVENTORY</h1>
            <div className='buttons' style={{ flexDirection: 'column' }}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="nme" style = {{fontWeight: 'bold'}} >Subject:</label><br />
                    <input type="text" id="nme" ref={subjectRef} defaultValue={post.subject} /><br /><br />

                    <label htmlFor="clr" style = {{fontWeight: 'bold'}}>Body:</label><br />
                    <textarea ref={bodyRef} id="clr" cols="30" rows="10" defaultValue={post.body} /><br /><br />

                    <button>Submit</button>
                </form>
                <Link to={`/inventory/${post._id}`}>
                    <button>Back</button>
                </Link>
                
            </div>
        </div>
    );
}

export default Edit;