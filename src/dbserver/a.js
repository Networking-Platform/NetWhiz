const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 3000;

app.use(express.json());

// "get"
app.get('/user', async (req, res) => {
    const client = new MongoClient('mongodb+srv://test1:test1@cluster0.7nihy3k.mongodb.net/');
    try {
        await client.connect();
        const db = client.db('userData');
        const collection = db.collection('one');
        const user = await collection.find({ email: req.query.email });
        if (user) {
            res.send(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to database');
    } finally {
        await client.close();
    }
});
app.get('/learned', async (req, res) => {
    const client = new MongoClient('mongodb+srv://test1:test1@cluster0.7nihy3k.mongodb.net/');
    try {
        await client.connect();
        const db = client.db('userData');
        const collection = db.collection('one');
        const user = await collection.find({ finishedTopic: req.query.finishedTopic });
        if (user) {
            res.send(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to database');
    } finally {
        await client.close();
    }
});
app.get('/ongoing', async (req, res) => {
    const client = new MongoClient('mongodb+srv://test1:test1@cluster0.7nihy3k.mongodb.net/');
    try {
        await client.connect();
        const db = client.db('userData');
        const collection = db.collection('one');
        const user = await collection.find({ ongoingTopic: req.query.ongoingTopic });
        if (user) {
            res.send(user);
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to database');
    } finally {
        await client.close();
    }
});

app.get('/users', async (req, res) => {
    const client = new MongoClient('mongodb+srv://test1:test1@cluster0.7nihy3k.mongodb.net/');
    try {
        await client.connect();
        const db = client.db('userData');
        const collection = db.collection('one');
        const users = await collection.find().limit(5).toArray();
        if (users.length > 0) {
            res.send(users);
        } else {
            res.status(404).send('No users found');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error connecting to database');
    } finally {
        await client.close();
    }
});


// post
app.post('/register', async (req, res) => {
    const client = new MongoClient('mongodb+srv://test1:test1@cluster0.7nihy3k.mongodb.net/');
    try {
        await client.connect();
        const db = client.db('userData');
        const collection = db.collection('one');
        const user = await collection.find({ email: req.query.email });
        if (user) {
            res.status(404).send('User with same email already exists');
        } else {
            const result = await collection.insertOne({ name: req.body.name, email: req.body.email, registerdate: new Date,lastLogin: new Date, activeTime: 0,finishedTopic : [], ongoingTopic:[],accuracyRate:0});
            res.send(`name: ${req.body.name}`);
        }
    } catch (err) { 
        console.error(err);
        res.status(500).send('Error connecting to database');
    } finally {
        await client.close();
    }
});

app.post('/logoff', async (req, res) => {
    const client = new MongoClient('mongodb+srv://test1:test1@cluster0.7nihy3k.mongodb.net/');
    try {
        await client.connect();
        const db = client.db('userData');
        const collection = db.collection('one');
        const result = await collection.updateOne(
            { email: req.body.email }, 
            { $set: { activeTime: req.body.activeTime,finishedTopic : req.body.finishedTopic, ongoingTopic:req.body.ongoingTopic,accuracyRate:req.body.accuracyRate, lastLogin:new Date} }
        );
        if (result.matchedCount > 0) {
            res.send(`User with email: ${req.body.email} updated successfully`);
        } else {
            res.status(404).send('User not found');
        }
    } catch (err) { 
        console.error(err);
        res.status(500).send('Error connecting to database');
    } finally {
        await client.close();
    }
});


app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});