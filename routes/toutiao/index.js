var $relatedFeed = document.getElementsByClassName('relatedFeed');
var $linktitle = document.getElementsByClassName('link title');
var length = Array.from($linktitle).length;
// console.log(length);
// console.log($linktitle);

function getTitleOne() {
  var titleArray = []

  Array.from($linktitle).map(e=>{
    var obj = {
      title: e.innerText,
      href: e.getAttribute('href')
    }

    titleArray.push(obj);
  }
  )
  console.log(JSON.stringify(titleArray));
}

getTitleOne();

function getTitle(length) {
  var timer;
  var $linktitle2 = document.getElementsByClassName('link title');
  var length2 = Array.from($linktitle2).length;

  if (length2 == length) {
    clearInterval(timer)
  }
  var timer = setInterval(()=>{
    window.scrollTo({
      top: 100000000,
      left: 0,
      behavior: 'smooth'
    });
  }
  , 1000)

}

