// angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.tinymce'])

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap','ui.select','ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.tinymce'])

.controller('DashboardCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("dashboard");
    $scope.menutitle = NavigationService.makeactive("Dashboard");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('LoginCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("login");
    $scope.menutitle = NavigationService.makeactive("Login");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('BranchListCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("branch-list");
        $scope.menutitle = NavigationService.makeactive("Branch List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CountryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("country-list");
        $scope.menutitle = NavigationService.makeactive("Country List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        NavigationService.getAllCountries(function(data) {
            $scope.allCountries = data.data;
            console.log('$scope.allCountries', $scope.allCountries);

        });
    })
    .controller('CreateCountryCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("country-detail");
        $scope.menutitle = NavigationService.makeactive("country-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Country"
        };
        $scope.formData = {};
        $scope.saveCountry = function(formData) {
            $state.go('country-list');
            NavigationService.countrySave($scope.formData, function(data) {
                console.log('$scope.allCountriessave', $scope.data);

            });
        }

    })
    .controller('EditCountryCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("country-detail");
        $scope.menutitle = NavigationService.makeactive("country-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Country"
        };

        NavigationService.getOneCountry($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.oneCountry', $scope.oneCountry);

        });

        $scope.saveCountry = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.countryEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('country-list');
                }
            });
            //  }
        };

    })





    .controller('ZoneCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("zone-list");
        $scope.menutitle = NavigationService.makeactive("zone List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        NavigationService.getAllZones(function(data) {
            $scope.allZones = data.data;
            console.log('$scope.allZones', $scope.allZones);

        });
    })
    .controller('CreateZoneCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("zone-detail");
        $scope.menutitle = NavigationService.makeactive("zone-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Zone"
        };
        $scope.formData = {};
        $scope.saveCountry = function(formData) {

            NavigationService.zoneSave($scope.formData, function(data) {
              console.log(data);
              if(data.value==true){
                  $state.go('zone-list');
              }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

    })
    .controller('EditZoneCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("zone-detail");
        $scope.menutitle = NavigationService.makeactive("zone-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Zone"
        };

        NavigationService.getOneZone($stateParams.id, function(data) {
            $scope.formData = data.data;
            // console.log('$scope.oneCountry', $scope.oneCountry);

        });

        $scope.saveZone = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.zoneEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('zone-list');
                }
            });
            //  }
        };

    })






        .controller('StateCtrl', function($scope, TemplateService, NavigationService, $timeout) {
            //Used to name the .html file
            $scope.template = TemplateService.changecontent("state-list");
            $scope.menutitle = NavigationService.makeactive("state List");
            TemplateService.title = $scope.menutitle;
            $scope.navigation = NavigationService.getnav();

            NavigationService.getAllStates(function(data) {
                $scope.allStates = data.data;
                console.log('$scope.allStates', $scope.allStates);

            });
        })
        .controller('CreateStateCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
            //Used to name the .html file
            $scope.template = TemplateService.changecontent("state-detail");
            $scope.menutitle = NavigationService.makeactive("state-detail");
            TemplateService.title = $scope.menutitle;
            $scope.navigation = NavigationService.getnav();

            $scope.header = {
                "name": "Create State"
            };
            $scope.formData = {};
            $scope.saveState = function(formData) {

                NavigationService.stateSave($scope.formData, function(data) {
                  console.log(data);
                  if(data.value==true){
                      $state.go('state-list');
                  }
                    // console.log('$scope.allCountriessave', $scope.data);

                });
            }

        })
        .controller('EditStateCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
            //Used to name the .html file
            $scope.template = TemplateService.changecontent("state-detail");
            $scope.menutitle = NavigationService.makeactive("state-detail");
            TemplateService.title = $scope.menutitle;
            $scope.navigation = NavigationService.getnav();

            $scope.header = {
                "name": "Edit State"
            };

            NavigationService.getOneState($stateParams.id, function(data) {
                $scope.formData = data.data;
                // console.log('$scope.oneCountry', $scope.oneCountry);

            });

            $scope.saveState = function(formValid) {

                //  if (formValid.$valid) {
                //  $scope.formComplete = true;
                NavigationService.stateEditSave($scope.formData, function(data) {
                    if (data.value == true) {
                        $state.go('state-list');
                    }
                });
                //  }
            };

        })



