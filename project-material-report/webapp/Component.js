sap.ui.define(
    ["sap/suite/ui/generic/template/lib/AppComponent", "./model/formatter"],
    function (Component, formatter) {
        "use strict";

        return Component.extend("nampespace.projectmaterialreport.Component", {
            metadata: {
                manifest: "json"
            },

            init: function () {
                // Call the base component's init function
                Component.prototype.init.apply(this, arguments);
                
                // Set the global formatter
                sap.ui.getCore().getModel().setProperty("/formatter", formatter);
                
                // Register global formatters
                window.formatCurrencyIDR = formatter.formatCurrencyIDR;
                window.formatTotal = formatter.formatTotal;
                
                console.log("Global formatters registered");
                console.log("formatCurrencyIDR test: ", formatter.formatCurrencyIDR(100.25));
            }
        });
    }
);