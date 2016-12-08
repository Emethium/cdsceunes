define [
  'cs!app'
  'marionette'
  'cs!apps/views/commission_view'
  'jquery'
], (CDSCeunes, Marionette, View, $) ->
  Controller =
    Commission: Marionette.Object.extend(
      list: (criterion) ->
        require [
          'cs!entities/common'
          'cs!apps/radios/data/commission_notify'
        ], (FilteredCollection) ->
          list_layout = new (View.Layout)
          list_panel = new (View.Panel)
          list_commissions = undefined
          filtered_commissions = undefined

          $.when(CDSCeunes.dataRequest 'commission:entities').done (commissions) ->
            filtered_commissions = FilteredCollection(
              collection: commissions
              filter: (criterion) ->
                (commission) ->
                  commission.get('name').indexOf(criterion) > -1
            )

            list_commissions = new (View.CommissionsList)(collection: filtered_commissions)

            list_layout.on 'render', ->
              list_layout.showChildView 'panelRegion', list_panel
              list_layout.showChildView 'commissionsRegion', list_commissions
              return # end show

            list_layout.on 'childview:commission:new', ->
              console.log 'Showing new commission dialog'
              form_view = new (View.Form)(
                model: CDSCeunes.dataRequest 'commission:entity:new'
              )
              CDSCeunes.regions.showChildView 'dialog', form_view
              form_view.on "commission:form:submit", (data) ->
                $.when(CDSCeunes.dataRequest 'commission:entity:new').done (commission) ->
                  console.log data
                  commission.save(data,
                    success: (data) ->
                      commissions.add(commission)
                      CDSCeunes.regions.getRegion('dialog').empty()
                      return
                  )
                  return
                return
              return
            CDSCeunes.regions.showChildView 'main', list_layout

          return # end request
        return # end list
    )

  Controller.Commission