.controller('BranchCreateCtrl', function($scope, TemplateService, NavigationService, $timeout) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("branch-create");
    $scope.menutitle = NavigationService.makeactive("Create Branch");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('TimelineCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
    //Used to name the .html file
    // $scope.template = TemplateService.changecontent("timeline");
    // $scope.menutitle = NavigationService.makeactive("Timeline");
    // TemplateService.title = $scope.menutitle;
    // $scope.navigation = NavigationService.getnav();
    //
    // $scope.newEmail = function() {
    //     var modalInstance = $uibModal.open({
    //         scope: $scope,
    //         templateUrl: 'views/modal/modal-email.html',
    //         size: 'md'
    //     });
    // };
    //
    // $scope.newMessage = function() {
    //     var modalInstance = $uibModal.open({
    //         scope: $scope,
    //         templateUrl: 'views/modal/modal-message.html',
    //         size: 'md'
    //     });
    // };
    //
    // $scope.viewJIR = function() {
    //     var modalInstance = $uibModal.open({
    //         scope: $scope,
    //         templateUrl: 'views/modal/modal-files.html',
    //         size: 'md'
    //     });
    // };
    //
    // $scope.files = [{
    //     type: "JIR",
    //     count: 2,
    //     files: [{
    //         name: "doc1.docx",
    //         selection: true
    //     }, {
    //         name: "doc2.docx",
    //         selection: false
    //     }]
    // }, {
    //     type: "ILA",
    //     count: 0,
    //     files: []
    // }, {
    //     type: "ILR",
    //     count: 0,
    //     files: []
    // }, {
    //     type: "LOR",
    //     count: 0,
    //     files: []
    // }, {
    //     type: "Assesments",
    //     count: 0,
    //     files: []
    // }, {
    //     type: "FSR",
    //     count: 0,
    //     files: []
    // }, {
    //     type: "Invoice",
    //     count: 0,
    //     files: []
    // }, {
    //     type: "Documents",
    //     count: 0,
    //     files: []
    // }, {
    //     type: "Images",
    //     count: 0,
    //     files: []
    // }, {
    //     type: "Total Attachments",
    //     count: 2,
    //     files: []
    // }];

  //Used to name the .html file
  $scope.template = TemplateService.changecontent("timeline");
  $scope.menutitle = NavigationService.makeactive("Timeline");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.email = {
    message:"Change"
  };
  $scope.emailtos = [
    {name: 'Tushar', email: 'tushar@wohlig.com'},
    {name: 'Chintan', email: 'chintan@wohlig.com'},
    {name: 'Harsh', email: 'harsh@wohlig.com'},
    {name: 'Raj', email: 'raj@wohlig.com'}
  ];

  $scope.tinymceModel = 'Initial content';
  $scope.tinymceOptions = {
    plugins: 'link image code',
    toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
  };

  $scope.newEmail = function () {
    var modalInstance = $uibModal.open({
      scope: $scope,
      templateUrl: 'views/modal/modal-email.html',
      size: 'lg'
    });
  };

  $scope.newMessage = function () {
    var modalInstance = $uibModal.open({
      scope: $scope,
      templateUrl: 'views/modal/modal-message.html',
      size: 'lg'
    });
  };

  $scope.viewJIR = function () {
    var modalInstance = $uibModal.open({
      scope: $scope,
      templateUrl: 'views/modal/modal-files.html',
      size: 'md'
    });
  };

  $scope.files = [{
    type: "JIR",
    count: 2,
    files: [{
      name: "doc1.docx",
      selection: true
    },{
      name: "doc2.docx",
      selection: true
    }]
  },{
    type: "ILA",
    count: 0,
    files: []
  },{
    type: "ILR",
    count: 0,
    files: []
  },{
    type: "LOR",
    count: 0,
    files: []
  },{
    type: "Assesments",
    count: 0,
    files: []
  },{
    type: "FSR",
    count: 0,
    files: []
  },{
    type: "Invoice",
    count: 0,
    files: []
  },{
    type: "Documents",
    count: 0,
    files: []
  },{
    type: "Images",
    count: 0,
    files: []
  },{
    type: "Total Attachments",
    count: 2,
    files: [{
      name: "doc1.docx",
      selection: true
    },{
      name: "doc2.docx",
      selection: true
    }]
  }];

})

.controller('headerctrl', function($scope, TemplateService) {
    $scope.template = TemplateService;
    $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
        $(window).scrollTop(0);
    });
})

.controller('languageCtrl', function($scope, TemplateService, $translate, $rootScope) {

    $scope.changeLanguage = function() {
        console.log("Language CLicked");

        if (!$.jStorage.get("language")) {
            $translate.use("hi");
            $.jStorage.set("language", "hi");
        } else {
            if ($.jStorage.get("language") == "en") {
                $translate.use("hi");
                $.jStorage.set("language", "hi");
            } else {
                $translate.use("en");
                $.jStorage.set("language", "en");
            }
        }
        //  $rootScope.$apply();
    };
});
