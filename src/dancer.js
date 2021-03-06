// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.linedUp = false;
  this.timeout;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="mouseHover"></span>');
  this.$img = $('<img class="dancer">');
  this.step();
  
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
};
Dancer.prototype.constructor = Dancer;
Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  if (this.linedUp) {
    this.lineUp();
  } else {
    this.timeout = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$img.css(styleSettings);
};

Dancer.prototype.lineUp = function() {
  var styleSettings = {
    transform: 'scale(1)'
  };
  this.$img.toggle(true);
  clearTimeout(this.timeout);
  this.$img.css(styleSettings);
  this.linedUp = true;
};

Dancer.prototype.dance = function() {
  this.linedUp = false;
  this.step();
};

Dancer.prototype.hoverEvent = function() {
  this.$img.hover(function () {
    $(this).addClass('flipped');
  }, function () {
    $(this).removeClass('flipped');
  });
};