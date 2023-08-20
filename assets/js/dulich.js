window.onload = function() {
    var places = document.querySelectorAll('.places');
  
    places.forEach(function(place) {
      var imgBoxes = place.querySelectorAll('.imgContainer .imgBox');
      var discribe = place.querySelector('.discribe');
    
      imgBoxes.forEach(function(imgBox) {
        imgBox.addEventListener('mouseover', function() {
          this.classList.add('open');
          checkImgBoxes(place);
        });
    
        imgBox.addEventListener('mouseout', function() {
          this.classList.remove('open');
          checkImgBoxes(place);
        });


        imgBox.addEventListener('click', function() {
            this.classList.toggle('open');
            checkImgBoxes(place);
          });
      });
    
      function checkImgBoxes(place) {
        var allClosed = true;
    
        imgBoxes.forEach(function(imgBox) {
          if (imgBox.classList.contains('open')) {
            allClosed = false;
          }
        });
    
        if (allClosed) {
          discribe.classList.add('appear');
        } else {
          discribe.classList.remove('appear');
        }
      }
    
      checkImgBoxes(place);
    });
  };