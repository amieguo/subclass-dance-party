var BlinkyDancer = function(top, left, timeBetweenSteps) {
  // debugger;
  this.oldStep = Dancer.prototype.step;
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$img.addClass('dancer-blinky');
  
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log(this.step);
  this.$img.attr('src', "img/cute-dog.jpg");
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function() {
  // call the old version of step at the beginning of any call to this new version of step
  this.oldStep();
  this.setPosition($('body').height() * Math.random(), $('body').width() * Math.random());
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  var height = 309;
  var width = 198;
  var styleSettings = {
    width: width,
    height: height,
    // 'background-image': 'url("img/cute-dog.jpg")',
    // 'background-size': 'cover',
  };
  this.$img.toggle();
  this.$img.css(styleSettings);
};