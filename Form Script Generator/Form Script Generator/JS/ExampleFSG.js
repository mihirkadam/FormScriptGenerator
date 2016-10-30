// Open Form Script Generator Solution and under Configuration download the files FormScriptGenerator and Entity Model.
// Add reference path of FormScriptGenerator.js and entityModel.js file downloaded from CRM solution to ExampleFSG.js File.
// This reference will give you visual studio intellisense when you write JavaScript code.

/// <reference path="FormScriptGenerator.js" />
/// <reference path="accountModel.js" />


// Make sure you add below files in CRM form libraries. Order of JavaScript files does not matter but recommended order will be as follow 
//  1.FormScriptGenerator.js
//  2.accountModel.js
//  3.ExampleFSG.js


var ExampleFSG = {

    onLoad: function () {
        // Make sure that you have register this function onLoad event in form script. This function should be first in onLoad event handler.
        // Initialize new MK.Model and assigned to a global variable.
        //   var test = { processFields: { name: "", dataType: "" }, }
        //  MK.FSGEntity = new MK.Model("test");

        //add On Key Press
        //   MK.FSGEntity.field.name.addOnKeyPress = ExampleFSG.autoComplete;
    },

    setFormFields: function () {

        /// <summary>
        /// This function contains all the methods that are applicable on field.
        /// </summary>

        debugger;


        //var test=  MK.FSGEntity.field.versionnumber.value;

        ///set value to name field(String Type)
        MK.FSGEntity.field.name.value = "Demo Example - 15/08/2016";

        //set value to customer field(Lookup Type)
        MK.FSGEntity.field.primarycontactid.value = [{ id: "B7748671-5C8C-E611-80EC-C4346BAD4674", name: "Test 1", entityType: "contact" }];

        //get value from telephone field(String Type)
        var telephoneNumber = MK.FSGEntity.field.telephone1.value;

        //hide website field
        MK.FSGEntity.field.websiteurl.visible = false;

        // get attribute type of (Option Set Field)
        var attributeType = MK.FSGEntity.field.industrycode.attributeType;

        //get format
        var format = MK.FSGEntity.field.name.format;

        //get IsDirty
        var changeFlag = MK.FSGEntity.field.telephone1.isDirty;

        //getIsPartyList
        var isPartyListType = MK.FSGEntity.field.primarycontactid.isPartyList;

        //getMaxLength
        var length = MK.FSGEntity.field.name.maxLength;

        //getName
        var logicalName = MK.FSGEntity.field.primarycontactid.name;

        //getUserPrivilege
        var privilege = MK.FSGEntity.field.telephone1.userPrivilege;

        //getMax

        var maxValue = MK.FSGEntity.field.creditlimit.max;

        //getMin

        var minValue = MK.FSGEntity.field.creditlimit.min;

        //getPrecision
        var precision = MK.FSGEntity.field.creditlimit.precision;

        //getRequiredLevel

        var requiredLevel = MK.FSGEntity.field.name.requiredLevel;
        //setRequiredLevel
        MK.FSGEntity.field.telephone1.requiredLevel = "required";

        //getSubmitMode
        var submitMode = MK.FSGEntity.field.websiteurl.submitMode;

        //setSubmitMode
        MK.FSGEntity.field.websiteurl.submitMode = "always";

        //getDisabled
        var isDisabled = MK.FSGEntity.field.websiteurl.disabled;

        //setDisabled
        MK.FSGEntity.field.name.disabled = true;

        //getLabel
        var label = MK.FSGEntity.field.websiteurl
        //setLabel
        MK.FSGEntity.field.fax.label = "Alternate Number";

        //setFocus
        MK.FSGEntity.field.fax.focus = true;

        //getVisible
        var isVisible = MK.FSGEntity.field.websiteurl.visible;

        //setVisible
        MK.FSGEntity.field.websiteurl.visible = true;

        //fireOnChange
        MK.FSGEntity.field.description.fireOnChange = true;
        //add Custom View
        //get default view
        var defaultView = MK.FSGEntity.field.primarycontactid.defaultView;
        //set default view
        MK.FSGEntity.field.parentaccountid.defaultView = "D234426E-1F37-4944-9255-50E19B541C4C";

        //set Notification
        MK.FSGEntity.field.name.notification = { message: "Enter Appropriate", uniqueId: "1", level: "ERROR" }

        //clear Notification
        MK.FSGEntity.field.name.clearNotification = "1";

        //add Presearch
        MK.FSGEntity.field.parentaccountid.addPreSearch = ExampleFSG.filterCondition;
        //remove Presearch
        MK.FSGEntity.field.parentaccountid.removePreSearch = ExampleFSG.filterCondition;

        //get Initial Value
        var initialValue = MK.FSGEntity.field.preferredcontactmethodcode.initialValue

        // get selected Option
        var selectedOption = MK.FSGEntity.field.preferredcontactmethodcode.selectedOption

        //get Optioms
        var options = MK.FSGEntity.field.preferredcontactmethodcode.options
        //get Text
        var text = MK.FSGEntity.field.preferredcontactmethodcode.text
        //get Show Time
        var showTime = MK.FSGEntity.field.createdon.showTime
        //set show time
        MK.FSGEntity.field.createdon.showTime = false;


        //remove on key press
        //  MK.FSGEntity.field.name.removeOnKeyPress = ExampleFSG.autoComplete;


        //fireonkeypress
        // MK.FSGEntity.field.name.fireOnKeyPress = true;

        // getAttribute 


    },

    filterCondition: function () {
        //add custom filter
        var filterXML = "<filter type='and'><condition attribute='customertypecode' operator='eq' value='1' /></filter>";
        MK.FSGEntity.field.parentaccountid.addCustomFilter = { filter: filterXML, entityName: "account" };
    },

    autoComplete: function () {
        /// <summary>
        /// Sample JavaScript code to demonstrate the auto-completion feature.
        ///This sample configures the auto-complete feature for the "Account Name"
        ///field in the account form.
        /// Example is copied from https://msdn.microsoft.com/en-in/library/mt607648.aspx
        /// </summary>
        var userInput = Xrm.Page.getControl("name").getValue();
        var accounts = [
                 { name: 'A. Datum Corporation', code: 'A01' },
                 { name: 'Adventure Works Cycles', code: 'A02' },
                 { name: 'Alpine Ski House', code: 'A03' },
                 { name: 'Bellows College', code: 'A04' },
                 { name: 'Best For You Organics Company', code: 'A05' },
                 { name: 'Blue Yonder Airlines', code: 'A06' },
                 { name: 'City Power & Light', code: 'A07' },
                 { name: 'Coho Vineyard', code: 'A08' }]
        resultSet = {
            results: new Array(),
            commands: {
                id: "sp_commands",
                label: "Learn More",
                action: function () {
                    // Specify what you want to do when the user
                    // clicks the "Learn More" link at the bottom
                    // of the auto-completion list.
                    // For this sample, we are just opening a page
                    // that provides information on working with
                    // accounts in CRM.
                    window.open("http://www.microsoft.com/en-us/dynamics/crm-customer-center/create-or-edit-an-account.aspx");
                }
            }
        };
        var userInputLowerCase = userInput.toLowerCase();
        for (i = 0; i < accounts.length; i++) {
            if (userInputLowerCase === accounts[i].name.substring(0, userInputLowerCase.length).toLowerCase()) {
                resultSet.results.push({
                    id: i,
                    field: [accounts[i].name]
                });
            }
            if (resultSet.results.length >= 10) break;
        }
        //show auto complete
        if (resultSet.results.length > 0) {
            MK.FSGEntity.field.name.showAutoComplete = resultSet;
        } else {
            //hide auto complete
            MK.FSGEntity.field.name.hideAutoComplete = true;
        }
    },

    formProperties: function () {
        /// <summary>
        /// This function captures all the methods that are present on forms in CRM.
        /// </summary>

        //close
        MK.FSGEntity.form.close = true;

        // get form type
        var formType = MK.FSGEntity.form.formType;

        // set form notification
        MK.FSGEntity.form.setFormNotification = { message: "test", uniqueId: "1", level: "ERROR" }

        // clear form notification
        MK.FSGEntity.form.clearFormNotification = "1";
        //getViewPortHeight
        var height = MK.FSGEntity.form.viewPortHeight;

        //getViewPortWidth
        var width = MK.FSGEntity.form.viewPortWidth;

        //refreshRibbon
        MK.FSGEntity.form.refreshRibbon = true;
        //getCurrentControl
        var control = MK.FSGEntity.form.currentControl;

    },

    entityProperties: function () {
        /// <summary>
        /// This function captures all the methods to get the entity related properties
        /// </summary>


        //  get entity name
        var enitityLogicalName = MK.FSGEntity.logicalName;

        // get id
        var id = MK.FSGEntity.id;

        // get is dirty
        var isDirty = MK.FSGEntity.isDirty;

        // get all attributes
        var allAttributes = MK.FSGEntity.allAttributes;

        // get data xml
        var xml = MK.FSGEntity.dataXml;

        // get primary attribute value
        var primaryValue = MK.FSGEntity.primaryAttributevalue;
    },

    contextProperties: function () {
        /// <summary>
        /// This function contains all  the methods to get properties and values that are present in context.
        /// </summary>

        //getClientUrl
        var url = MK.FSGEntity.context.clientUrl;

        //getUserId
        var id = MK.FSGEntity.context.userId;

        //getUserName
        var userName = MK.FSGEntity.context.userName;

        //getUserLcid
        var lcid = MK.FSGEntity.context.userLcid;


        //getUserRoles
        var userRoles = MK.FSGEntity.context.userRoles;

        //getClient
        var client = MK.FSGEntity.context.client;

        //getClientState
        var clientState = MK.FSGEntity.context.clientState;

        //getFormFactor
        var formFactor = MK.FSGEntity.context.formFactor;

        //getIsAutoSaveEnabled
        var isAutosavedEnabled = MK.FSGEntity.context.isAutoSaveEnabled;

        //getOrgLcid 
        var orgLcid = MK.FSGEntity.context.orgLcid;

        //getOrgUniqueName
        var orgUniqueName = MK.FSGEntity.context.orgUniqueName;

        //getQueryStringParameters
        var queryStrings = MK.FSGEntity.context.queryStringParameters;

        //getTimeZoneOffsetMinutes
        var timeZoneOffset = MK.FSGEntity.context.timeZoneOffsetMinutes;
    },
  
};




