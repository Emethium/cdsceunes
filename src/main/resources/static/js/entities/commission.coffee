define [
  'cs!app'
  'backbone'
], (CDSCeunes, Backbone) ->
  Entities = ->
    model = Backbone.Model.extend(
      urlRoot: '/api/v1/commissions'
      defaults:
        name: ''
        minNumber: 0
        maxNumber: 0
    )

    collection = Backbone.Collection.extend(
      url: '/api/v1/commission'
      model: model
      comparator: 'name'
    )

    Commission: model, CommissionsCollection: collection

  Entities()
