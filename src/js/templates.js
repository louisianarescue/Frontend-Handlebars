var Handlebars = require('handlebars');
 module.exports['home'] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-heading\">Rescue Requested: "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.rescuee : depth0)) != null ? stack1.name : stack1), depth0))
    + "("
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.rescuee : depth0)) != null ? stack1.people : stack1), depth0))
    + ")</div>\r\n        <p class=\"panel-body\">\r\n          <ul class=\"\">\r\n            <li><strong class=\"\">Name: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.rescuee : depth0)) != null ? stack1.name : stack1), depth0))
    + "</li>\r\n            <li><strong class=\"\">People: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.rescuee : depth0)) != null ? stack1.people : stack1), depth0))
    + "</li>\r\n            <li><strong class=\"\">Urgency: </strong>"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.rescuee : depth0)) != null ? stack1.level : stack1), depth0))
    + "</li>\r\n            <li><strong class=\"\">Pet: </strong> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.rescuee : depth0)) != null ? stack1.pet : stack1), depth0))
    + "</li>\r\n            <li><strong class=\"\">Phone Number: </strong> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.rescuee : depth0)) != null ? stack1.number : stack1), depth0))
    + "</li>\r\n            <li><strong class=\"\">Address: </strong> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.rescuee : depth0)) != null ? stack1.address : stack1), depth0))
    + "</li>\r\n            <li><strong class=\"\">Situation/Information: </strong> "
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.rescuee : depth0)) != null ? stack1.info : stack1), depth0))
    + "</li>\r\n          </ul>\r\n          <hr class=\"\">\r\n          <ul class=\"\">\r\n\r\n"
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.rescued_on : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.program(4, data, 0),"data":data})) != null ? stack1 : "")
    + "\r\n            <li><strong class=\"\">Updated On: </strong> "
    + alias2(alias1((depth0 != null ? depth0.updated_on : depth0), depth0))
    + "</li>\r\n            <li><strong class=\"\">Created On: </strong> "
    + alias2(alias1((depth0 != null ? depth0.created_on : depth0), depth0))
    + "</li>\r\n          </ul>\r\n        </p>\r\n        <p class=\"panel-footer btn-group btn-group-justified\">\r\n          <div class=\"btn-group\">\r\n            <button id=\"view-location\" data-lat=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.lat : stack1), depth0))
    + "\" data-lng=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.location : depth0)) != null ? stack1.lng : stack1), depth0))
    + "\" class=\"btn btn-primary\">View Location on Map</button>\r\n          </div>\r\n          <div class=\"btn-group\">\r\n            <button id=\"rescue-attempt\" data-rescue=\""
    + alias2(alias1((depth0 != null ? depth0._id : depth0), depth0))
    + "\" class=\"btn btn-danger\" data-toggle=\"modal\" data-target=\"#rescuerModal\">Click to Attempt Rescue</button>\r\n          </div>\r\n        </p>\r\n      </div>\r\n      <hr>\r\n\r\n";
},"2":function(depth0,helpers,partials,data) {
    return "            <li><strong class=\"\">Rescue Status: </strong> "
    + this.escapeExpression(this.lambda((depth0 != null ? depth0.rescued_on : depth0), depth0))
    + "</li>\r\n";
},"4":function(depth0,helpers,partials,data) {
    return "            <li><strong class=\"\">Rescue Status: </strong> Unknown</li>\r\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div id=\"map-canvas\"></div>\r\n<div class=\"container-fluid\" id=\"main\">\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-4\" id=\"left\">\r\n\r\n      <h2>Rescues in Need</h2>\r\n\r\n      <!-- item list -->\r\n\r\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.request : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\r\n      <!-- /item list -->\r\n    </div>\r\n    <div class=\"col-xs-8\"><!--map-canvas will be postioned here--></div>\r\n\r\n  </div>\r\n</div>\r\n<!-- end template -->\r\n";
},"useData":true});
var Handlebars = require('handlebars');
 module.exports['rescue'] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});