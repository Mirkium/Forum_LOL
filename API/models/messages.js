const connection = require('../config/config');

class Messages {
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
        const query = `INSERT INTO 'message' ('id', 'Content', 'Likes', 'PostId', 'AuthorId') VALUES ('${id}', '${content}', '0', '${postId}', '${authorId}');`;
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

module.exports = Messages;