import { db } from '@/lib/db';

export const getTicket = async (id: string) => {
  console.log('Fetching ticket with ID:', id);
  return await db.ticket.findUnique({
    where: {
      id,
    },
  });
};
