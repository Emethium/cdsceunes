define [
  "cs!app"
  "marionette"
], (CDSCeunes, Marionette) ->
  View = ->
    Layout = Marionette.View.extend(
      template: 'commission/layout'
      regions:
        panelRegion: '#panel-region'
        commissionsRegion: '#commissions-region'
    )

    Panel = Marionette.View.extend(
      template: 'commission/panel'
      className: 'row'
      events:
        'click button.js-new-commission': 'newCommission'
      newCommission: (e) ->
        e.preventDefault()
        console.log 'new commission'
        @triggerMethod 'commission:new'
        return
    )

    Form = Marionette.View.extend(
      template: 'commission/form'
      ui:
        'submitData': '.js-submit-commission'
        'form': '#commission-form'
      events:
        'submit @ui.form': 'submitData'
      title: 'Nova Comissão'
      onRender: ->
        @ui.submitData.text 'Enviar'
        return
      submitData: (e) ->
        e.preventDefault()
        data = Backbone.Syphon.serialize(this)
        console.log data
        @trigger 'commission:form:submit', data
        return
    )

    CommissionItem = Marionette.View.extend(
      template: 'commission/commission_item'
      tagName: 'div'
      className: 'row'
    )

    CommissionBody = Marionette.CollectionView.extend(
      id: '#list-commission-items'
      childView: CommissionItem
    )

    CommissionList = Marionette.View.extend(
      template: 'commission/commission_list'
      className: 'list-commission'
      regions:
        body: '#list-commission-items'
      onRender: ->
        @showChildView 'body', new (CommissionBody)(collection: @collection)
        return
    )

    Layout: Layout, Panel: Panel, CommissionsList: CommissionList, Form: Form

  View()
