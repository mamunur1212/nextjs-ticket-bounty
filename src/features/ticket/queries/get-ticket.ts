import { db } from '@/lib/db';

export const getTicket = async (id: string) => {
  return await db.ticket.findUnique({
    where: {
      id,
    },
  });
};
