const arrayToObject = (array, { getKey = (el) => el, makeValue = () => {} } = {}) =>
  array.reduce((obj, el) => {
    obj[getKey(el)] = makeValue(el);
    return obj;
  }, {});

export default arrayToObject;

export const arrayToObjectUsingIds = (array) =>
  arrayToObject(array, { getKey: ({ id }) => id, makeValue: el => el });
