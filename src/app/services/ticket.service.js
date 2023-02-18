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

    async updateTicketById(id, payload) {
        const ticketUpdated = await TicketRepository.updateById(id, payload);
        return ticketUpdated;
    }

    async deleteTicketById(id) {
        const ticket = await TicketRepository.deleteById(id);
        return ticket;
    }
}

const ticketService = new TicketService();
module.exports = ticketService;