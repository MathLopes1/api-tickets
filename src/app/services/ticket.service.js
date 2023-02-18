const TicketRepository = require("../repositories/ticket.repository.js");

class TicketService {
    async createTicket(ticket){
        const newTicket = await TicketRepository.create(ticket);
        return newTicket;
    }
}

const ticketService = new TicketService();
module.exports = ticketService;