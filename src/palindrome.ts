export default function palindrome(string: String): boolean{
    return string === string.split("").reverse().join("");
}