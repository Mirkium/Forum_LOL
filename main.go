package main

import (
	"main/routeur"
	"net/http"
	"os"
)

func main() {
	routeur.InitRouteur()

	RootDoc, _ := os.Getwd()
	fileserver := http.FileServer(http.Dir(RootDoc + "/assets/"))
	http.Handle("/assets/", http.StripPrefix("/assets/", fileserver))

	http.ListenAndServe("localhost:8080", nil)
}
