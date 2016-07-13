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

.controller('BranchCreateCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("branch-create");
  $scope.menutitle = NavigationService.makeactive("Create Branch");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
})

.controller('TimelineCtrl', function($scope, TemplateService, NavigationService, $timeout, $uibModal) {
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

.controller('languageCtrl', function($scope, TemplateService,$translate,$rootScope) {

    $scope.changeLanguage = function() {
      console.log("Language CLicked");

      if(!$.jStorage.get("language")){
        $translate.use("hi");
        $.jStorage.set("language","hi");
      }
      else {
        if($.jStorage.get("language") == "en")
        {
          $translate.use("hi");
          $.jStorage.set("language","hi");
        }
        else {
          $translate.use("en");
          $.jStorage.set("language","en");
        }
      }
    //  $rootScope.$apply();
    };
})
;
