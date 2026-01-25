import { db } from '@/lib/db';

export const getTickets = async () => {
  return await db.ticket.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
};
