/**
* The MIT License (MIT)
* Copyright (c) 2016 Mihir Kadam <mihirkadam16@gmail.com>
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

* Form Script Generator - A Microsoft Dynamics CRM 2016 JavaScript Library
* @author Mihir M. Kadam
* @current version : 1.0
* @url : https://formscriptgenerator.codeplex.com

* Credits:
*   The idea of this library was inspired by Jaimie Ji XrmServiceToolkit.
*   Additional thanks to all contributors of MSCRM and i have learned a lot from you all.
* Date: 31 July, 2016
*
* Special Thanks:
*   Somesh Siripuram 
* Date: July, 2016

* What's new:
**********************************************************************************************************
*   Version: 1.0
*   Date: July, 2016
*
*       New Functions - Field Property
*                       1.setValue 
*                       2.getValue 
*                       3.getAttributeType 
*                       4.getFormat
*                       5.getIsDirty
*                       6.getIsPartyList
*                       7.getMaxLength
*                       8.getName
*                       9.getUserPrivilege 
*                       10.getMax
*                       11.getMin
*                       12.getPrecision
*                       13.getRequiredLevel
*                       14.setRequiredLevel
*                       15.getSubmitMode
*                       16.setSubmitMode
*                       17.getDisabled
*                       18.setDisabled
*                       19.getLabel
*                       20.setLabel
*                       21.setFocus
*                       22.getVisible
*                       23.setVisible
*                       24.fireOnChange
*                       25.addCustomView
*                       26.getDefaultView
*                       27.setDefaultView
*                       28.setNotification
*                       29.clearNotification
*                       30.addPreSearch
*                       31.removePreSearch
*                       32.addCustomFilter
*                       33.getInitialValue
*                       34.getSelectedOption
*                       35.getOptions
*                       36.getText
*                       37.getShowTime
*                       38.setShowTime 
*                       39.addOnKeyPress
*                       40.removeOnKeyPress
*                       41.fireOnKeyPress
*                       42.showAutoComplete
*                       43.hideAutoComplete
*                       44.getAttribute
*
*       New Functions - Form Property
*                       1.close
*                       2.getFormType
*                       3.clearFormNotification
*                       4.setFormNotification
*                       5.getViewPortHeight
*                       6.getViewPortWidth
*                       7.refreshRibbon
*                       8.getCurrentControl
*
*       New Functions - Entity Property
*                       1.getEntityName
*                       2.getId
*                       3.getIsDirty
*                       4.allAttributes
*                       5.getDataXml
*                       6.getPrimaryAttributeValue
*
*       New Functions - Context Property
*                       1.getClientUrl
*                       2.getUserId
*                       3.getUserName
*                       4.getUserLcid
*                       5.getUserRoles
*                       6.getClient
*                       7.getClientState
*                       8.getFormFactor
*                       9.getIsAutoSaveEnabled
*                       10.getOrgLcid 
*                       11.getOrgUniqueName
*                       12.getQueryStringParameters
*                       13.getTimeZoneOffsetMinutes
*   
*   Version: 1.0
*   Date: March, 2017
*
*       New Functions - Tab Properties
*                       1.getDisplayState
*                       2.setDisplayState
*                       3.getLabel
*                       4.setLabel
*                       5.setFocus
*                       6.getVisible
*                       7.setVisible
*                       8.getParent
*                       9.getName
*       New Function - Section Properties
*                       1.getLabel
*                       2.setLabel
*                       3.getVisible
*                       4.setVisible
*                       5.getParent
*                       6.getName
**********************************************************************************************************
*/
var MK = MK || {};
MK.FSG = MK.FSG || {};
MK.FSG.Main = (function () {

    var solutionVersion = 1.0;
    var version = 1.0;
    var XrmPage = (function () {
        /// <summary>
        ///  This function will used to get Xrm object defined by CRM
        /// </summary>
        /// <returns type="Object">
        "use strict";
        if (Xrm && Xrm.Page) {
            return Xrm.Page;
        }
        throw new Error(errorMessages.xrm_page_not_found);
    }());
    var entityProperties = function (fieldReference) {
        /// <summary>
        ///  This function consist of all methods required for entity property.
        /// </summary>
        /// <param name="modelReference"></param>
        /// <field name="logicalName" type="String">To get current entity name.</field>
        /// <field name="id" type="String">To get the GUID id value for the record.</field>
        /// <field name="isDirty" type="Boolean">Returns a Boolean value that indicates if any fields in the form have been modified.</field>
        /// <field name="allAttributes" type="Array">To access the data for a record displayed on the form.</field>
        /// <field name="primaryAttributevalue" type="String">Gets a string for the value of the primary attribute of the entity.</field>
        /// <field name="dataXml" type="String">Returns a string representing the XML that will be sent to the server when the record is saved.</field>
        "use strict";
        var _fieldReference = fieldReference;
        var getEntityName = function () {
            /// <summary>
            /// This function will used to get current entity name
            /// </summary>
            /// <returns type="String"/>
            return XrmPage.data.entity.getEntityName();
            //   return MK.FSG XrmPage.data.entity.getEntityName();
        };
        var getId = function () {
            /// <summary>
            /// Returns a string representing the GUID id value for the record.
            /// </summary>
            /// <returns type="String"/>
            return XrmPage.data.entity.getId();
        };
        var getIsDirty = function () {
            /// <summary>
            /// Returns a Boolean value that indicates if any fields in the form have been modified.
            /// </summary>
            /// <returns type="Boolean">
            /// </returns>
            return XrmPage.data.entity.getIsDirty();
        };
        var allAttributes = function () {
            /// <summary>
            /// Provides methods to access the data for a record displayed on the form
            /// </summary>
            /// <returns type="Array">
            ///     returns array
            /// </returns>
            return XrmPage.data.entity.attributes;
        };
        var getDataXml = function () {
            /// <summary>
            ///  Returns a string representing the XML that will be sent to the server when the record is saved.
            /// </summary>
            /// <returns type="String">
            /// </returns>

            //mobile or tablet device support
            if (isMobileClient) {
                throw new Error(errorMessages.property_not_support_for_phones_or_tablets.replace("{0}", propertyTypes.entity.dataXml));
            }
            return XrmPage.data.entity.getDataXml();
        };
        var getPrimaryAttributeValue = function () {
            /// <summary>
            ///  Gets a string for the value of the primary attribute of the entity.
            /// </summary>
            /// <returns type="String">
            ///  The value of the primary attribute of the entity.
            /// </returns>
            return XrmPage.data.entity.getPrimaryAttributeValue();
        };
        Object.defineProperty(_fieldReference, "logicalName", {
            get: getEntityName
        });
        Object.defineProperty(_fieldReference, "id", {
            get: getId
        });
        Object.defineProperty(_fieldReference, "isDirty", {
            get: getIsDirty
        });
        Object.defineProperty(_fieldReference, "allAttributes", {
            get: allAttributes
        });
        Object.defineProperty(_fieldReference, "primaryAttributevalue", {
            get: getPrimaryAttributeValue
        });
        Object.defineProperty(_fieldReference, "dataXml", {
            get: getDataXml
        });
        return _fieldReference;
    }
    var contextProperties = function (fieldReference) {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="fieldReference" type="Object"></param>
        /// <field name="clientUrl" type="String">The URL to connect to the organization.</field>
        /// <field name="userId" type="String">The unique identifier for the current user. 
        /// Example : "{B05EC7CE-5D51-DF11-97E0-00155DB232D0}"</field>
        /// <field name="userName" type="String">The name of the current user.</field>
        /// <field name="userLcid" type="Number">The language code that represents the user’s preferred user interface language.</field>
        /// <field name="userRoles" type="Array">An array of strings that represents the GUID values for each security role assigned to the current user and any teams that the user is associated with.
        /// <para /> Example: This user has only one security role associated with their user account. 
        /// <para />The JSON representation of this array with a single value is ["cf4cc7ce-5d51-df11-97e0-00155db232d0"]</field>
        /// <field name="client" type="String">Determine whether the script is running in the Microsoft Dynamics CRM for Outlook client.
        /// <para />The values returned are: 
        /// <para /> Client : Browser , Value : Web 
        /// <para />Client : Outlook , Value : Outlook 
        /// <para /> Client : Mobile, Value : Mobile 
        /// </field>
        /// <field name="clientState" type="String">Determine whether the user is working offline with the Microsoft Dynamics CRM for Microsoft Office Outlook with offline Access client.
        /// <para />The values returned are:
        ///  <para />Client : Web, Outlook, Mobile , Value : Online
        ///  <para />Client : Outlook, Mobile, Value : Offline</field>
        /// <field name="formFactor" type="Number">To get information about the kind of device the user is using.
        /// <para />The values returned are:
        ///<para />FormFactor : Unknown , Value : 0
        ///<para />FormFactor : Desktop , Value : 1
        ///<para />FormFactor : Tablet , Value : 2
        ///<para />FormFactor : Phone , Value : 3
        ///<para />FormFactor : Unknown , Value : 0
        /// </field>
        /// <field name="isAutoSaveEnabled" type="Boolean">Determine whether Auto save is enabled for the organization.</field>
        /// <field name="orgLcid" type="Number">Returns the LCID value that represents the base language for the organization.
        ///<para /> Example: 1033 indicates the English language.</field>
        /// <field name="orgUniqueName" type="String">Returns the unique text value of the organization’s name.
        ///<para />Example: This corresponds to the organization name value "adventureworkscycle"</field>
        /// <field name="queryStringParameters" type="Object">Returns a dictionary object of key value pairs that represent the query string arguments that were passed to the page.</field>
        /// <field name="timeZoneOffsetMinutes" type="Object">Returns the difference between the local time and Coordinated Universal Time (UTC).</field>
        "use strict";
        if (!fieldReference) {
            return;
        }
        var _fieldReference = fieldReference;
        contextProperties.prototype = {
            getClientUrl: function () {
                /// <summary>
                /// Get the URL to connect to the organization.
                /// </summary>
                /// <returns type="String">
                ///  Returns the base URL that was used to access the application
                /// </returns>
                return XrmPage.context.getClientUrl();
            },
            getUserId: function () {
                /// <summary>
                /// Get the unique identifier for the current user.
                /// </summary>
                /// <returns type="String">
                /// Returns the GUID of the SystemUser.Id value for the current user
                /// Example :"{B05EC7CE-5D51-DF11-97E0-00155DB232D0}"
                /// </returns>
                return XrmPage.context.getUserId();
            },
            getUserName: function () {
                /// <summary>
                /// Get the name of the current user.
                /// </summary>
                /// <returns type="String">
                /// Returns the name of the current user.
                /// </returns>
                return XrmPage.context.getUserName();
            },
            getUserLcid: function () {
                /// <summary>
                /// Get the language code that represents the user’s preferred user interface language.
                /// </summary>
                /// <returns type="Number">
                /// Returns the name of the current user.
                /// Example 1041 indicates the Japanese language.
                /// </returns>
                return XrmPage.context.getUserLcid();
            },
            getUserRoles: function () {
                /// <summary>
                ///Get an array of strings that represents the GUID values for each security role assigned to the current user and any teams that the user is associated with.
                /// </summary>
                /// <returns type="Array">
                /// Returns an array of strings that represent the GUID values
                /// Example: Example: This user has only one security role associated with their user account. The JSON representation of this array with a single value is:
                /// ["cf4cc7ce-5d51-df11-97e0-00155db232d0"]
                /// </returns>
                return XrmPage.context.getUserRoles();
            },
            getClient: function () {
                /// <summary>
                /// Determine whether the script is running in the Microsoft Dynamics CRM for Outlook client.
                /// </summary>
                /// <returns type="String">
                /// The values returned are:
                ///  Client : Browser , Value : Web
                ///  Client : Outlook , Value : Outlook
                ///  Client : Mobile, Value : Mobile
                /// </returns>
                return XrmPage.context.client.getClient();
            },
            getClientState: function () {
                /// <summary>
                /// Determine whether the user is working offline with the Microsoft Dynamics CRM for Microsoft Office Outlook with offline Access client.
                /// </summary>
                /// <returns type="String">
                /// The values returned are:
                ///  Client : Web, Outlook, Mobile , Value : Online
                ///  Client : Outlook, Mobile, Value : Offline
                /// </returns>
                return XrmPage.context.client.getClientState();
            },
            getFormFactor: function () {
                /// <summary>
                ///Use this method to get information about the kind of device the user is using.
                /// </summary>
                /// <returns type="Number">
                /// The values returned are:
                ///Value        Form factor
                ///*************************
                ///0            Unknown
                ///1            Desktop
                ///2            Tablet
                ///3            Phone
                ///**************************
                /// </returns>
                return XrmPage.context.client.getFormFactor();
            },
            getIsAutoSaveEnabled: function () {
                /// <summary>
                /// Determine whether Auto save is enabled for the organization.
                /// </summary>
                /// <returns type="Boolean">
                /// </returns>
                return XrmPage.context.getIsAutoSaveEnabled();

            },
            getOrgLcid: function () {
                /// <summary>
                /// Returns the LCID value that represents the base language for the organization.
                /// </summary>
                /// <returns type=" Number">
                /// Example: 1033 indicates the English language.
                /// </returns>
                return XrmPage.context.getOrgLcid();
            },
            getOrgUniqueName: function () {
                /// <summary>
                /// Returns the unique text value of the organization’s name.
                /// </summary>
                /// <returns type="String">
                ///Example: This corresponds to the organization name value "adventureworkscycle"
                /// </returns>
                return XrmPage.context.getOrgUniqueName();
            },
            getQueryStringParameters: function () {
                /// <summary>
                /// Returns a dictionary object of key value pairs that represent the query string arguments that were passed to the page.
                /// </summary>
                /// <returns type="Object">
                /// </returns>
                return XrmPage.context.getQueryStringParameters();
            },
            getTimeZoneOffsetMinutes: function () {
                /// <summary>
                /// Returns the difference between the local time and Coordinated Universal Time (UTC).
                /// </summary>
                /// <returns type="Object">
                /// </returns>
                return XrmPage.context.getTimeZoneOffsetMinutes();
            }
        };
        Object.defineProperty(_fieldReference, "clientUrl", {
            get: contextProperties.prototype.getClientUrl
        });
        Object.defineProperty(_fieldReference, "userId", {
            get: contextProperties.prototype.getUserId
        });
        Object.defineProperty(_fieldReference, "userName", {
            get: contextProperties.prototype.getUserName
        });
        Object.defineProperty(_fieldReference, "userLcid", {
            get: contextProperties.prototype.getUserLcid
        });
        Object.defineProperty(_fieldReference, "userRoles", {
            get: contextProperties.prototype.getUserRoles
        });
        Object.defineProperty(_fieldReference, "client", {
            get: contextProperties.prototype.getClient
        });
        Object.defineProperty(_fieldReference, "clientState", {
            get: contextProperties.prototype.getClientState
        });
        Object.defineProperty(_fieldReference, "formFactor", {
            get: contextProperties.prototype.getFormFactor
        });
        Object.defineProperty(_fieldReference, "isAutoSaveEnabled", {
            get: contextProperties.prototype.getIsAutoSaveEnabled
        });
        Object.defineProperty(_fieldReference, "orgLcid", {
            get: contextProperties.prototype.getOrgLcid
        });
        Object.defineProperty(_fieldReference, "orgUniqueName", {
            get: contextProperties.prototype.getOrgUniqueName
        });
        Object.defineProperty(_fieldReference, "queryStringParameters", {
            get: contextProperties.prototype.getQueryStringParameters
        });
        Object.defineProperty(_fieldReference, "timeZoneOffsetMinutes", {
            get: contextProperties.prototype.getTimeZoneOffsetMinutes
        });
        return _fieldReference;

    };
    var xrmProperties = (function () {

        var getAttribute = function (fieldName) {
            /// <summary>
            ///
            /// </summary>
            /// <param name="fieldName"></param>
            /// <returns type="Object"></returns>
            return XrmPage.getAttribute(fieldName) || null;
        };

        var getControl = function (fieldName) {
            /// <summary>
            ///
            /// </summary>
            /// <param name="fieldName"></param>
            /// <returns type="Object"></returns>
            return XrmPage.getControl(fieldName) || null;
        };

        var getUI = (function () {
            /// <summary>
            /// 
            /// </summary>
            /// <returns type="Object"></returns>
            return XrmPage.ui;
        })();

        return {
            getAttribute: getAttribute,
            getControl: getControl,
            getUI: getUI
        };
    }());
    var fieldProperties = function (fieldReference, fieldName, fieldType, isTypeControl) {
        ///<field name="attribute" type="Object" static="false">Get the attribute that the control is bound to.</field>
        ///<field name="value" type="Any" static="false">Gets or sets the data value for an attribute.</field>
        ///<field name="attributeType"  type="String" static="false">Gets the type of attribute.
        ///<para />This will return one of the following string values:
        ///<para />      • boolean
        ///<para />     • datetime
        ///<para />      • decimal
        ///<para />      • double
        ///<para />      • integer
        ///<para />      • lookup
        ///<para />      • memo
        ///<para />      • money
        ///<para />      • optionset
        ///<para />      • string
        /// </field>
        ///<field name="format" type="String" static="false"> Represents formatting options for the attribute.
        ///<para />    This method will return one of the following string values or null:
        ///<para />     • date
        ///<para />     • datetime
        ///<para />     • duration
        ///<para />     • email
        ///<para />     • language
        ///<para />     • none
        ///<para />     • phone
        ///<para />     • text
        ///<para />     • textarea
        ///<para />     • tickersymbol
        ///<para />     • timezone
        ///<para />     • url
        /// </field>
        ///<field name="isDirty" type="Boolean" static="false">Indicating if there are unsaved changes to the attribute value.Gets true if there are unsaved changes, otherwise false.</field>
        ///<field name="name" type="String" static="false">Representing the logical name of the attribute.</field>
        ///<field name="userPrivilege" type="Object" static="false">Indicating if the user can create, read or update data values for an attribute.
        /// <para />   The object has three Boolean properties:
        ///<para />      • canRead
        ///<para />      • canUpdate
        ///<para />      • canCreate
        /// </field>
        ///<field name="requiredLevel" type="String" static="false">Gets or sets whether a value for the attribute is required or recommended.
        ///<para />One of the following values:
        ///<para />      • none
        ///<para />      • required
        ///<para />      • recommended</field>
        ///<field name="submitMode" type="String" static="false">Gets or Sets whether data from the attribute will be submitted when the record is saved.
        ///<para />One of the following values:
        ///<para />      • always: The data is always sent with a save.
        ///<para />      • never: The data is never sent with a save. When this is used the field(s) in the form for this attribute cannot be edited.
        ///<para />      • dirty: Default behavior. The data is sent with the save when it has changed
        ///</field>
        ///<field name="disabled" type="Boolean" static="false">Gets or Sets whether the control is disabled.
        ///<para /> True if the control is disabled, otherwise false.</field>
        ///<field name="clearNotification" type="String" static="false"> Remove a message already displayed for a control.<para />The uniqueId to use to clear a specific message set using setNotification.</field>
        ///<field name="notification" type="Object" static="false"> Sets a display message near the control to indicate that data isn’t valid.
        ///<para /> Object should contains below parameter
        ///<para />      1.message (String): The message to display.
        ///<para />      2.uniqueId (String): The ID to use to clear just this message when using clearNotification.
        ///<para /> Example : {message:"kindly enter number value only",uniqueId:"1"} 
        ///</field>
        ///<field name="fireOnChange" type="Boolean" static="false">Causes the OnChange event to occur on the attribute so that any script associated to that event can execute.
        ///<para /> True if the fireOnChange should be execute; otherwise, false.</field>
        ///<field name="focus" type="Boolean" static="false">Sets the focus on the control.</field>
        ///<field name="visible" type="Boolean" static="false">Gets or Sets a value that indicates whether the control is currently visible.
        ///<para />   One of the following values:
        ///<para />   True if the control should be visible; otherwise, false. </field>
        ///<field name="showAutoComplete" type="Object" static="false">Use this function to configure the auto-completion experience in text controls in forms.
        ///<para />Object that defines the result set, which includes results and commands, to be displayed in the auto-completion drop-down list.</field>
        ///<field name="hideAutoComplete" type="Boolean" static="false">Use this function to hide the auto-completion drop-down list you configured for a specific text field.</field>
        ///<field name="maxLength" type="Number" static="false"> Indicating the maximum length of a string or memo attribute.</field>
        ///<field name="removeOnKeyPress" type="Function" static="false">Use this to remove an event handler for a text or number field that you added using addOnKeyPress.</field>
        ///<field name="fireOnKeyPress" type="Boolean" static="false">Use this to manually fire an event handler that you created for a specific text or number field to be executed on the keypress event.</field>
        ///<field name="max" type="Number" static="false">Gets the maximum allowed value for an attribute.</field>
        ///<field name="min" type="Number" static="false">Gets the minimum allowed value for an attribute.</field>
        ///<field name="precision" type="Number" static="false">Gets the number of digits allowed to the right of the decimal point.</field>
        ///<field name="initialValue" type="Number" static="false">Gets a value that represents the value set for an OptionSet or Boolean attribute when the form opened.</field>
        ///<field name="options" type="Array" static="false">Gets an array of option objects representing the valid options for an optionset attribute.</field>
        ///<field name="selectedOption" type="Object" static="false">Gets the option object that is selected in an optionset attribute.</field>
        ///<field name="text" type="String" static="false">Gets a string value of the text for the currently selected option.</field>
        ///<field name="showTime" type="Boolean" static="false">Get or Sets whether a date control shows the time portion of the date.</field>
        ///<field name="showTime" type="Boolean" static="false">Get or Sets whether a date control shows the time portion of the date.</field>
        ///<field name="addCustomView" type="Object" static="false">Adds a new view for the lookup dialog box.
        ///<para /> Object should contains below parameter
        ///<para />       1.viewId (String): The string representation of a GUID for a view.
        ///<para />       2.entityName (String): The name of the entity.
        ///<para />       3.viewDisplayName (String): The name of the view.
        ///<para />       4.fetchXml (String): The fetchXml query for the view.
        ///<para />       5.layoutXml (String): The XML that defines the layout of the view.
        ///<para />       6.isDefault (Boolean): Whether the view should be the default view.
        ///</field>
        ///<field name="addCustomFilter" type="Object" static="false">Use to add filters to the results displayed in the lookup. Each filter will be combined with any previously added filters as an “AND” condition.
        ///<para />Object should contains below parameter
        ///<para />     1.filter (String) : XML filter condition for lookup.
        ///<para />     2.entityName (String) : String: The name of the entity.
        ///<para />         Example : "account"
        ///</field>
        ///<field name="defaultView" type="String">Gets or sets the ID(GUID) value of the default lookup dialog view.</field>
        ///<field name="addPreSearch" type="Function" static="false">Use this method to apply changes to lookups based on values current just as the user is about to view results for the lookup.</field>
        ///<field name="isPartyList" type="Boolean" static="false">Indicating whether the lookup represents a partylist lookup.True if the lookup attribute is a partylist, otherwise false.</field>       
        ///<field name="removePreSearch" type="Function" static="false">Use this method to remove event handler functions that have previously been set for the PreSearch event.</field>
        ///<field name="addOnKeyPress" type="Object" static="false">Get the attribute that the control is bound to.</field>
        ///<field name="label" type="String" static="false">Gets or Sets the label for the control.</field>
        if (!fieldReference || !fieldName) {
            return;
        }
        var _fieldName = fieldName;
        var _fieldReference = fieldReference;
        var _errorMessage = "";
        var _isTypeControl = isTypeControl ? true : false;
        fieldProperties.prototype = {
            getValue: function () {
                /// <summary>
                ///  Retrieves the data value for an attribute.
                /// </summary>
                /// <returns type="Any">
                ///  Depends on type of attribute.
                /// </returns>

                //business process field 
                if (_isTypeControl) {
                    var _fieldControl = xrmProperties.getControl(_fieldName);
                    if (defaultSettings.strictRule && !_fieldControl) {
                        _errorMessage = errorMessages.field_not_present_on_process_stage.replace("{0}", propertyTypes.field.value).replace("{1}", _fieldName);
                        console.error(_errorMessage);
                        throw new Error(_errorMessage);
                    }
                }
                var _fieldAttribute = _isTypeControl ? _fieldControl.getAttribute() : xrmProperties.getAttribute(_fieldName);

                if (defaultSettings.strictRule && !_fieldAttribute) {
                    _errorMessage = errorMessages.field_not_present.replace("{0}", propertyTypes.field.value).replace("{1}", _fieldName);
                    console.error(_errorMessage);
                    throw new Error(_errorMessage);
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getValue();
                }
                return null;
            },
            setValue: function (value) {
                /// <summary>
                ///Sets the data value for an attribute
                /// </summary>
                /// <param name="value">Sets the data value for an attribute</param>
                /// <returns type="Any">
                ///  Depends on type of attribute.
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    _errorMessage = errorMessages.field_not_present.replace("{0}", propertyTypes.field.value).replace("{1}", _fieldName);
                    console.error(_errorMessage);
                    throw new Error(_errorMessage);
                }
                if (_fieldAttribute) {
                    _fieldAttribute.setValue(value);
                }
            },
            getAttributeType: function () {
                /// <summary>
                ///  Represents the type of attribute.
                /// </summary>
                /// <param name="fieldName"></param>
                /// <returns type="String">
                ///  This method will return one of the following string values:
                ///      1.boolean
                ///      2.datetime
                ///      3.decimal
                ///      4.double
                ///      5.integer
                ///      6.lookup
                ///      7.memo
                ///      8.money
                ///      9.optionset
                ///      10.string
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    _errorMessage = errorMessages.field_not_present.replace("{0}", propertyTypes.field.value).replace("{1}", _fieldName);
                    console.error(_errorMessage);
                    throw new Error(_errorMessage);
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getAttributeType();
                }
                return null;
            },
            getFormat: function () {
                /// <summary>
                ///   Represents formatting options for the attribute.
                /// </summary>
                /// <returns type="String">
                ///  This method will return one of the following string values or null:
                ///      1.date
                ///      2.datetime
                ///      3.duration
                ///      4.email
                ///      5.language
                ///      6.none
                ///      7.phone
                ///      8.text
                ///      9.textarea
                ///      10.tickersymbol
                ///      11.timezone
                ///      12.url
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.format).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getFormat();
                }
                return null;
            },
            getIsDirty: function () {
                /// <summary>
                ///  Indicating if there are unsaved changes to the attribute value.
                /// </summary>
                /// <returns type="Boolean">
                ///    True if there are unsaved changes, otherwise false.
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.isDirty).replace("{1}", _fieldName));

                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getIsDirty();
                }
                return null;
            },
            getIsPartyList: function () {
                /// <summary>
                /// Indicating whether the lookup represents a partylist lookup.
                /// </summary>
                /// <returns type="Boolean">
                ///  True if the lookup attribute is a partylist, otherwise false.
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.isPartyList).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getIsPartyList();
                }
                return null;
            },
            getMaxLength: function () {
                /// <summary>
                ///  Indicating the maximum length of a string or memo attribute.
                /// </summary>
                /// <returns type="Number">
                ///  The maximum allowed length of a string for this attribute.
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.maxLength).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getMaxLength();
                }
                return null;
            },
            getName: function () {
                /// <summary>
                ///   Representing the logical name of the attribute.
                /// </summary>
                /// <returns type="String">
                ///  The logical name of the attribute.
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.name).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getName();
                }
                return null;
            },
            getUserPrivilege: function () {
                /// <summary>
                ///   Indicating if the user can create, read or update data values for an attribute
                /// </summary>
                /// <returns type="Object">
                ///  The object has three Boolean properties:
                ///     1.canRead
                ///     2.canUpdate
                ///     3.canCreate
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.userPrivilege).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getUserPrivilege();
                }
                return null;
            },
            getMax: function () {
                /// <summary>
                ///  Indicating the maximum allowed value for an attribute.
                /// </summary>
                /// <returns type="Number">
                ///  The maximum allowed value for the attribute.
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.max).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getMax();
                }
                return null;
            },
            getMin: function () {
                /// <summary>
                ///  Indicating the minimum allowed value for an attribute.
                /// </summary>
                /// <returns type="Number">
                ///  The minimum allowed value for the attribute.
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.min).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getMin();
                }
                return null;
            },
            getPrecision: function () {
                /// <summary>
                ///  The number of digits allowed to the right of the decimal point.
                /// </summary>
                /// <returns type="Number">
                ///   The number of digits allowed to the right of the decimal point.
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.precision).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getPrecision();
                }
                return null;
            },
            getRequiredLevel: function () {
                /// <summary>
                ///  Indicating whether a value for the attribute is required or recommended.
                /// </summary>
                /// <returns type="String">
                ///  Returns one of the three possible values:
                ///      1.none
                ///      2.required
                ///      3.recommended
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.requiredLevel).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getRequiredLevel();
                }
                return null;
            },
            setRequiredLevel: function (value) {
                /// <summary>
                ///  Sets whether data is required or recommended for the attribute before the record can be saved.
                /// </summary>
                /// <param name="value" type="String">
                /// One of the following values:
                ///      1.none
                ///      2.required
                ///      3.recommended
                /// </param>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.requiredLevel).replace("{1}", _fieldName));
                }
                if (!validation.isString(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.requiredLevel).replace("{1}", _fieldName).replace("{2}", dataType.string));
                }
                if (_fieldAttribute) {
                    _fieldAttribute.setRequiredLevel(value);
                }
            },
            getSubmitMode: function () {
                /// <summary>
                ///  Indicating when data from the attribute will be submitted when the record is saved.
                /// </summary>
                /// <returns type="String">
                //One of the following values:
                ///      1.always
                ///      2.never
                ///      3.dirty
                /// </returns>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.submitMode).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    return _fieldAttribute.getSubmitMode();
                }
                return null;
            },
            setSubmitMode: function (value) {
                /// <summary>
                /// Sets whether data from the attribute will be submitted when the record is saved
                /// </summary>
                /// <param name="value" type="String">
                /// One of the following values:
                ///      1.always: The data is always sent with a save.
                ///      2.never: The data is never sent with a save. When this is used the field(s) in the form for this attribute cannot be edited.
                ///      3.dirty: Default behavior. The data is sent with the save when it has changed
                /// </param>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);

                ///field validation
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.submitMode).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isString(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.submitMode).replace("{1}", _fieldName).replace("{2}", dataType.string));
                }

                if (_fieldAttribute) {
                    _fieldAttribute.setSubmitMode(value);
                }
            },
            getDisabled: function () {
                /// <summary>
                /// field status id locked or not.
                /// </summary>
                /// <returns type="Boolean">
                /// True if the control is disabled, otherwise false.
                /// </returns>
                var _fieldControl = xrmProperties.getControl(_fieldName);

                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.disabled).replace("{1}", _fieldName));
                }
                if (_fieldControl) {
                    return _fieldControl.getDisabled();
                }
                return null;
            },
            setDisabled: function (value) {
                /// <summary>
                ///  Sets whether the control is disabled.
                /// </summary>
                /// <param name="value" type="Boolean">
                ///   True if the control is disabled, otherwise false.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);

                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.disabled).replace("{1}", _fieldName));
                }

                ///parameter validation
                if (!validation.isBoolean(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.disabled).replace("{1}", _fieldName).replace("{2}", dataType.boolean));
                }

                if (_fieldControl) {
                    _fieldControl.setDisabled(value);
                }
            },
            getLabel: function () {
                /// <summary>
                ///  the name assigned to the control
                /// </summary>
                var _fieldControl = xrmProperties.getControl(_fieldName);

                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.label).replace("{1}", _fieldName));
                }
                if (_fieldControl) {
                    return _fieldControl.getLabel();
                }
                return null;
            },
            setLabel: function (value) {
                /// <summary>
                ///  Sets the label for the control.
                /// </summary>
                /// <param name="value" type="String">
                ///   The new label for the control
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);

                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.label).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isString(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.label).replace("{1}", _fieldName).replace("{2}", dataType.string));
                }

                if (_fieldControl) {
                    _fieldControl.setLabel(value);
                }
            },
            setFocus: function (flag) {
                /// <summary>
                /// Sets the focus on the control.
                /// </summary>
                /// <param name="flag" type="Boolean">
                /// Determine whether to set focus for control or not.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);

                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.setFocus).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isBoolean(flag)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.setFocus).replace("{1}", _fieldName).replace("{2}", dataType.boolean));
                }

                if (_fieldControl && flag) {
                    _fieldControl.setFocus();
                }
            },
            getVisible: function () {
                /// <summary>
                /// Returns a value that indicates whether the control is currently visible.
                /// </summary>
                /// <returns type="Boolean">
                ///  True if the control is visible; otherwise, false.
                /// <returns/>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.visible).replace("{1}", _fieldName));
                }
                if (_fieldControl) {
                    return _fieldControl.getVisible();
                }
                return null;
            },
            setVisible: function (flag) {
                /// <summary>
                ///  True if the control should be visible; otherwise, false.
                /// </summary>
                /// <param name="flag" type="Boolean">
                /// True if the control should be visible; otherwise, false.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.visible).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isBoolean(flag)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.visible).replace("{1}", _fieldName).replace("{2}", dataType.boolean));
                }
                if (_fieldControl) {
                    _fieldControl.setVisible(flag);
                }
            },
            fireOnChange: function () {
                /// <summary>
                /// Causes the OnChange event to occur on the attribute so that any script associated to that event can execute.
                /// </summary>
                /// <param name="flag" type="Boolean">
                /// True if the fireOnChange should be execute; otherwise, false.
                /// </param>
                var _fieldAttribute = xrmProperties.getAttribute(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldAttribute) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.fireOnChange).replace("{1}", _fieldName));
                }
                if (_fieldAttribute) {
                    _fieldAttribute.fireOnChange();
                }
            },
            getAttribute: function () {
                /// <summary>
                /// Returns the attribute that the control is bound to.
                /// </summary>
                var _fieldControl = xrmProperties.getControl(_fieldName);

                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.attribute).replace("{1}", _fieldName));
                }
                if (_fieldControl) {
                    _fieldControl.getAttribute();
                }

            },


            /// following functions are for lookups
            addCustomView: function (viewObject) {
                /// <summary>
                /// Adds a new view for the lookup dialog box.
                /// </summary>
                /// <param name="viewObject" type="Object">
                ///Object contains below parameter
                ///      1.viewId
                ///          Type:String: The string representation of a GUID for a view.
                ///      2.entityName
                ///          Type: String: The name of the entity.
                ///      3.viewDisplayName
                ///          Type: String: The name of the view.
                ///      4.fetchXml
                ///          Type: String: The fetchXml query for the view.
                ///      5.layoutXml
                ///          Type:String: The XML that defines the layout of the view.
                ///      6.isDefault
                ///          Type: Boolean: Whether the view should be the default view.
                /// </param>

                ///following parameter need to check;
                // viewId, entityName, viewDisplayName, fetchXml, layoutXml, isDefault

                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.addCustomView).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isObject(viewObject)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.addCustomView).replace("{1}", _fieldName).replace("{2}", dataType.object));
                }
                if (_fieldControl) {
                    _fieldControl.addCustomView(viewObject.viewId, viewObject.entityName, viewObject.viewDisplayName, viewObject.fetchXml, viewObject.layoutXml, viewObject.isDefault);
                }
            },
            getDefaultView: function () {
                /// <summary>
                /// Returns the ID value of the default lookup dialog view.
                /// </summary>
                /// <returns type="String">
                ///    The ID value of the default view.
                /// <returns/>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.defaultView).replace("{1}", _fieldName));
                }
                if (_fieldControl) {
                    return _fieldControl.getDefaultView();
                }
                return null;
            },
            setDefaultView: function (viewId) {
                /// <summary>
                ///  set the ID value of the default lookup dialog view.
                /// </summary>
                /// <param name="viewId" type="String">
                ///   The ID of the view to be set as the default view.
                /// </param>
                ///need to verify id
                var _fieldControl = xrmProperties.getControl(_fieldName);

                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.defaultView).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isString(viewId)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.addCustomView).replace("{1}", _fieldName).replace("{2}", dataType.string));
                }
                if (_fieldControl) {
                    _fieldControl.setDefaultView(viewId);
                }
            },
            setNotification: function (notificationObject) {
                /// <summary>
                ///  Display a message near the control to indicate that data isn’t valid.
                /// </summary>
                /// <param name="notificationObject" type="Object">
                ///     1.message
                ///         Type: String: The message to display.
                ///     2.uniqueId
                ///         Type: String: The ID to use to clear just this message when using clearNotification.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);

                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.notification).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isObject(notificationObject)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.notification).replace("{1}", _fieldName).replace("{2}", dataType.object));
                }
                if (_fieldControl) {
                    _fieldControl.setNotification(notificationObject.message, notificationObject.uniqueId);
                }
            },
            clearNotification: function (uniqueId) {
                /// <summary>
                /// Remove a message already displayed for a control.
                /// </summary>
                /// <param name="uniqueId" type="String">
                ///     The uniqueId to use to clear a specific message set using setNotification.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.clearNotification).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isString(uniqueId)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.clearNotification).replace("{1}", _fieldName).replace("{2}", dataType.string));
                }
                if (_fieldControl) {
                    _fieldControl.clearNotification(uniqueId);
                }
            },
            addPreSearch: function (value) {
                /// <summary>
                /// Use this method to apply changes to lookups based on values current just as the user is about to view results for the lookup.
                /// </summary>
                /// <param name="value" type="Function">
                /// 
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.addPreSearch).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isFunction(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.addPreSearch).replace("{1}", _fieldName).replace("{2}", dataType.functionType));
                }
                if (_fieldControl) {
                    _fieldControl.addPreSearch(value);
                }
            },
            removePreSearch: function (value) {
                /// <summary>
                /// Use this method to remove event handler functions that have previously been set for the PreSearch event.
                /// </summary>
                /// <param name="value" type="Function">
                /// True if the fireOnChange event should be remove; otherwise, false.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.removePreSearch).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isFunction(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.removePreSearch).replace("{1}", _fieldName).replace("{2}", dataType.functionType));
                }
                if (_fieldControl) {
                    _fieldControl.removePreSearch(value);
                }
            },
            addCustomFilter: function (value) {
                /// <summary>
                /// Use to add filters to the results displayed in the lookup. Each filter will be combined with any previously added filters as an “AND” condition.
                /// </summary>
                /// <param name="value" type="Object">
                ///Object contains below parameter
                ///     1.filter
                ///         Type: String: XML filter condition for lookup.
                ///         Example :<filter type="and">
                ///                  <condition attribute="address1_city" operator="eq" value="Redmond" />
                ///                  </filter>
                ///     2.entityName
                ///         Type: String: The name of the entity.
                ///         Example : "account"
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.addCustomFilter).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isObject(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.addCustomFilter).replace("{1}", _fieldName).replace("{2}", dataType.object));
                }
                if (_fieldControl) {
                    _fieldControl.addCustomFilter(value.filter, value.entityName);
                }

            },

            /// following functions are for pickList
            getInitialValue: function () {
                /// <summary>
                /// Returns a value that represents the value set for an OptionSet or Boolean attribute when the form opened.
                /// </summary>
                /// <returns type="Number">
                ///   The initial value for the attribute.
                /// <returns/>
                var _fieldControl = xrmProperties.getAttribute(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.initialValue).replace("{1}", _fieldName));
                }

                if (_fieldControl) {
                    return _fieldControl.getInitialValue();
                }
                return null;
            },
            getSelectedOption: function () {
                /// <summary>
                /// Returns the option object that is selected in an optionset attribute..
                /// </summary>
                /// <returns type="Object">
                ///  Option object with text and value properties.
                /// <returns/>
                var _fieldControl = xrmProperties.getAttribute(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.selectedOption).replace("{1}", _fieldName));
                }

                if (_fieldControl) {
                    return _fieldControl.getSelectedOption();
                }
                return null;
            },
            getOptions: function () {
                /// <summary>
                /// Returns an array of option objects representing the valid options for an optionset attribute.
                /// </summary>
                /// <returns type="Array">
                /// Array of option objects.
                /// <returns/>
                var _fieldControl = xrmProperties.getAttribute(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.options).replace("{1}", _fieldName));
                }

                if (_fieldControl) {
                    return _fieldControl.getOptions();
                }
                return null;
            },
            getText: function () {
                /// <summary>
                /// Returns a string value of the text for the currently selected option for an optionset attribute.
                /// </summary>
                /// <returns type="String">
                /// 
                /// <returns/>
                var _fieldControl = xrmProperties.getAttribute(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.text).replace("{1}", _fieldName));
                }

                if (_fieldControl) {
                    return _fieldControl.getText();
                }
                return null;
            },

            /// following functions are for dateTime
            getShowTime: function () {
                /// <summary>
                ///  Get whether a date control shows the time portion of the date.
                /// </summary>
                /// <returns type="Boolean">
                ///
                /// <returns/>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.showTime).replace("{1}", _fieldName));
                }

                if (_fieldControl) {
                    return _fieldControl.getShowTime();
                }
                return null;
            },
            setShowTime: function (flag) {
                /// <summary>
                ///  Specify whether a date control should show the time portion of the date.
                /// </summary>
                /// <param name="flag" type="Boolean">
                ///
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.showTime).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isBoolean(flag)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.showTime).replace("{1}", _fieldName).replace("{2}", dataType.boolean));
                }
                if (_fieldControl) {
                    _fieldControl.setShowTime(flag);
                }

            },

            /// following functions are for string/memo/decimal/integer/double
            addOnKeyPress: function (value) {
                /// <summary>
                /// Use this to add a function as an event handler for the keypress event so that the function is called when you type a character in the specific text or number field.
                /// </summary>
                /// <param name="value" type="Function">
                ///The function will be added to the bottom of the event handler pipeline. The execution context is automatically set to be passed as the first parameter passed to event handler set using this method.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.addOnKeyPress).replace("{1}", _fieldName));
                }
                //mobile or tablet device support
                if (isMobileClient) {
                    throw new Error(errorMessages.field_property_not_support_for_phones_or_tablets.replace("{0}", propertyTypes.field.addOnKeyPress).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isFunction(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.addOnKeyPress).replace("{1}", _fieldName).replace("{2}", dataType.functionType));
                }
                if (_fieldControl) {
                    _fieldControl.addOnKeyPress(value);
                }
            },
            removeOnKeyPress: function (value) {
                /// <summary>
                ///Use this to remove an event handler for a text or number field that you added using addOnKeyPress.
                /// </summary>
                /// <param name="value" type="Function">
                ///The function will be removed from the event handler pipeline that is set via addOnKeyPress.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.removeOnKeyPress).replace("{1}", _fieldName));
                }
                //mobile or tablet device support
                if (isMobileClient) {
                    throw new Error(errorMessages.field_property_not_support_for_phones_or_tablets.replace("{0}", propertyTypes.field.removeOnKeyPress).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isFunction(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.removeOnKeyPress).replace("{1}", _fieldName).replace("{2}", dataType.functionType));
                }
                if (_fieldControl) {
                    _fieldControl.removeOnKeyPress(value);
                }
            },
            fireOnKeyPress: function (flag) {
                /// <summary>
                ///Use this to manually fire an event handler that you created for a specific text or number field to be executed on the keypress event.
                /// </summary>
                /// <param name="flag" type="Boolean">
                ///Use this to manually fire an event handler that you created for a specific text or number field to be executed on the keypress event.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.fireOnChange).replace("{1}", _fieldName));
                }
                //mobile or tablet device support
                if (isMobileClient) {
                    throw new Error(errorMessages.field_property_not_support_for_phones_or_tablets.replace("{0}", propertyTypes.field.fireOnChange).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isBoolean(flag)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.fireOnChange).replace("{1}", _fieldName).replace("{2}", dataType.boolean));
                }
                if (_fieldControl && flag) {
                    _fieldControl.fireOnKeyPress();
                }

            },

            /// following functions are for string
            showAutoComplete: function (value) {
                /// <summary>
                ///Use this function to configure the auto-completion experience in text controls in forms.
                /// </summary>
                /// <param name="value" type="Object">
                ///Object that defines the result set, which includes results and commands, to be displayed in the auto-completion drop-down list.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);


                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.showAutoComplete).replace("{1}", _fieldName));
                }
                //mobile or tablet device support
                if (isMobileClient) {
                    throw new Error(errorMessages.field_property_not_support_for_phones_or_tablets.replace("{0}", propertyTypes.field.showAutoComplete).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isObject(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.showAutoComplete).replace("{1}", _fieldName).replace("{2}", dataType.object));
                }
                if (_fieldControl) {
                    _fieldControl.showAutoComplete(value);
                }
            },
            hideAutoComplete: function (flag) {
                /// <summary>
                ///Use this function to hide the auto-completion drop-down list you configured for a specific text field.
                /// </summary>
                /// <param name="flag" type="Boolean">
                ///The function will be hide auto complete drop-down list.
                /// </param>
                var _fieldControl = xrmProperties.getControl(_fieldName);
                ///field validation
                if (defaultSettings.strictRule && !_fieldControl) {
                    throw new Error(errorMessages.field_not_present.replace("{0}", propertyTypes.field.hideAutoComplete).replace("{1}", _fieldName));
                }
                //mobile or tablet device support
                if (isMobileClient) {
                    throw new Error(errorMessages.field_property_not_support_for_phones_or_tablets.replace("{0}", propertyTypes.field.hideAutoComplete).replace("{1}", _fieldName));
                }
                ///parameter validation
                if (!validation.isBoolean(flag)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.field.hideAutoComplete).replace("{1}", _fieldName).replace("{2}", dataType.boolean));
                }
                if (_fieldControl && flag) {
                    _fieldControl.hideAutoComplete();

                }
            }

        };

        Object.defineProperty(_fieldReference, "value", {
            get: fieldProperties.prototype.getValue,
            set: fieldProperties.prototype.setValue
        });
        Object.defineProperty(_fieldReference, "attributeType", {
            get: fieldProperties.prototype.getAttributeType
        });
        Object.defineProperty(_fieldReference, "format", {
            get: fieldProperties.prototype.getFormat
        });
        Object.defineProperty(_fieldReference, "isDirty", {
            get: fieldProperties.prototype.getIsDirty
        });
        Object.defineProperty(_fieldReference, "name", {
            get: fieldProperties.prototype.getName
        });
        Object.defineProperty(_fieldReference, "userPrivilege", {
            get: fieldProperties.prototype.getUserPrivilege
        });
        Object.defineProperty(_fieldReference, "requiredLevel", {
            get: fieldProperties.prototype.getRequiredLevel,
            set: fieldProperties.prototype.setRequiredLevel
        });
        Object.defineProperty(_fieldReference, "submitMode", {
            get: fieldProperties.prototype.getSubmitMode,
            set: fieldProperties.prototype.setSubmitMode
        });
        Object.defineProperty(_fieldReference, "disabled", {
            get: fieldProperties.prototype.getDisabled,
            set: fieldProperties.prototype.setDisabled
        });
        Object.defineProperty(_fieldReference, "label", {
            get: fieldProperties.prototype.getLabel,
            set: fieldProperties.prototype.setLabel
        });
        Object.defineProperty(_fieldReference, "attribute", {
            get: fieldProperties.prototype.getAttribute,
        });
        Object.defineProperty(_fieldReference, "clearNotification", {
            set: fieldProperties.prototype.clearNotification
        });
        Object.defineProperty(_fieldReference, "notification", {
            set: fieldProperties.prototype.setNotification
        });
        Object.defineProperty(_fieldReference, "fireOnChange", {
            set: fieldProperties.prototype.fireOnChange
        });
        Object.defineProperty(_fieldReference, "focus", {
            set: fieldProperties.prototype.focus
        });
        Object.defineProperty(_fieldReference, "visible", {
            get: fieldProperties.prototype.getVisible,
            set: fieldProperties.prototype.setVisible
        });
        switch (fieldType) {
            case dataType.lookup:
                Object.defineProperty(_fieldReference, "isPartyList", {
                    get: fieldProperties.prototype.getIsPartyList
                });
                Object.defineProperty(_fieldReference, "addCustomView", {
                    set: fieldProperties.prototype.addCustomView
                });
                Object.defineProperty(_fieldReference, "defaultView", {
                    get: fieldProperties.prototype.getDefaultView,
                    set: fieldProperties.prototype.setDefaultView
                });
                Object.defineProperty(_fieldReference, "addPreSearch", {
                    set: fieldProperties.prototype.addPreSearch
                });
                Object.defineProperty(_fieldReference, "removePreSearch", {
                    set: fieldProperties.prototype.removePreSearch
                });
                Object.defineProperty(_fieldReference, "addCustomFilter", {
                    set: fieldProperties.prototype.addCustomFilter
                });
                break;
            case dataType.string:
                Object.defineProperty(_fieldReference, "showAutoComplete", {
                    set: fieldProperties.prototype.showAutoComplete
                });
                Object.defineProperty(_fieldReference, "hideAutoComplete", {
                    set: fieldProperties.prototype.hideAutoComplete
                });
            case dataType.memo:
                Object.defineProperty(_fieldReference, "maxLength", {
                    get: fieldProperties.prototype.getMaxLength
                });
                Object.defineProperty(_fieldReference, "addOnKeyPress", {
                    set: fieldProperties.prototype.addOnKeyPress
                });
                Object.defineProperty(_fieldReference, "removeOnKeyPress", {
                    set: fieldProperties.prototype.removeOnKeyPress
                });
                Object.defineProperty(_fieldReference, "fireOnKeyPress", {
                    set: fieldProperties.prototype.fireOnKeyPress
                });
                break;
            case dataType.money:
            case dataType.integer:
            case dataType.decimal:
            case dataType.double:
                Object.defineProperty(_fieldReference, "max", {
                    get: fieldProperties.prototype.getMax
                });
                Object.defineProperty(_fieldReference, "min", {
                    get: fieldProperties.prototype.getMin
                });
                Object.defineProperty(_fieldReference, "precision", {
                    get: fieldProperties.prototype.getPrecision
                });
                Object.defineProperty(_fieldReference, "addOnKeyPress", {
                    get: fieldProperties.prototype.addOnKeyPress
                });
                Object.defineProperty(_fieldReference, "removeOnKeyPress", {
                    get: fieldProperties.prototype.removeOnKeyPress
                });
                Object.defineProperty(_fieldReference, "fireOnKeyPress", {
                    set: fieldProperties.prototype.fireOnKeyPress
                });
                break;
            case dataType.boolean:
                Object.defineProperty(_fieldReference, "initialValue", {
                    get: fieldProperties.prototype.getInitialValue
                });
                break;
            case dataType.pickList:
                Object.defineProperty(_fieldReference, "initialValue", {
                    get: fieldProperties.prototype.getInitialValue
                });
                Object.defineProperty(_fieldReference, "options", {
                    get: fieldProperties.prototype.getOptions
                });
                Object.defineProperty(_fieldReference, "selectedOption", {
                    get: fieldProperties.prototype.getSelectedOption
                });
                Object.defineProperty(_fieldReference, "text", {
                    get: fieldProperties.prototype.getText
                });
                break;
            case dataType.dateTime:
                Object.defineProperty(_fieldReference, "showTime", {
                    get: fieldProperties.prototype.getShowTime,
                    set: fieldProperties.prototype.setShowTime
                });
                break;
        }

    };
    var formProperties = function (fieldReference) {

        "use strict";
        if (!fieldReference) {
            return;
        }
        var _fieldReference = fieldReference;
        formProperties.prototype = {
            close: function (flag) {
                /// <summary>
                /// Method to close the form.
                /// </summary>
                /// <param name="value"type="Boolean">
                /// set true to close current form.
                /// </param>
                if (flag) {
                    xrmProperties.getUI.close();
                }
            },
            getFormType: function () {
                /// <summary>
                /// Method to get the form context for the record.
                /// </summary>
                /// <returns type="Number">
                ///The following table lists the form types that correspond to the return value.
                ///    Value        Form Type
                ///*********************************************//
                ///    0            Undefined
                ///    1            Create
                ///    2            Update
                ///    3            Read Only
                ///    4            Disabled
                ///    5            Quick Create (Deprecated)
                ///    6            Bulk Edit
                ///    11            Read Optimized (Deprecated)
                ///*********************************************//
                /// </returns>
                return xrmProperties.getUI.getFormType();
            },
            clearFormNotification: function (uniqueId) {
                /// <summary>
                /// Use this method to remove form level notifications.
                /// </summary>
                /// <param name="uniqueId" type="String">
                /// A unique identifier for the message used with setFormNotification to set the notification.
                /// </param>
                /// <returns type="Boolean">
                /// </returns>
                return xrmProperties.getUI.clearFormNotification(uniqueId);
            },
            setFormNotification: function (notification) {
                /// <summary>
                /// Use this method to display form level notifications. You can display any number of notifications and they will be displayed until they are removed using clearFormNotification.
                /// </summary>
                /// <param name="notificationObject" type="Object">
                ///Object contains below parameter
                ///      1.message
                ///          Type: String. The text of the message.
                ///      2.level
                ///          Type: String. The level of the message.
                ///              The level defines how the message will be displayed.
                ///                ERROR : Notification will use the system error icon.
                ///                WARNING : Notification will use the system warning icon.
                ///                INFO : Notification will use the system info icon.
                ///      3.uniqueId
                ///          Type: String. A unique identifier for the message used with clearFormNotification to remove the notification.
                /// </param>
                /// <returns type="Boolean">
                /// </returns>
                return xrmProperties.getUI.setFormNotification(notification.message, notification.level, notification.uniqueId);
            },
            getViewPortHeight: function () {
                /// <summary>
                /// The ViewPort is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page. Use the getViewPortHeight  method to get the current height of the ViewPort.
                /// </summary>
                /// <returns type="Number">
                ///returns the height of the viewport in pixels.
                /// </returns>

                //mobile or tablet device support
                if (isMobileClient && formFactor.tablet) {
                    throw new Error(errorMessages.property_not_support_for_tablets.replace("{0}", propertyTypes.form.viewPortHeight));
                }
                return xrmProperties.getUI.getViewPortHeight();
            },
            getViewPortWidth: function () {
                /// <summary>
                /// The ViewPort is the area of the page containing form data. It corresponds to the body of the form and does not include the navigation, header, footer or form assistant areas of the page. Use the getViewPortWidth method to get the current width of the ViewPort.
                /// </summary>
                /// <returns type="Number">
                ///returns the width of the viewport in pixels.
                /// </returns>

                //mobile or tablet device support
                if (isMobileClient && formFactor.tablet) {
                    throw new Error(errorMessages.property_not_support_for_tablets.replace("{0}", propertyTypes.form.viewPortWidth));
                }
                return xrmProperties.getUI.getViewPortWidth();
            },
            refreshRibbon: function (flag) {
                /// <summary>
                /// Method to cause the ribbon to re-evaluate data that controls what is displayed in it.
                /// This function is typically used when a ribbon <EnableRule> (RibbonDiffXml) depends on a value in the form. After your code changes a value that is used by a rule, use this method to force the ribbon to re-evaluate the data in the form so that the rule can be applied.
                /// </summary>
                /// <param name="flag" type="Boolean">
                ///
                /// </param>
                if (flag) {
                    xrmProperties.getUI.refreshRibbon();
                }
            },
            getCurrentControl: function () {
                /// <summary>
                /// Method to get the control object that currently has focus on the form.
                /// </summary>
                /// <returns type="Object">
                ///
                /// </returns>
                return xrmProperties.getUI.getCurrentControl();
            }
        };

        Object.defineProperty(_fieldReference, "close", {
            set: formProperties.prototype.close
        });
        Object.defineProperty(_fieldReference, "formType", {
            get: formProperties.prototype.getFormType
        });
        Object.defineProperty(_fieldReference, "clearFormNotification", {
            set: formProperties.prototype.clearFormNotification
        });
        Object.defineProperty(_fieldReference, "setFormNotification", {
            set: formProperties.prototype.setFormNotification
        });
        Object.defineProperty(_fieldReference, "viewPortHeight", {
            get: formProperties.prototype.getViewPortHeight
        });
        Object.defineProperty(_fieldReference, "viewPortWidth", {
            get: formProperties.prototype.getViewPortWidth
        });
        Object.defineProperty(_fieldReference, "refreshRibbon", {
            set: formProperties.prototype.refreshRibbon
        });
        Object.defineProperty(_fieldReference, "currentControl", {
            get: formProperties.prototype.getCurrentControl
        });
    };
    var tabProperties = function (tabReference, tabName) {
        "use strict";
        if (!tabReference) {
            return;
        }
        var _tabReference = tabReference;
        var _tabName = tabName;
        tabProperties.prototype = {
            getDisplayState: function () {
                /// <summary>
                ///Returns a value that indicates whether the tab is collapsed or expanded.
                /// </summary>
                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);
                ///tab validation
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.tab.displayState).replace("{1}", _tabName));
                }
                if (_tabRef) {
                    return _tabRef.getDisplayState();
                }
                return null;
            },
            setDisplayState: function (value) {
                /// <summary>
                /// Sets the tab to be collapsed or expanded.
                /// </summary>
                /// <returns type="String">
                /// Valid argument values:
                /// expanded
                /// collapsed
                /// </returns>

                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.tab.displayState).replace("{1}", _tabName));
                }

                //value validation
                if (!validation.isString(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.tab.displayState).replace("{1}", _tabName).replace("{2}", dataType.string));
                }

                if (_tabRef) {
                    return _tabRef.setDisplayState(value);
                }
                return null;
            },
            getLabel: function () {
                /// <summary>
                ///Returns the tab label.
                /// </summary>

                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.tab.label).replace("{1}", _tabName));
                }

                if (_tabRef) {
                    return _tabRef.getLabel();
                }
                return null;
            },
            setLabel: function (value) {
                /// <summary>
                ///Sets the label for the tab.
                /// </summary>

                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.tab.label).replace("{1}", _tabName));
                }

                //value validation
                if (!validation.isString(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.tab.label).replace("{1}", _tabName).replace("{2}", dataType.string));
                }

                if (_tabRef) {
                    return _tabRef.setLabel(value);
                }
                return null;
            },
            setFocus: function (flag) {
                /// <summary>
                ///Sets the focus on the tab.
                /// </summary>
                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.tab.focus).replace("{1}", _tabName));
                }
                //value validation
                if (!validation.isBoolean(flag)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.tab.focus).replace("{1}", _tabName).replace("{2}", dataType.boolean));
                }

                if (_tabRef && flag) {
                    return _tabRef.setFocus();
                }
                return null;
            },
            getVisible: function () {
                /// <summary>
                ///Returns a value that indicates whether the tab is visible.
                /// </summary>

                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.tab.visible).replace("{1}", _tabName));
                }
                if (_tabRef) {
                    return _tabRef.getVisible();
                }
                return null;
            },
            setVisible: function (flag) {
                /// <summary>
                /// Returns a value that indicates whether the tab is visible.
                /// </summary>

                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.tab.visible).replace("{1}", _tabName));
                }
                //value validation
                if (!validation.isBoolean(flag)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.tab.visible).replace("{1}", _tabName).replace("{2}", dataType.boolean));
                }

                if (_tabRef) {
                    return _tabRef.setVisible(flag);
                }
                return null;
            },
            getParent: function () {
                /// <summary>
                ///Returns the Xrm.Page.ui (client-side reference) object
                /// </summary>
                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.tab.parent).replace("{1}", _tabName));
                }

                if (_tabRef) {
                    return _tabRef.getParent();
                }
                return null;
            },
            getName: function () {
                /// <summary>
                ///Returns the name of the tab.
                /// </summary>
                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.tab.name).replace("{1}", _tabName));
                }

                if (_tabRef) {
                    return _tabRef.getName();
                }
                return null;
            },
        }

        Object.defineProperty(_tabReference, "displayState", {
            get: tabProperties.prototype.getDisplayState,
            set: tabProperties.prototype.setDisplayState
        });

        Object.defineProperty(_tabReference, "label", {
            get: tabProperties.prototype.getLabel,
            set: tabProperties.prototype.setLabel
        });

        Object.defineProperty(_tabReference, "focus", {
            set: tabProperties.prototype.setFocus
        });

        Object.defineProperty(_tabReference, "visible", {
            get: tabProperties.prototype.getVisible,
            set: tabProperties.prototype.setVisible
        });

        Object.defineProperty(_tabReference, "parent", {
            get: tabProperties.prototype.getParent,
        });
    }
    var sectionProperties = function (sectionReference, tabName, sectionName) {
        "use strict";
        if (!sectionReference) {
            return;
        }
        var _sectionReference = sectionReference;
        var _tabName = tabName;
        var _sectionName = sectionName;
        sectionProperties.prototype = {
            getName: function () {
                /// <summary>
                ///Method to return the name of the section.
                /// </summary>

                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);

                ///tab validation
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.section.name).replace("{1}", _tabName));
                }
                var _sectionObj = _tabRef ? _tabRef.sections.get(_sectionName) : null;

                ///tab validation
                if (defaultSettings.strictRule && !_sectionObj) {
                    throw new Error(errorMessages.section_not_present.replace("{0}", propertyTypes.section.name).replace("{1}", _sectionName));
                }

                if (_sectionObj) {
                    return _sectionObj.getName();
                }
                return null;
            },
            getLabel: function () {
                /// <summary>
                ///Returns the label for the section.
                /// </summary>

                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);

                ///tab validation
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.section.label).replace("{1}", _tabName));
                }
                var _sectionObj = _tabRef ? _tabRef.sections.get(_sectionName) : null;

                ///tab validation
                if (defaultSettings.strictRule && !_sectionObj) {
                    throw new Error(errorMessages.section_not_present.replace("{0}", propertyTypes.section.label).replace("{1}", _sectionName));
                }

                if (_sectionObj) {
                    return _sectionObj.getLabel();
                }
                return null;
            },
            setLabel: function (value) {
                /// <summary>
                ///Sets the label for the section.
                /// </summary>
                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);

                ///tab validation
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.section.label).replace("{1}", _tabName));
                }
                var _sectionObj = _tabRef ? _tabRef.sections.get(_sectionName) : null;


                ///tab validation
                if (defaultSettings.strictRule && !_sectionObj) {
                    throw new Error(errorMessages.section_not_present.replace("{0}", propertyTypes.section.label).replace("{1}", _sectionName));
                }

                //value validation
                if (!validation.isString(value)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.tab.label).replace("{1}", _sectionName).replace("{2}", dataType.string));
                }

                if (_sectionObj) {
                    return _sectionObj.setLabel(value);
                }
            },
            getVisible: function () {
                /// <summary>
                ///Returns a value that indicates whether the tab is visible.
                /// </summary>
                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);

                ///tab validation
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.section.visible).replace("{1}", _tabName));
                }
                var _sectionObj = _tabRef ? _tabRef.sections.get(_sectionName) : null;

                ///tab validation
                if (defaultSettings.strictRule && !_sectionObj) {
                    throw new Error(errorMessages.section_not_present.replace("{0}", propertyTypes.section.visible).replace("{1}", _sectionName));
                }

                if (_sectionObj) {
                    return _sectionObj.getVisible();
                }
                return null;
            },
            setVisible: function (flag) {
                /// <summary>
                /// Returns a value that indicates whether the tab is visible.
                /// </summary>
                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);

                ///tab validation
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.section.visible).replace("{1}", _tabName));
                }
                var _sectionObj = _tabRef ? _tabRef.sections.get(_sectionName) : null;

                ///tab validation
                if (defaultSettings.strictRule && !_sectionObj) {
                    throw new Error(errorMessages.section_not_present.replace("{0}", propertyTypes.section.visible).replace("{1}", _sectionName));
                }
                //value validation
                if (!validation.isBoolean(flag)) {
                    throw new Error(errorMessages.invalid_property_value.replace("{0}", propertyTypes.tab.visible).replace("{1}", _sectionName).replace("{2}", dataType.boolean));
                }
                if (_sectionObj) {
                    _sectionObj.setVisible(flag);
                }


                return null;
            },
            getParent: function () {
                /// <summary>
                ///Method to return the tab containing the section.
                /// </summary>

                var _tabRef = xrmProperties.getUI.tabs.get(_tabName);

                ///tab validation
                if (defaultSettings.strictRule && !_tabRef) {
                    throw new Error(errorMessages.tab_not_present.replace("{0}", propertyTypes.section.parent).replace("{1}", _tabName));
                }
                var _sectionObj = _tabRef ? _tabRef.sections.get(_sectionName) : null;

                ///tab validation
                if (defaultSettings.strictRule && !_sectionObj) {
                    throw new Error(errorMessages.section_not_present.replace("{0}", propertyTypes.section.parent).replace("{1}", _sectionName));
                }

                if (_sectionObj) {
                    return _sectionObj.getParent();
                }
            },
        }

        Object.defineProperty(_sectionReference, "name", {
            get: sectionProperties.prototype.getName,
        });

        Object.defineProperty(_sectionReference, "label", {
            get: sectionProperties.prototype.getLabel,
            set: sectionProperties.prototype.setLabel
        });

        Object.defineProperty(_sectionReference, "visible", {
            get: sectionProperties.prototype.getVisible,
            set: sectionProperties.prototype.setVisible
        });

        Object.defineProperty(_sectionReference, "parent", {
            get: sectionProperties.prototype.getParent,
        });

    }

    var defaultSettings = {
        strictRule: true,
    };
    //{0} represents property name , {1} represents field-name , {2} represents data-type 
    var errorMessages = {
        field_not_present: "Property '{0}' registered on the field '{1}' is required to be present on form.",
        tab_not_present: "Property '{0}' registered on the tab '{1}' is required to be present on form.",
        section_not_present: "Property '{0}' registered on the section '{1}' is required to be present on form.",
        field_not_present_on_process_stage: "Property '{0}' registered on the field '{1}' is required to be present on form.",
        xrm_object_not_found: "Xrm Object not found.",
        invalid_property_value: "Property '{0}' registered on the field/tab/section '{1}' requires a parameter to be a {2} value.",
        field_property_not_support_for_phones_or_tablets: "Property '{0}' registered on the field '{1}' does not support for phone or tablet device.",
        property_not_support_for_tablets: "Property '{0}' does not support for phone or tablet device.",
        property_not_support_for_phones_or_tablets: "Property '{0}' does not support for phone or tablet device.",
        invalid_config_value: "Property '{0}' requires a parameter to be a {1} value."
    }
    var isMobileClient = (function () {
        return (XrmPage.context.client.getClient() == "Mobile");
    })();
    var formFactor = (function () {
        "use strict";
        var formFactor = XrmPage.context.client.getFormFactor();
        var formFactorType = {
            tablet: false,
            phone: false,
            desktop: false,
            unknown: false
        };

        switch (formFactor) {
            case 0:
                formFactorType.unknown = true;
                break;
            case 1:
                formFactorType.desktop = true;
                break;
            case 2:
                formFactorType.tablet = true;
                break;
            case 3:
                formFactorType.phone = true;
                break;

        }
        return formFactorType;
    })();
    var userSettings = function (fieldReference) {
        "use strict";
        if (!fieldReference) {
            return;
        }

        var _fieldReference = fieldReference;
        userSettings.prototype = {
            setStrictRule: function (flag) {
                ///parameter validation
                if (!validation.isBoolean(flag)) {
                    throw new Error(errorMessages.invalid_config_value.replace("{0}", propertyTypes.setting.strictRule).replace("{1}", dataType.boolean));
                }
                defaultSettings.strictRule = flag;
            },
            getStrictRule: function () {
                return defaultSettings.strictRule;
            }
        }
        Object.defineProperty(_fieldReference, "strictRule", {
            get: userSettings.prototype.getStrictRule,
            set: userSettings.prototype.setStrictRule
        });
    };
    var dataType = {
        ///CRM field data types
        boolean: "Boolean",
        dateTime: "DateTime",
        decimal: "Decimal",
        double: "Double",
        integer: "Integer",
        lookup: "Lookup",
        memo: "Memo",
        money: "Money",
        partyList: "PartyList",
        pickList: "Picklist",
        state: "State",
        status: "Status",
        string: "String",
        uniqueIdentifier: "Uniqueidentifier",
        virtual: "Virtual",
        ///Custom data types
        object: "Object",
        functionType: "Function"
    };
    var propertyTypes = {
        field: {
            value: "value",
            attributeType: "attributeType",
            format: "format",
            isDirty: "isDirty",
            name: "name",
            userPrivilege: "userPrivilege",
            requiredLevel: "requiredLevel",
            submitMode: "submitMode",
            disabled: "disabled",
            label: "label",
            clearNotification: "clearNotification",
            notification: "notification",
            fireOnChange: "fireOnChange",
            setFocus: "setFocus",
            visible: "visible",
            isPartyList: "isPartyList",
            addCustomView: "addCustomView",
            defaultView: "defaultView",
            addPreSearch: "addPreSearch",
            removePreSearch: "removePreSearch",
            addCustomFilter: "addCustomFilter",
            showAutoComplete: "showAutoComplete",
            hideAutoComplete: "hideAutoComplete",
            maxLength: "maxLength",
            fireOnChange: "fireOnChange",
            addOnKeyPress: "addOnKeyPress",
            removeOnKeyPress: "removeOnKeyPress",
            max: "max",
            min: "min",
            precision: "precision",
            initialValue: "initialValue",
            options: "options",
            selectedOption: "selectedOption",
            text: "text",
            showTime: "showTime",
            attribute: "attribute"
        },
        form: {
            viewPortHeight: "viewPortHeight",
            viewPortWidth: "viewPortWidth"
        },
        entity: {
            dataXml: "dataXml"
        },
        tab: {
            displayState: "displayState",
            label: "label",
            visible: "visible",
            parent: "parent",
            focus: "focus",
            name: "name",
        },
        section: {
            name: "name",
            label: "label",
            visible: "visible",
            parent: "parent"
        },
        setting: {
            strictRule: "strictRule"
        }

    };
    var validation = {
        isString: function (value) {
            /// <summary>
            ///  Checks whether value is type of string or not.
            /// </summary>
            /// <param name="value" type="type"></param>
            /// <returns type=""></returns>
            return (typeof value === "string");
        },
        isObject: function (value) {
            /// <summary>
            /// Checks whether value is type of Object or not.
            /// </summary>
            /// <param name="value" type="type"></param>
            /// <returns type=""></returns>
            return (typeof value === "object");
        },
        isGuid: function (value) {
            /// <summary>
            /// Checks whether value is type of GUID or not.
            /// </summary>
            /// <param name="value" type="type"></param>
            /// <returns type=""></returns>
            var validGuid = new RegExp("^({|()?[0-9a-fA-F]{8}-([0-9a-fA-F]{4}-){3}[0-9a-fA-F]{12}(}|))?$")
            if (value && typeof value === "string" && validGuid.test(value)) {
                return true;
            }
            return false;
        },
        isFunction: function (value) {
            /// <summary>
            /// Checks whether value is type of Function or not.
            /// </summary>
            /// <param name="value" type="type"></param>
            /// <returns type=""></returns>
            return (typeof value === "function");
        },
        isArray: function (value) {
            /// <summary>
            ///   Checks whether value is type of Array or not.
            /// </summary>
            /// <param name="value" type="type"></param>
            /// <returns type=""></returns>
            "use strict";
            if (value && Array.isArray(value)) {
                return true;
            }
            return false;
        },
        isNumber: function (value) {
            /// <summary>
            /// Check if input value is number or not
            /// </summary>
            /// <param name="value" type="Number"></param>
            "use strict";
            return (typeof value === "number");
        },
        isBoolean: function (value) {
            "use strict";
            return (typeof value === "boolean");
        }
    };
    return {
        EntityProperties: entityProperties,
        FieldProperties: fieldProperties,
        ContextProperties: contextProperties,
        FormProperties: formProperties,
        UserSettings: userSettings,
        TabProperties: tabProperties,
        SectionProperties: sectionProperties,

    }
})();



if (MK.FSG.Model && !MK.FSGEntity) {
    MK.FSGEntity = new MK.FSG.Model();
}
var currentDate = new Date(); console.log("MK.FSG.Main successfully loaded on " + currentDate.toLocaleDateString() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds())