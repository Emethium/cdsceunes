define [
  'cs!app'
  'marionette'
], (CDSCeunes, Marionette) ->
  Radios =
    Routers:
      Commission: Marionette.Object.extend(
        initialize: (opts) ->
          @router = opts.router
          return
        channelName: 'router-handler'
        radioEvents:
          'commissions:list': 'routeCommissionsList'
        routeCommissionsList: ->
          CDSCeunes.navigate 'commissions'
          @router.controller.list()
          return
      )
  Radios.Routers
