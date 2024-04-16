$(".workItem").on("click", function () {
  console.log("an item was clicked");

  var selected = this;

  if ($(selected).hasClass("active")) {
    console.log("this item is already active!");
  } else {
    $(".workDisplay").delay(50).animate({ left: "5000px" }, "slow");

    function switchDisplay(selected) {
      $(".workItem").removeClass("active");
      $(".workDisplayItem").removeClass("active");

      if ($(selected).hasClass("work1")) {
        $(".work1").addClass("active");
        console.log("work1 is now active");
      } else if ($(selected).hasClass("work2")) {
        $(".work2").addClass("active");
        console.log("work2 is now active");
      } else if ($(selected).hasClass("work3")) {
        $(".work3").addClass("active");
        console.log("work3 is now active");
      } else if ($(selected).hasClass("work4")) {
        $(".work4").addClass("active");
        console.log("work4 is now active");
      }
    }

    setTimeout(function () {
      switchDisplay(selected);
    }, 1000);

    $(".workDisplay").animate({ left: "0px" }, "slow");
  }
});
