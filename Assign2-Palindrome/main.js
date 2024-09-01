function myFunction() {
    var inputWord = document.getElementById("myInput").value;

    function palindrome(word) {
        word = word.toLowerCase();
        var reversedWord = word.split("").reverse().join("");
        return word === reversedWord;
    }

    if (palindrome(inputWord)) {
        document.getElementById("result").textContent = `The word "${inputWord}" is a palindrome.`;
    } else {
        document.getElementById("result").textContent = `The word "${inputWord}" is not a palindrome.`;
    }
}