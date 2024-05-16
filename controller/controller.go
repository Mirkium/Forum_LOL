package controller

import (
	"main/templates"
	"net/http"
)

func Start() {
	templates.InitTemplates()
}

func Home(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "accueil", nil)
}

func Connect(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "connect", nil)
}

func Register(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "register", nil)
}

func CreatePost(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "create", nil)
}

func CreateHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/post", http.StatusSeeOther)
}

func Post(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "post", nil)
}

func EditPost(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "edit", nil)
}

func EditHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/post", http.StatusSeeOther)
}

func Profile(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "profile", nil)
}

func Search(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "search", nil)
}

func SearchHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/results", http.StatusSeeOther)
}

func Results(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "results", nil)
}

func Categories(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "categories", nil)
}

func MessageHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/post", http.StatusSeeOther)
}

func EditMessageHandler(w http.ResponseWriter, r *http.Request) {
	http.Redirect(w, r, "/post", http.StatusSeeOther)
}

func Error(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "404", nil)
}

func Ranked(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "ranked", nil)
}

func Draft(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "draft", nil)
}

func Patch(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "patch", nil)
}

func Temporal(w http.ResponseWriter, r *http.Request) {
	templates.Temp.ExecuteTemplate(w, "temporal", nil)
}
