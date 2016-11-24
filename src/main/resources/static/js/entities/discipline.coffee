define [
  'cs!app'
  'backbone'
], (CDSCeunes, Backbone) ->
  Entities = ->
    model = Backbone.Model.extend(
      urlRoot: '/api/v1/disciplines'
      defaults:
        name: ''
        course: ''
        teoricLoad: 0
        exerciseLoad: 0
        labLoad: 0

    )

    collection = Backbone.Collection.extend(
      url: '/api/v1/disciplines'
      model: model
      comparator: 'name'
    )

    Discipline: model, DisciplinesCollection: collection

  Entities()
