import { camelCase, isPlainObject } from 'lodash';

export const camelCaseKeys = <R>(obj: any): R => {
    if (Array.isArray(obj)) {
        return (obj.map(value => camelCaseKeys(value)) as unknown) as R;
    }

    if (isPlainObject(obj)) {
        return Object.keys(obj).reduce<R>(
            (result, key) => ({
                ...result,
                [camelCase(key)]: camelCaseKeys(obj[key]),
            }),
            {} as R
        );
    }

    return obj;
};
