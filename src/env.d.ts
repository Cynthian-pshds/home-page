/// <reference types="astro/client" />
declare module 'ungap__structured-clone' {
    export function structuredClone<T>(value: T, options?: StructuredCloneOptions): T}