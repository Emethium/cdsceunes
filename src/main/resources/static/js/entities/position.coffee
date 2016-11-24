define [
  'cs!app'
  'backbone'
], (CDSCeunes, Backbone) ->
  Entities = ->
    model = Backbone.Model.extend(
      urlRoot: '/api/v1/positions'
      defaults:
        name: ''
        minWorkload: 0
        maxWorkload: 0
        currentWorkload: 0
    )

    collection = Backbone.Collection.extend(
      url: '/api/v1/positions'
      model: model
      comparator: 'name'
    )

    Position: model, PositionsCollection: collection

  Entities()
