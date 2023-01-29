export function normalizeType(type) {
  if (!type[0].toLowerCase()) {
    return type;
  }

  return `${type[0].toUpperCase()}${type.slice(1, type.length)}`;
}
