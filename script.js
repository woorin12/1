document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));
  var map;
        function initMap() {
            var cityHall = { lat: 37.566554, lng: 126.978546 };

            var defaultOptions = {
                zoom: 12,
                center: cityHall,
                disableDefaultUI: true,
                zoomControl: true
            };
            map = new google.maps.Map(document.getElementById('map'), defaultOptions);

            var myIcon = new google.maps.MarkerImage("https://www.winix.com/build/assets/marker-on-0bb6dc0b.png");

            var marker = new google.maps.Marker({
                position: cityHall,
                map: map,
                icon: myIcon
            });
        }

        // document.getElementById(' ').classList.toggle(' ');
//  document.getElementById(" ").style.display = " ";

// var pCont = document.querySelectorAll(".page p")



// var pCont = document.querySelectorAll(".page p")

// pCont.forEach((p) => {
//   p.onclick = () => {
//     pCont.forEach((p) => {
//       p.classList.remove("checkpage")
//     })
//     p.classList.add("checkpage")
//   }
// })


// News 페이지 넘버
window.addEventListener("load", function() {
    const tagList = document.querySelectorAll(".page > p");
    for (let i = 0; i < tagList.length; i++) {
      tagList[i].addEventListener("click", function() {
        clearPage();
        this.classList.add("checkpage");
      });
    }
  
    function clearPage() {
  
      for (let i = 0; i < tagList.length; i++) {
        tagList[i].classList.remove("checkpage");
      }
    }
  });
  
  
  // fqa 리스트 탭
  window.addEventListener("load", function() {
      const tapList = document.querySelectorAll(".listtap > li");
      for (let i = 0; i < tapList.length; i++) {
        tapList[i].addEventListener("click", function() {
          cleartap();
          this.classList.add("tapsee");
          if (i == 0) {
            document.getElementById("list1").style.display = "block";
            document.getElementById("list2").style.display = "none";
            document.getElementById("list3").style.display = "none";
            document.getElementById("list4").style.display = "none";
          } else if (i == 1) {
            document.getElementById("list1").style.display = "none";
            document.getElementById("list2").style.display = "block";
            document.getElementById("list3").style.display = "none";
            document.getElementById("list4").style.display = "none";
          } else if (i == 2) {
            document.getElementById("list1").style.display = "none";
            document.getElementById("list2").style.display = "none";
            document.getElementById("list3").style.display = "block";
            document.getElementById("list4").style.display = "none";
          } else if (i == 3) {
            document.getElementById("list1").style.display = "none";
            document.getElementById("list2").style.display = "none";
            document.getElementById("list3").style.display = "none";
            document.getElementById("list4").style.display = "block";
          }
        });
      }
    
      function cleartap() {
    
        for (let i = 0; i < tapList.length; i++) {
          tapList[i].classList.remove("tapsee");
        }
      }
    });
    
  
  // fqa 리스트 아코디언
  
  window.addEventListener("load", function() {
    const List = document.querySelectorAll(".listq");
    for (let i = 0; i < List.length; i++) {
      List[i].addEventListener("click", function() {
        clearlist();
        var panel = this.nextElementSibling;
        panel.classList.add("listsee");
      });
    }
  
    function clearlist() {
      for (let i = 0; i < List.length; i++) {
        var panel = List[i].nextElementSibling;
        panel.classList.remove("listsee");
      }
    }
  });
  
  
  // faq 페이지 넘버
  window.addEventListener("load", function() {
    const tagList = document.querySelectorAll(".faq-page > p");
    for (let i = 0; i < tagList.length; i++) {
      tagList[i].addEventListener("click", function() {
        clearPage();
        this.classList.add("faq-checkpage");
      });
    }
  
    function clearPage() {
  
      for (let i = 0; i < tagList.length; i++) {
        tagList[i].classList.remove("faq-checkpage");
      }
    }
  });
  