import axios from 'axios';

const github = axios.create({
    baseURL: "https://api.github.com"
});

// Search Users
export const searchUsers = async (text) => {
    const response = await github.get(`/search/users?q=${text}`);
    return response.data.items;
};

// Get User
export const getUser = async (text) => {
    const response = await github.get(`/users/${text}`);
    if (response.status !== 200) {
        window.location.href = "/notFound"
    } else {
        const data = await response.data;
        return data;
    }

};

// Get Repos
export const getRepos = async (login) => {
    const params = new URLSearchParams({
        sort: 'created',
        per_page: 10
    })

    const response = await github.get(`/users/${login}/repos?${params}`);
    const data = await response.data;
    return data;
};