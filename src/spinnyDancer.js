var SpinnyDancer = function (top, left, timeBetweenSteps) {
  // debugger;
  this.oldStep = Dancer.prototype.step;
  this.pos = false;
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  // console.log(this.step);
  this.$img.attr('src', "img/carlton.gif");
};
SpinnyDancer.prototype = Object.create(Dancer.prototype);
SpinnyDancer.prototype.constructor = SpinnyDancer;
SpinnyDancer.prototype.step = function () {
  // call the old version of step at the beginning of any call to this new version of step
  if (this.linedUp) {
    this.lineUp();
  } else {
    // this.timeout = setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  this.setPosition(($('body').height() * Math.random()) - $('.dancer').height(), ($('body').width() * Math.random()) - $('.dancer').width());
  this.hoverEvent();

  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.

  var styleSettings = {
    width: '141px',
    height: '200px',
    // 'background-image': 'url("img/carlton.gif")',
    // 'background-size': 'cover',
    transition: 'all 0.8s ease',
    // transform: 'scale(' + scale + ')'
  };
  this.$img.css(styleSettings);
  this.$img.addClass('spin');

};