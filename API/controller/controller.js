const Topics = require('../models/topics');
const Users = require('../models/users');
const Posts = require('../models/posts');
const Messages = require('../models/messages');
const axios = require('axios');


exports.GetPost = async (req, res) => {
    const PostId = req.params.id;
    try {
        const post = await Posts.getPost(PostId);
        if(!post) {
            res.status(404).json({
                message: "post not found."
            });
        } else {
            res.status(200).json({
                message: "post found successfully.",
                post
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error."
        });
    }
}

exports.GetAllPosts = async (req, res) => {
    try {
        const posts = await Posts.getPosts();
        if (!posts) {
            res.status(404).json({
                message: "no post found."
            });
        } else {
            res.status(200).json({
                message: "posts found successfully.",
                posts
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: "internal server error."
        })
    }
}

exports.CreatePost = async (req, res) => {
    const Topic = req.params.TopicId;
    const Author = req.params.AuthorId;
    const Title = req.params.Title;
    const Content = req.params.Message;
    try {
        let id;
        await axios.get
        Posts.createPost(id, Topic, Author, Title, Content);
        res.status(200).json({
            message: "post created successfully."
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error."
        })
    }
}

exports.GetUserPosts = async (req, res) => {
    const UserId = req.params.UserId;
    try {
        const posts = await User.GetPosts(UserId);
        if (!posts) {
            res.status(404).json({
                message: 'user not found.'
            });
        } else {
            res.status(200).json({
                message: 'user posts found successfully.',
                posts
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error."
        });
    }
}

exports.GetPosts = async (req, res) => {
    const TopicId = req.params.categorie;
    try {
        const posts = await Topics.GetPosts(TopicId);
        if (!posts) {
            res.status(404).json({
                message: 'topic not found.'
            });
        } else {
            res.status(200).json({
                message: 'topic posts found successfully.',
                posts
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "internal server error."
        });
    }
}

exports.ModifyPost = async (req, res) => {
    const Message = req.params.NewMessage;
    const PostId = req.params.PostId;
    try {
        let post = await axios.get(`localhost:3000/post/${PostId}`)
        .then(response => {
            return response.data;
        })
        post.Content = Message;
        res.status(200).json({
            message: "post modified successfully."
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.DelPost = async (req, res) => {
    const PostId = req.params.PostId;
    try {
        Posts.deletePost(PostId);
        res.status(200).json({
            message: 'post deleted successfully.'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.LikePost = async (req, res) => {
    const UserId = req.params.id;
    const PostId = req.params.PostId;
    try {
        let post;
        fetch(`localhost:3000/post/${PostId}`)
        .then(async response => {
            return await response.json;
        })
        .then(async data => {
            post = await data;
        })
        .catch(error => {
            console.log(error);
            res.status(404).json({
                message: 'post not found.'
            });
        });

        let likes = post.Likes;
        
    }
}