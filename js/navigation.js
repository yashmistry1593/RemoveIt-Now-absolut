// var adminURL = "";
// if(isproduction)
// {
//   adminURL =  "http://www.wohlig.co.in/demo/index.php";
// }
// else {
//   adminURL = "http://localhost/demo/index.php";
// }
var adminurl = "http://192.168.1.108:1337/";
var imgurl = "http://192.168.1.108:81/upload/";

var imgpath = imgurl + "readFile";
var uploadurl = imgurl;


var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
    var navigation = [{
        name: "Dashboard",
        classis: "active",
        anchor: "dashboard",
        icon: "dashboard",
        subnav: [{
            name: "Dashboard",
            classis: "active",
            anchor: "dashboard",
            icon: "dashboard"
        }]
    }, {
        name: "Company Setup",
        classis: "active",
        anchor: "company",
        icon: "users",
        subnav: [
        //   {
        //     name: "Employee",
        //     classis: "active",
        //     anchor: "employee-list",
        //     icon: "user"
        // },{
        //     name: "Branch",
        //     classis: "active",
        //     anchor: "branch-list",
        //     icon: "link"
        // },
        {
            name: "Office",
            classis: "active",
            anchor: "office-list",
            icon: "building"
        }, {
            name: "Type Of Office",
            classis: "active",
            anchor: "typeOfOffice-list",
            icon: "building"
        },{
            name: "Country",
            classis: "active",
            anchor: "country-list",
            icon: "globe"
        }, {
            name: "Zone",
            classis: "active",
            anchor: "zone-list",
            icon: "clock-o"
        }, {
            name: "State",
            classis: "active",
            anchor: "state-list",
            icon: "globe"
        }, {
            name: "District",
            classis: "active",
            anchor: "district-list",
            icon: "globe"
        }, {
            name: "City",
            classis: "active",
            anchor: "city-list",
            icon: "globe"
        }, {
            name: "Currency",
            classis: "active",
            anchor: "currency-list",
            icon: "usd"
        }, {
            name: "Unique Type",
            classis: "active",
            anchor: "uniquetype-list",
            icon: "genderless"
        }, {
            name: "Department",
            classis: "active",
            anchor: "department-list",
            icon: "building"
        }]
    }, {
        name: "Timeline",
        classis: "active",
        anchor: "timeline",
        icon: "sitemap",
        subnav: [{
            name: "Music Broadcast Ltd",
            classis: "active",
            anchor: "timeline",
            icon: "sitemap"
        }]
    }];

    return {
        getnav: function() {
            return navigation;
        },
        makeactive: function(menuname) {
            for (var i = 0; i < navigation.length; i++) {
                if (navigation[i].name == menuname) {
                    navigation[i].classis = "active";
                } else {
                    navigation[i].classis = "";
                }
            }
            return menuname;
        },
        getAllCountries: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'country/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        countrySave: function(formData, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'country/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        getOneCountry: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'country/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        countryEditSave: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'country/saveData',
                method: 'POST',
                withCredentials: true,
                data: id
            }).success(callback);
        },
        deleteCountry: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'country/delete',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id.id,
                }
            }).success(callback);
        },

        getAllZones: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'zone/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        zoneSave: function(formData, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'zone/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        getOneZone: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'zone/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        zoneEditSave: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'zone/saveData',
                method: 'POST',
                withCredentials: true,
                data: id
            }).success(callback);
        },
        deleteZone: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'zone/delete',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id.id,
                }
            }).success(callback);
        },


        getAllStates: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'state/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        stateSave: function(formData, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'state/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        getOneState: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'state/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        stateEditSave: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'state/saveData',
                method: 'POST',
                withCredentials: true,
                data: id
            }).success(callback);
        },
        deleteState: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'state/delete',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id.id,
                }
            }).success(callback);
        },


        getAllDistricts: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'district/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        districtSave: function(formData, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'district/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        getOneDistrict: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'district/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        districtEditSave: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'district/saveData',
                method: 'POST',
                withCredentials: true,
                data: id
            }).success(callback);
        },
        deleteDistrict: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'district/delete',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id.id,
                }
            }).success(callback);
        },



        getAllCurrencies: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'currencies/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        currencySave: function(formData, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'currencies/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        getOneCurrency: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'currencies/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        currencyEditSave: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'currencies/saveData',
                method: 'POST',
                withCredentials: true,
                data: id
            }).success(callback);
        },
        deleteCurrency: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'currencies/delete',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id.id,
                }
            }).success(callback);
        },




        getAllCities: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'city/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        citySave: function(formData, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'city/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        getOneCity: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'city/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        cityEditSave: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'city/saveData',
                method: 'POST',
                withCredentials: true,
                data: id
            }).success(callback);
        },
        deleteCity: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'city/delete',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id.id,
                }
            }).success(callback);
        },



        getAllOffices: function(callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'office/getAll',
                method: 'POST',
                withCredentials: true
            }).success(callback);
        },
        officeSave: function(formData, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'office/saveData',
                method: 'POST',
                withCredentials: true,
                data: formData
            }).success(callback);
        },
        getOneOffice: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'office/getOne',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id
                }
            }).success(callback);
        },
        officeEditSave: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'office/saveData',
                method: 'POST',
                withCredentials: true,
                data: id
            }).success(callback);
        },
        deleteOffice: function(id, callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'office/delete',
                method: 'POST',
                withCredentials: true,
                data: {
                    "_id": id.id,
                }
            }).success(callback);
        },




                getAllTypeOfOffices: function(callback) {
                    // console.log('form data: ', formData);
                    $http({
                        url: adminurl + 'TypeOfOffice/getAll',
                        method: 'POST',
                        withCredentials: true
                    }).success(callback);
                },
                typeOfOfficeSave: function(formData, callback) {
                    // console.log('form data: ', formData);
                    $http({
                        url: adminurl + 'TypeOfOffice/saveData',
                        method: 'POST',
                        withCredentials: true,
                        data: formData
                    }).success(callback);
                },
                getOnetypeOfOffice: function(id, callback) {
                    // console.log('form data: ', formData);
                    $http({
                        url: adminurl + 'TypeOfOffice/getOne',
                        method: 'POST',
                        withCredentials: true,
                        data: {
                            "_id": id
                        }
                    }).success(callback);
                },
                typeOfOfficeEditSave: function(id, callback) {
                    // console.log('form data: ', formData);
                    $http({
                        url: adminurl + 'TypeOfOffice/saveData',
                        method: 'POST',
                        withCredentials: true,
                        data: id
                    }).success(callback);
                },
                deleteTypeOfOffice: function(id, callback) {
                    // console.log('form data: ', formData);
                    $http({
                        url: adminurl + 'TypeOfOffice/delete',
                        method: 'POST',
                        withCredentials: true,
                        data: {
                            "_id": id.id,
                        }
                    }).success(callback);
                },




                                getAllDepartments: function(callback) {
                                    // console.log('form data: ', formData);
                                    $http({
                                        url: adminurl + 'department/getAll',
                                        method: 'POST',
                                        withCredentials: true
                                    }).success(callback);
                                },
                                departmentSave: function(formData, callback) {
                                    // console.log('form data: ', formData);
                                    $http({
                                        url: adminurl + 'department/saveData',
                                        method: 'POST',
                                        withCredentials: true,
                                        data: formData
                                    }).success(callback);
                                },
                                getOneDepartment: function(id, callback) {
                                    // console.log('form data: ', formData);
                                    $http({
                                        url: adminurl + 'department/getOne',
                                        method: 'POST',
                                        withCredentials: true,
                                        data: {
                                            "_id": id
                                        }
                                    }).success(callback);
                                },
                                departmentEditSave: function(id, callback) {
                                    // console.log('form data: ', formData);
                                    $http({
                                        url: adminurl + 'department/saveData',
                                        method: 'POST',
                                        withCredentials: true,
                                        data: id
                                    }).success(callback);
                                },
                                deleteDepartment: function(id, callback) {
                                    // console.log('form data: ', formData);
                                    $http({
                                        url: adminurl + 'department/delete',
                                        method: 'POST',
                                        withCredentials: true,
                                        data: {
                                            "_id": id.id,
                                        }
                                    }).success(callback);
                                },






                                                                getAllUniqueTypes: function(callback) {
                                                                    // console.log('form data: ', formData);
                                                                    $http({
                                                                        url: adminurl + 'UniqueTypes/getAll',
                                                                        method: 'POST',
                                                                        withCredentials: true
                                                                    }).success(callback);
                                                                },
                                                                uniquetypeSave: function(formData, callback) {
                                                                    // console.log('form data: ', formData);
                                                                    $http({
                                                                        url: adminurl + 'UniqueTypes/saveData',
                                                                        method: 'POST',
                                                                        withCredentials: true,
                                                                        data: formData
                                                                    }).success(callback);
                                                                },
                                                                getOneUniqueType: function(id, callback) {
                                                                    // console.log('form data: ', formData);
                                                                    $http({
                                                                        url: adminurl + 'UniqueTypes/getOne',
                                                                        method: 'POST',
                                                                        withCredentials: true,
                                                                        data: {
                                                                            "_id": id
                                                                        }
                                                                    }).success(callback);
                                                                },
                                                                UniqueTypeEditSave: function(id, callback) {
                                                                    // console.log('form data: ', formData);
                                                                    $http({
                                                                        url: adminurl + 'UniqueTypes/saveData',
                                                                        method: 'POST',
                                                                        withCredentials: true,
                                                                        data: id
                                                                    }).success(callback);
                                                                },
                                                                deleteUniqueType: function(id, callback) {
                                                                    // console.log('form data: ', formData);
                                                                    $http({
                                                                        url: adminurl + 'UniqueTypes/delete',
                                                                        method: 'POST',
                                                                        withCredentials: true,
                                                                        data: {
                                                                            "_id": id.id,
                                                                        }
                                                                    }).success(callback);
                                                                },
    };
});
