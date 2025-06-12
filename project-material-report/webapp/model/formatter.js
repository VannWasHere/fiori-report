sap.ui.define([], function () {
    "use strict";
    
    return {
        /**
         * Format numbers to Indonesian Rupiah by multiplying by 100,000
         * Converts scientific notation (e.g., 1.0025E2) to full IDR format
         * @param {number} value - The number value to format
         * @returns {string} - Formatted Indonesian Rupiah string
         */
        formatCurrencyIDR: function (value) {
            if (!value || value === 0) {
                return "IDR 0";
            }
            
            // Convert scientific notation to regular number
            let numericValue = parseFloat(value);
            
            // Multiply by 100,000 as requested
            let multipliedValue = numericValue * 100000;
            
            // Format with Indonesian locale
            let formatted = multipliedValue.toLocaleString('id-ID', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            
            return `IDR ${formatted}`;
        },
        
        /**
         * Format numbers for display with proper thousand separators
         * @param {number} value - The number value to format
         * @returns {string} - Formatted number string
         */
        formatNumber: function (value) {
            if (!value || value === 0) {
                return "0";
            }
            
            // Convert scientific notation to regular number
            let numericValue = parseFloat(value);
            
            // Format with Indonesian locale
            return numericValue.toLocaleString('id-ID', {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            });
        },
        
        /**
         * Format total amounts with special highlighting
         * @param {number} value - The total value to format
         * @returns {string} - Formatted total string
         */
        formatTotal: function (value) {
            if (!value || value === 0) {
                return "IDR 0";
            }
            
            // Convert scientific notation to regular number
            let numericValue = parseFloat(value);
            
            // Multiply by 100,000 as requested
            let multipliedValue = numericValue * 100000;
            
            // Format with Indonesian locale
            let formatted = multipliedValue.toLocaleString('id-ID', {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            });
            
            return `IDR ${formatted}`;
        },
        
        /**
         * Format material name for display
         * @param {string} materialName - The material name
         * @returns {string} - Formatted material name
         */
        formatMaterialName: function (materialName) {
            if (!materialName) {
                return "";
            }
            
            // Capitalize first letter and make rest lowercase
            return materialName.charAt(0).toUpperCase() + materialName.slice(1).toLowerCase();
        }
    };
}); 