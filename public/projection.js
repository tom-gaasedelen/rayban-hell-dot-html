var socket = io.connect() //set up a place for us to connect to, and try to connect.

      socket.on('connect', function(data){ //when we are connected to something,
        console.log("connected to the server" + socket.id); //log out our socket's id, some long garbled number letter thing that is unique!
      })

        socket.on('projectionRectangle', function(data){ //if we see a projectionRectangle message then do some stuff
          console.log(data)

        //use jQuery to add a rect to the screen, notice the alternate jQ syntax!
          var h = window.innerHeight;
          var w = window.innerWidth;


                var glasses = ["shades1.png", "shades2.png", "shades3.png", "shades4.png", "shades5.png", "shades6.png", "shades7.png", "shades8.png", "shades9.png", "shades10.png", "shades11.png", "shades12.png", "shades13.png", "shades14.png", "shades15.png", "shades16.png", "shades17.png", "shades18.png", ];
            function randomGlasses() {
               return glasses[Math.floor(Math.random() * glasses.length)];
            console.log(randomGlasses);}

          //first make a div, change the css, then append to the body. this is not possible with the 'normal' syntax, because order of operations
          $('<div class="shades-animation">  <img class="glass" src="images/' + randomGlasses() + '"> </div>').css({
              'position':'absolute',
              'top' : data.top,
              'left' : data.left
            }).appendTo('body')

      })

      socket.on('projectionLike',function(data){

        var pics = ["noah.jpg", "lizz.jpg" , "zucc.gif" , "paris.gif" , "calvin.jpg", "darcy.jpg" , "kayleigh.jpg" , "anne.jpg", "annika.jpg", "dog.jpg"];
        function randomPics() {
          return pics [Math.floor(Math.random() * pics.length)];
          console.log(randomPics);
        }

        $('<div class="pic-animation">  <img src="images/' + randomPics() + '"> </div>').css({
            'position':'absolute',
            'top' : data.top,
            'left' : data.left,
            'z-index' : -10,
          }).appendTo('.everything')



        console.log('add an image for like from an array.');


      })

      socket.on('projectionComment', function(data){

        var words = ["text1.png" , "over90.png"  , "oakley.png" , "price1.png", "price2.png" , "price3.png" , "price4.png"];
        function randomWords() {
          return words [Math.floor(Math.random() * words.length)];
          console.log(randomWords);
        }

        $('<div class="updown-animation">  <img src="images/' + randomWords() + '"> </div>').css({
            'position':'absolute',
            'top' : data.top,
            'left' : data.left,

          }).appendTo('.everything')

          console.log( 'add words from an array'  )
      })

      socket.on('projectionShare', function(data){

        var stuff = [ "flowers.gif" , "thumb.png" , "blade.png" , "ribbon.png" ];
        function randomStuff() {
          return stuff [Math.floor(Math.random() * stuff.length)];
          console.log(randomStuff);
        }

        $('<div class="skew-animation">  <img src="images/' + randomStuff() + '"> </div>').css({
            'position':'absolute',
            'top' : data.top,
            'left' : data.left,

          }).appendTo('.everything')

        })
