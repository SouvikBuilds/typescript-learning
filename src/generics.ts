function wrapInArr<T>(item: T): T[] {
  return [item];
}

console.log(wrapInArr<string>("Hello"));
console.log(wrapInArr<number>(43));
console.log(
  wrapInArr<object>({
    name: "Souvik",
  }),
);

function pair<A, B>(a: A, b: B): [A, B] {
  return [a, b];
}

console.log(pair<string, number>("Age", 25));
