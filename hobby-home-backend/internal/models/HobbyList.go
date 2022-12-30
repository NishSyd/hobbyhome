package models

import "time"

type HobbyItem struct {
	Id          int       `json:"id"`
	Name        string    `json:"Name"`
	Category    string    `json:"Category"`
	Cost        int       `json:"Cost"`
	Description string    `json:"Description"`
	Image       string    `json:"image"`
	Updated     time.Time `json:"updated"`
}
