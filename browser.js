<script type="text/javascript">

    var browserName;

    // Opera 8.0+
    if ((window.opr && opr.addons) || window.opera || (navigator.userAgent.indexOf(' OPR/') >= 0))
 browserName = "Opera";
 
    // Firefox 1.0+a
    if (typeof InstallTrigger !== 'undefined')
 browserName = "Firefox";
 
    // At least Safari 3+: "[object HTMLElementConstructor]"
    if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0)
 browserName = "Safari";
 
    // Internet Explorer 6-11
    if ((/*@cc_on!@*/false) || (document.documentMode))
 browserName = "IE";
 
    // Edge 20+
    if (!(document.documentMode) && window.StyleMedia)
 browserName = "Edge";
 
    // Chrome 1+
    if (window.chrome && window.chrome.webstore)

browserName = "Chrome";
else {browserName = "Safari";}
document.write(browserName);
</script>
