// // Business logic not included because it will remain the same.
// var add = function(number1, number2) {
//   return number1 + number2;
// };
//
// var subtract = function(number1, number2) {
//   return number1 - number2;
// };
//
// var multiply = function(number1, number2) {
//   return number1 * number2;
// };
//
// var divide = function(number1, number2) {
//   return number1 / number2;
// };

// Back end Business Logic End

$(document).ready(function() {
  $("form#calculator").submit(function(event){
    event.preventDefault();
      var firstName = $("input#firstName").val();
      var lastName = $("input#lastName").val();
          $(".btn").click(function() {
          $(".form-group").hide();
          $(".radio1").show();
      });
      var radio1 = $("input:radio[name=radio1]:checked").val();
        $(".btn").click(function() {
        $(".radio1").hide();
        $(".radio2").show(); 
      });




      var radio1 = $("input:radio[name=radio1]:checked").val();
      var radio2 = $("input:radio[name=radio2]:checked").val();
      var radio3 = $("input:radio[name=radio3]:checked").val();
      var radio4 = $("input:radio[name=radio4]:checked").val();

// $("form#calculator").click(function(){
//     $(".radio1").show();
// });
// $("form#calculator").click(function(){
//     $(".radio2").show();
//
// });$("form#calculator").click(function(){
//     $(".radio3").show();
//
// });$("form#calculator").click(function(){
//     $(".radio4").show();
// });

      if (radio3 === "flamming red") {

      }



// $(document).ready(function() {
//   $("form#calculator").submit(function() {
//     event.preventDefault();
    // var number1 = parseInt($("#input1").val());
    // var number2 = parseInt($("#input2").val());
    // var operator = $("input:radio[name=operator]:checked").val();
    // var result;
    // if (operator === "add") {
    //   result = add(number1, number2);
    // } else if (operator === "subtract") {
    //   result = subtract(number1, number2);
    // } else if (operator === "multiply") {
    //   result = multiply(number1, number2);
    // } else if (operator === "divide") {
    //   result = divide(number1, number2);
    // }
    // $("#output").text(result);
  });
});
