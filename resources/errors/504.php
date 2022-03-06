<?php header("HTTP/1.0 504 Gateway Timeout"); ?>
<!DOCTYPE html>
<html lang="be">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="../../resources/styles/style.css" rel="stylesheet" type="text/css">
    <noscript><link href="../../resources/styles/noscript-style.css" rel="stylesheet" type="text/css"></noscript>
    <title>Galactic Senate &#x7c; 504</title>
    <meta name="description" content="Galactic Senate website: here you can learn about the legislation of the First Galactic Republic, as well as get a number of services">
    <!--Twitter Card-->
    <meta name="twitter:url" content="https://sienat.phr-gov.de/">
    <meta name="twitter:card" content="summary">
    <meta name="twitter:title" content="Galactic Senate">
    <meta name="twitter:description" content="Galactic Senate website: here you can learn about the legislation of the First Galactic Republic, as well as get a number of services">
    <meta name="twitter:image" content="../../resources/icons/phr-flag-sq.png">
    <!--Open Graph-->
    <meta property="og:url" content="https://sienat.phr-gov.de/">
    <meta property="og:type" content="website">
    <meta property="og:title" content="Galactic Senate">
    <meta property="og:description" content="Galactic Senate website: here you can learn about the legislation of the First Galactic Republic, as well as get a number of services">
    <meta property="og:image" content="../../resources/icons/phr-flag-sq.png">
    <!--Mobile View-->
    <meta name="theme-color" content="#ffffff">
    <meta name="HandheldFriendly" content="true">  <!--for Blackberry-->
    <meta name="MobileOptimized" content="width">  <!--for Internet Explorer-->
    <!--Favicons-->
    <link rel="shortcut icon" type="image/vnd.microsoft.icon" href="../../resources/icons/favicon.ico">  <!--for Internet Explorer-->
    <link rel="icon" type="image/vnd.microsoft.icon" href="../../resources/icons/favicon.ico">
    <link rel="icon" type="image/png" sizes="16x16" href="../../resources/icons/web/favicon-16px.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../../resources/icons/web/favicon-32px.png">
    <link rel="icon" type="image/png" sizes="48x48" href="../../resources/icons/web/favicon-48px.png">
    <link rel="icon" type="image/png" sizes="72x72" href="../../resources/icons/web/favicon-72px.png">
    <link rel="icon" type="image/png" sizes="96x96" href="../../resources/icons/web/favicon-96px.png">
    <link rel="icon" type="image/png" sizes="120x120" href="../../resources/icons/web/favicon-120px.png">
    <!--Apple Safari Pinned Tab Icon-->
    <link rel="mask-icon" href="../../resources/icons/apple/safari-pinned-tab-icon.svg" color="#233669">
    <!--Apple Touch Icons-->
    <link rel="apple-touch-icon" sizes="58x58" href="../../resources/icons/apple/apple-touch-icon-58px.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../../resources/icons/apple/apple-touch-icon-76px.png">
    <link rel="apple-touch-icon" sizes="80x80" href="../../resources/icons/apple/apple-touch-icon-80px.png">
    <link rel="apple-touch-icon" sizes="87x87" href="../../resources/icons/apple/apple-touch-icon-87px.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../../resources/icons/apple/apple-touch-icon-114px.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../../resources/icons/apple/apple-touch-icon-120px.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../../resources/icons/apple/apple-touch-icon-152px.png">
    <link rel="apple-touch-icon" sizes="167x167" href="../../resources/icons/apple/apple-touch-icon-167px.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../../resources/icons/apple/apple-touch-icon-180px.png">
    <!--Apple Mobile Web App-->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-title" content="Galactic Senate">
    <meta name="format-detection" content="telephone=no">
    <!--Microsoft Tiles-->
    <meta name="application-name" content="Galactic Senate">
	  <meta name="msapplication-config" content="../../resources/icons/microsoft-tiles/browserconfig.xml">
    <!--Web App Manifest-->
    <link rel="manifest" href="manifest.json">
    <!--Google Fonts-->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600&display=swap" rel="stylesheet">
    <!--Google Search Console-->
    <meta name="google-site-verification" content="pkl9yd8_9bkMLJmcGPEz7T8ReQjBSvoRVaYil7p4p5Y">
  </head>
  <body onload="langCheck(), menuMode(), copyrightButton()">
    <header id="docHeader">
      <div class="scrollingBar">
        <div class="scrollingIndicator" id="scrollIndic"></div>
      </div>
      <nav class="additNav">
        <ul>
          <li class="aur"><a id="aurAnchor" href="javascript:void(0);" onclick="langAurFunc()">AUR</a></li>
          <li class="bel"><a id="belAnchor" href="javascript:void(0);" onclick="langBelFunc()">ENG</a></li>
            <li class="regAdditNav">
              <a href="../../e-sienat/uvachod.html">
                <svg aria-hidden="true" width="20px" height="20px" viewBox="0 0 18 18">
                  <path fill-rule="nonzero" fill="currentColor" d="M 0 2 V 16 C 0 17.1 0.9 18 2 18 H 16 C 17.1 18 18 17.1 18 16 V 2 C 18 0.9 17.1 0 16 0 H 2 C 0.9 0 0 0.9 0 2 Z M 12 6 C 12 7.7 10.7 9 9 9 S 6 7.7 6 6 S 7.3 3 9 3 S 12 4.3 12 6 Z M 3 14 C 3 12 7 10.9 9 10.9 S 15 12 15 14 V 15 H 3 V 14 Z"></path>
                </svg>
                <div>e-Senate</div>
              </a>
            </li>
        </ul>
      </nav>
      <div class="site-logo">
        <a href="../../index.html" title="Main Page">
          <img src="../../resources/images/sienat-logo.svg" alt="Logo of the Galactic Senate: stylized Flag of the Republic with the inscription &laquo;GALACTIC SENATE&raquo; in English and in Aurebesh on the right">
        </a>
      </div>
      <div id="divMainNav">
        <nav class="mainNav">
          <div class="mainNavElem">
            <button class="mainNavButton">Other Sites</button>
            <div class="mainNavBlock">
              <div class="mainNavBlockBar"></div>
              <a href="javascript:void(0);">Web Portal of the Republic </a>
              <a href="javascript:void(0);">Government</a>
              <a href="javascript:void(0);">Constitutional Court</a>
              <a href="javascript:void(0);">National Bank</a>
            </div>
          </div>
          <div class="mainNavElem">
            <button class="mainNavButton">Senate</button>
            <div class="mainNavBlock">
              <div class="mainNavBlockBar"></div>
              <a href="../../sienat/rola-i-struktura.html">Role and structure</a>
              <a href="../../sienat/pravavaja-asnova.html">Legal basis</a>
              <a href="../../sienat/vybary-u-sienat.html">Senate elections</a>
              <a href="../../sienat/sienat-biahucaj-kadencyi.html">The current cadence</a>
              <a href="../../sienat/pratakoly-pasiadzenniau.html">Minutes of meetings</a>
              <a href="../../sienat/historyja.html">History of the Senate</a>
            </div>
          </div>
          <div class="mainNavElem">
            <button class="mainNavButton">Legal acts</button>
            <div class="mainNavBlock">
              <div class="mainNavBlockBar"></div>
              <a href="../../pravavyja-akty/kanstytucyja.html">Constitution</a>
              <a href="../../pravavyja-akty/nacyjanalnyja-simvaly.html">National symbols</a>
              <a href="../../pravavyja-akty/rejestr-pravavych-aktau.html">Register of legal acts</a>
            </div>
          </div>
          <div class="mainNavElem">
            <button class="mainNavButton">National Archives</button>
            <div class="mainNavBlock">
              <div class="mainNavBlockBar"></div>
              <a href="../../nacyjanalny-archiu/pra-nacyjanalny-archiu.html">About the National Archives</a>
              <a href="../../nacyjanalny-archiu/pasluhi-archiva.html">Archives services</a>
              <a href="../../nacyjanalny-archiu/raspracouki.html">Developments</a>
              <a href="../../nacyjanalny-archiu/vydanni-i-publikacyi.html">Publications</a>
              <a href="../../nacyjanalny-archiu/historyja-respubliki.html">History of the Republic</a>
              <a href="../../nacyjanalny-archiu/the-coruscant-times.html">The Coruscant Times</a>
            </div>
          </div>
          <div class="mainNavElem">
            <button class="mainNavButton">Service</button>
            <div class="mainNavBlock">
              <div class="mainNavBlockBar"></div>
              <a href="../../pasluhi/zvarot-da-sienata.html">Appeal to the Senate</a>
              <a href="../../pasluhi/resursy-i-mierс.html">Resources and merch</a>
              <a href="../../pasluhi/publikacyi.html">Publications</a>
              <a href="../../pasluhi/adukacyjnyja-prahramy.html">Educational programs</a>
              <a href="../../pasluhi/pytanni-i-adkazy.html">FAQ</a>
            </div>
          </div>
          <a href="javascript:void(0);" id="mainNavIcon" onclick="menuFunc()">A</a>
        </nav>
      </div>
    </header>

    <main>
      <div class="h1block errors">
        <div>
          <h1 class="errorH1">504</h1>
          <p>Шлюз не адказвае:<br>сервер не дачакаўся адказу ад вышэйпастаўленага сервера</p>
        </div>
      </div>
    </main>

    <footer class="errors">
      <ul>
        <li><a href="../../index.html">Main Page</a></li>
        <li><a href="../../e-sienat/uvachod.html">e-Senate</a></li>
        <li><a href="../../mapa-sajta.html">Sitemap</a></li>
        <li><a href="../../technicnaja-padtrymka.html">Technical support</a></li>
      </ul>
      <p>&#xa9; 2013&#x2013;2022 National Archives of the Republic</p>
    </footer>

    <script src="../../resources/scripts/main.js" async></script>
  </body>
</html>
