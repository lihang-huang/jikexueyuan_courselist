// 返回顶部

var returnTop = function() {
    window.scrollBy(0, -40); //Only for y vertical-axis
    if (document.body.scrollTop > 0) {
        setTimeout('returnTop()', 10);
    }
}

$(document).ready(function() {
    $("#ani1").mouseenter(function() {
        $("#dani1").fadeIn(300);
    });
    $("#ani1").mouseleave(function() {
        $("#dani1").fadeOut(300);
    });
    $("#ani2").mouseenter(function() {
        $("#dani2").fadeIn(300);
    });
    $("#ani2").mouseleave(function() {
        $("#dani2").fadeOut(300);
    });
    $("#ani3").mouseenter(function() {
        $("#dani3").fadeIn(300);
    });
    $("#ani3").mouseleave(function() {
        $("#dani3").fadeOut(300);
    });
    $(".app-icon").mouseenter(function() {
        $("#appIconSub").fadeIn(300);
    });
    $(".app-icon").mouseleave(function() {
        $("#appIconSub").fadeOut(300);
    });
    $(".vip-user").mouseenter(function() {
        $("#uvSub").fadeIn(300);
    });
    $(".vip-user").mouseleave(function() {
        $("#uvSub").fadeOut(300);
    });
    $("#search-icon").click(function() {
        $(".search-box").addClass("scale");
    });

    $("#close-btn").click(function() {
        $(".search-box").removeClass("scale");
    });

    $(".aside-clist li>div").mouseenter(function() {
        $(this).css("background", "#fff");
        $(this).children(".list-show").css("display", "block");
    });
    $(".aside-clist li>div").mouseleave(function() {
        $(this).children(".list-show").css("display", "none");
    });

    $(".sortMode>dl").mouseenter(function() {
        $(this).css("height", "auto");
    });

    $(".sortMode>dl").mouseleave(function() {
        $(this).css("height", "36px");
    });


    $(".listbox").on("mouseenter", ".lesson-list>ul>li", function() {
        $(this).find(".lesson-shoucang").fadeIn(300);
        $(this).find(".lessonplay").fadeIn(300);
        $(this).find(".change-p").slideDown(200);
        $(this).find(".learn-number").show();
        $(this).find(".zhongji").slideDown(200);
    }).on("mouseleave", ".lesson-list>ul>li", function() {
        $(this).find(".lesson-shoucang").fadeOut(300);
        $(this).find(".lessonplay").fadeOut(300);
        $(this).find(".change-p").slideUp(500);
        $(this).find(".learn-number").hide();
        $(this).find(".zhongji").slideUp(500);
    }).on("mouseenter", ".lesson-list2>ul>li", function() {
        $(this).find(".lessonplay").fadeIn(300);
    }).on("mouseleave",".lesson-list2>ul>li",function(){
        $(this).find(".lessonplay").fadeOut(300);
    });

    $(".top").click(returnTop);

    $(window).scroll(
        function() {
            if ($(window).scrollTop() == 0) {
                $(".top").fadeOut(300);
            } else {
                $(".top").fadeIn(300);
            }
        }
    );

    $(".kuai-icon").click(function() {
        $(".lesson-list2").addClass("lesson-list");
        $(".lesson-list").removeClass("lesson-list2");
        $("div#paper").css("height", "2060px");
    });

    $(".list-icon").click(function() {
        $(".lesson-list1>ul>li").off(); //解除绑定
        $(".lesson-list").addClass("lesson-list2");
        $(".lesson-list2").removeClass("lesson-list");
        $(".lesson-list2").find(".lesson-shoucang").hide();
        $(".lesson-list2").find(".lessonplay").hide();
        $("div#paper").css("height", "2830px");
    });
});
