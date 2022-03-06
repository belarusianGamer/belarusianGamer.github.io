/////////////////////////////////////////
//                                     //
//                                     //
//               main.js               //
//                                     //
//                                     //
/////////////////////////////////////////

///// Service worker
const divInstall = document.getElementById('installContainer');
const butInstall = document.getElementById('butInstall');
window.addEventListener('beforeinstallprompt', (event) => {
  console.log('👍', 'beforeinstallprompt', event);
});

window.addEventListener('appinstalled', (event) => {
  console.log('👍', 'appinstalled', event);
});



///// Змяненне мовы сайта
// Уключэнне Аўрэбеш
function langAurFunc() {
  document.body.classList.add("aur");
  document.getElementById("aurAnchor").classList.add("active");
  document.getElementById("belAnchor").classList.remove("active");
  localStorage.setItem('langSw', "aur");
}
// Уключэнне Английскай
function langBelFunc() {
  document.body.classList.remove("aur");
  document.getElementById("belAnchor").classList.add("active");
  document.getElementById("aurAnchor").classList.remove("active");
  localStorage.setItem('langSw', "bel");
}
// Праверка ўключанай мовы пасля загрузкі <body>
function langCheck() {
  if (localStorage.getItem('langSw') === "aur") {
    langAurFunc();
  }
  else {
    langBelFunc();
  }
}


///// Уключэнне мабільнага выгляду меню
function menuFunc() {
  var divMainNav = document.getElementById("divMainNav");
  var mNIcon = document.getElementById("mainNavIcon");
  if (divMainNav.style.maxHeight === "49px") {
    divMainNav.style.maxHeight = "314px";
    mNIcon.style.fontVariationSettings = "'TIME' " + 100;
  } else {
    divMainNav.style.maxHeight = "49px";
    mNIcon.style.fontVariationSettings = "'TIME' " + 1;
  }
}


///// Уключэнне рэжыму адкрыцця меню і функцыі перамоткі
function menuMode() {
  var divMainNav = document.getElementById("divMainNav");
  divMainNav.style.maxHeight = "49px";
  var mNElemS = document.getElementsByClassName("mainNavElem");
  var mNButtonS = document.getElementsByClassName("mainNavButton");
  var mNBlockS = document.getElementsByClassName("mainNavBlock");
  var i;
  for (i = 0; i < mNButtonS.length; i++) {
    // Праверка памераў акна
    if (window.matchMedia("(min-width: 1001px)").matches) {
      // Адкрыццё/закрыццё меню па навядзенні курсора, калі акно 1001px і болей
      mNElemS[i].addEventListener("mouseover", function() {
        var mainNavBlock = this.firstElementChild.nextElementSibling;
        mainNavBlock.style.maxHeight = mainNavBlock.scrollHeight + "px";
      });
      mNElemS[i].addEventListener("mouseleave", function() {
        var mainNavBlock = this.firstElementChild.nextElementSibling;
        mainNavBlock.style.maxHeight = null;
      });
    } else {
      // Адкрыццё/закрыццё меню па націсканні, калі акно 1000px і меней
      mNButtonS[i].addEventListener("click", function() {
        var mainNavBlock = this.nextElementSibling;
        if (mainNavBlock.style.maxHeight) {
          mainNavBlock.style.maxHeight = null;
        } else {
          divMainNav.style.maxHeight = "1000px";
          for (i = 0; i < mNBlockS.length; i++) {
            var openMNBlock = mNBlockS[i];
            openMNBlock.style.maxHeight = null;
          }
          mainNavBlock.style.maxHeight = mainNavBlock.scrollHeight + "px";
        }
      });
    }
  }
  // Закрыццё меню, калі клікнуць па-за імі
  document.onclick = function(event) {
    if (!event.target.matches('.mainNavButton')) {
      var i;
      for (i = 0; i < mNBlockS.length; i++) {
        var openMNBlock = mNBlockS[i];
        openMNBlock.style.maxHeight = null;
      }
    }
  }
  // Дадае клас floatingHeader да header
  var header = document.getElementById("docHeader");
  window.onscroll = function() {
    if (window.pageYOffset >= 1) {
      header.classList.add("floatingHeader");
    } else {
      header.classList.remove("floatingHeader");
    }
    // Паказ кнопкі перамоткі наверх, калі праматаць 301px ад верху
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("scrollUpButton").style.display = "block";
    } else {
        document.getElementById("scrollUpButton").style.display = "none";
    }
    // Паказ індыкатара пракруткі
    var docScrollTop = document.documentElement.scrollTop;
    var docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolledPercent = (docScrollTop / docHeight) * 100;
    document.getElementById("scrollIndic").style.width = scrolledPercent + "%";
  }
}


