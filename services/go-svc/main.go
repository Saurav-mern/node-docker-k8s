package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Response struct {
	Message string `json:"message"`
	Service string `json:"service"`
}

func handler(w http.ResponseWriter, r *http.Request) {
	resp := Response{
		Message: "Hello from Go Service",
		Service: "go-svc",
	}

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func main() {
	http.HandleFunc("/process", handler)

	log.Println("Go service listening on :8080")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
