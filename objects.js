// edit a property of an object
const setKey = (object, key, value) => ({ ...object, [key]: value });

// keep only some keys of an object (useful to hide or optimize data)
const select = (object, keys) => keys.reduce((acc, key) => ({ ...acc, [key]: object[key] }), {});

// apply select operation on an array of objects
const mapAndSelect = (objects, keys) => objects.map((object) => select(object, keys));

// exclude some keys of an object (useful to hide or optimize data)
const except = (object, keys) => {
    let newObject = { ...object };
    for (const key of keys) {
        delete newObject[key];
    }
    return newObject;
};

// apply except operation on an array of objects
const mapAndExcept = (objects, keys) => objects.map((object) => except(object, keys));
