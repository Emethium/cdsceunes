define [
  'cs!app'
  'backbone'
], (CDSCeunes, Backbone) ->
  Entities = ->
    model = Backbone.Model.extend(
      urlRoot: '/api/v1/departments'
      defaults:
        name: ''
        center: ''
    )

    collection = Backbone.Collection.extend(
      url: '/api/v1/departments'
      model: model
      comparator: 'name'
    )

    Department: model, DepartmentsCollection: collection

  Entities()
