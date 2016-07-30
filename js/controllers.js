// angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.tinymce'])

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ui.select', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.tinymce', 'imageupload', 'ngMap'])

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
        $scope.showAllCountries = function() {
            NavigationService.getAllCountries(function(data) {
                $scope.allCountries = data.data;
                console.log('$scope.allCountries', $scope.allCountries);

            });
        };
        $scope.showAllCountries();
        $scope.deleteCountry = function(id) {

            NavigationService.deleteCountry({
                id: id
            }, function(data) {
                $scope.showAllCountries();

            });
        }
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

            NavigationService.countrySave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('country-list');
                }

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



.controller('OfficeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("office-list");
        $scope.menutitle = NavigationService.makeactive("office List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.showAllOffices = function() {
            NavigationService.getAllOffices(function(data) {
                $scope.allOffices = data.data;
                console.log('$scope.allOffices', $scope.allOffices);

            });
        };
        $scope.showAllOffices();
        $scope.deleteOffice = function(id) {

            NavigationService.deleteOffice({
                id: id
            }, function(data) {
                $scope.showAllOffices();

            });
        }
    })
    .controller('CreateOfficeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("office-detail");
        $scope.menutitle = NavigationService.makeactive("office-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Office"
        };
        $scope.formData = {};
        $scope.saveOffice = function(formData) {

            NavigationService.officeSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('office-list');
                }

            });
        }

    })
    .controller('EditOfficeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("office-detail");
        $scope.menutitle = NavigationService.makeactive("office-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Office"
        };

        NavigationService.getOneOffice($stateParams.id, function(data) {
            $scope.formData = data.data;
        });

        $scope.saveOffice = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.officeEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('office-list');
                }
            });
            //  }
        };

    })
    .controller('TypeOfOfficeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("typeOfOffice-list");
        $scope.menutitle = NavigationService.makeactive("typeOfOffice List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.showAllTypeOfOffices = function() {
            NavigationService.getAllTypeOfOffices(function(data) {
                $scope.allTypeOfOffices = data.data;
                console.log('$scope.allTypeOfOffices', $scope.allTypeOfOffices);

            });
        };
        $scope.showAllTypeOfOffices();
        $scope.deleteTypeOfOffice = function(id) {

            NavigationService.deleteTypeOfOffice({
                id: id
            }, function(data) {
                $scope.showAllTypeOfOffices();

            });
        }
    })
    .controller('CreateTypeOfOfficeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("typeOfOffice-detail");
        $scope.menutitle = NavigationService.makeactive("typeOfOffice-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Type Of Office"
        };
        $scope.formData = {};
        $scope.savetypeOfOffice = function(formData) {

            NavigationService.typeOfOfficeSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('typeOfOffice-list');
                }

            });
        }

    })
    .controller('EditTypeOfOfficeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("typeOfOffice-detail");
        $scope.menutitle = NavigationService.makeactive("typeOfOffice-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Type Of Office"
        };

        NavigationService.getOnetypeOfOffice($stateParams.id, function(data) {
            $scope.formData = data.data;
        });

        $scope.savetypeOfOffice = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.typeOfOfficeEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('typeOfOffice-list');
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
        $scope.showAllZones = function() {
            NavigationService.getAllZones(function(data) {
                $scope.allZones = data.data;
                console.log('$scope.allZones', $scope.allZones);
            });

        };
        $scope.showAllZones();


        $scope.deleteZone = function(id) {

            NavigationService.deleteZone({
                id: id
            }, function(data) {
                $scope.showAllZones();

            });
        }


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
        $scope.saveZone = function(formData) {

            NavigationService.zoneSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('zone-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

        NavigationService.getAllCountries(function(data) {
            $scope.allCountries = data.data;
            console.log('$scope.allCountries', $scope.allCountries);

        });

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

        NavigationService.getAllCountries(function(data) {
            $scope.allCountries = data.data;
            console.log('$scope.allCountries', $scope.allCountries);

        });

    })
    .controller('StateCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("state-list");
        $scope.menutitle = NavigationService.makeactive("state List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllStates = function() {
            NavigationService.getAllStates(function(data) {
                $scope.allStates = data.data;
                console.log('$scope.allStates', $scope.allStates);

            });
        };
        $scope.showAllStates();

        $scope.deleteState = function(id) {

            NavigationService.deleteState({
                id: id
            }, function(data) {
                $scope.showAllStates();

            });
        }

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
                if (data.value == true) {
                    $state.go('state-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

        NavigationService.getAllZones(function(data) {
            $scope.allZones = data.data;
            console.log('$scope.allZones', $scope.allZones);
        });

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

        NavigationService.getAllZones(function(data) {
            $scope.allZones = data.data;
            console.log('$scope.allZones', $scope.allZones);
        });

    })
    .controller('DistrictCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("district-list");
        $scope.menutitle = NavigationService.makeactive("district List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllDistricts = function() {
            NavigationService.getAllDistricts(function(data) {
                $scope.allDistricts = data.data;
                console.log('$scope.allDistricts', $scope.allDistricts);

            });
        };
        $scope.showAllDistricts();

        $scope.deleteDistrict = function(id) {

            NavigationService.deleteDistrict({
                id: id
            }, function(data) {
                $scope.showAllDistricts();

            });
        }

    })
    .controller('EmployeeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("employee-list");
        $scope.menutitle = NavigationService.makeactive("Employee");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CreateEmployeeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("employee-detail");
        $scope.menutitle = NavigationService.makeactive("Create-Employee");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('EditEmployeeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("edit-employee");
        $scope.menutitle = NavigationService.makeactive("Edit-Employee");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('ProductCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("product-list");
        $scope.menutitle = NavigationService.makeactive("product");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CreateProductCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("product-detail");
        $scope.menutitle = NavigationService.makeactive("createproduct");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('EditProductCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("edit-product");
        $scope.menutitle = NavigationService.makeactive("Edit-Product");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('SalvageCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("salvage-list");
        $scope.menutitle = NavigationService.makeactive("salvage");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CreateSalvageCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("salvage-detail");
        $scope.menutitle = NavigationService.makeactive("createsalvage");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('EditSalvageCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("edit-salvage");
        $scope.menutitle = NavigationService.makeactive("Edit-Salvage");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CreateBankmasterCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("bankmaster-detail");
        $scope.menutitle = NavigationService.makeactive("Create Bank");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('BankMasterCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("bankmaster-list");
        $scope.menutitle = NavigationService.makeactive("Bank List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CreateContactManagementCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contactmanagement-detail");
        $scope.menutitle = NavigationService.makeactive("Contact Management");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('ContactManagementCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contactmanagement-list");
        $scope.menutitle = NavigationService.makeactive("Contact Management List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CreateContactTypeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contacttype-detail");
        $scope.menutitle = NavigationService.makeactive("Contact Type");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('ContactTypeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contacttype-list");
        $scope.menutitle = NavigationService.makeactive("Contact Type List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CreateContactTypeOfficeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contacttypeoffice-detail");
        $scope.menutitle = NavigationService.makeactive("Contact Type of Office Type");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('ContactTypeOfficeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("contacttypeoffice-list");
        $scope.menutitle = NavigationService.makeactive("Contact Type of Office List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
    })
    .controller('CompanyCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("company-list");
        $scope.menutitle = NavigationService.makeactive("company");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.showAllCompanies = function() {
            NavigationService.getAllCompanies(function(data) {
                $scope.allCompanies = data.data;
                console.log('$scope.allCompanies', $scope.allCompanies);

            });
        };
        $scope.showAllCompanies();

        $scope.deleteCompany = function(id) {

            NavigationService.deleteCompany({
                id: id
            }, function(data) {
                $scope.showAllCompanies();

            });
        }


    })
    .controller('CreateCompanyCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("company-detail");
        $scope.menutitle = NavigationService.makeactive("createcompany");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        NavigationService.getAllCountries(function(data) {
            $scope.allCountries = data.data;
            console.log('$scope.allCountries', $scope.allCountries);
        });
        NavigationService.getAllStates(function(data) {
            $scope.allStates = data.data;
            console.log('$scope.allStates', $scope.allStates);
        });
        NavigationService.getAllCities(function(data) {
            $scope.allCities = data.data;
            console.log('$scope.allCities', $scope.allCities);
        });

        $scope.header = {
            "name": "Create Company"
        };
        $scope.formData = {};
        $scope.saveCompany = function(formData) {

            NavigationService.companySave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('company-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }
    })
    .controller('EditCompanyCtrl', function($scope, TemplateService, NavigationService, $timeout, $state, $stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("company-detail");
        $scope.menutitle = NavigationService.makeactive("editcompany");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        NavigationService.getAllCountries(function(data) {
            $scope.allCountries = data.data;
            console.log('$scope.allCountries', $scope.allCountries);
        });
        NavigationService.getAllStates(function(data) {
            $scope.allStates = data.data;
            console.log('$scope.allStates', $scope.allStates);
        });
        NavigationService.getAllCities(function(data) {
            $scope.allCities = data.data;
            console.log('$scope.allCities', $scope.allCities);
        });
        $scope.header = {
            "name": "Edit Company"
        };
          $scope.formData = {};

        NavigationService.getOneCompany($stateParams.id, function(data) {
            $scope.formData = data.data;
            // console.log('$scope.oneCountry', $scope.oneCountry);

        });

        $scope.saveCompany = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.companyEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('company-list');
                }
            });
            //  }
        };

    })
    .controller('CreateDistrictCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("district-detail");
        $scope.menutitle = NavigationService.makeactive("district-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create District"
        };
        $scope.formData = {};
        $scope.saveDistrict = function(formData) {

            NavigationService.districtSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('district-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

        NavigationService.getAllStates(function(data) {
            $scope.allStates = data.data;
            console.log('$scope.allStates', $scope.allStates);

        });

    })
    .controller('EditDistrictCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("district-detail");
        $scope.menutitle = NavigationService.makeactive("district-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit District"
        };

        NavigationService.getOneDistrict($stateParams.id, function(data) {
            $scope.formData = data.data;
            // console.log('$scope.oneCountry', $scope.oneCountry);

        });

        $scope.saveDistrict = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.districtEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('district-list');
                }
            });
            //  }
        };

        NavigationService.getAllStates(function(data) {
            $scope.allStates = data.data;
            console.log('$scope.allStates', $scope.allStates);

        });

    })
    .controller('CurrencyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("currency-list");
        $scope.menutitle = NavigationService.makeactive("currency List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllCurrencies = function() {
            NavigationService.getAllCurrencies(function(data) {
                $scope.allCurrencies = data.data;
                console.log('$scope.allCurrencies', $scope.allCurrencies);

            });
        };
        $scope.showAllCurrencies();

        $scope.deleteCurrency = function(id) {

            NavigationService.deleteCurrency({
                id: id
            }, function(data) {
                $scope.showAllCurrencies();

            });
        }

    })
    .controller('CreateCurrencyCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("currency-detail");
        $scope.menutitle = NavigationService.makeactive("currency-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Currency"
        };
        $scope.formData = {};
        $scope.saveCurrency = function(formData) {

            NavigationService.currencySave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('currency-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

    })
    .controller('EditCurrencyCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("currency-detail");
        $scope.menutitle = NavigationService.makeactive("currency-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Currency"
        };

        NavigationService.getOneCurrency($stateParams.id, function(data) {
            $scope.formData = data.data;
            // console.log('$scope.oneCountry', $scope.oneCountry);

        });

        $scope.saveCurrency = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.currencyEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('currency-list');
                }
            });
            //  }
        };

    })
    .controller('CityCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("city-list");
        $scope.menutitle = NavigationService.makeactive("city List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllCities = function() {
            NavigationService.getAllCities(function(data) {
                $scope.allCities = data.data;
                console.log('$scope.allCities', $scope.allCities);

            });
        };
        $scope.showAllCities();

        $scope.deleteCity = function(id) {

            NavigationService.deleteCity({
                id: id
            }, function(data) {
                $scope.showAllCities();

            });
        }

    })
    .controller('CreateCityCtrl', function($scope, TemplateService, NavigationService, $timeout, $state,$stateParams) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("city-detail");
        $scope.menutitle = NavigationService.makeactive("city-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
          var vm = this;
        vm.availableColors = ['Red','Green','Blue','Yellow','Magenta','Maroon','Umbra','Turquoise'];



        $scope.header = {
            "name": "Create City"
        };
        $scope.formData = {};
        $scope.saveCity = function(formData) {

            NavigationService.citySave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('city-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);
                $scope.mapCenter = {
                        lat: parseFloat(data.data.lat),
                        long: parseFloat(data.data.long)
                    };
            });
        }

        NavigationService.getAllDistricts(function(data) {
            $scope.allDistricts = data.data;
            console.log('$scope.allDistricts', $scope.allDistricts);

        });
        $scope.change = function(changeVal) {
    $scope.formData.lat = changeVal.latLng.lat();
    $scope.formData.long = changeVal.latLng.lng();

};

    })
    .controller('EditCityCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("city-detail");
        $scope.menutitle = NavigationService.makeactive("city-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit City"
        };

        NavigationService.getOneCity($stateParams.id, function(data) {
            $scope.formData = data.data;
            // console.log('$scope.oneCountry', $scope.oneCountry);

        });

        $scope.saveCity = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.cityEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('city-list');
                }
            });
            //  }
        };
        NavigationService.getAllDistricts(function(data) {
            $scope.allDistricts = data.data;
            console.log('$scope.allDistricts', $scope.allDistricts);

        });

    })
    .controller('DepartmentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("department-list");
        $scope.menutitle = NavigationService.makeactive("department List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllDepartments = function() {
            NavigationService.getAllDepartments(function(data) {
                $scope.allDepartments = data.data;

            });
        };
        $scope.showAllDepartments();

        $scope.deleteDepartment = function(id) {

            NavigationService.deleteDepartment({
                id: id
            }, function(data) {
                $scope.showAllDepartments();

            });
        }

    })
    .controller('CreateDepartmentCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("department-detail");
        $scope.menutitle = NavigationService.makeactive("department-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Department"
        };
        $scope.formData = {};
        $scope.saveDepartment = function(formData) {

            NavigationService.departmentSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('department-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

        NavigationService.getAllUniqueTypes(function(data) {
            $scope.allUniqueTypes = data.data;
            console.log('$scope.allUniqueTypes', $scope.allUniqueTypes);

        });

    })
    .controller('EditDepartmentCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("department-detail");
        $scope.menutitle = NavigationService.makeactive("department-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Department"
        };

        NavigationService.getOneDepartment($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.saveDepartment = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.departmentEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('department-list');
                }
            });
            //  }
        };
        NavigationService.getAllUniqueTypes(function(data) {
            $scope.allUniqueTypes = data.data;
            console.log('$scope.allUniqueTypes', $scope.allUniqueTypes);

        });

    })
    .controller('UniqueTypetCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("uniquetype-list");
        $scope.menutitle = NavigationService.makeactive("uniquetype List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllUniqueTypes = function() {
            NavigationService.getAllUniqueTypes(function(data) {
                $scope.allUniqueTypes = data.data;

            });
        };
        $scope.showAllUniqueTypes();

        $scope.deleteUniqueType = function(id) {

            NavigationService.deleteUniqueType({
                id: id
            }, function(data) {
                $scope.showAllUniqueTypes();

            });
        }

    })
    .controller('CreateUniqueTypeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("uniquetype-detail");
        $scope.menutitle = NavigationService.makeactive("uniquetype-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Unique Type"
        };
        $scope.formData = {};
        $scope.saveUniqueType = function(formData) {

            NavigationService.uniquetypeSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('uniquetype-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

        // NavigationService.getAllallUniqueTypes(function(data) {
        //     $scope.allUniqueTypes = data.data;
        //     console.log('$scope.allUniqueTypes', $scope.allUniqueTypes);
        //
        // });

    })
    .controller('EditUniqueTypeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("uniquetype-detail");
        $scope.menutitle = NavigationService.makeactive("uniquetype-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Unique Type"
        };

        NavigationService.getOneUniqueType($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.saveUniqueType = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.UniqueTypeEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('uniquetype-list');
                }
            });
            //  }
        };

        // NavigationService.getAllallUniqueTypes(function(data) {
        //     $scope.allUniqueTypes = data.data;
        //     console.log('$scope.allUniqueTypes', $scope.allUniqueTypes);
        //
        // });

    })


    .controller('CustomerSegmentCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("customerSegment-list");
        $scope.menutitle = NavigationService.makeactive("customerSegment List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllCustomerSegments = function() {
            NavigationService.getAllCustomerSegments(function(data) {
                $scope.allCustomerSegments = data.data;

            });
        };
        $scope.showAllCustomerSegments();

        $scope.deleteCustomerSegment = function(id) {

            NavigationService.deleteCustomerSegment({
                id: id
            }, function(data) {
                $scope.showAllCustomerSegments();

            });
        }

    })
    .controller('CreateCustomerSegmentCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("customersegment-detail");
        $scope.menutitle = NavigationService.makeactive("customersegment-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Customer Segment"
        };
        $scope.formData = {};
        $scope.saveCustomerSegment = function(formData) {

            NavigationService.customersegmentSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('customerSegment-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

        // NavigationService.getAllallUniqueTypes(function(data) {
        //     $scope.allUniqueTypes = data.data;
        //     console.log('$scope.allUniqueTypes', $scope.allUniqueTypes);
        //
        // });

    })
    .controller('EditCustomerSegmentCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("customersegment-detail");
        $scope.menutitle = NavigationService.makeactive("customersegment-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Customer Segment"
        };

        NavigationService.getOneCustomerSegment($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.saveCustomerSegment = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.CustomerSegmentEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('customerSegment-list');
                }
            });
            //  }
        };

        // NavigationService.getAllallUniqueTypes(function(data) {
        //     $scope.allUniqueTypes = data.data;
        //     console.log('$scope.allUniqueTypes', $scope.allUniqueTypes);
        //
        // });

    })


