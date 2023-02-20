import type { Writable } from "svelte/store";
import { persisted } from 'svelte-local-storage-store';

export const theme: Writable<'dark' | 'light'> = persisted('theme', 'dark');