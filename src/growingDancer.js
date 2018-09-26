var GrowingDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  this.oldStep = Dancer.prototype.step;
  this.pos = false;
  Dancer.call(this, top, left, timeBetweenSteps);
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log(this.step);

};
GrowingDancer.prototype = Object.create(Dancer.prototype);
GrowingDancer.prototype.constructor = GrowingDancer;
GrowingDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  if (this.linedUp) {
    this.lineUp();
  } else {
    this.timeout = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  this.$node.hover(function () {
    $(this).addClass('flipped');
  }, function () {
    $(this).removeClass('flipped');
  });

  this.setPosition((($('body').height() - this.$node.height()) * Math.random()), (($('body').width() - this.$node.width()) * Math.random()));
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.grow();
};

GrowingDancer.prototype.grow = function() {
  var randomHeight = 295;
  var randomWidth = 500;
  var scale = Math.random();
  if (scale < .5) {
    scale = .5;
  } else {
    scale = 1;
  }
  // if (randomHeight < 100) {
  //   // randomHeight = 1000 * Math.random();
  // } else if (randomHeight > 500) {
  //   // randomHeight = 100 * Math.random();
  // }
  var styleSettings = {
    width: randomWidth,
    height: randomHeight,
    'background': 'no-repeat url("img/carlton.gif")',
    transition: 'all 0.8s ease',
    transform: 'scale(' + scale + ')'
  };
  this.$node.css(styleSettings);
};