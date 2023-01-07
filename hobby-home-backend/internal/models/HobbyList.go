package models

import (
	"go.mongodb.org/mongo-driver/bson/primitive"
)
type HobbyItem struct {
    Id          primitive.ObjectID       `json:"_id,omitempty" bson:"_id,omitempty`
	Name        string    `json:"name"` 
    Category    string    `json:"category"`
	Cost        int       `json:"cost"`
	Description string    `json:"description"`
	Image       string    `json:"image"`
}
