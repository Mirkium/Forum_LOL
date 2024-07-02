const Models = require('../models/models');
const Users = Models.User;
const Posts = Models.Posts;
const Friends = Models.FriendRequest;
const Topics = Models.Topics;
const Messages = Models.Messages;
const Likes = Models.Likes;
console.log('models OK');

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
        const posts = await Posts.getPosts();
        id = posts.length;
        console.log(id);
        try {
            await Posts.createPost(id, Topic, Author, Title, Content);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: "couldn't write post."
            });
        }
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
        const posts = await Users.GetPosts(UserId);
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
        let post = await Posts.getPost(PostId);
        post.Message = Message;
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
        const postMessages = await Posts.getMessages(PostId);
        postMessages.forEach(message => {
            Messages.deleteMessage(message.id);
        });
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
        let post = await Posts.getPost(PostId);
        if (!post) {
            res.status(404).json({
                message: 'post not found.'
            });
        } else {
            let like;
            try {
                like = await Likes.getLike(UserId, PostId, 'post');
            } catch (err) {
                console.log(err);
                res.status(500).json({
                    message: 'internal server error.'
                });
            }
            if (like) {
                try {
                    await Likes.deleteLike()
                } catch (err) {
                    res.status(500).json({
                        message: 'internal server error.'
                    });
                }
            } else {
                try {
                    await Users.likePost(UserId, PostId, 'post');
                } catch (err) {
                    console.log(err);
                    res.status(500).json({
                        message: 'internal server error.'
                    });
                }
            }
            res.status(200).json({
                message: 'post likes updated successfully.'
            });
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.GetMessages = async (req, res) => {
    const PostId = req.params.PostId;
    try {
        const messages = await Posts.getMessages(PostId);
        if (!messages) {
            res.status(404).json({
                message: 'post not found.'
            });
        } else {
            res.status(200).json({
                message: 'messages found successfully.',
                messages
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.GetMessage = async (req, res) => {
    const MessageId = req.params.id;
    try {
        const message = Messages.getMessage(MessageId);
        if (!message) {
            res.status(404).json({
                message: 'message not found.'
            });
        } else {
            res.status(200).json({
                message: 'message found successfully.',
                content: message
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.ModifyMessage = async (req, res) => {
    const MessageId = req.params.MessageId;
    const newMessage = req.params.NewMessage;
    try {
        let message = await Messages.getMessage(MessageId);
        if(!message) {
            res.status(404).json({
                message: 'message not found.'
            });
        }
        message.Content = newMessage;
        res.status(200).json({
            message: "message modified successfully."
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.CreateMessage = async (req, res) => {
    const PostId = req.params.PostId;
    const Author = req.params.AuthorId;
    const Content = req.params.Content;
    try {
        let id;
        const messages = await Messages.getMessages();
        id = messages.length;
        Messages.PostMessage(id, PostId, Author, Content);
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

exports.DelMessage = async (req, res) => {
    const MessageId = req.params.Message;
    try {
        Messages.deleteMessage(MessageId);
        res.status(200).json({
            message: 'message deleted successfully.'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.LikeMessage = async (req, res) => {
    const MessageId = req.params.MessageId;
    const UserId = req.params.id;
    try {
        let message = await Message.getMessage(MessageId);
        if (!message) {
            res.status(404).json({
                message: 'message not found.'
            });
        } else {
            let like = await Likes.getLike(UserId, MessageId, 'message');
            if (like) {
                try {
                    Likes.deleteLike(MessageId, UserId, 'message');
                } catch (err) {
                    console.log(err);
                    res.status(500).json({
                        message: 'internal server error.'
                    });
                }
            } else {
                try {
                    await Users.likePost(UserId, MessageId, 'message');
                } catch (err) {
                    console.log(err);
                    res.status(500).json({
                        message: 'internal server error.'
                    });
                }
            }
        }
    } catch(error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.GetUser = async (req, res) => {
    const UserId = req.params.id;
    try {
        const user = await Users.getUser(UserId);
        if (!user) {
            res.status(404).json({
                message: 'user not found.'
            });
        } else {
            res.status(200).json({
                message: 'user found successfully.',
                user
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.CreateUser = async (req, res) => {
    const username = req.params.UserName;
    const email = req.params.Email;
    const pwd = req.params.pwd;
    try {
        let date = new Date();
        let month = date.getMonth();
        ++month;
        let registerDate = date.getDate() + '/' + month + '/' + date.getFullYear();
        try {
            Users.createUser(username, email, pwd, registerDate);
        } catch (err) {
            console.log(err);
            res.status(500).json({
                message: 'internal server error.'
            });
        }
        res.status(200).json({
            message: 'user created successfully.'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.FriendRequest = async (req, res) => {
    const SenderId = req.params.SendId;
    const ReceiveId = req.params.ReceiveId;
    try {
        const requests = await Friends.getRequests();
        const id = requests.length;
        try {
            Users.sendFriendRequest(id, SenderId, ReceiveId);
        } catch (err) {
            console.log(err);
            res.status(404).json({
                message: 'user not found.'
            });
        }
        res.status(200).json({
            message: "request sent successfully."
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.AcceptRequest = async (req, res) => {
    const ReceiveId = req.params.ReceiveId;
    const SendId = req.parmas.SendId;
    try {
        const requests = await Friends.getRequests();
        const request = await Friends.getRequest(ReceiveId, SendId);
        if (!request) {
            res.status(404).json({
                message: 'request not found.'
            });
        }
        Friends.deleteRequest(request.id);
        const sender = await Users.getUser(SendId);
        const receiver = await Users.getUser(ReceiveId);
        let senderFriends = sender.FriendsList;
        let receiverFriends = receiver.FriendsList;
        senderFriends.push(ReceiveId);
        receiverFriends.push(SendId);
        try {
            Users.updateFriends(SendId, senderFriends);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'internal server error.'
            });
        }
        try {
            Users.updateFriends(ReceiveId, receiverFriends);
        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: 'internal server error.'
            });
        }
        res.status(200).json({
            message: 'request accepted successfully.'
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.RefuseRequest = async (req, res) => {
    const ReceiveId = req.params.ReceiveId;
    const SendId = req.params.SendId;
    try {
        const request = await Friends.getRequest(ReceiveId, SendId);
        if (!request) {
            res.status(404).json({
                message: 'request not found.'
            });
        } else {
            try {
                Friends.deleteRequest(request.id);
            } catch (err) {
                console.log(err);
                res.status(500).json({
                    message: 'internal server error.'
                });
            }
            res.status(200).json({
                message: 'request refused successfully.'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.SendRequest = async (req, res) => {
    const ReceiveId = req.params.ReceiveId;
    const SendId = req.params.SendId;
    try {
        const requests = await Friends.getRequests();
        const request = await Friends.getRequest(ReceiveId, SendId);
        if (request) {
            res.status(400).json({
                message: 'request already exists.'
            });
        } else {
            let id = requests.length;
            try {
                Users.sendFriendRequest(id, SendId, ReceiveId);
            } catch (err) {
                console.log(err);
                res.status(404).json({
                    message: 'users not found.'
                });
            }
            res.status(200).json({
                message: 'request sent sucessfully.'
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error'
        });
    }
}

exports.DeleteFriend = async (req, res) => {
    const UserId = req.params.UserId;
    const FriendId = req.params.FriendId;
    try {
        const user = await Users.getUser(UserId);
        const friend = await Users.getUser(FriendId);
        if (!user || !friend) {
            res.status(404).json({
                message: 'user not found.'
            });
        } else {
            let userFriends = user.FriendsList;
            let friendFriends = friend.FriendsList;
            for(let i = 0; i < userFriends.length; i++) {
                if (userFriends[i] == FriendId) {
                    userFriends.splice(i, 1);
                }
            }
            for(let i = 0; i < friendFriends.length; i++) {
                if (friendFriends[i] == UserId) {
                    friendFriends.splice(i, 1);
                }
            }
            try {
                Users.updateFriends(UserId, userFriends);
            } catch (err) {
                console.log(err);
                res.status(404).json({
                    message: 'user not found'
                })
            }
            try {
                Users.updateFriends(FriendId, friendFriends);
            }catch (err) {
                console.log(err);
                res.status(404).json({
                    message: 'friend not found'
                })
            }
            res.status(200).json({
                message: 'friend deleted successfully.'
            })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error'
        });
    }
}

exports.PostLikes = async (req, res) => {
    const PostId = req.params.id;
    try {
        let post = await Posts.getPost(PostId);
        if (!post) {
            res.status(404).json({
                message: 'post not found.'
            });
        } else {
            let likes = await Posts.getLikes(PostId);
            if (!likes) {
                likes = [];
            }
            res.status(200).json({
                message: 'message found successfully',
                likes
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}

exports.MessageLikes = async (req, res) => {
    const MessageId = req.params.id;
    try {
        let post = await Messages.getMessage(MessageId);
        if (!post) {
            res.status(404).json({
                message: 'post not found.'
            });
        } else {
            let likes = await Messages.getLikes(MessageId);
            if (!likes) {
                likes = [];
            }
            res.status(200).json({
                message: 'message found successfully',
                likes
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: 'internal server error.'
        });
    }
}