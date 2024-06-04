export function arrayIdConverter(data) {
  const newData = data
    .map((dat) => ({
      id: dat?._id.toString(),
      ...dat,
    }))
    .map(({ _id, ...rest }) => rest);
  return newData;
}
export function objIdConverter(obj) {
  const { _id, ...updatedObj } = { ...obj, id: obj._id.toString() };
  return updatedObj;
}
