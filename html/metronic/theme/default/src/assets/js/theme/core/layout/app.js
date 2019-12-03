"use strict";

var KTAppLayout = function() {
    var main = function() {    
        var offcanvas = new KTOffcanvas('kt_app_aside', {
            overlay: true,  
            baseClass: 'kt-app__aside',
            closeBy: 'kt_app_aside_close',
            toggleBy: 'kt_subheader_mobile_toggle'
        }); 
    }

    return {     
        init: function() {  
            main(); 
        }
    };
}();

KTUtil.ready(function() {
    KTAppLayout.init();
});