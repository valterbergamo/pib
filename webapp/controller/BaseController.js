sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent",
	"sap/ui/core/routing/History",
	"sap/ui/model/json/JSONModel"
	
	], function (Controller, UIComponent, History,JSONModel) {
	"use strict";

	return Controller.extend("pib.cafelandia.app.controller.BaseController", {
		/**
		 * Convenience method for accessing the component of the controller's view.
		 * @returns {sap.ui.core.Component} The component of the controller's view
		 */
		// onInit: function() {
			
		// 	let oJSONData = {
		// 		busy : false
		// 	};
		// 	let oModel = new JSONModel(oJSONData);
		// 	this.getView().setModel(oModel, "appView");
		
		// },
		
		getOwnerComponent: function () {
			return Controller.prototype.getOwnerComponent.call(this);
		},

		/**
		 * Convenience method to get the components' router instance.
		 * @returns {sap.m.routing.Router} The router instance
		 */
		getRouter: function () {
			return UIComponent.getRouterFor(this);
		},

		/**
		 * Convenience method for getting the i18n resource bundle of the component.
		 * @returns {sap.base.i18n.ResourceBundle} The i18n resource bundle of the component
		 */
		getResourceBundle: function () {
			var oModel = this.getOwnerComponent().getModel("i18n");
			return oModel.getResourceBundle();
		},

		/**
		 * Convenience method for getting the view model by name in every controller of the application.
		 * @param {string} [sName] The model name
		 * @returns {sap.ui.model.Model} The model instance
		 */
		getModel: function (sName) {
			return this.getView().getModel(sName);
		},

		/**
		 * Convenience method for setting the view model in every controller of the application.
		 * @param {sap.ui.model.Model} oModel The model instance
		 * @param {string} [sName] The model name
		 * @returns {sap.ui.core.mvc.Controller} The current base controller instance
		 */
		setModel: function (oModel, sName) {
			this.getView().setModel(oModel, sName);
			return this;
		},

		/**
		 * Convenience method for triggering the navigation to a specific target.
		 * @public
		 * @param {string} sName Target name
		 * @param {object} [oParameters] Navigation parameters
		 * @param {boolean} [bReplace] Defines if the hash should be replaced (no browser history entry) or set (browser history entry)
		 */
		navTo: function (sName, oParameters, bReplace) {
			this.getRouter().navTo(sName, oParameters, undefined, bReplace);
		},

		/**
		 * Convenience event handler for navigating back.
		 * It there is a history entry we go one step back in the browser history
		 * If not, it will replace the current entry of the browser history with the main route.
		 */
		onNavBack: function () {
			var sPreviousHash = History.getInstance().getPreviousHash();
			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				this.getRouter().navTo("main", {}, undefined, true);
			}
		},
		onSideNavButtonPress: function(){
			var oSideNavigation = this.byId("app");
			var bExpanded = oSideNavigation.getSideExpanded();

			oSideNavigation.setSideExpanded(!bExpanded);
		},
		onNotificationPress: function(){

		},
		onLoginPress: function(){
			let oView = this.getView();
			let oLoginButton = oView.byId("loginButton");
			let oAvatarButton = oView.byId("avatarButton");

			if(oLoginButton.getVisible()==true){
				oLoginButton.setVisible(false);
				oAvatarButton.setVisible(true);	
			}else{
				oLoginButton.setVisible(true);
				oAvatarButton.setVisible(false);	
			}


		},
		onLoadMenu: function(){
			
		},

		onPress: function(){
			debugger
			let oModel = this.getView().getModel();
			let oTable = this.getView().byId("tbTeste")	;
			let oView = this.getView();

			oView.setModel(oModel);
			
		}
	});
});
