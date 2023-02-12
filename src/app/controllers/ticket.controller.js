const ticketService = require("../services/ticket.service");

class TicketController {
    createTicket(req, res) {
        const newTicket = ticketService.createTicket(req.body);
        res.status(201).json(newTicket);
    } 
}

const ticketController = new TicketController();
module.exports = ticketController;