///// Перамотка наверх пасля націскання на кнопку
function scrollUpButton() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}


///// Кнопка на выявах, што адкрывае аўтарскія правы
function copyrightButton() {
  var imgButtonS = document.getElementsByClassName("imgButton");
  var i;
  for (i = 0; i < imgButtonS.length; i++) {
    imgButtonS[i].addEventListener("click", function() {
      var overlayBlock = this.previousElementSibling;
      if (overlayBlock.style.maxHeight) {
        overlayBlock.style.maxHeight = null;
      } else {
        overlayBlock.style.maxHeight = overlayBlock.scrollHeight + "px";
      }
    });
  }
}


///// Таймер кадэнцыі
var cadenzaStartDate = new Date("Aug 30, 2021 00:00:00").getTime();
var y = setInterval(function() {
  var currentTime = new Date().getTime();
  var cadenzaTerm = currentTime - cadenzaStartDate;
  var days = Math.floor(cadenzaTerm / (1000 * 60 * 60 * 24));
  var hours = Math.floor((cadenzaTerm % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((cadenzaTerm % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((cadenzaTerm % (1000 * 60)) / 1000);
  // падбор варыянта слова "дзень"
  var daysName;
  if (days === 1) {
    daysName = " day ";
  } else {
    daysName = " days ";
  }
  // падбор варыянта слова "гадзіна"
  var hoursName;
  if (hours === 1) {
    hoursName = " hour ";
  } else {
    hoursName = " hours ";
  }
  // тэкст, які выводзіцца
  if (hours === 0) {
    document.getElementById("cadenzaTimer").innerHTML = days + daysName;
  } else {
    document.getElementById("cadenzaTimer").innerHTML = days + daysName + "and " + hours + hoursName;
  }
}, 500);  // Абнаўляе срок кожныя 1000 мілісекунд


///// Пошук у табліцы
function tableSearchFunction() {
  var searchField, searchQuery, filtResultS, searchValueS;
  searchField = document.getElementById("filtSearch");
  searchQuery = searchField.value.toUpperCase();
  filtResultS = document.getElementById("rejestrZakAktau").querySelectorAll(".filtTypes.filtStat.filtKad");
  for (var i = 0; i < filtResultS.length; i++) {
    searchValueS = filtResultS[i].getElementsByClassName("searchValue");
    for (var j = 0; j < searchValueS.length; j++) {
      if (searchValueS[j].innerHTML.toUpperCase().indexOf(searchQuery) > -1) {
        filtResultS[i].style.display = "";
        filtResFunction(0);  // вывад колькасці рэзультатаў
      } else {
        filtResultS[i].style.display = "none";
        filtResFunction(0);  // вывад колькасці рэзультатаў
      }
    }
  }
  searchField.blur();
  //searchField.value = "";
}


///// Сартыроўка табліцы
function tableSortFunction() {
  var rejestr = document.getElementById("rejestrZakAktau");
  var rejestrRowS = Array.from(rejestr.querySelectorAll('tr'));
  rejestrRowS.reverse();
  rejestr.tBodies[0].append(...rejestrRowS);
  var button = document.getElementById("tableSortButton");
  if (button.innerHTML === "New first") {
    button.innerHTML = "Old first";
  } else {
    button.innerHTML = "New first";
  }
}


///// Падлік рэзультатаў фільтраў
function filtResFunction(typeValue) {
  var rejestr = document.getElementById("rejestrZakAktau");
  if (typeValue === 0) {
    var filtResultS = [].filter.call(rejestr.querySelectorAll(".filtTypes.filtStat.filtKad"), function(element) {
      if (element.style.display != "none") {
        return element;
      }
    }).length;
  } else {
    var filtResultS = rejestr.querySelectorAll(".filtTypes.filtStat.filtKad").length;
  }
  // падбор варыянтаў словаў
  var znojdzienaName;
  var aktName;
  if (filtResultS === 1) {
    znojdzienaName = "There is ";
    aktName = " act";
  } else {
    znojdzienaName = "There are ";
    aktName = " acts";
  }
  // тэкст, які выводзіцца
  if (filtResultS === 0) {
    document.getElementById("filtResNum").innerHTML = "Nothing found!";
  } else {
    document.getElementById("filtResNum").innerHTML = znojdzienaName + filtResultS + aktName;
  }
}


///// Фільтр табліцы [заснаваны на матэрыялах http://shpargalkablog.ru/2013/08/checked.html]
function tableFilterFunction() {
  var filterElemS = document.getElementsByClassName("filterElem");
  for (var i = 0; i < filterElemS.length; i++) {
    addClass(filterElemS[i], "filtTypes filtStat filtKad");  // даданне класаў, што зробяць бачнай ўсю табліцу пасля запампоўкі старонкі
  }
  filtResFunction();  // вывад колькасці рэзультатаў
  var filterFormS = document.getElementsByClassName("filterForm");
  for (var i = 0; i < filterFormS.length; i++) {
    var fieldsetS = [].filter.call(filterFormS[i].querySelectorAll('fieldset'), function(element) {
      return element;
    });
    fieldsetS.forEach(function(oneFieldset) {
      var filtClassName = filterFormS[i].id;  // клас, які вызначае бачнасць табліцы
      var parentCheckboxES = [].filter.call(filterFormS[i].querySelectorAll('[type="checkbox"]'), function(element) {
        return element.parentNode.nextElementSibling == oneFieldset;
      });
      parentCheckboxES.forEach(function(oneParentCheckbox) {
        var all = oneFieldset.querySelectorAll('[type="checkbox"]');
        oneFieldset.onchange = function() {  // уздзейнічае на бацькоўскі элемент пры націсканні на даччыны
          var allChecked = oneFieldset.querySelectorAll('[type="checkbox"]:checked');
          oneParentCheckbox.checked = allChecked.length == all.length;
          oneParentCheckbox.indeterminate = allChecked.length > 0 && allChecked.length < all.length;
          filterClassManip(filterElemS, all, filtClassName);  // фільтрацыя элементаў
          filtResFunction(1);  // вывад колькасці рэзультатаў
          tableSearchFunction();  //апрацоўка пошуку
        }
        oneParentCheckbox.onclick = function() {  // уключае/выключае даччыны элементы пры націсканні на бацькоўскі
          for (var j = 0; j < all.length; j++) {
            all[j].checked = this.checked;
          }
          filterClassManip(filterElemS, all, filtClassName);  // фільтрацыя элементаў
          filtResFunction(1);  // вывад колькасці рэзультатаў
          tableSearchFunction();  //апрацоўка пошуку
        }
      });
    });
  }
}
// Функцыя фільтрацыі элементаў
function filterClassManip(elements, sorters, filtClassName) {
  for (var i = 0; i < sorters.length; i++) {
    var filtParam = sorters[i].id;
    for (var j = 0; j < elements.length; j++) {
      if (elements[j].className.indexOf(filtParam) > -1) {
        if (sorters[i].checked == true) {
          addClass(elements[j], filtClassName);
        } else {
          removeClass(elements[j], filtClassName);
        }
      }
    }
  }
}
// Функцыя дадання класа
function addClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}
// Функцыя прыбірання класа
function removeClass(element, name) {
  var arr1 = element.className.split(" ");
  var arr2 = name.split(" ");
  for (var i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}


///// Тэставая функцыя
function test111() {
  if (window.matchMedia("(min-width: 891px)").matches) {
    alert("PC!!!!!");
  } else {
    alert("Mobile!!!!!");
  }
}


/* Only register a service worker if it's supported */
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js');  //адрас адносна галоўнай старонкі
}
