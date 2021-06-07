module.exports = (app)=>{
    app.get('/', (req, res)=>{
        // res.send('<html><body>Portal de Notícias</body></html>');
        res.render("home/index");
     });
}