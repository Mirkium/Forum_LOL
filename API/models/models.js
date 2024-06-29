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
        const query = `UPDATE Post SET Message = ${newContent} WHERE id = ${PostId};`;
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

    static createPost(PostId, TopicId, AuthorId, Title, Content) {
        const query = `INSERT INTO Post VALUES(${PostId}, ${Title}, ${Content}, 0, ${AuthorId}, ${TopicId});`;
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

    static updateLikes(PostId, Likes) {
        const query = `UPDATE Post SET Likes = ${Likes} WHERE id = ${PostId};`;
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
        const query = `UPDATE Message SET Content = ${NewMessage} WHERE id = ${MessageId};`;
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

    static postMessage(id, content, authorId, postId) {
        const query = `INSERT INTO 'message' ('id', 'Content', 'Likes', 'PostId', 'AuthorId') VALUES ('${id}', '${content}', '[]', '${postId}', '${authorId}');`;
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

    static updateLikes(id, likes) {
        const query = `UPDATE Message SET Likes = ${likes} WHERE id = ${id};`;
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

exports.Topics = class Topics {
    static getPosts(TopicId) {
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
        return new Prommise((resolve, reject) => {
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

    static modifyInfo(UserId, newUserName, newEmail, newPwd, newFriends) {
        const query = `UPDATE User SET Username = ${newUserName}, Email = ${newEmail}, Password = ${newPwd}, FriendsList = ${newFriends} WHERE UserID = ${UserId};`;
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

    static createUser(UserId, UserName, Email, Pwd, Date) {
        const query = `INSERT INTO User VALUES (${UserId}, ${UserName}, ${Email}, ${Pwd}, ${Date}, '[]');`;
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

    static likePost(PostId, likes) {
        const query = `UPDATE Post SET Likes = ${likes} WHERE id = ${PostId};`;
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

    static sendFriendRequest(id, SenderId, ReceiveId) {
        const query = `INSERT INTO friendrequest VALUES(${id}, ${SenderId}, ${ReceiveId}, 'pending');`;
        return new Promise((resolve, reject) => {
            connection.query(query, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results)
                }
            });
        });
    }

    static updateFriends(id, friends) {
        const query = `UPDATE User SET FriendsList = ${friends} WHERE id = ${id};`;
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