export function getLine(data: string) {
  const [name, ...args] = data.split(' ');
  return {
    name: name,
    params: args.map(i => Number(i))
  };
};