define [
  'cs!app'
  'marionette'
  'cs!apps/controllers/commission_controller'
  'cs!apps/radios/routers/commission_handler'
], (CDSCeunes, Marionette, CommissionController, Handler) ->
  instance = undefined
  Router =
    Commission: Marionette.AppRouter.extend(
      controller: new (CommissionController)
      appRoutes:
        'commissions(/filter/criterion::criterion)' : 'list'
      onRoute: (name, path, args) ->
        console.log "User navigated to #{path}"
        CDSCeunes.configureRequest(undefined)
        return
      initialize: () ->
        @router = new (Handler.Commission)(router: this)
        return
    )

  CDSCeunes.on 'before:start', ->
    console.log 'Starting CommissionRouter'
    new (Router.Commission)
    return

  Router
