define [
  'cs!app'
  'marionette'
  'cs!entities/commission'
  'jquery'
], (CDSCeunes, Marionette, Entities, $) ->
  Request =
    Commission: Marionette.Object.extend(
      channelName: 'data-request'
      radioRequests:
        'commission:entity:new': 'newCommission'
        'commission:entity': 'getCommissionEntity'
        'commission:entities': 'getCommissionEntities'
      getCommissiontEntities: ->
        comms = new (Entities.CommissionsCollection)
        defer = $.Deferred()
        comms.fetch
          success: (data) ->
            defer.resolve data
            return
          error: (data) ->
            defer.resolve undefined
            return
        defer.promise()
      getCommissionEntity: (id) ->
        comm = new (Entities.Commission)(id: id)
        defer = $.Deferred()
        comm.fetch
          success: (data) ->
            defer.resolve data
            return
          error: (data) ->
            defer.resolve undefined
            return
        defer.promise()
      newCommission: ->
        new (Entities.Commission)
    )

  new (Request.Commission)
