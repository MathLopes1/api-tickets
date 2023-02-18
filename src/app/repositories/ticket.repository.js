const { PrismaClient } = require('@prisma/client')
const prismaService = new PrismaClient()

class TicketRepository {
    create(ticket) {
        return prismaService.tickets.create({
            data: ticket
        });
    }
}

const ticketRepository = new TicketRepository();
module.exports = ticketRepository;