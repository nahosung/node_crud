var db = function localConnect(){
    return require('mysql').createConnection({
        hostname: 'localhost',
        user: 'root',
        password: 'apmsetup',
        database: 'test'
    });
    connection.connect();
}
module.exports.localConnect = db;
