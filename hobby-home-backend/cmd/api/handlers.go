package main

import (
	"backend/internal/models"
	"context"
	"errors"
	"log"
	"net/http"

	"go.mongodb.org/mongo-driver/bson"
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

    _ = app.writeJSON(w, http.StatusOK, payload)

}

func (app application) HobbyList(w http.ResponseWriter, r *http.Request) {
    log.Println("Requesting all hobbies")

    cursor, err := app.db.Collection("HobbyList").Find(context.Background(), bson.D{{}}) 
    if err != nil {
        panic(err)
    }

    var hobbies []models.HobbyItem
    if err = cursor.All(context.TODO(), &hobbies); err != nil {
		panic(err)
	}

    _ = app.writeJSON(w, http.StatusOK, hobbies)
}

func (app application) addHobby(w http.ResponseWriter, r *http.Request) {
    log.Println("Adding hobby")

    if r.Body == nil {
        app.errorJSON(w, errors.New("Empty Body"))
    }

    var hobby models.HobbyItem
    err := app.readJSON(w, r, &hobby)
    if err != nil {
        app.errorJSON(w, err)
    }

    result, err := app.db.Collection("HobbyList").InsertOne(context.Background(), hobby)

    if err != nil {
        app.errorJSON(w, err)
    }
    log.Println("Inserted succesfuly - ", result)
    _ = app.writeJSON(w, http.StatusOK, "Inserted Successfully")
}
