const avoidRepeat = (input) => {
  var chars = input.split("");
  var curr_char;
  var str = ""; // vd
  var longest_string = ""; // dv
  var hash = {}; // { }
  for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[curr_char]) {
      str += curr_char;
      hash[curr_char] = { index: i };
    } else {
      if (longest_string.length <= str.length) {
        longest_string = str;
      }
      var prev_dupeIndex = hash[curr_char].index; // 0
      var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i); // v
      str = str_FromPrevDupe + curr_char;
      hash = {};       //1                 // j <= 2  
      for (var j = prev_dupeIndex + 1; j <= i; j++) {
        hash[input.charAt(j)] = { index: j }; 
      }
    }
  }
  console.log(hash);
  return longest_string.length > str.length ? longest_string : str;
};

console.log(avoidRepeat("dvdff")); // 
