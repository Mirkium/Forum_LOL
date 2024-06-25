

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

    static getFriends(UserId) {
        const query = 'SELECT FriendsLike FROM User WHERE UserID = ?;';
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
}