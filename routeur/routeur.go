package routeur

import (
	"main/controller"
	"net/http"
)

func InitRouteur() {
	controller.Start()
	http.HandleFunc("/", controller.Error)
	http.HandleFunc("/home", controller.Home)
	http.HandleFunc("/connect", controller.Connect)
	http.HandleFunc("/register", controller.Register)
	http.HandleFunc("/create_post", controller.CreatePost)
	http.HandleFunc("/handleCreate", controller.CreateHandler)
	http.HandleFunc("/post", controller.Post)
	http.HandleFunc("/editHandle", controller.EditHandler)
	http.HandleFunc("/profile", controller.Profile)
	http.HandleFunc("/search", controller.Search)
	http.HandleFunc("/searchHandle", controller.SearchHandler)
	http.HandleFunc("/results", controller.Results)
	http.HandleFunc("/categories", controller.Categories)
	http.HandleFunc("/messageHandle", controller.MessageHandler)
	http.HandleFunc("/messageEditHandle", controller.EditMessageHandler)
}
