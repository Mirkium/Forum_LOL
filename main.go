package main

import (
	"fmt"
	"net/http"
)

func main() {
	templates.InitTemplate() 

	routes.SetRoutes() 
	
	http.Handle("/asset/", http.StripPrefix("/asset/", http.FileServer(http.Dir("asset"))))

	fmt.Println("Serveur démarré sur http://localhost:8080/")
	err := http.ListenAndServe(":8080", nil) 
	if err != nil {
		fmt.Println("Erreur lors du démarrage du serveur :", err)
	}
}
