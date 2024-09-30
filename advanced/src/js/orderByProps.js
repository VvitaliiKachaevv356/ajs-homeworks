export default function orderByProps(obj, setOrder) {
  const propsBySetOrder = [];
  const restData = [];
  for (const key in obj) {
    const value = { key, value: obj[key] };
    if (setOrder.includes(key)) {
      propsBySetOrder.push(value);
    } else {
      restData.push(value);
    }
  }
  restData.sort((a, b) => a.key.localeCompare(b.key));
  return [...propsBySetOrder, ...restData];
}
