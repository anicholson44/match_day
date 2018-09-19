export default (array) => array.reduce((obj, el) => {
  obj[el.id] = el;
  return obj;
}, {});
