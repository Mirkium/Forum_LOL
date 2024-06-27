const connection = require('../config/config');

class User {
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
}

module.exports = User;