# MongoDB DB Documentations 

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

##### uery data in nice alignment.
```db.table_name.find().pretty()```

##### Filter data.
```db.table_name.find({field_name: value})```

##### Sort data.
```db.table_name.find.sort({field_name: `value` like id, or value})```

##### How count data in a table?
```db.table_name.find().count()```