var adminURL = "";
if (isproduction) {
    adminURL = "http://www.wohlig.co.in/demo/index.php";
} else {
    adminURL = "http://localhost/demo/index.php";
}

var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function() {
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
        name: "Timelines",
        classis: "active",
        anchor: "timeline",
        icon: "sitemap",
        subnav: [{
            name: "Music Broadcast Ltd",
            classis: "active",
            anchor: "timeline",
            icon: "sitemap",
        }]
    }, {
        name: "Company Setup",
        classis: "active",
        anchor: "company",
        icon: "users",
        subnav: [{
            name: "Employee",
            classis: "active",
            anchor: "employee-list",
            icon: "user"
        }, {
            name: "Branch",
            classis: "active",
            anchor: "branch-list",
            icon: "link"
        }]
    }, {
        name: "General",
        classis: "active",
        anchor: "general",
        icon: "sticky-note",
        subnav: []
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

    };
});
