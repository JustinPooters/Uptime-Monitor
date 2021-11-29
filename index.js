var express = require('express');
var app = express();
var mysql = require('mysql');
const https = require('https')
const isReachable = require('is-reachable');
const fs = require('fs');
const logger = require('./modules/logger');

var conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "uptimeMonitor"
});

conn.connect(function(err) {
    if (err) throw err;
    logger.info("Connected!");
});

app.set('view engine', 'ejs');

async function updateStatus() {
    logger.debug("Updating");
    const array = require("./servers.json");
    array.forEach(async function(element) {
        if (await isReachable(element)) {
            await conn.query(`DELETE FROM servers WHERE server = "${element}"`, function(err, result) {
                if (err) return logger.fatal(err);
            });
            await conn.query(`INSERT INTO servers (status, server) VALUES ('online', '${element}')`, function(err, result) {
                if (err) return logger.fatal(err);
            });
        } else {
            await conn.query(`DELETE FROM servers WHERE server = "${element}"`, function(err, result) {
                if (err) return logger.fatal(err);
            });
            await conn.query(`INSERT INTO servers (status, server) VALUES ('offline', '${element}')`, function(err, result) {
                if (err) return logger.fatal(err);
            });
        }
    });
}
setInterval(updateStatus, 60000);

app.get('/', function(req, res) {
    conn.query("SELECT * FROM servers WHERE status = 'online'", function(err, result, fields) {
        const onlines = [];
        result.forEach(function(element) {
            onlines.push({ name: `${element.server}`, status: `${element.status}` })
        });
        conn.query("SELECT * FROM servers WHERE status = 'offline'", function(err, result, fields) {
            const offlines = [];
            result.forEach(function(element) {
                offlines.push({ name: `${element.server}`, status: `${element.status}` })
            });
            res.render('pages/index', {
                onlines: onlines,
                offlines: offlines,
            });
        });
    });
});

app.listen(80);
logger.info('Server is listening on port 80');