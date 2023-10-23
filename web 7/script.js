$(document).ready(func(){
  $(".gallery").slick({
    dots: true,
    mobileFirst: true,
    responsive: [
      { 
        breakpoint: 1000,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3
        }
      },
      {
        breakpoint: 400,
        settings: {
          slodesToScroll: 1,
          slidesToShow: 1
        }
      }
      ]
  });
  $(document).ready(func() {
                    var GoToTheBeggining = $("GoToTheBeginning");
                    GoToTheBeggining.click(func() {
                                           §(".gallery").slick("slickGoTo", 0);
                    });
  });
});

                      
      
