function elem(selector) {
  return typeof selector == 'string' && selector.length > 1 ? document.querySelector(selector) : false;
}

function elems(selector) {
  return typeof selector == 'string' && selector.length > 1 ? document.querySelectorAll(selector) : false;
}

function modifyClass(elem, targetClass) {
  if(elem && typeof targetClass == 'string') {
    let elementClasses = elem.classList;
    elementClasses.contains(targetClass) ? elementClasses.remove(targetClass) : elementClasses.add(targetClass);
  }
}

function classPresent(elem, targetClass) {
  if(elem && typeof targetClass == 'string') {
    let elementClasses = elem.classList;
    return elementClasses.contains(targetClass) ? true : false;
  }
}

function content(elem, contents) {
  if(elem && contents) {
    elem.innerHTML = contents;
  }
}

function findChild(elem, child) {
  // only works with classes
  if (elem && typeof child == 'string') {
    let children = Array.from(elem.children)
    let kid = children.filter(function(thisChild) {
      return thisChild.classList.contains(child) ? thisChild : false;
    });
  }
}

(function initParallax() {
  let rellaxElement = elem('.rellax');
  var rellax = rellaxElement ?  new Rellax('.rellax') : false;
})();

(function toggleMenu() {
  let navToggle = elem('.nav_toggle');
  let navMenu = elem('.nav_menu');
  navToggle.addEventListener('click', function() {
    modifyClass(this, 'nav_toggled');
    modifyClass(navMenu, 'nav_open');
    classPresent(this, 'nav_toggled') ? content(this, " ") : content(this, "&#9776;");
  });
})();

// (function animateNav() {
//   let nav = elem('.nav_brand');
//   let shrink = 'nav_shrink';
//   let logo = elem('.logo');
//   let shrink1 = 'nav_logo';
//   window.addEventListener('scroll', function() {
//     let scrollPosition = document.documentElement.scrollTop;
//     if (scrollPosition > 100) {
//       classPresent(nav, shrink) ? false : modifyClass(nav, shrink); 
//       classPresent(logo, shrink1) ? false : modifyClass(logo, shrink1); 

//     } else {
//       classPresent(nav, shrink) ? modifyClass(nav, shrink) : false;
//       classPresent(logo, shrink1) ? modifyClass(logo, shrink1) : false;
//     }
//   });
// })();

// (function navigateToTop() {
//   let nav = elem('.nav');
//   let fixed = 'nav_fixed';
//   window.addEventListener('scroll', function() {
//     let scrollPosition = document.documentElement.scrollTop;
//     if (scrollPosition > 50) {
//       classPresent(nav, fixed) ? false : modifyClass(nav, fixed); 

//     } else {
//       classPresent(nav, fixed) ? modifyClass(nav, fixed) : false;
//     }
//   });

//   nav.addEventListener('click', function() {
//     document.documentElement.scrollTop = 0;
//   });
// })();

(function removeEmptyParagraphs(){
  let paragraphs = document.querySelectorAll('p');
  if(paragraphs) {
    let emptyParagraphs = Array.from(paragraphs).filter(function(paragraph) {
      return paragraph.textContent.length == 0 && !paragraph.innerHTML;
    });
    
    emptyParagraphs.forEach(function(p) {
      let parent = p.parentNode;
      parent.removeChild(p);
    });
  }
})();

function wrapElement(el, wrapper) {
  if (el) {
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
  }
}

(function makeTablesResponsive() {
  let tables = elems('table');
  if (tables.length >= 1) {
    tables.forEach(function(table) {
      let wrapper = document.createElement('div');
      wrapper.classList.add('wrap_table');
      wrapElement(table, wrapper);
    })
  }
})();