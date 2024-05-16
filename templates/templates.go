package templates

import (
	"fmt"
	"html/template"
)

var Temp *template.Template

func InitTemplates() {
	temp, err := template.ParseGlob("./templates/*.html")
	if err != nil {
		fmt.Println("Erreur template : ", err)
	}
	Temp = temp
}
