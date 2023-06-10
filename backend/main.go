package main

import (
	"fmt"
	"net/http"
	"chat/pkg/websocket"
)

func serveWS(pool *websocket.Pool, w http.ResponseWriter, r *http.Request){
	fmt.Println("websocket endpoint reached")

	conn, err := websocket.Upgrade(w, r)

	if err!=nil{
		fmt.Fprintf(w, "%+v\n", err)
	}

	client := &websocket.Client{
		Conn: conn,
		Pool: pool,
	}

	pool.Register <- client
	client.Read()
}

func setUpRoutes(){
	pool := websocket.NewPool()
	go pool.Start()

	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		serveWS(pool, w, r)
	})
}

func main(){
	fmt.Println("Abhinav's full stack chat application!!")
	setUpRoutes()
	http.ListenAndServe(":9000", nil)
}