.controller('PolicyTypeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("policytype-list");
        $scope.menutitle = NavigationService.makeactive("policytype List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllPolicyTypes = function() {
            NavigationService.getAllPolicyTypes(function(data) {
                $scope.allPolicyTypes = data.data;

            });
        };
        $scope.showAllPolicyTypes();

        $scope.deletePolicyType = function(id) {

            NavigationService.deletePolicyType({
                id: id
            }, function(data) {
                $scope.showAllPolicyTypes();

            });
        }

    })
    .controller('CreatePolicyTypeCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("policytype-detail");
        $scope.menutitle = NavigationService.makeactive("policytype-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Policy Type"
        };
        $scope.formData = {};
        $scope.savePolicyType = function(formData) {

            NavigationService.policytypeSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('policytype-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }
        NavigationService.getAllDepartments(function(data) {
            $scope.allDepartments = data.data;

        });

    })
    .controller('EditPolicyTypeCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("policytype-detail");
        $scope.menutitle = NavigationService.makeactive("policytype-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Policy Type"
        };

        NavigationService.getOnePolicyType($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.savePolicyType = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.PolicyTypeEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('policytype-list');
                }
            });
            //  }
        };

        NavigationService.getAllDepartments(function(data) {
            $scope.allDepartments = data.data;

        });

    })
    .controller('PolicyCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("policy-list");
        $scope.menutitle = NavigationService.makeactive("policy List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllPolicies = function() {
            NavigationService.getAllPolicies(function(data) {
                $scope.allPolicies = data.data;

            });
        };
        $scope.showAllPolicies();

        $scope.deletePolicy = function(id) {

            NavigationService.deletePolicy({
                id: id
            }, function(data) {
                $scope.showAllPolicies();

            });
        }

    })
    .controller('CreatePolicyCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("policy-detail");
        $scope.menutitle = NavigationService.makeactive("policy-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Policy"
        };
        $scope.formData = {};
        $scope.savePolicy = function(formData) {

            NavigationService.policySave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('policy-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }
        NavigationService.getAllPolicyTypes(function(data) {
            $scope.allPolicyTypes = data.data;

        });

    })
    .controller('EditPolicyCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("policy-detail");
        $scope.menutitle = NavigationService.makeactive("policy-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Policy"
        };

        NavigationService.getOnePolicy($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.savePolicy = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.PolicyEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('policy-list');
                }
            });
            //  }
        };

        NavigationService.getAllPolicyTypes(function(data) {
            $scope.allPolicyTypes = data.data;

        });

    })

