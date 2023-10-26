/**
 * default param
 */

const print = function (strs, end='\n') {
  console.log(strs.join(end));
}

print(['Always', 'with', 'u']);
print(['Always', 'with', 'u'], '~');