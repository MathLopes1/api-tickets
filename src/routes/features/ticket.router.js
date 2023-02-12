module.exports = (server, routes, prefix = '/api/v1/ticket') => {
    routes.get('/', (req, res) =>  {
        res.send('Hello server')
    });
    
    server.use(prefix, routes);
};
  