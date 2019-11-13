import $ from 'jquery';
import 'bootstrap';
import './styles.css';

$(function(){
    $("form#triangleForm").submit(function(event) {
      event.preventDefault();
      $("h2").hide();
      var number1 = parseInt($("#num1").val());
      var number2 = parseInt($("#num2").val());
      var number3 = parseInt($("#num3").val());
      if (!number1 || !number2 || !number3) {
        alert("Enter three numbers!")
      }
      if (((number1+number2)<=number3)||((number1+number3)<=number2) ||((number2+number3)<=number1)) {
        $("#not").show();
      }
      else if ((number1 === number2) && (number1===number3) && (number2===number3)) {
        $("#equilateral").show();
      }
      else if ((number1 === number2) || (number1===number3) || (number2===number3)) {
        $("#isosceles").show();
      }
      else {
        $("#scalene").show();
      }
    })
  })
  