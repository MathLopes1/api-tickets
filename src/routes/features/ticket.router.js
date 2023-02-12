const ticketController = require("../../app/controllers/ticket.controller");

module.exports = (server, routes, prefix = '/api/v1/ticket') => {
    routes.post('/', ticketController.createTicket);
    
    server.use(prefix, routes);
};
  