# Instructions

## build

```bash
docker build -t brunolohl/nginx .
```

## run as dev environment

```bash
docker run -it --rm --name nginx -p 8080:80 brunolohl/nginx bash
```

## run

```bash
docker run -d --rm --name nginx -p 8080:80 brunolohl/nginx
```

## exec

```bash
docker exec -it nginx bash
```

## stop

```bash
docker stop nginx
```