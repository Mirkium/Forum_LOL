const connection = require('../config/config');

class Posts {
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
}

module.exports = Posts;