var side1, side2, side3, equilateral, isosceles, scalene, notTriangle;

var calculate = function(side1, side2, side3){
  if (!side1 || !side2 || !side3){
    alert('Please insert a number for all 3 sides (not 0)')
  }

  else if (side1 === side2 && side1 === side3){
    equilateral();
  }

  else if (side1 !== side2 && side2 !== side3 && side1 !== side3 && side1 + side2 > side3 && side2 + side3 > side1 && side1 + side3 > side2){
    scalene();
  }

  else if (side1 === side2 && side1 !== side3 && side1 + side2 > side3 || side2 === side3 && side2 !== side1 && side3 + side2 > side1 || side1 === side3 && side1 !== side2 && side3 + side1 > side2){
    isosceles();
  }

  else {
    notTriangle()
  };

};
//Front end logic

$(document).ready(function(){

  equilateral = function() {
    $("#equilateral").show();
    $("#isosceles, #scalene, #circle").hide();
    $("#result").text("An equilateral triangle");
  }
  isosceles = function() {
    $("#isosceles").show();
    $("#equilateral, #scalene, #circle").hide();
    $("#result").text("An isosceles triangle");
  }
  scalene = function() {
    $("#scalene").show();
    $("#isosceles, #equilateral, #circle").hide();
    $("#result").text("A scalene triangle");
  }
  notTriangle = function() {
    $("#circle").show();
    $("#isosceles, #equilateral, #scalene").hide();
    $("#result").text("Not a Triangle..");
  }

  $("#submit").click(function() {
    side1 = parseInt($("#side1").val());
    side2 = parseInt($("#side2").val());
    side3 = parseInt($("#side3").val());
    calculate(side1, side2, side3);
  });

});
