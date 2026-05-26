'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { setCookieByKey } from '@/actions/cookies';
import { db } from '@/lib/db';
import { ticketsPath } from '@/paths';

export const deleteTicket = async (id: string) => {
  await db.ticket.delete({
    where: { id },
  });

  revalidatePath(ticketsPath());
  await setCookieByKey('toast', 'Ticket deleted');
  redirect(ticketsPath());
};