.controller('PolicyDocCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("policydoc-list");
        $scope.menutitle = NavigationService.makeactive("policydoc List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllPolicyDocs = function() {
            NavigationService.getAllPolicyDocs(function(data) {
                $scope.allPolicyDocs = data.data;

            });
        };
        $scope.showAllPolicyDocs();

        $scope.deletePolicyDoc = function(id) {

            NavigationService.deletePolicyDoc({
                id: id
            }, function(data) {
                $scope.showAllPolicyDocs();

            });
        }

    })
    .controller('CreatePolicyDocCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("policydoc-detail");
        $scope.menutitle = NavigationService.makeactive("policydoc-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Policy Doc"
        };
        $scope.formData = {};
        $scope.savePolicyDoc = function(formData) {

            NavigationService.policydocSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('policydoc-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }
        NavigationService.getAllDepartments(function(data) {
            $scope.allDepartments = data.data;

        });
        NavigationService.getAllPolicyTypes(function(data) {
            $scope.allPolicyTypes = data.data;

        });

    })
    .controller('EditPolicyDocCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("policydoc-detail");
        $scope.menutitle = NavigationService.makeactive("policydoc-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Policy Doc"
        };

        NavigationService.getOnePolicyDoc($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.savePolicyDoc = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.PolicyDocEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('policydoc-list');
                }
            });
            //  }
        };

        NavigationService.getAllDepartments(function(data) {
            $scope.allDepartments = data.data;

        });
        NavigationService.getAllPolicyTypes(function(data) {
            $scope.allPolicyTypes = data.data;

        });

    })

