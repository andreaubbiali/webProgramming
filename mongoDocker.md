
start a database (deafult name is test)
```
docker run -d --net=host --name mongoDB -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=admin mongo
```

start a container with a shell to the mongo created before (it will be removed when closed)
```
docker run -it --rm --net=host mongo  mongo --host localhost -u admin -p admin --authenticationDatabase admin test
```