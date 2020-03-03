FROM golang:1.10

RUN apt-get update \
	&& apt-get install -y --no-install-recommends \
		postgresql-client \
	&& rm -rf /var/lib/apt/lists/*

WORKDIR /go/src
COPY . .
RUN go get github.com/julienschmidt/httprouter
CMD ["go", "run", "server.go"]
