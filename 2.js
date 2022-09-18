let x = 4;
if (typeof(x) === 'number') {
  console.log('x - число');
} else if (typeof(x) === 'boolean') {
  console.log('x - логический тип');
} else if (typeof(x) === 'string') {
  console.log('x - строка');
} else {
  console.log('Тип x не определен');
}
x = "строка";
if (typeof(x) === 'number') {
  console.log('x - число');
} else if (typeof(x) === 'boolean') {
  console.log('x - логический тип');
} else if (typeof(x) === 'string') {
  console.log('x - строка');
} else {
  console.log('Тип x не определен');
}
x = true;
if (typeof(x) === 'number') {
  console.log('x - число');
} else if (typeof(x) === 'boolean') {
  console.log('x - логический тип');
} else if (typeof(x) === 'string') {
  console.log('x - строка');
} else {
  console.log('Тип x не определен');
}