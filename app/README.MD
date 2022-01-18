# READ ME

## build

```bash
docker build -t brunolohl/app .
```

## run as dev environment

```bash
docker run -it --rm --name app -p 3000:3000 -v $('pwd'):/usr/src/app brunolohl/app bash
```

## run

```bash
docker run -d --rm --name app -p 3000:3000 -v $('pwd'):/usr/src/app brunolohl/app
```

## exec

```bash
docker exec -it app bash
```

## stop

```bash
docker stop app
```