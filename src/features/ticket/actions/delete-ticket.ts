'use server';

import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { ticketsPath } from '@/paths';

export const deleteTicket = async (id: string) => {
  await db.ticket.delete({
    where: { id },
  });
  redirect(ticketsPath());
};
