const express = require('express');
const router = express.Router();
const controller = require('../controller/controller');
console.log('controller OK');

router.get('/post/:id', controller.GetPost);

router.get('/CreatePost/:TopicId/:AuthorId/:Title/:Message', controller.CreatePost);

router.get('/posts', controller.GetAllPosts);

router.get('/UserPosts/:UserId', controller.GetUserPosts);

router.get('/posts/:categorie', controller.GetPosts);

router.get('/ModifyPost/:PostId/:NewMessage', controller.ModifyPost);

router.get('/DeletePost/:PostId', controller.DelPost);

router.get('/LikePost/:PostId/:id', controller.LikePost);

router.get('/messages/:PostId', controller.GetMessages);

router.get('/message/:id', controller.GetMessage);

router.get('/ModifyMessage/:MessageId/:NewContent', controller.ModifyMessage);

router.get('/CreateMessage/:PostId/:AuthorId/:Content', controller.CreateMessage);

router.get('/DeleteMessage/:Message', controller.DelMessage);

router.get('/LikeMessage/:MessageId/:id', controller.LikeMessage);

router.get('/User/:id', controller.GetUser);

router.get('/CreateUser/:UserName/:Email/:pwd', controller.CreateUser);

router.get('/FriendRequest/:ReceiveId/:SendId', controller.FriendRequest);

router.get('/AcceptRequest/:ReceiveId/:SendId', controller.AcceptRequest);

router.get('/RefuseRequest/:ReceiveId/:SendId', controller.RefuseRequest);

router.get('/SendRequest/:ReceiveId/:SendId', controller.SendRequest);

router.get('/DeleteFriend/:UserId/:FriendId', controller.DeleteFriend);


module.exports = router;