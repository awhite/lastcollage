export function validateParams({
  username,
  period,
  rowNum,
  colNum,
  type,
  showName,
  hideMissing,
}) {
  return !(
    !username ||
    !period ||
    !rowNum ||
    !colNum ||
    !type ||
    !showName ||
    !hideMissing ||
    parseInt(rowNum) > 20 ||
    parseInt(colNum) > 20
  );
}
