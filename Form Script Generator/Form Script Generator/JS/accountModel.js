"use strict"
var MK = MK || {};
MK.FSG = MK.FSG || {};
MK.FSG.Model = function (value) {
    "use strict";
    var accountModel = {};
    if (!MK.FSG.Main) {
        Xrm.Utility.alertDialog("Form Script Generator library not found.");
        return;
    };
    MK.FSG.Main.UserSettings(value);

    MK.FSG.Main.EntityProperties(accountModel);

    accountModel.form = {};
    MK.FSG.Main.FormProperties(accountModel.form);

    accountModel.context = {};
    MK.FSG.Main.ContextProperties(accountModel.context);


    accountModel.field = {
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
        /// <para />Description: Shows the date and time when the record was last updated. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. </field>
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
        /// <field name="transactioncurrencyid" type="Lookup"> DisplayName: Currency
        /// <para />Description: Choose the local currency for the record to make sure budgets are reported in the correct currency. </field>
        transactioncurrencyid: {
            dataType: "Lookup"
        },
        /// <field name="sharesoutstanding" type="Integer"> DisplayName: Shares Outstanding
        /// <para />Description: Type the number of shares available to the public for the account. This number is used as an indicator in financial performance analysis. </field>
        sharesoutstanding: {
            dataType: "Integer"
        },
        /// <field name="donotsendmm" type="Boolean"> DisplayName: Send Marketing Materials
        /// <para />Description: Select whether the account accepts marketing materials, such as brochures or catalogs. </field>
        donotsendmm: {
            dataType: "Boolean"
        },
        /// <field name="creditonhold" type="Boolean"> DisplayName: Credit Hold
        /// <para />Description: Select whether the credit for the account is on hold. This is a useful reference while addressing the invoice and accounting issues with the customer. </field>
        creditonhold: {
            dataType: "Boolean"
        },
        /// <field name="aging30" type="Money"> DisplayName: Aging 30
        /// <para />Description: For system use only. </field>
        aging30: {
            dataType: "Money"
        },
        /// <field name="originatingleadid" type="Lookup"> DisplayName: Originating Lead
        /// <para />Description: Shows the lead that the account was created from if the account was created by converting a lead in Microsoft Dynamics 365. This is used to relate the account to data on the originating lead for use in reporting and analytics. </field>
        originatingleadid: {
            dataType: "Lookup"
        },
        /// <field name="accountcategorycode" type="Picklist"> DisplayName: Category
        /// <para />Description: Select a category to indicate whether the customer account is standard or preferred. </field>
        accountcategorycode: {
            dataType: "Picklist"
        },
        /// <field name="territoryid" type="Lookup"> DisplayName: Territory
        /// <para />Description: Choose the sales region or territory for the account to make sure the account is assigned to the correct representative and for use in segmentation and analysis. </field>
        territoryid: {
            dataType: "Lookup"
        },
        /// <field name="aging60_base" type="Money"> DisplayName: Aging 60 (Base)
        /// <para />Description: The base currency equivalent of the aging 60 field. </field>
        aging60_base: {
            dataType: "Money"
        },
        /// <field name="onholdtime" type="Integer"> DisplayName: On Hold Time (Minutes)
        /// <para />Description: Shows how long, in minutes, that the record was on hold. </field>
        onholdtime: {
            dataType: "Integer"
        },
        /// <field name="creditlimit" type="Money"> DisplayName: Credit Limit
        /// <para />Description: Type the credit limit of the account. This is a useful reference when you address invoice and accounting issues with the customer. </field>
        creditlimit: {
            dataType: "Money"
        },
        /// <field name="openrevenue_base" type="Money"> DisplayName: Open Revenue (Base)
        /// <para />Description: Sum of open revenue against an account and its child accounts. </field>
        openrevenue_base: {
            dataType: "Money"
        },
        /// <field name="preferredappointmenttimecode" type="Picklist"> DisplayName: Preferred Time
        /// <para />Description: Select the preferred time of day for service appointments. </field>
        preferredappointmenttimecode: {
            dataType: "Picklist"
        },
        /// <field name="numberofemployees" type="Integer"> DisplayName: No. of Employees
        /// <para />Description: Type the number of employees that work at the account for use in marketing segmentation and demographic analysis. </field>
        numberofemployees: {
            dataType: "Integer"
        },
        /// <field name="revenue" type="Money"> DisplayName: Annual Revenue
        /// <para />Description: Type the annual revenue for the account, used as an indicator in financial performance analysis. </field>
        revenue: {
            dataType: "Money"
        },
        /// <field name="customertypecode" type="Picklist"> DisplayName: Relationship Type
        /// <para />Description: Select the category that best describes the relationship between the account and your organization. </field>
        customertypecode: {
            dataType: "Picklist"
        },
        /// <field name="exchangerate" type="Decimal"> DisplayName: Exchange Rate
        /// <para />Description: Shows the conversion rate of the record's currency. The exchange rate is used to convert all money fields in the record from the local currency to the system's default currency. </field>
        exchangerate: {
            dataType: "Decimal"
        },
        /// <field name="primarycontactid" type="Lookup"> DisplayName: Primary Contact
        /// <para />Description: Choose the primary contact for the account to provide quick access to contact details. </field>
        primarycontactid: {
            dataType: "Lookup"
        },
        /// <field name="telephone3" type="String"> DisplayName: Telephone 3
        /// <para />Description: Type a third phone number for this account. </field>
        telephone3: {
            dataType: "String"
        },
        /// <field name="parentaccountid" type="Lookup"> DisplayName: Parent Account
        /// <para />Description: Choose the parent account associated with this account to show parent and child businesses in reporting and analytics. </field>
        parentaccountid: {
            dataType: "Lookup"
        },
        /// <field name="statuscode" type="Status"> DisplayName: Status Reason
        /// <para />Description: Select the account's status. </field>
        statuscode: {
            dataType: "Status"
        },
        /// <field name="createdon" type="DateTime"> DisplayName: Created On
        /// <para />Description: Shows the date and time when the record was created. The date and time are displayed in the time zone selected in Microsoft Dynamics 365 options. </field>
        createdon: {
            dataType: "DateTime"
        },
        /// <field name="donotfax" type="Boolean"> DisplayName: Do not allow Faxes
        /// <para />Description: Select whether the account allows faxes. If Do Not Allow is selected, the account will be excluded from fax activities distributed in marketing campaigns. </field>
        donotfax: {
            dataType: "Boolean"
        },
        /// <field name="marketcap" type="Money"> DisplayName: Market Capitalization
        /// <para />Description: Type the market capitalization of the account to identify the company's equity, used as an indicator in financial performance analysis. </field>
        marketcap: {
            dataType: "Money"
        },
        /// <field name="ownershipcode" type="Picklist"> DisplayName: Ownership
        /// <para />Description: Select the account's ownership structure, such as public or private. </field>
        ownershipcode: {
            dataType: "Picklist"
        },
        /// <field name="lastusedincampaign" type="DateTime"> DisplayName: Last Date Included in Campaign
        /// <para />Description: Shows the date when the account was last included in a marketing campaign or quick campaign. </field>
        lastusedincampaign: {
            dataType: "DateTime"
        },
        /// <field name="description" type="Memo"> DisplayName: Description
        /// <para />Description: Type additional information to describe the account, such as an excerpt from the company's website. </field>
        description: {
            dataType: "Memo"
        },
        /// <field name="modifiedby" type="Lookup"> DisplayName: Modified By
        /// <para />Description: Shows who last updated the record. </field>
        modifiedby: {
            dataType: "Lookup"
        },
        /// <field name="modifiedonbehalfby" type="Lookup"> DisplayName: Modified By (Delegate)
        /// <para />Description: Shows who created the record on behalf of another user. </field>
        modifiedonbehalfby: {
            dataType: "Lookup"
        },
        /// <field name="donotemail" type="Boolean"> DisplayName: Do not allow Emails
        /// <para />Description: Select whether the account allows direct email sent from Microsoft Dynamics 365. </field>
        donotemail: {
            dataType: "Boolean"
        },
        /// <field name="aging60" type="Money"> DisplayName: Aging 60
        /// <para />Description: For system use only. </field>
        aging60: {
            dataType: "Money"
        },
        /// <field name="yominame" type="String"> DisplayName: Yomi Account Name
        /// <para />Description: Type the phonetic spelling of the company name, if specified in Japanese, to make sure the name is pronounced correctly in phone calls and other communications. </field>
        yominame: {
            dataType: "String"
        },
        /// <field name="industrycode" type="Picklist"> DisplayName: Industry
        /// <para />Description: Select the account's primary industry for use in marketing segmentation and demographic analysis. </field>
        industrycode: {
            dataType: "Picklist"
        },
        /// <field name="primarysatoriid" type="String"> DisplayName: Primary Satori ID
        /// <para />Description: Primary Satori ID for Account </field>
        primarysatoriid: {
            dataType: "String"
        },
        /// <field name="name" type="String"> DisplayName: Account Name
        /// <para />Description: Type the company or business name. </field>
        name: {
            dataType: "String"
        },
        /// <field name="donotphone" type="Boolean"> DisplayName: Do not allow Phone Calls
        /// <para />Description: Select whether the account allows phone calls. If Do Not Allow is selected, the account will be excluded from phone call activities distributed in marketing campaigns. </field>
        donotphone: {
            dataType: "Boolean"
        },
        /// <field name="primarytwitterid" type="String"> DisplayName: Primary Twitter ID
        /// <para />Description: Primary Twitter ID for Account </field>
        primarytwitterid: {
            dataType: "String"
        },
        /// <field name="createdbyexternalparty" type="Lookup"> DisplayName: Created By (External Party)
        /// <para />Description: Shows the external party who created the record. </field>
        createdbyexternalparty: {
            dataType: "Lookup"
        },
        /// <field name="paymenttermscode" type="Picklist"> DisplayName: Payment Terms
        /// <para />Description: Select the payment terms to indicate when the customer needs to pay the total amount. </field>
        paymenttermscode: {
            dataType: "Picklist"
        },
        /// <field name="marketingonly" type="Boolean"> DisplayName: Marketing Only
        /// <para />Description: Whether is only for marketing </field>
        marketingonly: {
            dataType: "Boolean"
        },
        /// <field name="preferredequipmentid" type="Lookup"> DisplayName: Preferred Facility/Equipment
        /// <para />Description: Choose the account's preferred service facility or equipment to make sure services are scheduled correctly for the customer. </field>
        preferredequipmentid: {
            dataType: "Lookup"
        },
        /// <field name="createdonbehalfby" type="Lookup"> DisplayName: Created By (Delegate)
        /// <para />Description: Shows who created the record on behalf of another user. </field>
        createdonbehalfby: {
            dataType: "Lookup"
        },
        /// <field name="fax" type="String"> DisplayName: Fax
        /// <para />Description: Type the fax number for the account. </field>
        fax: {
            dataType: "String"
        },
        /// <field name="sic" type="String"> DisplayName: SIC Code
        /// <para />Description: Type the Standard Industrial Classification (SIC) code that indicates the account's primary industry of business, for use in marketing segmentation and demographic analysis. </field>
        sic: {
            dataType: "String"
        },
        /// <field name="ownerid" type="Owner"> DisplayName: Owner
        /// <para />Description: Enter the user or team who is assigned to manage the record. This field is updated every time the record is assigned to a different user. </field>
        ownerid: {
            dataType: "Owner"
        },
        /// <field name="accountnumber" type="String"> DisplayName: Account Number
        /// <para />Description: Type an ID number or code for the account to quickly search and identify the account in system views. </field>
        accountnumber: {
            dataType: "String"
        },
        /// <field name="creditlimit_base" type="Money"> DisplayName: Credit Limit (Base)
        /// <para />Description: Shows the credit limit converted to the system's default base currency for reporting purposes. </field>
        creditlimit_base: {
            dataType: "Money"
        },
        /// <field name="revenue_base" type="Money"> DisplayName: Annual Revenue (Base)
        /// <para />Description: Shows the annual revenue converted to the system's default base currency. The calculations use the exchange rate specified in the Currencies area. </field>
        revenue_base: {
            dataType: "Money"
        },
        /// <field name="modifiedbyexternalparty" type="Lookup"> DisplayName: Modified By (External Party)
        /// <para />Description: Shows the external party who modified the record. </field>
        modifiedbyexternalparty: {
            dataType: "Lookup"
        },
        /// <field name="defaultpricelevelid" type="Lookup"> DisplayName: Price List
        /// <para />Description: Choose the default price list associated with the account to make sure the correct product prices for this customer are applied in sales opportunities, quotes, and orders. </field>
        defaultpricelevelid: {
            dataType: "Lookup"
        },
        /// <field name="ftpsiteurl" type="String"> DisplayName: FTP Site
        /// <para />Description: Type the URL for the account's FTP site to enable users to access data and share documents. </field>
        ftpsiteurl: {
            dataType: "String"
        },
        /// <field name="aging90_base" type="Money"> DisplayName: Aging 90 (Base)
        /// <para />Description: The base currency equivalent of the aging 90 field. </field>
        aging90_base: {
            dataType: "Money"
        },
        /// <field name="lastonholdtime" type="DateTime"> DisplayName: Last On Hold Time
        /// <para />Description: Contains the date and time stamp of the last on hold time. </field>
        lastonholdtime: {
            dataType: "DateTime"
        },
        /// <field name="createdby" type="Lookup"> DisplayName: Created By
        /// <para />Description: Shows who created the record. </field>
        createdby: {
            dataType: "Lookup"
        },
        /// <field name="followemail" type="Boolean"> DisplayName: Follow Email Activity
        /// <para />Description: Information about whether to allow following email activity like opens, attachment views and link clicks for emails sent to the account. </field>
        followemail: {
            dataType: "Boolean"
        },
        /// <field name="marketcap_base" type="Money"> DisplayName: Market Capitalization (Base)
        /// <para />Description: Shows the market capitalization converted to the system's default base currency. </field>
        marketcap_base: {
            dataType: "Money"
        },
        /// <field name="tickersymbol" type="String"> DisplayName: Ticker Symbol
        /// <para />Description: Type the stock exchange symbol for the account to track financial performance of the company. You can click the code entered in this field to access the latest trading information from MSN Money. </field>
        tickersymbol: {
            dataType: "String"
        },
        /// <field name="stockexchange" type="String"> DisplayName: Stock Exchange
        /// <para />Description: Type the stock exchange at which the account is listed to track their stock and financial performance of the company. </field>
        stockexchange: {
            dataType: "String"
        },
        /// <field name="preferredserviceid" type="Lookup"> DisplayName: Preferred Service
        /// <para />Description: Choose the account's preferred service for reference when you schedule service activities. </field>
        preferredserviceid: {
            dataType: "Lookup"
        },
        /// <field name="preferredcontactmethodcode" type="Picklist"> DisplayName: Preferred Method of Contact
        /// <para />Description: Select the preferred method of contact. </field>
        preferredcontactmethodcode: {
            dataType: "Picklist"
        },
        /// <field name="importsequencenumber" type="Integer"> DisplayName: Import Sequence Number
        /// <para />Description: Unique identifier of the data import or data migration that created this record. </field>
        importsequencenumber: {
            dataType: "Integer"
        },
        /// <field name="telephone2" type="String"> DisplayName: Other Phone
        /// <para />Description: Type a second phone number for this account. </field>
        telephone2: {
            dataType: "String"
        },
        /// <field name="preferredsystemuserid" type="Lookup"> DisplayName: Preferred User
        /// <para />Description: Choose the preferred service representative for reference when you schedule service activities for the account. </field>
        preferredsystemuserid: {
            dataType: "Lookup"
        },
        /// <field name="accountid" type="Uniqueidentifier"> DisplayName: Account
        /// <para />Description: Unique identifier of the account. </field>
        accountid: {
            dataType: "Uniqueidentifier"
        },
        /// <field name="telephone1" type="String"> DisplayName: Main Phone
        /// <para />Description: Type the main phone number for this account. </field>
        telephone1: {
            dataType: "String"
        },
        /// <field name="aging30_base" type="Money"> DisplayName: Aging 30 (Base)
        /// <para />Description: The base currency equivalent of the aging 30 field. </field>
        aging30_base: {
            dataType: "Money"
        },
        /// <field name="preferredappointmentdaycode" type="Picklist"> DisplayName: Preferred Day
        /// <para />Description: Select the preferred day of the week for service appointments. </field>
        preferredappointmentdaycode: {
            dataType: "Picklist"
        },
        /// <field name="opendeals" type="Integer"> DisplayName: Open Deals
        /// <para />Description: Number of open opportunities against an account and its child accounts. </field>
        opendeals: {
            dataType: "Integer"
        },
        /// <field name="statecode" type="State"> DisplayName: Status
        /// <para />Description: Shows whether the account is active or inactive. Inactive accounts are read-only and can't be edited unless they are reactivated. </field>
        statecode: {
            dataType: "State"
        },
    }

    accountModel.tab = {
        /// <field name="SUMMARY_TAB"> Label: Summary</field>
        SUMMARY_TAB: {},
        /// <field name="DETAILS_TAB"> Label: Details</field>
        DETAILS_TAB: {},
    }

    accountModel.section = {
        /// <field name="ACCOUNT_INFORMATION" > Label: ACCOUNT INFORMATION</field> 
        ACCOUNT_INFORMATION: {},
        /// <field name="ADDRESS" > Label: ADDRESS</field> 
        ADDRESS: {},
        /// <field name="MapSection" > Label: </field> 
        MapSection: {},
        /// <field name="COMPANY_PROFILE" > Label: COMPANY PROFILE</field> 
        COMPANY_PROFILE: {},
        /// <field name="DETAILS_TAB_section_6" > Label: Description</field> 
        DETAILS_TAB_section_6: {},
        /// <field name="MARKETING" > Label: MARKETING</field> 
        MARKETING: {},
        /// <field name="CONTACT_PREFERENCES" > Label: CONTACT PREFERENCES</field> 
        CONTACT_PREFERENCES: {},
        /// <field name="BILLING" > Label: BILLING</field> 
        BILLING: {},
        /// <field name="SHIPPING" > Label: SHIPPING</field> 
        SHIPPING: {},
        /// <field name="ChildAccounts" > Label: CHILD ACCOUNTS</field> 
        ChildAccounts: {},
    }

    accountModel.header = {
        revenue: undefined.fieldrevenue,
    }

    var dataType = {};
    for (var key in accountModel.field) {
        dataType = accountModel.field[key].dataType;
        accountModel.field[key] = {};
        MK.FSG.Main.FieldProperties(accountModel.field[key], key, dataType);
    }


    dataType = {};
    for (var key in accountModel.header) {
        dataType = accountModel.header[key].dataType;
        accountModel.header[key] = {};
        MK.FSG.Main.FieldProperties(accountModel.header[key], "header_" + key, dataType);
    }


    return accountModel;
}


if (MK.FSG.Main && !MK.FSGEntity) {
    MK.FSGEntity = new MK.FSG.Model();
}
var currentDate = new Date(); console.log("MK.FSG.Model successfully loaded on " + currentDate.toLocaleDateString() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds())