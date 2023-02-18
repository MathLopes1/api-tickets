const ticketService = require("../services/ticket.service");

class TicketController {
    async createTicket(req, res) {
        const newTicket = await ticketService.createTicket(req.body);
        res.status(201).json(newTicket);
    } 

    async getAllTickets(req, res) {
        const newTicket = await ticketService.getAllTickets();
        res.status(200).json(newTicket);
    } 

    async getTicketById(req, res) {
        const ticketId = parseInt(req.params.id);
        const ticket = await ticketService.getTicketById(ticketId);
        res.status(200).json(ticket);
    } 
}

const ticketController = new TicketController();
module.exports = ticketController;