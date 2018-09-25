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
  this.oldStep();
  this.setPosition(($('body').height() * Math.random()) - $('.dancer').height(), ($('body').width() * Math.random()) - $('.dancer').width());
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.grow();
};

GrowingDancer.prototype.grow = function() {
  var randomHeight = 300;
  var randomWidth = 300;
  var scale = Math.random();
  if (scale < .5) {
    scale = .5;
  } else {
    scale = 1;
  }
  if (randomHeight < 100) {
    // randomHeight = 1000 * Math.random();
  } else if (randomHeight > 500) {
    // randomHeight = 100 * Math.random();
  }
  var styleSettings = {
    width: randomWidth,
    height: randomHeight,
    'background-image': 'url("img/doge-crop.jpg")',
    'background-size': 'cover',
    transition: 'all 0.8s ease',
    transform: 'scale(' + scale + ')'
  };
  this.$node.css(styleSettings);
};