db.createCollection('post')

db.post.insert(
    {
        title: "Learn mongo with mbrsagor.",
        description: "Hello there, I'm learning Mongo db with mbr-sagor bhai. Mongo is awesome no sql database.",
        is_active: true,
        category: "tech",
        user_id: 1,
        tags: ["mongo", "db", "mongoDB"],
        created_at: new Date(2020, 8, 8, 2, 4),
        created_by: "mbr-sagor"
    }
)
