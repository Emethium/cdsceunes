define [
  'cs!app'
  'marionette'
  'cs!entities/department'
  'jquery'
], (CDSCeunes, Marionette, Entities, $) ->
  Request =
    Department: Marionette.Object.extend(
      channelName: 'data-request'
      radioRequests:
        'department:entity:new': 'newDepartment'
        'department:entity': 'getDepartmentEntity'
        'department:entities': 'getDepartmentEntities'
      getDepartmentEntities: ->
        depts = new (Entities.DepartmentsCollection)
        defer = $.Deferred()
        depts.fetch
          success: (data) ->
            defer.resolve data
            return
          error: (data) ->
            defer.resolve undefined
            return
        defer.promise()
      getDepartmentEntity: (id) ->
        dept = new (Entities.Department)(id: id)
        defer = $.Deferred()
        dept.fetch
          success: (data) ->
            defer.resolve data
            return
          error: (data) ->
            defer.resolve undefined
            return
        defer.promise()
      newDepartment: ->
        new (Entities.Department)
    )

  new (Request.Department)
