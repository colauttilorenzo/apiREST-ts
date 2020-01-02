interface Object {
    cast<T extends Object>(raw: any, type: new () => T): T;
}

if (!Object.cast) {

    Object.cast = function <T extends Object>(raw: any, type: new () => T): T {
        const obj = new type();
        Object.keys(raw).forEach(k => (obj as any)[k] = raw[k]);

        return obj;
    }

}