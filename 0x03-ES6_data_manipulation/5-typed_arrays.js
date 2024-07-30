const createInt8TypedArray = (length, position, value) => {
    const buff = new ArrayBuffer(length);
    const int8Array = new Int8Array(buff);
    if (position > int8Array.length) throw new Error('Position outside range');
    int8Array[position] = value;
    return new DataView(buff);
};

    export default createInt8TypedArray;