.controller('IndustryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("industry-list");
        $scope.menutitle = NavigationService.makeactive("industry List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllIndustries = function() {
            NavigationService.getAllIndustries(function(data) {
                $scope.allIndustries = data.data;

            });
        };
        $scope.showAllIndustries();

        $scope.deleteIndustry = function(id) {

            NavigationService.deleteIndustry({
                id: id
            }, function(data) {
                $scope.showAllIndustries();

            });
        }

    })
    .controller('CreateIndustryCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("industry-detail");
        $scope.menutitle = NavigationService.makeactive("industry-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Industry"
        };
        $scope.formData = {};
        $scope.saveIndustry = function(formData) {

            NavigationService.industrySave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('industry-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

    })
    .controller('EditIndustryCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("industry-detail");
        $scope.menutitle = NavigationService.makeactive("industry-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Industry"
        };

        NavigationService.getOneIndustry($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.saveIndustry = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.IndustryEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('industry-list');
                }
            });
            //  }
        };

    })
    .controller('CategoryCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("category-list");
        $scope.menutitle = NavigationService.makeactive("category List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllCategories = function() {
            NavigationService.getAllCategories(function(data) {
                $scope.allCategories = data.data;

            });
        };
        $scope.showAllCategories();

        $scope.deleteCategory = function(id) {

            NavigationService.deleteCategory({
                id: id
            }, function(data) {
                $scope.showAllCategories();

            });
        }

    })
    .controller('CreateCategoryCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("category-detail");
        $scope.menutitle = NavigationService.makeactive("category-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Category"
        };
        $scope.formData = {};
        $scope.saveCategory = function(formData) {

            NavigationService.categorySave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('category-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

        NavigationService.getAllIndustries(function(data) {
            $scope.allIndustries = data.data;

        });

    })
    .controller('EditCategoryCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("category-detail");
        $scope.menutitle = NavigationService.makeactive("category-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Category"
        };

        NavigationService.getOneCategory($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.saveCategory = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.CategoryEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('category-list');
                }
            });
            //  }
        };

        NavigationService.getAllIndustries(function(data) {
            $scope.allIndustries = data.data;

        });

    })

