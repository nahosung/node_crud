var express = require('express');
var router = express.Router();
var connection = require('./dbcon.js').localConnect();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/list', function (req, res, next) {
        connection.query('SELECT * FROM bbs', function (err, rows) {
            if (err) console.error("err : " + err);
            console.log("rows : " + JSON.stringify(rows));

            res.render('bbs/list', {title: 'test', rows: rows});
    });
});

router.get('/form', function (req, res, next) {
              res.render('bbs/form', {title: 'form'});
});

router.get('/detail/:bbs_id', function (req, res, next) {
        var bbs_id = req.params.bbs_id;
          connection.query('SELECT * FROM bbs where bbs_id = ?',[bbs_id], function (err, rows) {
              if (err) console.error("err : " + err);
              console.log("rows : " + JSON.stringify(rows));

              res.render('bbs/detail', {title: 'detail', rows: rows});
          });
});


router.post('/insert', function (req, res, next) {
      var data = [ req.body.bbs_title,
                  req.body.bbs_user,
                  req.body.bbs_content ];
        var sql ='INSERT INTO bbs (BBS_TITLE, BBS_USER, BBS_CONTENT, BBS_DATE, BBS_COUNT) VALUES(?,?,?,SYSDATE(),0)';
        connection.query(sql, data, function (err, rows) {
            if (err) console.error("err : " + err);

            res.redirect('/users/list');
        });
});

router.post('/update', function (req, res, next) {
        var data = [ req.body.bbs_title,
                  req.body.bbs_user,
                  req.body.bbs_content,
                  req.body.bbs_id ];
        var sql = 'UPDATE BBS SET BBS_TITLE = ?, BBS_USER = ?, BBS_CONTENT = ? WHERE BBS_ID = ? ';
        connection.query(sql, data, function (err, rows) {
            if (err) console.error("err : " + err);

            res.redirect('/users/list');
        });
});

router.get('/delete/:bbs_id', function (req, res, next) {
    var bbs_id = req.params.bbs_id;
        connection.query('DELETE FROM bbs WHERE BBS_ID = ?',[bbs_id], function (err, rows) {
            if (err) console.error("err : " + err);
            console.log("rows : " + JSON.stringify(rows));

            res.redirect('/users/list');
        });
});

module.exports = router;
