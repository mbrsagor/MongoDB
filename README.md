# MongoDB DB Documentations 

### What is MongoDB?
MongoDB is a leading open-source N0SQL database, document-oriented database program that is written in C++. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas. MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License.

> clear console/terminal: For Mac user command+l and window ctrl+l

##### How to show list of database?
``` show dbs```

##### How list of tables.
```show collections```

##### Create Database.
```use db_name```

##### Create table.
```db.createCollection('table_name')```

##### Delete/Drop database.
```db.dropDatabase()```

##### Insert in a database.
```db.table_name.insert({'dict/object'})```

##### Query data.
```db.table_name.find()```

##### Query data in nice alignment.
```db.table_name.find().pretty()```

##### Filter data.
```db.table_name.find({field_name: value})```

##### Filter one.
```db.post.findOne()```

##### Filter one spesific.
```db.post.findOne({user_id:3})```

##### Sort data.
```db.table_name.find.sort({field_name: `value` like id, or value})```

##### How count data in a table?
```db.table_name.find().count()```

##### Update data into collection.
```db.post.update({ title: "I love javascript and React.JS" }, { $set: { title: "I love to javascript."}})```

##### Remove/Delete data into a collection.
```db.post.remove({'title': 'I love to javascript.'})```

##### Remove/Delete data into all collection.
```db.post.remove()```

##### How to use limit function?
```db.post.find().limit(3)```

##### Limit with pretty.
```db.post.find().limit(3).pretty()```

##### Filter by title using limit
```db.post.find({}, {title:1, _id:0}).limit(6).pretty()```

##### Backup database.
```mongodump --collection collection_name --db db_name```
