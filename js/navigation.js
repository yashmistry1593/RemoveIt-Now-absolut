// var adminURL = "";
// if(isproduction)
// {
//   adminURL =  "http://www.wohlig.co.in/demo/index.php";
// }
// else {
//   adminURL = "http://localhost/demo/index.php";
// }
var adminurl="http://localhost:1337/";

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
  },
  {
    name: "Company Setup",
    classis: "active",
    anchor: "company",
    icon: "users",
    subnav: [{
      name: "Employee",
      classis: "active",
      anchor: "employee-list",
      icon: "user"
    },
    {
      name: "Branch",
      classis: "active",
      anchor: "branch-list",
      icon: "link"
    }]
  },
  {
    name: "General",
    classis: "active",
    anchor: "general",
    icon: "sticky-note",
    subnav: []
  }
];

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
    countrySave: function(formData,callback) {
        // console.log('form data: ', formData);
        $http({
            url: adminurl + 'country/saveData',
            method: 'POST',
            withCredentials: true,
            data:formData
        }).success(callback);
    },
    getOneCountry: function(id,callback) {
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
    countryEditSave: function(id,callback) {
        // console.log('form data: ', formData);
        $http({
            url: adminurl + 'country/saveData',
            method: 'POST',
            withCredentials: true,
            data: id
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
    zoneSave: function(formData,callback) {
        // console.log('form data: ', formData);
        $http({
            url: adminurl + 'zone/saveData',
            method: 'POST',
            withCredentials: true,
            data:formData
        }).success(callback);
    },
    getOneZone: function(id,callback) {
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
    zoneEditSave: function(id,callback) {
        // console.log('form data: ', formData);
        $http({
            url: adminurl + 'zone/saveData',
            method: 'POST',
            withCredentials: true,
            data: id
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
        stateSave: function(formData,callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'state/saveData',
                method: 'POST',
                withCredentials: true,
                data:formData
            }).success(callback);
        },
        getOneState: function(id,callback) {
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
        stateEditSave: function(id,callback) {
            // console.log('form data: ', formData);
            $http({
                url: adminurl + 'state/saveData',
                method: 'POST',
                withCredentials: true,
                data: id
            }).success(callback);
        },
  };
});
