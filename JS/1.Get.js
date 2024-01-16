/**
 * @param {Object} objectParam
 * @param {string|Array<string>} pathParam
 * @param {*} [defaultValue]
 * @return {*}
 *
 * Before the optional chaining operator (?.) existed, it was sometimes troublesome to access deeply-nested properties in huge JavaScript objects when some of the intermediate properties might not be present.
 * 
 * Lodash's _.get method was created as a solution for such use cases.

Let's write our own version as a get function. The function gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place. The function signature is as such:

get(object, path, [defaultValue]);
object: The object to query.
path: The path of the property to get. It can be a string with . as the separator between fields, or an array of path strings.
defaultValue: Optional parameter. The value returned if the resolved value is undefined.

 *
 */
function get(objectParam, pathParam, defaultValue) {
  const path = Array.isArray(pathParam) ? pathParam : pathParam.split(".");

  let value = objectParam;
  let index = 0;
  let length = path.length;

  while (value != null && index < length) {
    value = value[String(path[index])];
    index++;
  }

  const result = index && index === length ? value : undefined;
  return result !== undefined ? result : defaultValue;
}

console.log(get({ a: { b: 2, c: null }, c: 1 }, "a.c"));