.controller('FuncCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("func-list");
        $scope.menutitle = NavigationService.makeactive("func List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllFunc = function() {
            NavigationService.getAllFunc(function(data) {
                $scope.allFunc = data.data;

            });
        };
        $scope.showAllFunc();

        $scope.deleteFunc = function(id) {

            NavigationService.deleteFunc({
                id: id
            }, function(data) {
                $scope.showAllFunc();

            });
        }

    })
    .controller('CreateFuncCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("func-detail");
        $scope.menutitle = NavigationService.makeactive("func-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Function"
        };
        $scope.formData = {};
        $scope.saveFunc = function(formData) {

            NavigationService.funcSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('func-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

    })
    .controller('EditFuncCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("func-detail");
        $scope.menutitle = NavigationService.makeactive("func-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Function"
        };

        NavigationService.getOneFunc($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.saveFunc = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.FuncEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('func-list');
                }
            });
        };

    })
    .controller('CauseLossCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("causeloss-list");
        $scope.menutitle = NavigationService.makeactive("causeloss List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllCauseLoss = function() {
            NavigationService.getAllCauseLoss(function(data) {
                $scope.allCauseLoss = data.data;

            });
        };
        $scope.showAllCauseLoss();

        $scope.deleteCauseLoss = function(id) {

            NavigationService.deleteCauseLoss({
                id: id
            }, function(data) {
                $scope.showAllCauseLoss();

            });
        }

    })
    .controller('CreateCauseLossCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("causeloss-detail");
        $scope.menutitle = NavigationService.makeactive("causeloss-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Cause Loss"
        };
        $scope.formData = {};
        $scope.saveCauseLoss = function(formData) {

            NavigationService.causelossSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('causeloss-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }
        NavigationService.getAllDepartments(function(data) {
            $scope.allDepartments = data.data;

        });

    })
    .controller('EditCauseLossCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("causeloss-detail");
        $scope.menutitle = NavigationService.makeactive("causeloss-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Cause Loss"
        };

        NavigationService.getOneCauseLoss($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.saveCauseLoss = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.CauseLossEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('causeloss-list');
                }
            });
        };
        NavigationService.getAllDepartments(function(data) {
            $scope.allDepartments = data.data;

        });
    })
    .controller('NatureLossCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("natureloss-list");
        $scope.menutitle = NavigationService.makeactive("natureloss List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllNatureLoss = function() {
            NavigationService.getAllNatureLoss(function(data) {
                $scope.allNatureLoss = data.data;

            });
        };
        $scope.showAllNatureLoss();

        $scope.deleteNatureLoss = function(id) {

            NavigationService.deleteNatureLoss({
                id: id
            }, function(data) {
                $scope.showAllNatureLoss();

            });
        }

    })
    .controller('CreateNatureLossCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("natureloss-detail");
        $scope.menutitle = NavigationService.makeactive("natureloss-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Nature Loss"
        };
        $scope.formData = {};
        $scope.saveNatureLoss = function(formData) {

            NavigationService.naturelossSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('natureloss-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }
        NavigationService.getAllDepartments(function(data) {
            $scope.allDepartments = data.data;

        });
        NavigationService.getAllCauseLoss(function(data) {
            $scope.allCauseLoss = data.data;

        });

    })
    .controller('EditNatureLossCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("natureloss-detail");
        $scope.menutitle = NavigationService.makeactive("natureloss-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Nature Loss"
        };

        NavigationService.getOneNatureLoss($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.saveNatureLoss = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.NatureLossEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('natureloss-list');
                }
            });
        };
        NavigationService.getAllDepartments(function(data) {
            $scope.allDepartments = data.data;

        });
        NavigationService.getAllCauseLoss(function(data) {
            $scope.allCauseLoss = data.data;

        });
    })
    .controller('BusinessBranchCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("businessbranch-list");
        $scope.menutitle = NavigationService.makeactive("businessbranch List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.showAllBusinessBranch = function() {
            NavigationService.getAllBusinessBranch(function(data) {
                $scope.allBusinessBranch = data.data;

            });
        };
        $scope.showAllBusinessBranch();

        $scope.deleteBusinessBranch = function(id) {

            NavigationService.deleteBusinessBranch({
                id: id
            }, function(data) {
                $scope.showAllBusinessBranch();

            });
        }

    })
    .controller('CreateBusinessBranchCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("businessbranch-detail");
        $scope.menutitle = NavigationService.makeactive("businessbranch-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Business Branch"
        };
        $scope.formData = {};
        $scope.saveBusinessBranch = function(formData) {

            NavigationService.businessbranchSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('businessbranch-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

    })
    .controller('EditBusinessBranchCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("businessbranch-detail");
        $scope.menutitle = NavigationService.makeactive("businessbranch-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Business Branch"
        };

        NavigationService.getOneBusinessBranch($stateParams.id, function(data) {
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.saveBusinessBranch = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.BusinessBranchEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('businessbranch-list');
                }
            });
        };
    })









