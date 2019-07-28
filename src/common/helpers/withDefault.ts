export const withDefault = (map?: Function) => (data?: Object, props?: Object) =>
    map && data && props ? map(data, props) : {};
