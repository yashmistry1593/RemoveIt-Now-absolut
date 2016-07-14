// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics'
]);

firstapp.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    // for http request with session
    $httpProvider.defaults.withCredentials = true;
    $stateProvider
        .state('dashboard', {
            url: "/dashboard",
            templateUrl: "views/template.html",
            controller: 'DashboardCtrl'
        })

    .state('login', {
        url: "/login",
        templateUrl: "views/template.html",
        controller: 'LoginCtrl'
    })

    .state('branch-list', {
        url: "/branch-list",
        templateUrl: "views/template.html",
        controller: 'BranchListCtrl'
    })

    .state('branch-create', {
            url: "/branch-create",
            templateUrl: "views/template.html",
            controller: 'BranchCreateCtrl'
        })
        .state('country-list', {
            url: "/country-list",
            templateUrl: "views/template.html",
            controller: 'CountryCtrl'
        })


    .state('createcountry', {
            url: "/country-create",
            templateUrl: "views/template.html",
            controller: 'CreateCountryCtrl'
        })
        .state('editcountry', {
            url: "/country-edit/:id",
            templateUrl: "views/template.html",
            controller: 'EditCountryCtrl'
        })

    .state('zone-list', {
        url: "/zone-list",
        templateUrl: "views/template.html",
        controller: 'ZoneCtrl'
    })


    .state('createzone', {
            url: "/zone-create",
            templateUrl: "views/template.html",
            controller: 'CreateZoneCtrl'
        })
        .state('editzone', {
            url: "/zone-edit/:id",
            templateUrl: "views/template.html",
            controller: 'EditZoneCtrl'
        })


    .state('state-list', {
        url: "/state-list",
        templateUrl: "views/template.html",
        controller: 'StateCtrl'
    })


    .state('createstate', {
            url: "/state-create",
            templateUrl: "views/template.html",
            controller: 'CreateStateCtrl'
        })
        .state('editstate', {
            url: "/state-edit/:id",
            templateUrl: "views/template.html",
            controller: 'EditStateCtrl'
        })



    .state('district-list', {
        url: "/district-list",
        templateUrl: "views/template.html",
        controller: 'DistrictCtrl'
    })


    .state('createdistrict', {
            url: "/district-create",
            templateUrl: "views/template.html",
            controller: 'CreateDistrictCtrl'
        })
        .state('editdistrict', {
            url: "/district-edit/:id",
            templateUrl: "views/template.html",
            controller: 'EditDistrictCtrl'
        })




            .state('currency-list', {
                url: "/currency-list",
                templateUrl: "views/template.html",
                controller: 'CurrencyCtrl'
            })


            .state('createcurrency', {
                    url: "/currency-create",
                    templateUrl: "views/template.html",
                    controller: 'CreateCurrencyCtrl'
                })
                .state('editcurrency', {
                    url: "/currency-edit/:id",
                    templateUrl: "views/template.html",
                    controller: 'EditCurrencyCtrl'
                })



    .state('timeline', {
        url: "/timeline",
        templateUrl: "views/template.html",
        controller: 'TimelineCtrl'
    })

    ;
    $urlRouterProvider.otherwise("/login");
    $locationProvider.html5Mode(isproduction);
});


firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if (!attrs.noloading) {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            } else {
                $($element).addClass("doneLoading");
            }
        }
    };
});

firstapp.directive('fancyboxBox', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            var target;
            if (attr.rel) {
                target = $("[rel='" + attr.rel + "']");
            } else {
                target = element;
            }

            target.fancybox({
                openEffect: 'fade',
                closeEffect: 'fade',
                closeBtn: true,
                helpers: {
                    media: {}
                }
            });
        }
    };
});

firstapp.directive('menuOptions', function($document) {
    return {
        restrict: 'C',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            $(element).on("click", function() {
                $(".side-header.opened-menu").toggleClass('slide-menu');
                $(".main-content").toggleClass('wide-content');
                $("footer").toggleClass('wide-footer');
                $(".menu-options").toggleClass('active');
            });

        }
    };
});


firstapp.directive('oI', function($document) {
    return {
        restrict: 'C',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            $element.click(function() {
                $element.parent().siblings().children("ul").slideUp();
                $element.parent().siblings().removeClass("active");
                $element.parent().children("ul").slideToggle();
                $element.parent().toggleClass("active");
                return false;
            });

        }
    };
});


firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
