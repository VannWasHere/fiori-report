sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "../model/formatter"
], function (ControllerExtension, formatter) {
    "use strict";

    return ControllerExtension.extend("nampespace.projectmaterialreport.controller.ListReportExt", {
        
        formatCurrencyIDR: formatter.formatCurrencyIDR,
        formatTotal: formatter.formatTotal,
        formatMaterialName: formatter.formatMaterialName,
        formatNumber: formatter.formatNumber,
        
        // this section allows to extend lifecycle hooks or other hooks provided by the base controller
        override: {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             */
            onInit: function () {
                // Apply formatter to the view model
                var oModel = new sap.ui.model.json.JSONModel({
                    formatter: formatter
                });
                this.getView().setModel(oModel, "formatter");
                
                // Log the scientific notation conversion for debugging
                console.log("Formatter loaded for Indonesian Rupiah conversion with x100,000 multiplier");
                console.log("Example: 1.0025E2 = ", formatter.formatCurrencyIDR(1.0025E2));
                console.log("Example: 4.5075E2 = ", formatter.formatCurrencyIDR(4.5075E2));
                console.log("Example: 7.515E2 = ", formatter.formatCurrencyIDR(7.515E2));
                
                // Auto-load the table data
                this._autoLoadTableData();
            },

            onAfterRendering: function () {
                // Apply formatting after rendering
                this._applyCustomFormatting();
            }
        },

        /**
         * Auto-load table data without requiring Go button
         */
        _autoLoadTableData: function () {
            try {
                var oTable = this.byId("listReport");
                if (oTable && oTable.getBinding("items")) {
                    oTable.getBinding("items").refresh();
                }
            } catch (e) {
                console.log("Auto-load data: ", e);
            }
        },

        /**
         * Apply custom formatting to table columns
         */
        _applyCustomFormatting: function () {
            try {
                var oView = this.getView();
                var aTableColumns = oView.findAggregatedObjects(true, function(oControl) {
                    return oControl.getMetadata().getName() === "sap.m.Column";
                });
                
                console.log("Found table columns for formatting: ", aTableColumns.length);
            } catch (e) {
                console.log("Custom formatting error: ", e);
            }
        }
    });
}); 