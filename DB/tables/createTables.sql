CREATE TABLE IF NOT EXISTS User__Utilisateur_(
   UserID CHAR(50),
   Username VARCHAR(50),
   Email VARCHAR(50),
   Password VARCHAR(50),
   RegisterDate VARCHAR(50),
   PRIMARY KEY(UserID)
);

CREATE TABLE IF NOT EXISTS Topic__Sujet_(
   TopicID CHAR(50),
   UserID CHAR(50),
   Titre VARCHAR(50) NOT NULL,
   contenu TEXT NOT NULL,
   CreationDate VARCHAR(50),
   UserID_1 CHAR(50) NOT NULL,
   PRIMARY KEY(TopicID, UserID),
   FOREIGN KEY(UserID_1) REFERENCES User__Utilisateur_(UserID)
);

CREATE TABLE IF NOT EXISTS Message___Message_(
   MessageID CHAR(50),
   TopicID CHAR(50),
   PostDate VARCHAR(50),
   Content VARCHAR(255) NOT NULL,
   TopicID_1 CHAR(50) NOT NULL,
   UserID CHAR(50) NOT NULL,
   UserID_1 CHAR(50) NOT NULL,
   PRIMARY KEY(MessageID, TopicID),
   FOREIGN KEY(TopicID_1, UserID) REFERENCES Topic__Sujet_(TopicID, UserID),
   FOREIGN KEY(UserID_1) REFERENCES User__Utilisateur_(UserID)
);

CREATE TABLE IF NOT EXISTS Roles(
   RoleID CHAR(50),
   Description VARCHAR(255),
   Name VARCHAR(50),
   PRIMARY KEY(RoleID)
);

CREATE TABLE IF NOT EXISTS tags(
   ID CHAR(50),
   label VARCHAR(50),
   PRIMARY KEY(ID)
);

CREATE TABLE IF NOT EXISTS FriendRequest(
   RequestID CHAR(50),
   RequesterID VARCHAR(50),
   ReceiverID VARCHAR(50),
   Status VARCHAR(50),
   PRIMARY KEY(RequestID)
);

CREATE TABLE IF NOT EXISTS Subcategory(
   SubcategoryID VARCHAR(50),
   Name VARCHAR(50),
   CategoruID VARCHAR(50),
   TopicID CHAR(50) NOT NULL,
   UserID CHAR(50) NOT NULL,
   PRIMARY KEY(SubcategoryID),
   FOREIGN KEY(TopicID, UserID) REFERENCES Topic__Sujet_(TopicID, UserID)
);

CREATE TABLE IF NOT EXISTS Category(
   CategoryID VARCHAR(50),
   Name VARCHAR(50),
   SubcategoryID VARCHAR(50) NOT NULL,
   PRIMARY KEY(CategoryID),
   FOREIGN KEY(SubcategoryID) REFERENCES Subcategory(SubcategoryID)
);

CREATE TABLE IF NOT EXISTS Like_(
   LikeID VARCHAR(50),
   UserID VARCHAR(50),
   MessageID VARCHAR(50),
   LikeDate VARCHAR(50),
   PRIMARY KEY(LikeID)
);

CREATE TABLE IF NOT EXISTS tagged_with(
   TopicID CHAR(50),
   UserID CHAR(50),
   ID CHAR(50),
   PRIMARY KEY(TopicID, UserID, ID),
   FOREIGN KEY(TopicID, UserID) REFERENCES Topic__Sujet_(TopicID, UserID),
   FOREIGN KEY(ID) REFERENCES tags(ID)
);

CREATE TABLE IF NOT EXISTS Possesses(
   UserID CHAR(50),
   RoleID CHAR(50),
   PRIMARY KEY(UserID, RoleID),
   FOREIGN KEY(UserID) REFERENCES User__Utilisateur_(UserID),
   FOREIGN KEY(RoleID) REFERENCES Roles(RoleID)
);

CREATE TABLE IF NOT EXISTS Sends(
   UserID CHAR(50),
   RequestID CHAR(50),
   PRIMARY KEY(UserID, RequestID),
   FOREIGN KEY(UserID) REFERENCES User__Utilisateur_(UserID),
   FOREIGN KEY(RequestID) REFERENCES FriendRequest(RequestID)
);

CREATE TABLE IF NOT EXISTS Likes(
   UserID CHAR(50),
   MessageID CHAR(50),
   TopicID CHAR(50),
   LikeID VARCHAR(50),
   PRIMARY KEY(UserID, MessageID, TopicID, LikeID),
   FOREIGN KEY(UserID) REFERENCES User__Utilisateur_(UserID),
   FOREIGN KEY(MessageID, TopicID) REFERENCES Message___Message_(MessageID, TopicID),
   FOREIGN KEY(LikeID) REFERENCES Like_(LikeID)
);
