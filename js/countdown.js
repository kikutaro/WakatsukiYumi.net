var countDownDate = new Date("2018-11-30T24:00:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = "若月佑美さんの乃木坂46卒業まで <strong>" + days + "日 " + hours + "時間 "
  + minutes + "分 " + seconds + "秒 " + "</strong>";
}, 1000);

var countDownDateToCeremony = new Date("2018-12-04T19:00:00").getTime();

var y = setInterval(function() {

  var now = new Date().getTime();
  var distance = countDownDateToCeremony - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("countdownCeremony").innerHTML = "若月佑美さんの卒業セレモニーまで <strong>" + days + "日 " + hours + "時間 "
  + minutes + "分 " + seconds + "秒 " + "</strong>";
}, 1000);