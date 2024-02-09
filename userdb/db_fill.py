from pymongo import MongoClient
import bcrypt


key = "mongodb+srv://test1:test1@cluster0.7nihy3k.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(key)
db = client.test

def hash_password(password):
    salt = bcrypt.gensalt()
    hashed_password = bcrypt.hashpw(password.encode('utf-8'), salt)
    return hashed_password
def clear_database():
    db.users.delete_many({})
    print("The 'users' collection has been cleared.")

#fake data
users = [
    {"name": "Alice", "email": "alice@example.com", "age": 25, "password": hash_password("alice_password"), "learned topics": ["chapter 1 ", "chapter 2", "chapter 3"],"on-site time" : 59, "active time" :23},
    {"name": "Bob", "email": "bob@example.com", "age": 30, "password": hash_password("bob_password"),"learned topics": ["chapter 1 ", "chapter 5", "chapter 7"],"on-site time" : 159, "active time" :143},
    {"name": "Charlie", "email": "charlie@example.com", "age": 35, "password": hash_password("charlie_password"),"learned topics": ["chapter 6 "],"on-site time" : 5, "active time" :3}
]

clear_database()
db.users.insert_many(users)

print("User data has been inserted successfully.")
