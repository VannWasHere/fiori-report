sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "../model/formatter"
], function (ControllerExtension, formatter) {
    "use strict";

    return ControllerExtension.extend("nampespace.projectmaterialreport.controller.ListReportExt", {
        
        // this section allows to extend lifecycle hooks or other hooks provided by the base controller
        override: {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             */
            onInit: function () {
                // Apply formatter to the view model
                var oModel = new sap.ui.model.json.JSONModel({
                    formatter: formatter
                });
                this.getView().setModel(oModel, "formatter");
                
                // Log the scientific notation conversion for debugging
                console.log("Formatter loaded for Indonesian Rupiah conversion");
                console.log("Example: 1.0025E2 = ", formatter.formatCurrencyIDR(1.0025E2));
                console.log("Example: 4.5075E2 = ", formatter.formatCurrencyIDR(4.5075E2));
            }
        },

        /**
         * Custom formatting functions available to the view
         */
        formatCurrencyIDR: formatter.formatCurrencyIDR,
        formatTotal: formatter.formatTotal,
        formatMaterialName: formatter.formatMaterialName,
        formatNumber: formatter.formatNumber
    });
}); 