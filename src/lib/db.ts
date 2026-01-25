import { mockTicketService } from '@/data/mock-tickets';
import { prisma } from './prisma';

const useMockData = process.env.USE_MOCK_DATA === 'true';

// Data service layer that switches between mock and real DB
export const db = {
  ticket: useMockData ? mockTicketService : prisma.ticket,
};

// Export the flag for any components that need to know
export const isMockDataEnabled = useMockData;
