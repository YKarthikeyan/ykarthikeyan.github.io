//typewriter text
var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="text-wrap">' + this.txt + '</span>';

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
};


//download resume

document.querySelector('.upload').addEventListener('click', function (ev) {
  ev.preventDefault();
  var self = this;
  self.classList.add('loading');
  setTimeout(function () {
    self.classList.remove('loading');
    window.open('./files/Karthikeyan-SoftwareEngineer-resume.pdf')
  }, 4200);
})


var header = document.querySelector(".header");
var actualHeaderPos = header.offsetTop;
window.onscroll = function () { myFunction() };

var prev = header.offsetTop;
function myFunction() {
  if (window.scrollY >= actualHeaderPos) {
    header.classList.add("sticky");
  } else if (window.scrollY <= actualHeaderPos) {
    header.classList.remove("sticky");
  }
}
