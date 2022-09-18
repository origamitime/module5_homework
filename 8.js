const arr = new Map([
    ["apple", "green"],
    ["strawberry", "red"],
    ["blueberry", "blue"]
  ]);
arr.forEach((value, key) => {
    console.log(`Ключ — ${key}, значение — ${value}`);
});