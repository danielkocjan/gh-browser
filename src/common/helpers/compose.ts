export const compose = (...functions: Function[]) =>
    functions.reduce((a, b) => (...args: any[]) => a(b(...args)));
