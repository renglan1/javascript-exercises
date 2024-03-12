const palindromes = function (string) {
  const chars = string.toLowerCase().split("");
  const saniChars = chars.filter(
    (char) =>
      char !== "," &&
      char !== " " &&
      char !== "!" &&
      char !== "." &&
      char !== "?"
  );
  return saniChars.join("") == saniChars.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