.controller('MenuCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("menu-list");
        $scope.menutitle = NavigationService.makeactive("menu List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.showAllMenus = function() {
            NavigationService.getAllMenus(function(data) {
                $scope.allMenus = data.data;
                console.log('$scope.allMenus', $scope.allZones);
            });

        };
        $scope.showAllMenus();


        $scope.deleteMenu = function(id) {

            NavigationService.deleteMenu({
                id: id
            }, function(data) {
                $scope.showAllMenus();

            });
        }


    })
    .controller('CreateMenuCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("menu-detail");
        $scope.menutitle = NavigationService.makeactive("menu-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Menu"
        };
        $scope.formData = {};
        $scope.saveMenu = function(formData) {

            NavigationService.menuSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('menu-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

        // NavigationService.getAllCountries(function(data) {
        //     $scope.allCountries = data.data;
        //     console.log('$scope.allCountries', $scope.allCountries);
        //
        // });

    })
    .controller('EditMenuCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("menu-detail");
        $scope.menutitle = NavigationService.makeactive("menu-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Menu"
        };

        NavigationService.getOneMenu($stateParams.id, function(data) {
            $scope.formData = data.data;
            // console.log('$scope.oneCountry', $scope.oneCountry);

        });

        $scope.saveMenu = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.menuEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('menu-list');
                }
            });
            //  }
        };

        // NavigationService.getAllCountries(function(data) {
        //     $scope.allCountries = data.data;
        //     console.log('$scope.allCountries', $scope.allCountries);
        //
        // });

    })









