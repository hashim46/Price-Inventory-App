import { useEffect, useState, useRef } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { createCommentForPost, deleteCommentFromPost } from "../../services/commentService"
import { deletePost, getPost } from "../../services/postService"

function Show({ user }) {

    const [post, setPost] = useState({})

    const navigate = useNavigate()
    const params = useParams()
    const bodyRef = useRef()
    const detailsRef = useRef()

    useEffect(() => {
        async function loadData() {
            const data = await getPost(params.id)
            if (!data) navigate('/posts')
            setPost(data)
        }
        loadData()
    }, [params.id])

    async function handleDeleteComment(comment) {
        await deleteCommentFromPost(comment._id, post._id)
        let updatedPost = { ...post }
        updatedPost.comments = updatedPost.comments.filter(c => c._id !== comment._id)
        setPost(updatedPost)
    }

    async function handleDeletePost() {
        await deletePost(post._id)
        navigate('/posts')
    }

    async function handleSubmit(e) {
        e.preventDefault()

        let comment = {
            body: bodyRef.current.value,
            user
        }

        const newComment = await createCommentForPost(comment, post._id)
        let updatedPost = { ...post }
        updatedPost.comments.push(newComment)
        setPost(updatedPost)
        bodyRef.current.value = ''
        detailsRef.current.open = false
    }

    return (
            <div>
                <div className="a-post">
                    <h2 style = {{fontWeight: 'bold', color: '#DB534D'}}>{post.subject}</h2>
                    <h5 style={{ opacity: '.2'}}>Posted by {post.user} on {new Date(post.createdAt).toLocaleDateString()} at {new Date(post.createdAt).toLocaleTimeString()}</h5>
                    <div className='p-body'>Price: ${post.body}</div><br /><br />

                    {
                        post.comments?.length ?
                        <>
                            <h5 style = {{fontWeight: 'bold', color: '#60C1EA'}}> See the item availability in the comments section below</h5>
                            <br/>
                            <br/>
                            <div style = {{fontWeight: 'bold', color: 'black', fontSize: '20px'}}>Comments:</div>
                            <div>{post.comments.map((comment, i) => 
                                <div key={i} className="comm">
                                    <div>Available in:</div>
                                    <div>{comment.body}</div>
                                    {comment.user === user &&
                                        <>
                                            <button onClick={() => handleDeleteComment(comment)}>X</button>
                                            <Link to={`/posts/${post._id}/comments/${comment._id}`}><span>+</span></Link>
                                        </>
                                    }
                                </div>
                            )}</div>
                            <br/><br/>
                        </>
                        : ''
                    }
                    {user && 
                        <details ref={detailsRef}>
                            <summary style = {{fontWeight: 'bold', color: 'black', fontSize: '20px'}}>Specify Inventory Location:</summary>
                            <form onSubmit={handleSubmit}>
                                <input ref={bodyRef} id="lc" cols="1" rows="1" />
                                <button>Set Location</button>
                            </form>
                        </details>
                    }
                    
                    <div className="buttons">
                        {post.user === user &&
                            <>
                                <button onClick={handleDeletePost}>Delete</button>
                                <Link to={`/posts/${post._id}/edit`}>
                                    <button>Edit</button>
                                </Link>
                            </>
                        }
                        <Link to='/posts'>
                            <button>Back</button>
                        </Link>
                    </div>
                </div>
                
            </div>
    )
}

export default Show