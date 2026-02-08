# ---------- Builder Stage ----------
FROM golang:1.22-alpine AS builder

WORKDIR /app
COPY go.mod ./
RUN go mod download

COPY . .
RUN go build -o go-svc

# ---------- Runtime Stage ----------
FROM alpine:3.19

WORKDIR /app
COPY --from=builder /app/go-svc .

EXPOSE 8080
CMD ["./go-svc"]
