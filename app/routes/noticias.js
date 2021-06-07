module.exports = (application) => {
  application.get('/noticias', (req, res) => {
    // res.send('<html><body>Notícias de tecnologia</body></html>');

    const connection = application.config.dbConnection;
    const noticiasDao= new application.app.models.NoticiasDAO(connection);
    noticiasDao.getNoticias((error, result)=> {
      res.render("noticias/noticias", { noticias: result })
    })
  });
}




