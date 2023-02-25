import type { Writable } from "svelte/store";
import type { Slide } from './types';
import { persisted } from 'svelte-local-storage-store';

export const slides: Writable<Slide[]> = persisted('slides', []);
export const currSlide: Writable<number> = persisted('currSlide', 0);
export const currStep: Writable<number> = persisted('currStep', 0);
export const maxSteps: Writable<number> = persisted('maxSteps', 0);