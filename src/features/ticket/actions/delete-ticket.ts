'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/lib/db';
import { ticketsPath } from '@/paths';

export const deleteTicket = async (id: string) => {
  await db.ticket.delete({
    where: { id },
  });

  revalidatePath(ticketsPath())
  redirect(ticketsPath());
};
