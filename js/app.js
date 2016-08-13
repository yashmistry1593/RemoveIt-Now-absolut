// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice',
    'pascalprecht.translate',
    'angulartics',
    'angulartics.google.analytics',
    'imageupload',
    "ngMap"

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
        url: "/country-list/{page:.*}/{keyword:.*}",
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

    .state('city-list', {
        url: "/city-list",
        templateUrl: "views/template.html",
        controller: 'CityCtrl'
    })

    .state('createcity', {
        url: "/city-create",
        templateUrl: "views/template.html",
        controller: 'CreateCityCtrl'
    })

    .state('editcity', {
        url: "/city-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditCityCtrl'
    })

    .state('office-list', {
        url: "/office-list",
        templateUrl: "views/template.html",
        controller: 'OfficeCtrl'
    })


    .state('createoffice', {
        url: "/office-create",
        templateUrl: "views/template.html",
        controller: 'CreateOfficeCtrl'
    })

    .state('editoffice', {
        url: "/office-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditOfficeCtrl'
    })

    .state('typeOfOffice-list', {
        url: "/typeOfOffice-list",
        templateUrl: "views/template.html",
        controller: 'TypeOfOfficeCtrl'
    })

    .state('createtypeOfOffice', {
        url: "/typeOfOffice-create",
        templateUrl: "views/template.html",
        controller: 'CreateTypeOfOfficeCtrl'
    })

    .state('edittypeOfOffice', {
        url: "/typeOfOffice-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditTypeOfOfficeCtrl'
    })

    .state('department-list', {
        url: "/department-list",
        templateUrl: "views/template.html",
        controller: 'DepartmentCtrl'
    })


    .state('createdepartment', {
        url: "/department-create",
        templateUrl: "views/template.html",
        controller: 'CreateDepartmentCtrl'
    })

    .state('editdepartment', {
        url: "/department-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditDepartmentCtrl'
    })


    .state('uniquetype-list', {
        url: "/uniquetype-list",
        templateUrl: "views/template.html",
        controller: 'UniqueTypetCtrl'
    })


    .state('createuniquetype', {
        url: "/uniquetype-create",
        templateUrl: "views/template.html",
        controller: 'CreateUniqueTypeCtrl'
    })

    .state('edituniquetype', {
        url: "/uniquetype-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditUniqueTypeCtrl'
    })

    .state('policytype-list', {
        url: "/policytype-list",
        templateUrl: "views/template.html",
        controller: 'PolicyTypeCtrl'
    })

    .state('createpolicytype', {
        url: "/policytype-create",
        templateUrl: "views/template.html",
        controller: 'CreatePolicyTypeCtrl'
    })

    .state('editpolicytype', {
        url: "/policytype-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditPolicyTypeCtrl'
    })

    .state('policy-list', {
        url: "/policy-list",
        templateUrl: "views/template.html",
        controller: 'PolicyCtrl'
    })

    .state('createpolicy', {
        url: "/policy-create",
        templateUrl: "views/template.html",
        controller: 'CreatePolicyCtrl'
    })

    .state('editpolicy', {
        url: "/policy-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditPolicyCtrl'
    })

    .state('policydoc-list', {
        url: "/policydoc-list",
        templateUrl: "views/template.html",
        controller: 'PolicyDocCtrl'
    })

    .state('createpolicydoc', {
        url: "/policydoc-create",
        templateUrl: "views/template.html",
        controller: 'CreatePolicyDocCtrl'
    })

    .state('editpolicydoc', {
        url: "/policydoc-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditPolicyDocCtrl'
    })

    .state('industry-list', {
        url: "/industry-list",
        templateUrl: "views/template.html",
        controller: 'IndustryCtrl'
    })

    .state('createindustry', {
        url: "/industry-create",
        templateUrl: "views/template.html",
        controller: 'CreateIndustryCtrl'
    })

    .state('editindustry', {
        url: "/industry-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditIndustryCtrl'
    })

    .state('category-list', {
        url: "/category-list",
        templateUrl: "views/template.html",
        controller: 'CategoryCtrl'
    })

    .state('createcategory', {
        url: "/category-create",
        templateUrl: "views/template.html",
        controller: 'CreateCategoryCtrl'
    })

    .state('editcategory', {
        url: "/category-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditCategoryCtrl'
    })

    .state('func-list', {
        url: "/func-list",
        templateUrl: "views/template.html",
        controller: 'FuncCtrl'
    })

    .state('createfunc', {
        url: "/func-create",
        templateUrl: "views/template.html",
        controller: 'CreateFuncCtrl'
    })

    .state('editfunc', {
        url: "/func-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditFuncCtrl'
    })

    .state('causeloss-list', {
        url: "/causeloss-list",
        templateUrl: "views/template.html",
        controller: 'CauseLossCtrl'
    })

    .state('createcauseloss', {
        url: "/causeloss-create",
        templateUrl: "views/template.html",
        controller: 'CreateCauseLossCtrl'
    })

    .state('editcauseloss', {
        url: "/causeloss-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditCauseLossCtrl'
    })

    .state('natureloss-list', {
        url: "/natureloss-list",
        templateUrl: "views/template.html",
        controller: 'NatureLossCtrl'
    })

    .state('createnatureloss', {
        url: "/natureloss-create",
        templateUrl: "views/template.html",
        controller: 'CreateNatureLossCtrl'
    })

    .state('editnatureloss', {
        url: "/natureloss-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditNatureLossCtrl'
    })

    .state('businessbranch-list', {
        url: "/businessbranch-list",
        templateUrl: "views/template.html",
        controller: 'BusinessBranchCtrl'
    })

    .state('createbusinessbranch', {
        url: "/businessbranch-create",
        templateUrl: "views/template.html",
        controller: 'CreateBusinessBranchCtrl'
    })

    .state('editbusinessbranch', {
        url: "/businessbranch-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditBusinessBranchCtrl'
    })

    .state('menu-list', {
        url: "/menu-list",
        templateUrl: "views/template.html",
        controller: 'MenuCtrl'
    })

    .state('createmenu', {
        url: "/menu-create",
        templateUrl: "views/template.html",
        controller: 'CreateMenuCtrl'
    })

    .state('editmenu', {
        url: "/menu-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditMenuCtrl'
    })

    .state('role-list', {
        url: "/role-list",
        templateUrl: "views/template.html",
        controller: 'RoleCtrl'
    })

    .state('createrole', {
        url: "/role-create",
        templateUrl: "views/template.html",
        controller: 'CreateRoleCtrl'
    })

    .state('editrole', {
        url: "/role-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditRoleCtrl'
    })

    .state('user-list', {
        url: "/user-list",
        templateUrl: "views/template.html",
        controller: 'UserCtrl'
    })

    .state('createuser', {
        url: "/user-create",
        templateUrl: "views/template.html",
        controller: 'CreateUserCtrl'
    })

    .state('edituser', {
        url: "/user-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditUserCtrl'
    })

    .state('employee-list', {
        url: "/employee-list",
        templateUrl: "views/template.html",
        controller: 'EmployeeCtrl'
    })

    .state('createemployee', {
        url: "/employee-create",
        templateUrl: "views/template.html",
        controller: 'CreateEmployeeCtrl'
    })

    .state('editemployee', {
        url: "/employee-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditEmployeeCtrl'
    })

    .state('product-list', {
        url: "/product-list",
        templateUrl: "views/template.html",
        controller: 'ProductCtrl'
    })

    .state('createproduct', {
        url: "/product-detail",
        templateUrl: "views/template.html",
        controller: 'CreateProductCtrl'
    })

    .state('editproduct', {
        url: "/product-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditProductCtrl'
    })

    .state('salvage-list', {
        url: "/salvage-list",
        templateUrl: "views/template.html",
        controller: 'SalvageCtrl'
    })

    .state('createsalvage', {
        url: "/salvage-detail",
        templateUrl: "views/template.html",
        controller: 'CreateSalvageCtrl'
    })

    .state('editSalvage', {
        url: "/salvage-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditSalvageCtrl'
    })

    .state('bankmaster-list', {
        url: "/bankmaster-list",
        templateUrl: "views/template.html",
        controller: 'BankMasterCtrl'
    })

    .state('createbankmaster', {
            url: "/bankmaster-detail",
            templateUrl: "views/template.html",
            controller: 'CreateBankmasterCtrl'
        })
        .state('editbankmaster', {
            url: "/bankmaster-detail/:id",
            templateUrl: "views/template.html",
            controller: 'EditBankmasterCtrl'
        })

    .state('company-list', {
        url: "/company-list",
        templateUrl: "views/template.html",
        controller: 'CompanyCtrl'
    })

    .state('createcompany', {
            url: "/company-detail",
            templateUrl: "views/template.html",
            controller: 'CreateCompanyCtrl'
        })
        .state('editcompany', {
            url: "/company-detail/:id",
            templateUrl: "views/template.html",
            controller: 'EditCompanyCtrl'
        })

    .state('customer-list', {
        url: "/customer-list",
        templateUrl: "views/template.html",
        controller: 'CustomerCtrl'
    })

    .state('createcustomer', {
            url: "/customer-detail",
            templateUrl: "views/template.html",
            controller: 'CreateCustomerCtrl'
        })
        .state('editcustomer', {
            url: "/customer-detail/:id",
            templateUrl: "views/template.html",
            controller: 'EditCustomerCtrl'
        })

    .state('contactmanagement-list', {
        url: "/contactmanagement-list",
        templateUrl: "views/template.html",
        controller: 'ContactManagementCtrl'
    })

    .state('createcontactmanagement', {
        url: "/contactmanagement-detail",
        templateUrl: "views/template.html",
        controller: 'CreateContactManagementCtrl'
    })

    .state('contacttype-list', {
        url: "/contacttype-list",
        templateUrl: "views/template.html",
        controller: 'ContactTypeCtrl'
    })

    .state('createcontacttype', {
        url: "/contacttype-detail",
        templateUrl: "views/template.html",
        controller: 'CreateContactTypeCtrl'
    })

    .state('contacttypeoffice-list', {
        url: "/contacttypeoffice-list",
        templateUrl: "views/template.html",
        controller: 'ContactTypeOfficeCtrl'
    })

    .state('createcontacttypeoffice', {
        url: "/contacttypeoffice-detail",
        templateUrl: "views/template.html",
        controller: 'CreateContactTypeOfficeCtrl'
    })

    .state('customerSegment-list', {
        url: "/customerSegment-list",
        templateUrl: "views/template.html",
        controller: 'CustomerSegmentCtrl'
    })


    .state('createcustomersegment', {
        url: "/customersegment-create",
        templateUrl: "views/template.html",
        controller: 'CreateCustomerSegmentCtrl'
    })

    .state('editcustomersegment', {
            url: "/customersegment-edit/:id",
            templateUrl: "views/template.html",
            controller: 'EditCustomerSegmentCtrl'
        })
        .state('customerCompany-list', {
            url: "/customerCompany-list",
            templateUrl: "views/template.html",
            controller: 'CustomerCompanyCtrl'
        })


    .state('createcustomercompany', {
        url: "/customercompany-create",
        templateUrl: "views/template.html",
        controller: 'CreateCustomerCompanyCtrl'
    })

    .state('editcustomercompany', {
        url: "/customercompany-edit/:id",
        templateUrl: "views/template.html",
        controller: 'EditCustomerCompanyCtrl'
    })

    .state('timeline', {
        url: "/timeline",
        templateUrl: "views/template.html",
        controller: 'TimelineCtrl'
    });
    $urlRouterProvider.otherwise("/login");
    $locationProvider.html5Mode(isproduction);
});


