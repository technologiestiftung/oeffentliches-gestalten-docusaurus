import ExecutionEnvironment from "@docusaurus/ExecutionEnvironment";

export default (function () {
  if (!ExecutionEnvironment.canUseDOM) {
    return null;
  }
  return {
    onRouteDidUpdate({ location, previousLocation }) {
      // We don't want to track when the location change was merely a change of the hashes,
      // i.e. navigating between headings/sections:
      if (location.pathname === previousLocation?.pathname) return;

      // Matomo snippet start
      var _paq = (window._paq = window._paq || []);
      (function () {
        var u = "https://piwik.technologiestiftung-berlin.de/";
        _paq.push(["setCustomUrl", location.pathname]);
        _paq.push(["setDocumentTitle", location.pathname]);
        _paq.push(["setTrackerUrl", u + "matomo.php"]);
        _paq.push(["setSiteId", "31"]);
        /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
        _paq.push(["trackPageView"]);
        _paq.push(["enableLinkTracking"]);
        var d = document,
          g = d.createElement("script"),
          s = d.getElementsByTagName("script")[0];
        g.async = true;
        g.src = u + "matomo.js";
        s.parentNode.insertBefore(g, s);
      })();
      // Matomo snippet end
    },
  };
})();
