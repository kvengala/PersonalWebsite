    /**************************************
    /**************************************
    *   On Screen animations
    **************************************/
    $('#igloo-project').onScreen({
        direction: 'vertical',
        doIn: function() {
        $( "#igloo-project").transition({
        perspective: '1000px',
        rotateY: '360deg',
        delay:100
        });
        /*$( "#igloo-project").transition(
         { x: 200 }, 500, 'in');*/
        },
        doOut: function() {

        },
        tolerance: 200,
        lazyAttr: true
        //throttle: 600
        });

    $('#triage-tool-project').onScreen({
        direction: 'vertical',
        doIn: function() {
        $( "#triage-tool-project").transition({
        perspective: '500px',
        rotateY: '360deg',
        delay:400
        });
        },
        doOut: function() {

        },
        tolerance: 200,
        lazyAttr: true
        //throttle: 600
        });


    $('#tqt-project').onScreen({
        direction: 'vertical',
        doIn: function() {
        $( "#tqt-project").transition({
        perspective: '1000px',
        rotateY: '360deg',
        delay:100
        });
        },
        doOut: function() {

        },
        tolerance: 200,
        lazyAttr: true
        //throttle: 600
        });

    $('#transiit-project').onScreen({
        direction: 'vertical',
        doIn: function() {
        $( "#transiit-project").transition({
        perspective: '1000px',
        rotateX: '360deg',
        delay:400
        });
        },
        doOut: function() {

        },
        tolerance: 200,
        lazyAttr: true
        //throttle: 600
        });

    $('#transit-bentley-project').onScreen({
        direction: 'vertical',
        doIn: function() {
        $( "#transit-bentley-project").transition({
        perspective: '1000px',
        rotateX: '360deg',
        delay:100
        });
        },
        doOut: function() {

        },
        tolerance: 200,
        lazyAttr: true
        //throttle: 600
        });

    $('#research-project').onScreen({
        direction: 'vertical',
        doIn: function() {
        $( "#research-project").transition({
        perspective: '1000px',
        rotateX: '360deg',
        delay:400
        });
        },
        doOut: function() {

        },
        tolerance: 200,
        lazyAttr: true
        //throttle: 600
        });



    /**************************************
    * Populating Modal Window Info for Projects
    **************************************/

    $("#igloo-project").click(function (e) {
        $("#myModalLabel").html("Igloo");
        $("#modal-body").html("At&T proprietary GIS web application available only for AT&T employees within their intranet. " +
        "This project primarily facilitates AT&T employees to make feasibility checks during their product installation based on their customers' " +
        "geographic locations. I was the sole developer of this project.");
        $("#play-img-btn").hide();
        });
    $("#triage-tool-project").click(function (e) {
        $("#myModalLabel").html("Triage Tool");
        $("#modal-body").html("A different At&T proprietary GIS project available for their employees only within their intranet." +
        "AT&T offered this project after my convincing performance in Igloo.");
        $("#play-img-btn").hide();

        });
    $("#tqt-project").click(function (e) {
        $("#myModalLabel").html("TQT - Transport Qualification Tool");
        $("#modal-body").html("At&T proprietary website available only within their intranet. An Agile web application in which I was one of the lead developers." +
        " I primarily developed User Management Services, Network Feasibility and Reports Generation.");
        $("#play-img-btn").hide();
        });
    $("#transiit-project").click(function (e) {
        $("#myModalLabel").html("TransIIT");
        $("#modal-body").html("A scalable personal android project to quickly view bus schedules at Illinois Institute of Technology, Chicago. " +
        "A simple and efficient way to bid goodbye to boring PDFs!");
        $("#play-img-btn").show();
        });
    $("#transit-bentley-project").click(function (e) {
        $("#myModalLabel").html("Transit Bentley");
        $("#modal-body").html("Under Construction: This project reuses the scalability that TransIIT-project offers. " +
        "Quickly view bus schedules of Bentley University. A simple and efficient way to bid goodbye to boring PDFs!");
        $("#play-img-btn").hide();
        });
    $("#research-project").click(function (e) {
        $("#myModalLabel").html("Research at IIT");
        $("#modal-body").html("Researching and developing another distribution for Hadoop by replacing it's default YARN scheduler " +
        "with the one developed in our lab.");
        $("#play-img-btn").hide();
        });
    /* /Populating Modal Window Info for Projects*/

    $("#menu-close").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        });
    //</script>
    //<script>
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active");
        });
    //</script>
    //<script>
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
        });
    /*To create a glow effect to the header*/
    /*$("#find-out-more").mouseenter(function(){
        $(".header").fadeIn("slow",function(){
            $(this).addClass("header-glow");
        });
    });
    $("#find-out-more").mouseleave(function(){
        $(".header").fadeIn("slow",function(){
            $(this).removeClass("header-glow");
        });
    });*/
    //</script>

    /***********************************
    * Angular JS Starts here
    ************************************/

    /*Module: skillPopulator*/
    (function(){
        var skillPopulator = angular.module('skillPopulator', []);
        alert(skillPopulator);
        skillPopulator.controller('skillsetController', function(){
            /*$("#language-domain").mouseenter(function(){
                skillPopulator.skillType = language;
            });*/
           // alert(this);
            this.skillType = def;
        });
        var def = {
            /*name:'language'*/
            set: '--Hover over a technology--'
        };
        var language = {
            /*name:'language'*/
            set: 'Java, Javascript, HTML5, CSS3'
        };
        var sdlc = {
            /*name:'sdlc'*/
            set: 'Agile, Waterfall, Prototype'
        };
        var cloud = {
            /*name:'cloud'*/
            set: 'AWS, Google-Appengine, MapReduce'
        };
        var build = {
            /*name:'build'*/
            set: 'Maven, Gradle'
        };
        var frameworks = {
            /*name:'frameworks'*/
            set: 'Hadoop, Roboguice, Spring, Struts2'
        };
        var ide = {
            /*name:'ide'*/
            set: 'Idea, Eclipse'
        };
        var os = {
            /*name:'os'*/
            set: 'Linux, Android, Windows, Unix'
        };
        var gisApi = {
            /*name:'gisApi'*/
            set: 'ArcGis, GoogleAPI'
        };
        var persistence = {
            /*name:'persistence'*/
            set: 'JPA, iBatis'
        };
        var patterns = {
            /*name:'patterns'*/
            set: 'Facade, Singleton, MVC, Adapter'
        };
    })();
    /*skillPopulator ends here*/