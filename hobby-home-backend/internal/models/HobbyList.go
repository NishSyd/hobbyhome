package models

type HobbyItem struct {
	Name        string `json:"name"`
	Category    string `json:"category"`
	Cost        int    `json:"cost"`
	Description string `json:"description"`
	Image       string `json:"image"`
}
