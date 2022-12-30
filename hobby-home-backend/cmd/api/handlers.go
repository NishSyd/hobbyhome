package main

import (
	"backend/internal/models"
	"encoding/json"
	"fmt"
	"net/http"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status  string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	}{
		Status:  "active",
		Message: "Go Backend for Hobby home running",
		Version: "1.0.0",
	}

	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)

}

func (app application) HobbyList(w http.ResponseWriter, r *http.Request) {

	var hobbies []models.HobbyItem

	naan := models.HobbyItem{
		Id:          10,
		Name:        "Garlic naan",
		Category:    "Cooking",
		Description: "Made of whole flour wheat",
	}

	hobbies = append(hobbies, naan)

	acrylic := models.HobbyItem{
		Id:          11,
		Name:        "Acrylic girl",
		Category:    "Painting",
		Description: "Drawing with a frame",
	}

	hobbies = append(hobbies, acrylic)

	out, err := json.Marshal(hobbies)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)

}
