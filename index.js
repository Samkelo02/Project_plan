import * as sqlite from 'sqlite';
import sqlite3 from 'sqlite3';
import express from 'express';

const app = express();

app.use(express.static('public'));
app.use(express.json());

const  db = await  sqlite.open({
    filename:  './data_plan.db',
    driver:  sqlite3.Database
});

console.log('db initialized');

await db.exec(`PRAGMA foreign_keys = ON;`);

await db.migrate();

app.get('/api/data_plan', async function(req, res) {
    const company = await db.all(`select * from company`);
    res.json({
        company
    });
});



console.log('done');

    const PORT = process.env.PORT || 4005;
    app.listen(PORT, function() {
        console.log(`app started on $({PORT}`)

    });





