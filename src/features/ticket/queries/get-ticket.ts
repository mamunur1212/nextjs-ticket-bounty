import { cache } from 'react';
import { db } from '@/lib/db';

export const getTicket = cache(async (id: string) => {
  console.log('Fetching ticket with ID:', id);
  return await db.ticket.findUnique({
    where: {
      id,
    },
  });
});
