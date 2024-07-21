const connection = require('../config/config');
console.log('connection OK');

exports.Posts = class Posts {
    static getPosts(){
        const query = 'SELECT * FROM Post WHERE 1;';
        return new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getPostsByTopic(TopicId) {
        const query = 'SELECT * FROM Post WHERE TopicId = ?';
        return new Promise((resolve, reject) => {
            connection.query(query, [TopicId], (err, results) => {
                if(err){
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getPost(PostId) {
        const query = 'SELECT * FROM Post WHERE id = ?';
        return new Promise((resolve, reject) => {
            connection.query(query, [PostId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getMessages(PostId) {
        const query = 'SELECT * FROM Message WHERE PostId = ?';
        return new Promise((resolve, reject) => {
            connection.query(query, [PostId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static modifyPost(PostId, newContent) {
        const query = `UPDATE Post SET Message = ? WHERE id = ?;`;
        return new Promise((resolve, reject) => {
            connection.query(query, [newContent, PostId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static deletePost(PostId) {
        const query = 'DELETE FROM Post WHERE id = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [PostId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static createPost(TopicId, AuthorId, Title, Content) {
        const query = `INSERT INTO Post (id, Title, Message, AuthorId, TopicId) VALUES(0, ?, ?, ?, ?);`;
        return new Promise((resolve, reject) => {
            connection.query(query, [Title, Content, AuthorId, TopicId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getLikes(id) {
        const query = "SELECT * FROM message WHERE PostId = ? AND Type = 'post'";
        return new Promise((resolve, reject) => {
            connection.query(query, [id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

exports.Messages = class Messages {
    static getMessage(MessageId) {
        const query = 'SELECT * FROM Message WHERE id = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [MessageId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static modifyMessage(MessageId, NewMessage) {
        const query = `UPDATE Message SET Content = ? WHERE id = ?;`;
        return new Promise((resolve, reject) => {
            connection.query(query, [NewMessage, MessageId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static deleteMessage(MessageId) {
        const query = 'DELETE FROM Message WHERE id = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [MessageId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static postMessage(content, authorId, postId) {
        const query = `INSERT INTO 'message' ('id', 'Content', 'PostId', 'AuthorId') VALUES (0, ?, ?, ?);`;
        return new Promise((resolve, reject) => {
            connection.query(query, [content, postId, authorId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getLikes(id) {
        const query = "SELECT * FROM message WHERE PostId = ? AND Type = 'message'";
        return new Promise((resolve, reject) => {
            connection.query(query, [id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

exports.Topics = class Topics {
    static GetPosts(TopicId) {
        const query = 'SELECT * FROM Post WHERE TopicId = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [TopicId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getTopics() {
        const query = 'SELECT * FROM Topic WHERE 1;';
        return new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

exports.User = class User {
    static getUsers() {
        const query = 'SELECT * FROM Post WHERE 1;';
        return new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getUser(UserId) {
        const query = 'SELECT * FROM User WHERE UserID = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [UserId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getPosts(UserId) {
        const query = 'SELECT * FROM Post WHERE AuthorId = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [UserId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getMessages(UserId) {
        const query = 'SELECT * FROM Message WHERE AuthorId = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [UserId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static modifyInfo(UserId, newUserName, newEmail, newPwd) {
        const query = `UPDATE User SET Username = ?, Email = ?, Password = ? WHERE UserID = ?;`;
        return new Promise((resolve, reject) => {
            connection.query(query, [newUserName, newEmail, newPwd, UserId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static createUser(UserName, Email, Pwd, Date) {
        const query = `INSERT INTO User VALUES (0, ?, ?, ?, ?);`;
        return new Promise((resolve, reject) => {
            connection.query(query, [UserName, Email, Pwd, Date], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static deleteUser(UserId) {
        const query = 'DELETE FROM User WHERE UserID = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [UserId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static likePost(UserId, PostId, type) {
        const query = `INSERT INTO likes VALUES(?, ?, ?)`;
        return new Promise((resolve, reject) => {
            connection.query(query, [UserId, PostId, type], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static sendFriendRequest(SenderId, ReceiveId) {
        const query = `INSERT INTO friendrequest VALUES (0, ?, ?, 'pending');`;
        return new Promise((resolve, reject) => {
            connection.query(query, [SenderId, ReceiveId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results)
                }
            });
        });
    }

    static acceptRequest(UserId, FriendId) {
        const query = "UPDATE friendrequest SET Status = 'accepted' WHERE ReceiveId = ? AND SendId = ?;";
        return new Promise((resolve, reject) => {
            connection.query(query, [UserId, FriendId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            })
        })
    }
}

exports.FriendRequest = class FriendRequest {
    static getRequest(ReceiveId, SendId) {
        const query = `SELECT * FROM friendrequest WHERE ReceiverId = ? AND SendId = ?;`;
        return new Promise((resolve, reject) => {
            connection.query(query, [ReceiveId, SendId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getSent(SenderId) {
        const query = `SELECT * FROM friendrequest WHERE UserId = ?;`;
        return new Promise((resolve, reject) => {
            connection.query(query, [SenderId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getReceived(ReceiveId) {
        const query = `SELECT * FROM friendrequest WHERE ReceiverId = ?;`;
        return new Promise((resolve, reject) => {
            connection.query(query, [ReceiveId], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getRequests() {
        const query = `SELECT * FROM friendrequest WHERE 1;`;
        return new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static deleteRequest(id) {
        const query = `DELETE FROM friendrequest WHERE RequestId = ?;`;
        return new Promise((resolve, reject) => {
            connection.query(query, [id], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}

exports.Likes = class Like {
    static deleteLike(id, UserId, type) {
        const query = `DELETE FROM likes WHERE UserId = ? AND PostId = ? AND type = ?`;
        return new Promise((resolve, reject) => {
            connection.query(query, [UserId, id, type], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static getLike(UserId, PostId, type) {
        const query = 'SELECT * FROM likes WHERE UserId = ? AND PostId = ?, type = ?;';
        return new Promise((resolve, reject) => {
            connection.query(query, [UserId, PostId, type], (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
    }
}