import { type NextPage } from 'next';
import { type User } from 'next-auth';

export type NextPageWithUser = NextPage<{ user: User }> & { auth: boolean };
