import { writable, type Writable } from "svelte/store";
import type { Slide } from './types';

export const slides: Writable<Slide[]> = writable([]);
export const currStep: Writable<number> = writable(0);
export const maxSteps: Writable<number> = writable(0);