firstapp.filter('uploadpath', function() {
    return function(input, width, height, style) {
        console.log(input);
        var other = "";
        if (width && width !== "") {
            other += "&width=" + width;
        }
        if (height && height !== "") {
            other += "&height=" + height;
        }
        if (style && style !== "") {
            other += "&style=" + style;
        }
        if (input) {
            console.log('in if');
            console.log('input');
            if (input.indexOf('https://') == -1) {
                console.log('in if');
                return imgpath + "?file=" + input + other;
                console.log(imgpath + "?file=" + input + other);
            } else {
                return input;
            }
        }
    };
});
firstapp.directive('imageonload', function() {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            element.bind('load', function() {
                scope.$apply(attrs.imageonload);
            });
        }
    };
});


firstapp.directive('uploadImage', function($http, $filter) {
    return {
        templateUrl: 'views/directive/uploadFile.html',
        scope: {
            model: '=ngModel',
            callback: "=ngCallback"
        },
        link: function($scope, element, attrs) {
            $scope.isMultiple = false;
            $scope.inObject = false;
            if (attrs.multiple || attrs.multiple === "") {
                $scope.isMultiple = true;
                $("#inputImage").attr("multiple", "ADD");
            }
            if (attrs.noView || attrs.noView === "") {
                $scope.noShow = true;
            }
            if ($scope.model) {
                if (_.isArray($scope.model)) {
                    $scope.image = [];
                    _.each($scope.model, function(n) {
                        $scope.image.push({
                            url: $filter("uploadpath")(n)
                        });
                    });
                }

            }
            if (attrs.inobj || attrs.inobj === "") {
                $scope.inObject = true;
            }
            $scope.clearOld = function() {
                $scope.model = [];
            };
            $scope.uploadNow = function(image) {
                var Template = this;
                image.hide = true;
                var formData = new FormData();
                formData.append('file', image.file, image.name);
                $http.post(uploadurl, formData, {
                    headers: {
                        'Content-Type': undefined
                    },
                    transformRequest: angular.identity
                }).success(function(data) {
                    console.log("success");
                    if ($scope.callback) {
                        $scope.callback(data);
                    } else {
                        if ($scope.isMultiple) {
                            if ($scope.inObject) {
                                $scope.model.push({
                                    "image": data.data[0]
                                });
                            } else {
                                $scope.model.push(data.data[0]);
                            }
                        } else {
                            $scope.model = data.data[0];
                        }
                    }
                });
            };
        }
    };
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
firstapp.directive('slimscroll', function($document) {
    return {
        restrict: 'EA',
        replace: false,
        link: function(scope, element, attr) {
            var $element = $(element);
            $element.slimScroll({
                height: '400px',
                wheelStep: 10,
                size: '2px'
            });
        }
    };
});

firstapp.directive('addressForm', function($document) {
    return {
        templateUrl: 'views/directive/address-form.html',
        scope: {},
        restrict: 'EA',
        replace: false,
        controller: function($scope, NgMap,NavigationService) {
            $scope.demoForm = {};
            $scope.map = {};
            $scope.change = function() {
                NgMap.getMap().then(function(map) {
                    console.log(map.markers[0].position.lat());
                    console.log(map.markers[0].position.lng());
                    var latLng = {
                        lat: map.markers[0].position.lat(),
                        lng: map.markers[0].position.lng()
                    };
                    _.assign($scope.demoForm, latLng);
                });
            };
            var LatLongi = 0;
            $scope.getLatLng = function(address) {

                NavigationService.getLatLng(address, ++LatLongi, function(data, i) {
                  console.log(i);
                  console.log(LatLongi);
                    if (i == LatLongi) {
                        $scope.demoForm = _.assign($scope.demoForm, data.results[0].geometry.location);
                    }
                });
                // $http.get("http://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyCn9ypqFNxdXt9Zu2YqLcdD1Xdt2wNul9s&address="+address);
            };

        },
        // link: function($scope, element, attr, NgMap) {
        //     var $element = $(element);
        //     $scope.demoForm = {};
        //     $scope.demoForm.lat = 19.0760;
        //     $scope.demoForm.long = 72.8777;
        //     $scope.map = {};
        //     $scope.change = function() {
        //       NgMap.getMap().then(function(map) {
        //         console.log(map);
        //       });
        //
        //     };
        //
        // }
    };
});

firstapp.directive('multipleSelect', function($document) {
    return {
        templateUrl: 'views/directive/multiple-select.html',
        scope: {
            model: '=ngModel',
            api: "@api",
            name: "@name",
            required: "@required",
            filter: "@filter"
        },
        restrict: 'EA',
        replace: false,
        controller: 'MultipleSelectCtrl',
        link: function(scope, element, attr, NavigationService) {
            var $element = $(element);
            console.log(scope.required);
            scope.isRequired = true;
            if (scope.required === undefined) {
                scope.isRequired = false;
            }

            console.log(attr.typeselect);
            scope.typeselect = attr.typeselect;
            console.log(scope.list);
            // $scope.searchNew()
            scope.change = function(data) {
                console.log(data);
            };


        }
    };
});
firstapp.filter('capitalize', function() {
    return function(input, all) {
        var reg = (all) ? /([^\W_]+[^\s-]*) */g : /([^\W_]+[^\s-]*)/;
        return (!!input) ? input.replace(reg, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }) : '';
    };
});

firstapp.config(function($translateProvider) {
    $translateProvider.translations('en', LanguageEnglish);
    $translateProvider.translations('hi', LanguageHindi);
    $translateProvider.preferredLanguage('en');
});
