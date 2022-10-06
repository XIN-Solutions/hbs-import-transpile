(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
Handlebars.partials['body'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    };

  return "<html>\n    <head></head>\n    <body>\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"structure/header"),depth0,{"name":"structure/header","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n        <p>\n            Cool body: "
    + container.escapeExpression(((helper = (helper = lookupProperty(helpers,"name") || (depth0 != null ? lookupProperty(depth0,"name") : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"name","hash":{},"data":data,"loc":{"start":{"line":7,"column":23},"end":{"line":7,"column":31}}}) : helper)))
    + "\n        </p>\n\n"
    + ((stack1 = container.invokePartial(lookupProperty(partials,"structure/footer"),depth0,{"name":"structure/footer","data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    </body>\n</html>\n";
},"usePartial":true,"useData":true});
})();