.controller('RoleCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("role-list");
        $scope.menutitle = NavigationService.makeactive("role List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.showAllRoles = function() {
            NavigationService.getAllRoles(function(data) {
                $scope.allRoles = data.data;
                console.log('$scope.allRoles', $scope.allZones);
            });

        };
        $scope.showAllRoles();


        $scope.deleteRole = function(id) {

            NavigationService.deleteRole({
                id: id
            }, function(data) {
                $scope.showAllRoles();

            });
        }


    })
    .controller('CreateRoleCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("role-detail");
        $scope.menutitle = NavigationService.makeactive("role-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create Role"
        };
        $scope.formData = {};
        $scope.UserType = ['internal', 'external'];
        $scope.saveRole = function(formData) {

            NavigationService.roleSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('role-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

        NavigationService.getAllMenus(function(data) {
            $scope.allMenus = data.data;
            console.log('$scope.allMenus', $scope.allZones);
        });

    })
    .controller('EditRoleCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("role-detail");
        $scope.menutitle = NavigationService.makeactive("role-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit Role"
        };
        $scope.UserType = ['internal', 'external'];
        NavigationService.getOneRole($stateParams.id, function(data) {
            $scope.formData = data.data;
            // console.log('$scope.oneCountry', $scope.oneCountry);

        });

        $scope.saveRole = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.roleEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('role-list');
                }
            });
            //  }
        };

        NavigationService.getAllMenus(function(data) {
            $scope.allMenus = data.data;
            console.log('$scope.allMenus', $scope.allZones);
        });

    })









