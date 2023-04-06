import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getAllPosts } from "../../services/postService"

function Index({ user }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        async function loadData() {
            const data = await getAllPosts()
            setPosts(data)
        }
        loadData()
    }, [])
    console.log(posts)
    return (
            <div>
                <h1 style = {{fontWeight: 'bold', color: '#DB534D'}}>INVENTORY</h1>
                <div id="posts">

                        {posts?.map((post, index) => 
                            <Link to={`/inventory/${post._id}`} key={index}>
                                <div className="a-post">
                                    {post.subject}
                                </div>
                            </Link>
                        )}
            
                    {user && 
                        <Link to="/inventory/new">
                            <button>NEW ITEM</button>
                        </Link>
                    }
    
                </div>
               
            </div>
    )
}

export default Index