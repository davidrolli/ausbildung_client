App.AlertView = Ember.View.extend({
  templateName: "_alert",
  classNameBindings:["defaultClass", "content.kind"],
  defaultClass: "alert",
  kind: "alert-info",
  controllerBinding: "content",
  
  click: function() {
    var that = this;
    this.$().fadeOut(400, function() { that.removeFromParent(); });
  },
  didInsertElement: function() {
    this.$().hide().fadeIn(400);
  }
});
