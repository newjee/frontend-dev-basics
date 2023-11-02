/**
 * Parenthesis-less function  & template literal
 * 
 */

div = function(s, ...v) {
  console.log(s, v);

  return props() => {
    '<div></div>';
  }

}

const StyledDiv = div`

color = #fff;
font-size : 2px`;
