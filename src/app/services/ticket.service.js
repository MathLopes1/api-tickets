const TicketRepository = require("../repositories/ticket.repository.js");

class TicketService {
    async createTicket(ticket){
        const newTicket = await TicketRepository.create(ticket);
        return newTicket;
    }

    async getAllTickets(){
        const allTickets = await TicketRepository.getAll();
        return allTickets;
    }

    async getTicketById(id){
        const ticket = await TicketRepository.getById(id);
        return ticket;
    }
}

const ticketService = new TicketService();
module.exports = ticketService;