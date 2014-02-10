App.Router.map(function() {

/*
  this.resource("dokumente", function() {
    this.resource("dokument", { path: "/id/:dokument_id" });
  });
*/

  this.resource("dokumente");

  this.resource("werke");

  this.resource("autoren");

  this.resource("verlage");

  this.resource("info", function() {
    this.route("manual");
  });
});        