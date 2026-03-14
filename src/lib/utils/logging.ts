import { Token } from 'typedi';

export const LOGGING = new Token('LOGGING');
export type Log = typeof console;
export const log = console;
