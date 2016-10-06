define [ 'cs!app' ], (CDSCeunes) ->
  CDSCeunes.module 'Routers.DistributionsApp', (DistributionsAppRouter, CDSCeunes, Backbone, Marionette, $, _) ->
    DistributionsAppRouter.Router = Marionette.AppRouter.extend(
      appRoutes:
        'distributions': 'listDistributions'
        'distributions/show/:year/:semester': 'showDistribution'
    )

    executeAction = (action, arg) ->
      CDSCeunes.startSubApp 'DistributionApp'
      action arg
      return

    API =
      listDistributions: (criterion) ->
        require [ 'cs!apps/distributions/list/list_controller' ], (ListController) ->
          executeAction ListController.listDistributions, criterion
          return
        return
      newDistribution: ->
        require [ 'cs!apps/distributions/new/new_controller' ], (NewController) ->
          executeAction NewController.newDistribution
          return
        return
      showDistribution: (year, semester) ->
        require [ 'cs!apps/distributions/show/show_controller' ], (ShowController) ->
          args =
            year: year
            semester: semester
          executeAction ShowController.showDistribution, args
          return
        return

    CDSCeunes.on 'distributions:list', ->
      CDSCeunes.navigate 'distributions'
      API.listDistributions()
      return

    CDSCeunes.on 'distributions:filter', (criterion) ->
      if criterion
        CDSCeunes.navigate 'distributions/filter/criterion:' + criterion
      else
        CDSCeunes.navigate 'distributions'
      return

    CDSCeunes.on 'distributions:new', ->
      CDSCeunes.navigate 'distributions/new'
      API.newDistribution()
      return

    CDSCeunes.Routers.on 'start', ->
      console.log 'Distributions router'
      new (DistributionsAppRouter.Router)(controller: API)
      return

    return
  CDSCeunes.DistributionsAppRouter
