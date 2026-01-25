type Ticket = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
  content: string;
  status: 'OPEN' | 'IN_PROGRESS' | 'DONE';
};

// In-memory storage for mock data
let mockTickets: Ticket[] = [
  {
    id: 'mock-1',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-01'),
    title: 'Ticket 1',
    content: 'First ticket from mock data.',
    status: 'DONE',
  },
  {
    id: 'mock-2',
    createdAt: new Date('2024-01-02'),
    updatedAt: new Date('2024-01-02'),
    title: 'Ticket 2',
    content: 'Second ticket from mock data.',
    status: 'OPEN',
  },
  {
    id: 'mock-3',
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-03'),
    title: 'Ticket 3',
    content: 'Third ticket from mock data.',
    status: 'IN_PROGRESS',
  },
  {
    id: 'mock-4',
    createdAt: new Date('2024-01-04'),
    updatedAt: new Date('2024-01-04'),
    title: 'Ticket 4',
    content: 'Fourth ticket from mock data.',
    status: 'OPEN',
  },
  {
    id: 'mock-5',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-05'),
    title: 'Ticket 5',
    content: 'Fifth ticket from mock data.',
    status: 'DONE',
  },
  {
    id: 'mock-6',
    createdAt: new Date('2024-01-06'),
    updatedAt: new Date('2024-01-06'),
    title: 'Ticket 6',
    content: 'Sixth ticket from mock data.',
    status: 'IN_PROGRESS',
  },
  {
    id: 'mock-7',
    createdAt: new Date('2024-01-07'),
    updatedAt: new Date('2024-01-07'),
    title: 'Ticket 7',
    content: 'Seventh ticket from mock data.',
    status: 'OPEN',
  },
  {
    id: 'mock-8',
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08'),
    title: 'Ticket 8',
    content: 'Eighth ticket from mock data.',
    status: 'DONE',
  },
  {
    id: 'mock-9',
    createdAt: new Date('2024-01-09'),
    updatedAt: new Date('2024-01-09'),
    title: 'Ticket 9',
    content: 'Ninth ticket from mock data.',
    status: 'IN_PROGRESS',
  },
  {
    id: 'mock-10',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10'),
    title: 'Ticket 10',
    content: 'Tenth ticket from mock data.',
    status: 'OPEN',
  },
];

export const mockTicketService = {
  findMany: async (options?: { orderBy?: { createdAt: 'asc' | 'desc' } }) => {
    let tickets = [...mockTickets];

    if (options?.orderBy?.createdAt === 'desc') {
      tickets.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    } else if (options?.orderBy?.createdAt === 'asc') {
      tickets.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    }

    return tickets;
  },

  findUnique: async (options: { where: { id: string } }) => {
    const ticket = mockTickets.find(t => t.id === options.where.id);
    return ticket || null;
  },

  delete: async (options: { where: { id: string } }) => {
    const index = mockTickets.findIndex(t => t.id === options.where.id);
    if (index !== -1) {
      const deleted = mockTickets[index];
      mockTickets = mockTickets.filter(t => t.id !== options.where.id);
      return deleted;
    }
    throw new Error('Ticket not found');
  },
};
