// angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.tinymce'])

angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ui.select', 'ngAnimate', 'ngSanitize', 'angular-flexslider', 'ui.tinymce', 'imageupload'])

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
    .controller('CreateCityCtrl', function($scope, TemplateService, NavigationService, $timeout, $state) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("city-detail");
        $scope.menutitle = NavigationService.makeactive("city-detail");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();

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

            });
        }

        NavigationService.getAllDistricts(function(data) {
            $scope.allDistricts = data.data;
            console.log('$scope.allDistricts', $scope.allDistricts);

        });

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

        NavigationService.getAllallUniqueTypes(function(data) {
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
            // console.log('$scope.oneCountry', $scope.oneCountry);

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

        NavigationService.getAllallUniqueTypes(function(data) {
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
                        $state.go('department-list');
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
});