.controller('UserCtrl', function($scope, TemplateService, NavigationService, $timeout) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("user-list");
        $scope.menutitle = NavigationService.makeactive("user List");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.showAllUsers = function() {
            NavigationService.getAllUsers(function(data) {
                $scope.allUsers = data.data;
                console.log('$scope.allUsers', $scope.allZones);
            });

        };
        $scope.showAllUsers();


        $scope.deleteUser = function(id) {

            NavigationService.deleteUser({
                id: id
            }, function(data) {
                $scope.showAllUsers();

            });
        }


    })
    .controller('CreateUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("user-detail");
        $scope.menutitle = NavigationService.makeactive("user-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Create User"
        };
        $scope.UserType = ['internal', 'external'];
        $scope.userStatus = ['Active', 'Inactive'];
        $scope.formData = {};
        $scope.UserType = ['internal', 'external'];
        $scope.saveUser = function(formData) {

            NavigationService.userSave($scope.formData, function(data) {
                console.log(data);
                if (data.value == true) {
                    $state.go('user-list');
                }
                // console.log('$scope.allCountriessave', $scope.data);

            });
        }

        NavigationService.getAllMenus(function(data) {
            $scope.allMenus = data.data;
            console.log('$scope.allMenus', $scope.allZones);
        });
        NavigationService.getAllRoles(function(data) {
            $scope.allRoles = data.data;
            console.log('$scope.allRoles', $scope.allZones);
        });
        NavigationService.getAllDepartments(function(data) {
            $scope.allDepartments = data.data;

        });

    })
    .controller('EditUserCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("user-detail");
        $scope.menutitle = NavigationService.makeactive("user-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

        $scope.header = {
            "name": "Edit User"
        };

        $scope.UserRole = [{
            user_type: '',
            roleName: '',
            menu: '',
            roleDescription: ''
        }];
        console.log('addd', $scope.UserRole);

        $scope.UserType = ['internal', 'external'];
        $scope.userStatus = ['Active', 'Inactive'];
        $scope.UserType = ['internal', 'external'];
        NavigationService.getOneUser($stateParams.id, function(data) {
            $scope.UserRole = data.data.role;
            console.log('inside', $scope.UserRole);
            $scope.formData = data.data;
            console.log('$scope.formData', $scope.formData);

        });

        $scope.saveUser = function(formValid) {

            //  if (formValid.$valid) {
            //  $scope.formComplete = true;
            NavigationService.userEditSave($scope.formData, function(data) {
                if (data.value == true) {
                    $state.go('user-list');
                }
            });
            //  }
        };

        NavigationService.getAllMenus(function(data) {
            $scope.allMenus = data.data;
            console.log('$scope.allMenus', $scope.allZones);
        });
        NavigationService.getAllRoles(function(data) {
            $scope.allRoles = data.data;
            console.log('$scope.allRoles', $scope.allZones);
        });
        NavigationService.getAllDepartments(function(data) {
            $scope.allDepartments = data.data;

        });

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
        message: "Change"
    };
    $scope.emailtos = [{
        name: 'Tushar',
        email: 'tushar@wohlig.com'
    }, {
        name: 'Chintan',
        email: 'chintan@wohlig.com'
    }, {
        name: 'Harsh',
        email: 'harsh@wohlig.com'
    }, {
        name: 'Raj',
        email: 'raj@wohlig.com'
    }];

    $scope.tinymceModel = 'Initial content';
    $scope.tinymceOptions = {
        plugins: 'link image code',
        toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
    };

    $scope.newEmail = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-email.html',
            size: 'lg'
        });
    };

    $scope.newMessage = function() {
        var modalInstance = $uibModal.open({
            scope: $scope,
            templateUrl: 'views/modal/modal-message.html',
            size: 'lg'
        });
    };

    $scope.viewJIR = function() {
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
        }, {
            name: "doc2.docx",
            selection: true
        }]
    }, {
        type: "ILA",
        count: 0,
        files: []
    }, {
        type: "ILR",
        count: 0,
        files: []
    }, {
        type: "LOR",
        count: 0,
        files: []
    }, {
        type: "Assesments",
        count: 0,
        files: []
    }, {
        type: "FSR",
        count: 0,
        files: []
    }, {
        type: "Invoice",
        count: 0,
        files: []
    }, {
        type: "Documents",
        count: 0,
        files: []
    }, {
        type: "Images",
        count: 0,
        files: []
    }, {
        type: "Total Attachments",
        count: 2,
        files: [{
            name: "doc1.docx",
            selection: true
        }, {
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
})

.controller('CustomerCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("customer-list");
    $scope.menutitle = NavigationService.makeactive("Customer");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})

.controller('CreateCustomerCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
    //Used to name the .html file
    $scope.template = TemplateService.changecontent("customer-detail");
    $scope.menutitle = NavigationService.makeactive("Create Customer");
    TemplateService.title = $scope.menutitle;
    $scope.navigation = NavigationService.getnav();
})
;
