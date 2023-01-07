package main

import (
	"context"
	"fmt"
	"log"
    "net/http"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
	"go.mongodb.org/mongo-driver/mongo/readpref"
)

const port = 8080

type application struct {
	Domain string
    db *mongo.Database
}

func main() {
	//set app config
	var app application

	//connect to db
    clientOption := options.Client().ApplyURI("mongodb://root:rootpassword@localhost:27017")
    client, err := mongo.Connect(context.TODO(), clientOption)
    if err != nil {
      log.Fatal(err)
    }
    defer func() {
        if err = client.Disconnect(context.TODO()); err != nil {
            panic(err)
        }
    }()
    if err := client.Ping(context.TODO(), readpref.Primary()); err != nil {
		panic(err)
	}

    app.Domain = "example.com"
    app.db = client.Database("hobbyhome")
	log.Println("Starting app on port", port)

	//http.HandleFunc("/",Home)

	//start a webserver
	err = http.ListenAndServe(fmt.Sprintf(":%d", port), app.routes())

	if err != nil {
		log.Fatal(err)
	}

}
