(function() {
      console.log("IIFE");

})();
<script>
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction);

document.getElementById("demo").innerHTML = newArr;

function myFunction(num) {
    return num * 10;
}
</script>