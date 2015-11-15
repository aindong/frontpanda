module.exports = function(app) {
    app.get('/',function(req, res) {
        if (! req.tenant) {
            res.render('index', { title: 'Express', tenant: req.tenant });
            return false;
        }

        res.render('tenant/index', { title: 'Express', tenant: req.tenant });
    });
};