import { customAxios, customAxiosWithAuth } from './api'

export async function getAllPosts() {
    const axios = customAxios()
    try {
        const response = await axios.get('/inventory')
        return response.data
    } catch(err) {
        console.log(err.message)
        return []
    }
}

export async function getPost(id) {
    const axios = customAxios()
    try {
        const response = await axios.get(`/inventory/${id}`)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function deletePost(id) {
    console.log("in delete")
    const axios = customAxiosWithAuth()
    try {
        await axios.delete(`/inventory/${id}`)
    } catch(err) {
        console.log(err.message)
    }
}

export async function createPost(post) {
    const axios = customAxiosWithAuth()
    try {
        const response = await axios.post('/inventory', post)
        return response.data
    } catch(err) {
        console.log(err.message)
    }
}

export async function updatePost(id, post) {
    const axios = customAxiosWithAuth()
    try {
        await axios.put(`/inventory/${id}`, post)
    } catch(err) {
        console.log(err.message)
    }
}