define(["app", "apps/teachers/list/list_view", "q"], function(CDSCeunes, View, Q) {
  CDSCeunes.module("TeachersApp.List", function(List, CDSCeunes, Backbone, Marionette, $, _) {
    List.Controller = {
      listTeachers: function(criterion) {
        require(["entities/teacher"], function() {
          var listLayout = new View.Layout();
          var listPanel = new View.Panel();

          var teachersListView;
          Q.all(CDSCeunes.request("teacher:entities")).then(function(teachers) {
            teachersListView = new View.Teachers({
              collection: teachers,
            });
            

            if (criterion) {

            }

            listLayout.on("show", function() {
              listLayout.panelRegion.show(listPanel);
              listLayout.teachersRegion.show(teachersListView);

            });

            listPanel.on("teacher:new", function() {
              console.log("teacher new");
              require(["apps/teachers/new/new_view", "entities/department", "entities/teacher"], function(NewView) {
                var teacher = CDSCeunes.request("teacher:entity:new");
                Q.all(CDSCeunes.request("department:entities")).then(function(departments) {

                  var newView = new NewView.Teacher({
                    model: teacher,
                    departments: departments
                  });


                  CDSCeunes.regions.dialog.show(newView);

                  newView.on("teacher:form:submit", function(data) {
                    if (teacher.save(data)) {
                      teachers.add(teacher);
                      CDSCeunes.startSubApp("TeachersApp");
                    }
                  });

                });
              });
            });

            CDSCeunes.regions.main.show(listLayout);
          });
        });
      }
    };
  });
  return CDSCeunes.TeachersApp.List.Controller;
});