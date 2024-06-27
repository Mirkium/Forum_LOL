const connection = require('../config/config');

class Topics {
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

module.exports = Topics;