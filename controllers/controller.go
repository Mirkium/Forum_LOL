package controllers

import (
	"net/http"
	"text/template"
)

func ErrorHandler(w http.ResponseWriter, r *http.Request) {
	tmpl, err := template.ParseFiles("templates/404.html")
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
	err = tmpl.ExecuteTemplate(w, "404", nil)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return
	}
}
