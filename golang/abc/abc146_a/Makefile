.PHONY: deps run

deps:
	go get -u ./...

run:
	go run ./main.go < ./t1.txt
	go run ./main.go < ./t2.txt
	go run ./main.go < ./t3.txt

build:
	GOOS=linux GOARCH=amd64 go build -o hello-world/hello-world ./hello-world