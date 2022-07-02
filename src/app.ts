import * as H from './helper';

const log = <T, U>(fn: Function, ...args: Array<T | U>) => {
	console.log(fn(...args));
};

log<number, number>(H.add, 1, 2);
