package main

import (
	"github.com/julienschmidt/httprouter"
	"net/http"
	"log"
	"strconv"
)

func Test(w http.ResponseWriter, r *http.Request, ps httprouter.Params) {
	var result int64
	result = 0
	maxValue, _ := strconv.ParseInt(ps.ByName("id"), 10, 32)
	var i int64
	for i = 0; i < maxValue; i++ {
		result = result + 1
	}
	message := strconv.FormatInt(result, 10)
	w.Write([]byte(message))
}

func main() {
	router := httprouter.New()
	router.GET("/api/cpu/:id", Test)

	log.Fatal(http.ListenAndServe(":3001", router))
}
