function numberToWords(num) {
  const words1to19 = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tensMultiple = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  if (1 <= num && num < 20) {
    return words1to19[num - 1];
  } else if (20 <= num && num < 100) {
    let tens = Math.floor(num / 10);
    let belowTen = num % 10;
    if (belowTen > 0) {
      return tensMultiple[tens] + " " + words1to19[belowTen - 1];
    } else {
      return tensMultiple[tens];
    }
  }
}

function longestWordedNumber(arr) {
  let maxLength = -1;
  let numberWithMaxLength;

  arr.forEach((num) => {
    let word = numberToWords(num);
    let wordLength = word.replace(/\s+/g, "").length; // remove spaces to only count letters

    if (wordLength > maxLength) {
      maxLength = wordLength;
      numberWithMaxLength = num;
    }
  });

  return numberWithMaxLength;
}

const A = [10, 12, 38, 62, 90];
console.log(longestWordedNumber(A)); // Outputs: 38
