
function Engine(_fieldReference) {
    var ttt= {};
    Object.defineProperty(this, "showTime", {
        get: fieldProperties.prototype.getShowTime,
    });
    return _fieldRe






/// <reference path="FSG.js" />
/// <reference path="myfilename.js" />
var dataTest = null;

//dataTest = new MK.FSG.Model();

var accpuntCust = {

    onLoad: function () {

        debugger;

        dataTest = new MK.FSG.Model();
        QUnit.test('isEven()', function (assert) {
            dataTest.fields.emailaddress1.value = "mihirkadam16@gmail.com";
            assert.equal(dataTest.fields.emailaddress1.value, "mihirkadam16@gmail.com", 'equal email address');
        })
        QUnit.done(function (details) {
            console.log("Total: ", details.total, " Failed: ", details.failed, " Passed: ", details.passed, " Runtime: ", details.runtime);
        });

        QUnit.log(function (details) {
            if (details.result) {
                return;
            }
            var loc = details.module + ": " + details.name + ": ",
              output = "FAILED: " + loc + (details.message ? details.message + ", " : "");

            if (details.actual) {
                output += "expected: " + details.expected + ", actual: " + details.actual;
            }
            if (details.source) {
                output += ", " + details.source;
            }
            console.log(output);
        });
    },
    onChange: function () {
        /** @description Determines the area of a circle that has the specified radius parameter.
 * @param {number} radius The radius of the circle.
 * @return {number}
 */
        debugger;
        dataTest.fields.name = "mihirform3";

    },
    onSave: function () {
        /** @description Determines the area of a circle that has the specified radius parameter.
 * @param {number} radius The radius of the circle.
 * @return {number}
 */
        Xrm.Page.data.save().then(
        function () {
            Xrm.Utility.alertDialog("Record saved");
        },
        function (error) {
            Xrm.Utility.alertDialog(error.message);
        });

    }



};



"use strict";
var MyNameSpace = window.MyNameSpace || {};
MyNameSpace.WebAPI = MyNameSpace.WebAPI || {};
(function () {
    /** @description Person with whom a business unit has a relationship, such as customer, supplier, and colleague.
    * @property {string} firstname Type the contact's first name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
    * @property {string} lastname Type the contact's last name to make sure the contact is addressed correctly in sales calls, email, and marketing campaigns.
    * @property {number} accountrolecode Select the contact's role within the company or sales process, such as decision maker, employee, or influencer.
    * Valid values are:
    * 1 : Decision Maker
    * 2 : Employee
    * 3 : Influencer
    * @property {boolean} creditonhold Select whether the contact is on a credit hold, for reference when addressing invoice and accounting issues.
    * @property {date} birthdate Enter the contact's birthday for use in customer gift programs or other communications.
    */
    this.contact = function () {

        var _firstName, _lastName, _accountrolecode, _creditonhold, _birthdate;
        Object.defineProperties(this,
                    {
                        "@odata.type": {
                            get: function () { return "Microsoft.Dynamics.CRM.contact"; },
                            enumerable: true
                        },
                        "firstname": {
                            get: function () { return _firstName; },
                            set: function (value) {
                                if (isString(value)) {
                                    _firstName = value;
                                }
                                else {
                                    throw new Error("MyNameSpace.WebAPI.contact.firstname is a string value.")
                                }
                            },
                            enumerable: true
                        },
                        "lastname": {
                            get: function () { return _lastName; },
                            set: function (value) {
                                if (isString(value)) {
                                    _lastName = value;
                                }
                                else {
                                    throw new Error("MyNameSpace.WebAPI.contact.lastname is a string value.")
                                }
                            },
                            enumerable: true
                        },
                        "accountrolecode": {
                            get: function () { return _accountrolecode; },
                            set: function (value) {
                                if (isNumber(value)) {
                                    _accountrolecode = value;
                                }
                                else {
                                    throw new Error("MyNameSpace.WebAPI.contact.accountrolecode is a number value.")
                                }
                            },
                            enumerable: true
                        },
                        "creditonhold": {
                            get: function () { return _creditonhold; },
                            set: function (value) {
                                if (isBoolean(value)) {
                                    _creditonhold = value;
                                }
                                else {
                                    throw new Error("MyNameSpace.WebAPI.contact.creditonhold is a boolean value.")
                                }
                            },
                            enumerable: true
                        },
                        "birthdate": {
                            get: function () { return _birthdate; },
                            set: function (value) {
                                if (isDate(value)) {
                                    _birthdate = value;
                                }
                                else {
                                    throw new Error("MyNameSpace.WebAPI.contact.birthdate is a boolean value.")
                                }
                            },
                            enumerable: true
                        }
                    });
    }

    function isBoolean(value) {
        return (typeof (value) === "boolean");
    }
    function isString(value) {
        return (typeof (value) === "string");
    }
    function isNumber(value) {
        return (typeof (value) === "number");
    }
    function isDate(value) {
        //In case the code needs to cross frame boundaries, not using instanceof Date;
        return Object.prototype.toString.call(value) === '[object Date]';
    }

}).call(MyNameSpace.WebAPI);


var contact = new MyNameSpace.WebAPI.contact();

/** @constructor */
function MyClass(test1) {
    /// <field name="rnd" type="int">Property, defined in constructor</field>
    Object.defineProperty(test1, 'rnd', {
        get: function () { return Math.random(); }
    });
}

var tes = new MyClass("abc");



/**
 * @namespace
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
var config = {
    defaults: {
        players: 1,
        level: 'beginner',
        treasure: {
            gold: 0
        }
    }
};

"use strict";
var MK = MK || {};

MK.FSG = MK.FSG || function () { };

MK.FSG = (function () {


    var entityProperty = function (modelReference) {
        /// <summary>
        ///  This function consist of all methods required for entity property.
        /// </summary>
        /// <param name="modelReference"></param>
        /// <field name="logicalName" type="int">Property, defined in constructor</field>
        var _modelReference = modelReference;
        var logicalName;
        var getEntityName = function () {
            /// <summary>
            /// This function will used to get current entity name
            /// </summary>
            /// <returns type="String"/>
            return MK.FSG.Xrm.data.entity.getEntityName();
            //   return MK.FSG MK.FSG.Xrm.data.entity.getEntityName();
        };
        var getId = function () {
            /// <summary>
            /// Returns a string representing the GUID id value for the record.
            /// </summary>
            /// <returns type="String"/>
            return MK.FSG.Xrm.data.entity.getId();
        };
        var getIsDirty = function () {
            /// <summary>
            /// Returns a Boolean value that indicates if any fields in the form have been modified.
            /// </summary>
            /// <returns type="Boolean">
            /// </returns>
            return MK.FSG.Xrm.data.entity.getIsDirty();
        };
        var allAttributes = function () {
            /// <summary>
            /// Provides methods to access the data for a record displayed on the form
            /// </summary>
            /// <returns type="Array">
            ///     returns array
            /// </returns>
            return MK.FSG.Xrm.data.entity.attributes;
        };
        var getDataXml = function () {
            /// <summary>
            ///  Returns a string representing the XML that will be sent to the server when the record is saved.
            /// </summary>
            /// <returns type="String">
            /// </returns>
            return MK.FSG.Xrm.data.entity.getDataXml();
        };
        var getPrimaryAttributeValue = function () {
            /// <summary>
            ///  Gets a string for the value of the primary attribute of the entity.
            /// </summary>
            /// <returns type="String">
            ///  The value of the primary attribute of the entity.
            /// </returns>
            return MK.FSG.Xrm.data.entity.getPrimaryAttributeValue();
        };
        Object.defineProperty(_modelReference, "logicalName", {
            get: getEntityName
        });
        Object.defineProperty(_modelReference, "id", {
            get: getId
        });
        Object.defineProperty(_modelReference, "isDirty", {
            get: getIsDirty
        });
        Object.defineProperty(_modelReference, "allAttributes", {
            get: allAttributes
        });
        Object.defineProperty(_modelReference, "primaryAttributevalue", {
            get: getPrimaryAttributeValue
        });
        Object.defineProperty(_modelReference, "dataXml", {
            get: getDataXml
        });

    };

    var fieldProperty = function (fieldReference, fieldName, fieldType) {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="fieldReference" type="type"></param>
        /// <param name="fieldName" type="type"></param>
        /// <param name="fieldType" type="type"></param>
        /// <field name="value" type="Any" static="true">Get or Set the data value for an attribute.</field>
        /// <field name="attributeType" type="String" static="false"> Get the type of attribute.
        if (!fieldReference || !fieldName) {
            return;
        }
        var _fieldName = fieldName;
        var _fieldReference = fieldReference;

        this._fieldReference = _fieldReference;

        fieldProperty.prototype = {


            getValue: function () {
                /// <summary>
                ///  Retrieves the data value for an attribute.
                /// </summary>
                /// <returns type="Any">
                ///  Depends on type of attribute.
                /// </returns>
                var _fieldAttribute = Xrm.Page.getAttribute(_fieldName);
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
                var _fieldAttribute = Xrm.Page.getAttribute(_fieldName);
                if (_fieldAttribute) {
                    _fieldAttribute.setValue(value);
                }
            },
        }


        Object.defineProperty(_fieldReference, "value", {
            get: fieldProperty.prototype.getValue,
            set: fieldProperty.prototype.setValue
        });
    };

    return {
        EntityProperty: entityProperty,
        FieldProperty: fieldProperty
    }
})();

var test = {}
MK.FSG.EntityProperty(test);








MK.FSG.solutionVersion = "1.0.0.0";
MK.FSG.version = 1.0;
// MK.FSG
//  -Xrm
//      -Data
//          -Entity
//          -Process

MK.FSG.Settings = function (value) {
    /// <summary>
    /// 
    /// </summary>
    alert(value);
};
MK.FSG.Xrm = (function () {
    /// <summary>
    ///  This function will used to get Xrm object defined by CRM
    /// </summary>
    /// <returns type="Object">
    if (Xrm && Xrm.Page) {
        return Xrm.Page;
    }
    throw new Error("MK.FSG.Xrm function requires Xrm as a Object.");
}());




MK.FSG.FieldProperty = (function (fieldReference, fieldName, fieldType) {
    /// <summary>
    /// 
    /// </summary>
    /// <param name="fieldReference" type="type"></param>
    /// <param name="fieldName" type="type"></param>
    /// <param name="fieldType" type="type"></param>
    /// <field name="value" type="Any" static="true">Get or Set the data value for an attribute.</field>
    /// <field name="attributeType" type="String" static="false"> Get the type of attribute.</field>
    if (!fieldReference || !fieldName) {
        return;
    }
    var _fieldName = fieldName;
    var _fieldReference = fieldReference;

    this._fieldReference = _fieldReference;
    MK.FSG.FieldProperty.prototype = {


        getValue: function () {
            /// <summary>
            ///  Retrieves the data value for an attribute.
            /// </summary>
            /// <returns type="Any">
            ///  Depends on type of attribute.
            /// </returns>
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
            if (_fieldAttribute) {
                return _fieldAttribute.getSubmitMode();
            }
            return null;
        },
        setSubmitMode: function (value) {
            /// <summary>
            /// Sets whether data from the attribute will be submitted when the record is saved
            /// </summary>
            /// <param name="value" type="Boolean">
            /// One of the following values:
            ///      1.always: The data is always sent with a save.
            ///      2.never: The data is never sent with a save. When this is used the field(s) in the form for this attribute cannot be edited.
            ///      3.dirty: Default behavior. The data is sent with the save when it has changed
            /// </param>
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
            if (_fieldControl) {
                _fieldControl.setDisabled(value);
            }
        },
        getLabel: function () {
            /// <summary>
            ///  the name assigned to the control
            /// </summary>
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
            if (_fieldControl) {
                if (flag) {
                    _fieldControl.setFocus();
                }
            }
        },
        getVisible: function () {
            /// <summary>
            /// Returns a value that indicates whether the control is currently visible.
            /// </summary>
            /// <returns type="Boolean">
            ///  True if the control is visible; otherwise, false.
            /// <returns/>
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldAttribute = MK.FSG.Main.GetAttribute(_fieldName);
            if (_fieldAttribute) {
                _fieldAttribute.fireOnChange();
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

            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
            if (_fieldControl) {
                return _fieldControl.getDefaultView();
            }
            return null;
        },
        setDefaultView: function (viewId) {
            /// <summary>
            ///  Returns the ID value of the default lookup dialog view.
            /// </summary>
            /// <param name="viewId">
            ///   The ID of the view to be set as the default view.
            /// </param>
            ///need to verify id
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
            if (_fieldControl) {
                _fieldControl.setNotification(notificationObject.message, notificationObject.uniqueId);
            }
        },
        clearNotification: function (uniqueId) {
            /// <summary>
            ///  Display a message near the control to indicate that data isn’t valid.
            /// </summary>
            /// <param name="uniqueId" type="String">
            ///     The uniqueId to use to clear a specific message set using setNotification.
            /// </param>
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
            if (_fieldControl) {
                _fieldControl.clearNotification(uniqueId);
            }
        },
        addPreSearch: function (value) {
            /// <summary>
            /// Use this method to apply changes to lookups based on values current just as the user is about to view results for the lookup.
            /// </summary>
            /// <param name="value" type="Function">
            /// True if the fireOnChange should be execute; otherwise, false.
            /// </param>
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetAttribute(_fieldName);
            if (_fieldControl) {
                return _fieldControl.getSelectedOption();
            }
            return null;
        },
        getOptions: function () {
            /// <summary>
            /// Returns an array of option objects representing the valid options for an optionset attribute.
            /// </summary>
            /// <param name="value" type="String or Number ">
            ///     The uniqueId to use to clear a specific message set using setNotification.
            /// </param>
            /// <returns type="Array">
            /// Array of option objects.
            /// <returns/>
            var _fieldControl = MK.FSG.Main.GetAttribute(_fieldName);
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
            /// Array of option objects.
            /// <returns/>
            var _fieldControl = MK.FSG.Main.GetAttribute(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
            if (_fieldControl) {
                _fieldControl.removeOnKeyPress(value);
            }
        },
        fireOnKeyPress: function (flag) {
            /// <summary>
            ///Use this to remove an event handler for a text or number field that you added using addOnKeyPress.
            /// </summary>
            /// <param name="flag" type="Boolean">
            ///The function will be removed from the event handler pipeline that is set via addOnKeyPress.
            /// </param>
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
            if (_fieldControl) {
                if (flag) {
                    _fieldControl.fireOnKeyPress();
                }
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
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
            var _fieldControl = MK.FSG.Main.GetControl(_fieldName);
            if (_fieldControl) {
                if (flag) {
                    _fieldControl.hideAutoComplete();
                }
            }
        }


    };

    Object.defineProperty(_fieldReference, "value", {
        get: MK.FSG.FieldProperty.prototype.getValue,
        set: MK.FSG.FieldProperty.prototype.setValue
    });
    Object.defineProperty(_fieldReference, "attributeType", {
        get: MK.FSG.FieldProperty.prototype.getAttributeType
    });
    Object.defineProperty(_fieldReference, "format", {
        get: MK.FSG.FieldProperty.prototype.getFormat
    });
    Object.defineProperty(_fieldReference, "isDirty", {
        get: MK.FSG.FieldProperty.prototype.getIsDirty
    });
    Object.defineProperty(_fieldReference, "name", {
        get: MK.FSG.FieldProperty.prototype.getName
    });
    Object.defineProperty(_fieldReference, "userPrivilege", {
        get: MK.FSG.FieldProperty.prototype.getUserPrivilege
    });
    Object.defineProperty(_fieldReference, "requiredLevel", {
        get: MK.FSG.FieldProperty.prototype.getRequiredLevel,
        set: MK.FSG.FieldProperty.prototype.setRequiredLevel
    });
    Object.defineProperty(_fieldReference, "submitMode", {
        get: MK.FSG.FieldProperty.prototype.getSubmitMode,
        set: MK.FSG.FieldProperty.prototype.setSubmitMode
    });
    Object.defineProperty(_fieldReference, "disabled", {
        get: MK.FSG.FieldProperty.prototype.getDisabled,
        set: MK.FSG.FieldProperty.prototype.setDisabled
    });
    Object.defineProperty(_fieldReference, "label", {
        get: MK.FSG.FieldProperty.prototype.getLabel,
        set: MK.FSG.FieldProperty.prototype.setLabel
    });
    Object.defineProperty(_fieldReference, "clearNotification", {
        set: MK.FSG.FieldProperty.prototype.clearNotification
    });
    Object.defineProperty(_fieldReference, "notification", {
        set: MK.FSG.FieldProperty.prototype.setNotification
    });
    Object.defineProperty(_fieldReference, "fireOnChange", {
        set: MK.FSG.FieldProperty.prototype.fireOnChange
    });
    Object.defineProperty(_fieldReference, "setFocus", {
        set: MK.FSG.FieldProperty.prototype.setFocus
    });
    Object.defineProperty(_fieldReference, "visible", {
        get: MK.FSG.FieldProperty.prototype.getVisible,
        set: MK.FSG.FieldProperty.prototype.setVisible
    });

    switch (fieldType) {
        case MK.FSG.DataType.lookup:
            Object.defineProperty(_fieldReference, "isPartyList", {
                get: MK.FSG.FieldProperty.prototype.getIsPartyList
            });
            Object.defineProperty(_fieldReference, "addCustomView", {
                set: MK.FSG.FieldProperty.prototype.addCustomView
            });
            Object.defineProperty(_fieldReference, "defaultView", {
                get: MK.FSG.FieldProperty.prototype.getDefaultView,
                set: MK.FSG.FieldProperty.prototype.setDefaultView
            });
            Object.defineProperty(_fieldReference, "addPreSearch", {
                set: MK.FSG.FieldProperty.prototype.addPreSearch
            });
            Object.defineProperty(_fieldReference, "removePreSearch", {
                set: MK.FSG.FieldProperty.prototype.removePreSearch
            });
            Object.defineProperty(_fieldReference, "addCustomFilter", {
                set: MK.FSG.FieldProperty.prototype.addCustomFilter
            });
            break;
        case MK.FSG.DataType.string:
            Object.defineProperty(_fieldReference, "showAutoComplete", {
                set: MK.FSG.FieldProperty.prototype.showAutoComplete
            });
            Object.defineProperty(_fieldReference, "hideAutoComplete", {
                set: MK.FSG.FieldProperty.prototype.hideAutoComplete
            });
        case MK.FSG.DataType.memo:
            Object.defineProperty(_fieldReference, "maxLength", {
                get: MK.FSG.FieldProperty.prototype.getMaxLength
            });
            Object.defineProperty(_fieldReference, "fireOnChange", {
                set: MK.FSG.FieldProperty.prototype.fireOnChange
            });
            Object.defineProperty(_fieldReference, "addOnKeyPress", {
                set: MK.FSG.FieldProperty.prototype.addOnKeyPress
            });
            Object.defineProperty(_fieldReference, "removeOnKeyPress", {
                set: MK.FSG.FieldProperty.prototype.removeOnKeyPress
            });
            break;
        case MK.FSG.DataType.money:
        case MK.FSG.DataType.integer:
        case MK.FSG.DataType.decimal:
        case MK.FSG.DataType.double:
            Object.defineProperty(_fieldReference, "max", {
                get: MK.FSG.FieldProperty.prototype.getMax
            });
            Object.defineProperty(_fieldReference, "min", {
                get: MK.FSG.FieldProperty.prototype.getMin
            });
            Object.defineProperty(_fieldReference, "precision", {
                get: MK.FSG.FieldProperty.prototype.getPrecision
            });
            Object.defineProperty(_fieldReference, "fireOnChange", {
                set: MK.FSG.FieldProperty.prototype.fireOnChange
            });
            Object.defineProperty(_fieldReference, "addOnKeyPress", {
                get: MK.FSG.FieldProperty.prototype.addOnKeyPress
            });
            Object.defineProperty(_fieldReference, "removeOnKeyPress", {
                get: MK.FSG.FieldProperty.prototype.removeOnKeyPress
            });
            break;
        case MK.FSG.DataType.boolean:
            Object.defineProperty(_fieldReference, "initialValue", {
                get: MK.FSG.FieldProperty.prototype.getInitialValue
            });
            break;
        case MK.FSG.DataType.pickList:
            Object.defineProperty(_fieldReference, "initialValue", {
                get: MK.FSG.FieldProperty.prototype.getInitialValue
            });
            Object.defineProperty(_fieldReference, "options", {
                get: MK.FSG.FieldProperty.prototype.getOptions
            });
            Object.defineProperty(_fieldReference, "selectedOption", {
                get: MK.FSG.FieldProperty.prototype.getSelectedOption
            });
            Object.defineProperty(_fieldReference, "text", {
                get: MK.FSG.FieldProperty.prototype.getText
            });
            break;
        case MK.FSG.DataType.dateTime:
            Object.defineProperty(_fieldReference, "showTime", {
                get: MK.FSG.FieldProperty.prototype.getShowTime,
                set: MK.FSG.FieldProperty.prototype.setShowTime
            });
            break;

    }
    return _fieldReference;
});

MK.FSG = function () {

    /// <summary>
    /// 
    /// </summary>
    /// <param name=") {" type="type"></param>
    /// <returns type=""></returns>
    /// <field name="value" type="Any" static="true">Retrieves or sets the data value for an attribute.</field>
    /// <field name="attributeType"  type="String" static="false">Represents the type of attribute.</field>
  
    //return {
    //    FieldProperties: fieldProperties,
    //}
};

MK.FSG.FieldProperties = function (fieldReference, fieldName, fieldType) {
    "use strict";
    /// <summary>
    /// 
    /// </summary>
    /// <param name="fieldReference" type="Object"></param>
    /// <param name="fieldName" type="String"></param>
    /// <param name="fieldType" type="String"></param>
  
        
    
};



MK.Model = function (value) {
    /// <summary>
    /// 
    /// </summary>
    /// <param name="value" type="type"></param>


    /// <returns type=""></returns>
    "use strict";
    var accountModel = {};
    if (!MK.FSG) {
        Xrm.Utility.alertDialog("MK.FSG is not present.");
        return;
    };

    MK.FSG.EntityProperty(accountModel)
    accountModel.form = {};
    MK.FSG.FormProperty(accountModel.form)
    accountModel.context = {};

    MK.FSG.ContextProperty(accountModel.context)
    /// <field name="fields" static="false" type="int">Property, defined in constructor</field>
    accountModel.fields = {
    };

    //accountModel.fields.email ={};
    var fieldList = [];


    //accountModel.fields.emailaddress3 = {};
    //MK.FSG.FieldProperty(accountModel.fields.emailaddress3, "emailaddress3", "String");

    
    
    accountModel.fields = {
        /// <field name="emailaddress3" type="String"> DisplayName: Email Address 3
        /// <para />Description: Type an alternate email address for the account. </field>
        emailaddress3: {
            dataType: "String"
        },
        /// <field name="emailaddress2" type="String"> DisplayName: Email Address 2
        /// <para />Description: Type the secondary email address for the account. </field>
        emailaddress2: {
            dataType: "String"
        },
        /// <field name="emailaddress1" type="String"> DisplayName: Email
        /// <para />Description: Type the primary email address for the account. </field>
        emailaddress1: {
            dataType: "String"
        },
        /// <field name="slaid" type="Lookup"> DisplayName: SLA
        /// <para />Description: Choose the service level agreement (SLA) that you want to apply to the Account record. </field>
        slaid: {
            dataType: "Lookup"
        },
        /// <field name="modifiedon" type="DateTime"> DisplayName: Modified On
        /// <para />Description: Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics CRM options. </field>
        modifiedon: {
            dataType: "DateTime"
        },
        /// <field name="aging90" type="Money"> DisplayName: Aging 90
        /// <para />Description: For system use only. </field>
        aging90: {
            dataType: "Money"
        },
        /// <field name="overriddencreatedon" type="DateTime"> DisplayName: Record Created On
        /// <para />Description: Date and time that the record was migrated. </field>
        overriddencreatedon: {
            dataType: "DateTime"
        },
        /// <field name="websiteurl" type="String"> DisplayName: Website
        /// <para />Description: Type the account's website URL to get quick details about the company profile. </field>
        websiteurl: {
            dataType: "String"
        },
        /// <field name="donotpostalmail" type="Boolean"> DisplayName: Do not allow Mails
        /// <para />Description: Select whether the account allows direct mail. If Do Not Allow is selected, the account will be excluded from letter activities distributed in marketing campaigns. </field>
        donotpostalmail: {
            dataType: "Boolean"
        },
        /// <field name="openrevenue" type="Money"> DisplayName: Open Revenue
        /// <para />Description: Sum of open revenue against an account and its child accounts. </field>
        openrevenue: {
            dataType: "Money"
        },
        
    }

    for (var key in accountModel.fields) {
        dataType = accountModel.fields[key].dataType;
        accountModel.fields[key] = {};
        MK.FSG.FieldProperties(accountModel.fields[key], key, dataType);
    }
    

    //  MK.FSG.FieldProperty(accountModel.fields.statecode, "statecode", "State");
    accountModel.fields.aging90
    return accountModel;
}





var tes =  new MK.Model();




var Field = (function () {

    
    var A = function (fieldReference, fieldName) {
    
        var _fieldName = fieldRef;
        var _fieldReference = fieldReference;
        var _errorMessage = "";


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
        Object.defineProperty(_fieldReference, "clearNotification", {
            set: fieldProperties.prototype.clearNotification
        });
        Object.defineProperty(_fieldReference, "notification", {
            set: fieldProperties.prototype.setNotification
        });
        Object.defineProperty(_fieldReference, "fireOnChange", {
            set: fieldProperties.prototype.fireOnChange
        });
        Object.defineProperty(_fieldReference, "setFocus", {
            set: fieldProperties.prototype.setFocus
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

        return _fieldReference;
        // return fieldRef;
    };


    var fieldProperties = function (fieldReference, fieldName, fieldType,isTypeControl) {
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
        fieldProperties.prototype = {
            getValue: function () {
                /// <summary>
                ///  Retrieves the data value for an attribute.
                /// </summary>
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
            getAttribute : function(){
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
                /// True if the fireOnChange should be execute; otherwise, false.
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
                /// Array of option objects.
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

        function lookupProperties(){
        
        
        }



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


    return {
        ABC:A,  
        FieldProperties: fieldProperties,
    }
})();



var B = function (accountModel) 
    "use strict";
    var accountModel ={};
    accountModel.field = {
        /// <field name="emailaddress3" type="String"> DisplayName: Email Address 3
        /// <para />Description: Type an alternate email address for the account. </field>
        emailaddress3: {
            dataType: "String"
        },
        /// <field name="emailaddress2" type="String"> DisplayName: Email Address 2
        /// <para />Description: Type the secondary email address for the account. </field>
        emailaddress2: {
            dataType: "Lookup"
        },
      
    }


   


    var dataType = {};
    for (var key in accountModel.field) {

        if (key === "openrevenue") {
            break;
        }
        dataType = accountModel.field[key].dataType;
        accountModel.field[key] = {};
        Field.FieldProperties(accountModel.field[key], key, dataType);

    }
    accountModel.field.emailaddress3
    return accountModel;
}

var test =new B();


function Engine(_fieldReference) {
    var ttt= {};
    Object.defineProperty(ttt, "showTime", {
        get: fieldProperties.prototype.getShowTime,
    });
  
    return _fieldReference;
}

var fieldReference ={}
var tres = new Engine(fieldReference);
/**
 @typedef generatedPoint
 @type {Object}
 @property {number} x The x coordinate.
 @property {number} y The y coordinate.
 */
var pointFactory = function (x, y) {
    return {
        x: x,
        y: y
    }
}
var rr= pointFactory(5, 5);


// IntelliSense on the field is available here.


//var abc= {};

/**********************************************************************************************//**
 * @fn  function Sys$CancelEventArgs$get_cancel()
 *
 * @brief   Sys$ cancel event args$get cancel.
 *
 * @author  Kadam
 * @date    23-10-2016
 *
 * @return  .
 **************************************************************************************************/

function Sys$CancelEventArgs$get_cancel() {
    /// <value type="Boolean" locid="P:J#Sys.CancelEventArgs.cancel"></value>
    if (arguments.length !== 0) throw Error.parameterCount();
    return this._cancel();
}



function areaFunction(radiusParam) {
    /// <deprecated type="deprecate" >Determines the area of a circle when supplied a radius parameter.</deprecated>
    /// <param name="radiusParam" type="Number">The radius of the circle.</param>
    /// <returns type="Number">The area.</returns>
    var areaVal;
    areaVal = Math.PI * radiusParam * radiusParam;
    return areaVal;
}


function test(config) {

}
