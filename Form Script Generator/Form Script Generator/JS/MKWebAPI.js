// File Name: MKWebAPI.js
// Description: 
// Created: February 24, 2016
// Author: Mihir Kadam, CloudFronts Technologies LLP
// Revisions:
// Date Format : dd/mm/yyyy
// ========================================================================================================================================================
// VERSION         DATE            Modified By           DESCRIPTION                           Function Modified
// --------------------------------------------------------------------------------------------------------------------------------------------------------
// 1.0          24/02/2016         Mihir Kadam           CREATED
// 1.1          12/09/2016         Krishna Bhanushali    UPDATED Retrieve 5000+ records        encodeURIAdvanced,replaceMultiple, GetNextPage, getNextPageFetchXML,getPagingCookie FUNCTIONS ADDED and Retrieve FUNCTION UPDATED
// =======================================================================================================================================================

if (typeof ($) === 'undefined') {
    throw new Error("MK.WebAPI requires jQuery library.");
}


"use strict";
var MK = MK || {};
MK.WebAPI = MK.WebAPI || {};
MK.WebAPI = {
    data: {
        tempArray: [],
    },
    Create: function (entityName, entity, callerId, successCallback, errorCallback) {
        /// <summary>
        ///  Create a new entity.
        /// </summary>
        /// <param name="entityName" type="String">The name of the entity set for the entity you want to create.</param>
        /// <param name="entity" type="Object">>An object with the properties for the entity you want to create.</param>
        /// <param name="callerId" type="Guid" optional="true">The systemuserid value of the user to impersonate</param>
        /// <param name="successCallback" type="Function">The function to call when the entity is created. The Uri of the created entity is passed to this function.</param>
        /// <param name="errorCallback" type="Function">The function to call when there is an error. The error will be passed to this function.</param>
        if (!MK.Validation.isString(entityName)) {
            throw new Error("MK.WebAPI.Create entitySetName parameter must be a string.");
        }
        if (!MK.Validation.isObject(entity)) {
            throw new Error("MK.WebAPI.Create entityObject parameter must be a Object.");
        }

        if (callerId && !MK.Validation.isGuid(callerId)) {
            throw new Error("MK.WebAPI.Create callerId parameter must be a GUID(String) or null.");
        }

        if (successCallback && !MK.Validation.isFunction(successCallback)) {
            throw new Error("MK.WebAPI.Create successCallback parameter must be a function or null.");
        }
        if (errorCallback && !MK.Validation.isFunction(errorCallback)) {
            throw new Error("MK.WebAPI.Create errorCallback parameter must be a function or null.");
        }

        ///next update
        var async = successCallback || false;
        var uri = getWebAPIPath() + entityName;
        var req = new XMLHttpRequest();
        req.open("POST", encodeURI(uri), true);
        req.setRequestHeader("Accept", "application/json");
        if (callerId) {
            req.setRequestHeader("MSCRMCallerID", callerId);
        }
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.onreadystatechange = function () {
            if (this.readyState == 4 /* complete */) {
                req.onreadystatechange = null;
                if (this.status == 204) {
                    if (successCallback)
                        successCallback(this.getResponseHeader("OData-EntityId"));
                }
                else {
                    if (errorCallback)
                        errorCallback(MK.WebAPI.errorHandler(this));
                }
            }
        };
        req.send(JSON.stringify(entity));
    },
    Retrieve: function (entityName, entityId, uri, callerId, successCallback, errorCallback, includeFormattedValues, eTag, unmodifiedCallback, async) {
        /// <summary>
        ///  Retrieve Multiple records or single records based on entityId.
        /// </summary>
        /// <param name="uri" type="string"></param>
        /// <param name="entityId" type="Guid" optional="true"></param>
        /// <param name="callerId" type="Guid"></param>
        /// <param name="successCallback" type="function"></param>
        /// <param name="errorCallback" type="function"></param>
        /// <param name="includeFormattedValues" type="boolean"></param>
        /// <param name="eTag" type="string"></param>
        /// <param name="unmodifiedCallback" type="function"></param>
        /// <param name="async" type="boolean"></param>
        "use strict";
        var isFetchXML = false;
        if (!MK.Validation.isString(entityName)) {
            throw new Error("MK.WebAPI.Retrieve entitySetName parameter must be a string.");
        }

        if (!entityId && !MK.Validation.isString(uri)) {
            throw new Error("MK.WebAPI.Retrieve uri parameter must be a string.");
        }
        if (callerId && !MK.Validation.isGuid(callerId)) {
            throw new Error("MK.WebAPI.Create callerId parameter must be a GUID(String) or null.");
        }
        if (successCallback && !MK.Validation.isFunction(successCallback)) {
            throw new Error("MK.WebAPI.Create successCallback parameter must be a function or null.");
        }
        if (errorCallback && !MK.Validation.isFunction(errorCallback)) {
            throw new Error("MK.WebAPI.Create errorCallback parameter must be a function or null.");
        }
        if (eTag && !MK.Validation.isString(eTag)) {
            throw new Error("MK.WebAPI.Create eTag parameter must be a String or null.");
        }
        if (unmodifiedCallback && !MK.Validation.isFunction(unmodifiedCallback)) {
            throw new Error("MK.WebAPI.Create unmodifiedCallback parameter must be a function or null.");
        }
        if (entityId && !MK.Validation.isString(entityId)) {
            throw new Error("MK.WebAPI.Retrieve entityId parameter must be a string.");
        }
        if (!entityId && uri.indexOf("fetch") > -1 && (uri.indexOf("mapping='logical'") > -1 || uri.indexOf('mapping="logical"') > -1)) {
            uri = 'fetchXml=' + uri;
            isFetchXML = true;
        }

        //for single entity
        if (entityId) {

            if (uri) {
                uri = entityName + '(' + entityId + ')' + "?" + uri;
            } else {
                uri = entityName + '(' + entityId + ')';
            }

        }
        else {
            uri = entityName + "?" + uri;
        }

        if (async === undefined) {
            async = true;
        }

        if (!MK.Validation.isBoolean(async)) {
            throw new Error("MK.WebAPI.Retrieve async parameter must be a boolean.");
        }

        var currentDate = new Date();
        console.log("Retrieve Records (Start of execution) : Entity Name : " + entityName + "" + " Current Timestamp :-  Hours : " + currentDate.getHours() + " Minutes : " + currentDate.getMinutes() + " Seconds : " + currentDate.getSeconds() + " Milliseconds : " + currentDate.getMilliseconds());



        $.ajax({
            type: "GET",
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            //async: false,
            url: encodeURI(getWebAPIPath() + uri),
            beforeSend: function (xhr) {
                //Specifying this header ensures that the results will be returned as JSON.
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json; odata.metadata=minimal");
                xhr.setRequestHeader("OData-MaxVersion", "4.0");
                xhr.setRequestHeader("OData-Version", "4.0");
                ////xhr.setRequestHeader("Prefer", "odata.include-annotations=OData.Community.Display.V1.FormattedValue");
                //  xhr.setRequestHeader("Prefer", "odata.include-annotations=*");
                if (callerId) {
                    xhr.setRequestHeader("MSCRMCallerID", callerId);
                }
                if (eTag) {
                    xhr.setRequestHeader("If-None-Match", eTag);
                }

                if (includeFormattedValues) {
                    xhr.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
                }

            },
            async: async,
            success: function (data, textStatus, xhr) {

                var newDateDiff = currentDate.differenceInTime(new Date());
                console.log("Retrieve Records (End of execution) : Entity Name : " + entityName + "" + "Timestamp Diff:-  Hours : " + newDateDiff.hh + " Minutes : " + newDateDiff.mm + " Seconds : " + newDateDiff.ss);

                //var response = JSON.parse(JSON.stringify(data), dateReviver)
                //successCallback(response);
                if (data != null) {
                    var pagingInfo = null;
                    /// if not a fetchXML request
                    if (!isFetchXML) {
                        if (data["@odata.nextLink"]) {
                            ///    empty previous data
                            var resultData = data;
                            //MK.WebAPI.GetNextPage(data["@odata.nextLink"], callerId, includeFormattedValues, 5000, successCallback, errorCallback, resultData, async);
                            MK.WebAPI.GetNextPage(data["@odata.nextLink"], callerId, includeFormattedValues, 5000, successCallback, errorCallback, resultData);
                        }
                        else {
                            successCallback(data);
                        }
                    }
                    else {
                        ///   if fetchXML request
                        if (data["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"] != null) {
                            //get the pagingcookie
                            pagingInfo = MK.WebAPI.getPagingCookie(data["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]);
                            var response = JSON.parse(JSON.stringify(data), dateReviver)
                            var originalFetch = uri.substring(uri.indexOf("<entity"), uri.indexOf("</fetch>"));
                            MK.WebAPI.getNextPageFetchXML(entityName, originalFetch, callerId, includeFormattedValues, successCallback, errorCallback, pagingInfo.pageCokies, pagingInfo.pageNumber, response, async);
                        }
                        else {
                            var response = JSON.parse(JSON.stringify(data), dateReviver)
                            successCallback(response);
                        }
                    }
                }


                ///// if not a fetchXML request
                //if (!isFetchXML) {
                //    if (response["@odata.nextLink"]) {
                //        ///    empty previous data
                //        var resultData = response;
                //        MK.WebAPI.getNextPage(response["@odata.nextLink"], callerId, includeFormattedValues, 5000, successCallback, errorCallback, resultData, async);
                //    }
                //    else {
                //        successCallback(response);
                //    }
                //}
                //else {
                //    ///   if fetchXML request
                //    if (response["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]) {
                //        ///     get the pagingcookie
                //        var pagingInfo = MK.WebAPI.getPagingCookie(response["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]);
                //        var resultData = response;
                //        var originalFetch = uri.substring(uri.indexOf("<entity"), uri.indexOf("</fetch>"));
                //        MK.WebAPI.getNextPageFetchXML(entityName, originalFetch, callerId, includeFormattedValues, successCallback, errorCallback, pagingInfo.pageCokies, pagingInfo.pageNumber, resultData, async);
                //        MK.WebAPI.GetNextPage(response["@odata.nextLink"], callerId, includeFormattedValues, 5000, MK.WebAPI.tempCallback, errorCallback, successCallback);
                //    }
                //    else {
                //        successCallback(response);
                //    }
                //}

            },
            error: function (xhr, textStatus, errorThrown) {
                errorCallback(MK.WebAPI.errorHandler(xhr));

                //   retrieveUsingFetchError(Inogic.ApiLib.errorHandler(xhr));
            }
        });


        //var req = new XMLHttpRequest();
        //req.open("GET", encodeURI(getWebAPIPath() + uri), async);
        //req.setRequestHeader("Accept", "application/json");
        //if (callerId) {
        //    req.setRequestHeader("MSCRMCallerID", callerId);
        //}
        //if (eTag) {
        //    req.setRequestHeader("If-None-Match", eTag);
        //}
        //req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        //req.setRequestHeader("OData-MaxVersion", "4.0");
        //req.setRequestHeader("OData-Version", "4.0");
        //if (includeFormattedValues) {
        //    req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
        //}

        ////  async = async || false;
        //if (async) {
        //    req.onreadystatechange = function () {
        //        if (req.readyState == 4 /* complete */) {
        //            req.onreadystatechange = null;
        //            var newDateDiff = currentDate.differenceInTime(new Date());
        //            console.log("Retrieve Records (End of execution) : Success Callback function name : " + successCallback.name + " Entity Name : " + entityName + "" + "Timestamp Diff:-  Hours : " + newDateDiff.hh + " Minutes : " + newDateDiff.mm + " Seconds : " + newDateDiff.ss);
        //            switch (req.status) {
        //                case 200:
        //                    var response = JSON.parse(req.response, dateReviver);
        //                    if (response["@odata.nextLink"]) {
        //                        //empty previous data
        //                        MK.WebAPI.data.tempArray = [];
        //                        MK.WebAPI.GetNextPage(response["@odata.nextLink"], callerId, includeFormattedValues, 5000, MK.WebAPI.tempCallback, errorCallback, successCallback);
        //                    }
        //                    else {
        //                        successCallback(response);
        //                    }
        //                    break;
        //                case 304: //Not modified
        //                    if (unmodifiedCallback)
        //                        unmodifiedCallback();
        //                    break;
        //                default:
        //                    if (errorCallback)
        //                        errorCallback(MK.WebAPI.errorHandler(req));
        //                    break;
        //            }
        //        }
        //    };
        //    req.send();
        //}
        //else {
        //    req.send();
        //    switch (req.status) {
        //        case 200:
        //            var response = JSON.parse(req.response, dateReviver);
        //            var newDateDiff = currentDate.differenceInTime(new Date());
        //            console.log("Retrieve Records (End of execution) : Success Callback function name : " + successCallback.name + " Entity Name : " + entityName + "" + "Timestamp Diff:-  Hours : " + newDateDiff.hh + " Minutes : " + newDateDiff.mm + " Seconds : " + newDateDiff.ss);

        //            if (response["@odata.nextLink"]) {
        //                //empty previous data
        //                MK.WebAPI.data.tempArray = [];
        //                MK.WebAPI.GetNextPage(response["@odata.nextLink"], callerId, includeFormattedValues, 5000, MK.WebAPI.tempCallback, errorCallback, successCallback);
        //            }
        //            else {
        //                successCallback(response);
        //            }
        //            break;
        //        case 304: //Not modified
        //            if (unmodifiedCallback)
        //                unmodifiedCallback();
        //            break;
        //        default:
        //            if (errorCallback)
        //                errorCallback(MK.WebAPI.errorHandler(req));
        //            break;
        //    }

        //}
    },
    getPagingCookie: function (pageCokies) {
        var pagingInfo = {};
        var pageNumber = null;

        try {
            //get the page cokies
            pageCokies = unescape(unescape(pageCokies));

            //get the pageNumber
            pageNumber = parseInt(pageCokies.substring(pageCokies.indexOf("=") + 1, pageCokies.indexOf("pagingcookie")).replace(/\"/g, '').trim());

            //// this line is used to get the cookie part
            pageCokies = pageCokies.substring(pageCokies.indexOf("pagingcookie"), (pageCokies.indexOf("istracking")));
            pageCokies = pageCokies.substring(pageCokies.indexOf("=") + 1, pageCokies.length);

            pageCokies = pageCokies.substring(1, pageCokies.length - 2);

            //replace special character 
            pageCokies = pageCokies.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\"/g, '\'').replace(/\'/g, '&' + 'quot;');

            //append paging-cookie
            pageCokies = "paging-cookie='" + pageCokies + "'";

            //set the parameter
            pagingInfo.pageCokies = pageCokies;
            pagingInfo.pageNumber = pageNumber;

        } catch (e) {
            throw new Error(e);
        }

        return pagingInfo;
    },
    getNextPageFetchXML: function (entityName, originalFetch, callerId, includeFormattedValues, successCallback, errorCallback, pageCookies, pageNumber, resultData, async) {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="originalFetch">
        /// 
        /// </param>
        /// <param name="entityName">
        /// 
        /// </param>
        /// <param name="callerId">
        /// 
        /// </param>
        /// <param name="includeFormattedValues">
        /// 
        /// </param>
        /// <param name="successCallback">
        /// 
        /// </param>
        /// <param name="errorCallback">
        /// 
        /// </param>
        /// <param name="pageCookies">
        /// 
        /// </param>
        /// <param name="pageNumber">
        /// 
        /// </param>
        /// <param name="resultData">
        /// 
        /// </param>
        /// <param name="async">
        /// 
        /// </param>
        "use strict";
        originalFetch = originalFetch.substring(originalFetch.indexOf("<entity name="), (originalFetch.indexOf("</entity>") + 9));
        var count = 5000;
        var uri = ["<fetch count='" + count + "' page='" + pageNumber + "' " + pageCookies + " version='1.0' >", originalFetch, "</fetch>"].join("");
        uri = uri.encodeURIAdvanced();
        uri = entityName + "?fetchXml=" + uri;

        var req = new XMLHttpRequest();
        req.open("GET", (getWebAPIPath() + uri), async);

        req.setRequestHeader("Accept", "application/json");
        if (callerId) {
            req.setRequestHeader("MSCRMCallerID", callerId);
        }

        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        if (includeFormattedValues) {
            req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
        }
        req.setRequestHeader("Prefer", "odata.include-annotations=*");
        req.setRequestHeader("Prefer", "odata.maxpagesize=10");


        //  async = async || false;
        if (async) {
            req.onreadystatechange = function () {
                if (req.readyState == 4 /* complete */) {
                    req.onreadystatechange = null;
                    switch (req.status) {
                        case 200:
                            var testUri = uri;
                            var response = JSON.parse(req.response, dateReviver);
                            resultData.value = resultData.value.concat(response.value);
                            if (response["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]) {
                                //get the pagingcookie
                                var pagingInfo = MK.WebAPI.getPagingCookie(response["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]);
                                MK.WebAPI.getNextPageFetchXML(entityName, originalFetch, callerId, includeFormattedValues, successCallback, errorCallback, pagingInfo.pageCokies, pagingInfo.pageNumber, resultData, async);
                                //   MK.WebAPI.GetNextPage(response["@odata.nextLink"], callerId, includeFormattedValues, 5000, MK.WebAPI.tempCallback, errorCallback, successCallback);
                            }
                            else {
                                successCallback(resultData);
                            }
                            break;

                        default:
                            if (errorCallback)
                                errorCallback(MK.WebAPI.errorHandler(req));
                            break;
                    }
                }
            };
            req.send();
        }
        else {
            req.send();
            switch (req.status) {
                case 200:
                    var response = JSON.parse(req.response, dateReviver);
                    resultData.value.concat(response.value);
                    if (response["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]) {
                        //get the pagingcookie
                        var pagingInfo = MK.WebAPI.getPagingCookie(response["@Microsoft.Dynamics.CRM.fetchxmlpagingcookie"]);
                        MK.WebAPI.getNextPageFetchXML(entityName, originalFetch, callerId, includeFormattedValues, successCallback, errorCallback, pagingInfo.pageCokies, pagingInfo.pageNumber, resultData, async);
                        //   MK.WebAPI.GetNextPage(response["@odata.nextLink"], callerId, includeFormattedValues, 5000, MK.WebAPI.tempCallback, errorCallback, successCallback);
                    }
                    else {
                        successCallback(resultData);
                    }
                    break;
                default:
                    if (errorCallback)
                        errorCallback(MK.WebAPI.errorHandler(req));
                    break;
            }

        }



    },
    GetNextPage: function (query, callerId, includeFormattedValues, maxPageSize, tempSuccessCallback, errorCallback, resultData) {
        /// <summary>Return the next page of a retrieve multiple query when there are additional pages.</summary>
        /// <param name="query" type="String">The value of the @odata.nextLink property for the results of a queryEntitySet query when there are more pages.</param>
        /// <param name="includeFormattedValues" type="Boolean">Whether you want to have formatted values included in the results</param> 
        /// <param name="maxPageSize" type="Number">A number that limits the number of entities to be retrieved in the query.</param> 
        /// <param name="tempSuccessCallback" type="Function">The function to call when the entities are returned. The results of the query will be passed to this function. This function will add result to temp array.</param>
        /// <param name="errorCallback" type="Function">The function to call when there is an error. The error will be passed to this function.</param>
        /// <param name="callerId" type="String" optional="true">The systemuserid value of the user to impersonate</param>
        /// <param name="tempSuccessCallback" type="Function">The function to call when the entities are returned. The results of the query will be passed to this function. This function will return result to actual successCallback.</param>
        //if (!isStringOrNull(query)) {
        //    throw new Error("Sdk.WebAPIPreview.getNextPage query parameter must be a string or null.");
        //}
        //if (!isBooleanOrNull(includeFormattedValues)) {
        //    throw new Error("Sdk.WebAPIPreview.getNextPage includeFormattedValues parameter must be a boolean or null.");
        //}
        //if (!isNumberOrNull(maxPageSize)) {
        //    throw new Error("Sdk.WebAPIPreview.getNextPage maxPageSize parameter must be a number or null.");
        //}
        //if (!isFunctionOrNull(successCallback)) {
        //    throw new Error("Sdk.WebAPIPreview.getNextPage successCallback parameter must be a function or null.");
        //}
        //if (!isFunctionOrNull(errorCallback)) {
        //    throw new Error("Sdk.WebAPIPreview.getNextPage errorCallback parameter must be a function or null.");
        //}
        //if (!isAcceptableCallerId(callerId)) {
        //    throw new Error("Sdk.WebAPIPreview.getNextPage callerId parameter must be a string or null.");
        //}

        var req = new XMLHttpRequest();
        //Not encoding the URI because it came from the system
        req.open("GET", query, true);
        req.setRequestHeader("Accept", "application/json");
        if (callerId) {
            req.setRequestHeader("MSCRMCallerID", callerId);
        }
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        if (includeFormattedValues) {
            req.setRequestHeader("Prefer", "odata.include-annotations=\"mscrm.formattedvalue\"");
        }

        if (maxPageSize) {
            req.setRequestHeader("Prefer", "odata.maxpagesize=" + maxPageSize);
        }

        req.onreadystatechange = function () {
            if (this.readyState == 4 /* complete */) {
                req.onreadystatechange = null;
                if (this.status == 200) {
                    var response = JSON.parse(this.response, dateReviver);
                    if (response["@odata.nextLink"]) {
                        //empty previous data
                        MK.WebAPI.GetNextPage(response["@odata.nextLink"], callerId, includeFormattedValues, 5000, tempSuccessCallback, errorCallback, resultData);
                    }
                    else {
                        resultData.value = resultData.value.concat(response.value);
                        //resultData.value = MK.WebAPI.data.tempArray.concat(response.value);
                        // MK.WebAPI.data.tempArray.append(response);
                        if (tempSuccessCallback)
                            tempSuccessCallback(resultData);
                        //successCallback(MK.WebAPI.data.tempArray);
                    }
                }
                else {
                    if (errorCallback)
                        errorCallback(MK.WebAPI.errorHandler(this));
                }
            }
        };
        req.send();
    },
    Update: function (entityName, entityId, updatedEntity, callerId, successCallback, errorCallback) {
        /// <summary>Update an entity</summary>
        /// <param name="updatedEntity" type="Object">An object that contains updated properties for the entity.</param>
        /// <param name="successCallback" type="Function">The function to call when the entity is updated.</param>
        /// <param name="errorCallback" type="Function">The function to call when there is an error. The error will be passed to this function.</param>
        /// <param name="callerId" type="String" optional="true" optional="true">The systemuserid value of the user to impersonate</param>
        if (updatedEntity && !MK.Validation.isObject(updatedEntity)) {
            throw new Error("MK.WebAPI.update updatedEntity parameter must be Object.");
        }
        if (successCallback && !MK.Validation.isFunction(successCallback)) {
            throw new Error("MK.WebAPI.update successCallback parameter must be a function or null.");
        }
        if (errorCallback && !MK.Validation.isFunction(errorCallback)) {
            throw new Error("Sdk.WebAPIPreview.update errorCallback parameter must be a function or null.");
        }
        if (callerId && !MK.Validation.isGuid(callerId)) {
            throw new Error("Sdk.WebAPIPreview.update callerId parameter must be a string or null.");
        }

        if (!MK.Validation.isString(entityId)) {
            throw new Error("MK.WebAPI.Retrieve entityId parameter must be a string and GUID.");
        }

        if (!MK.Validation.isString(entityName)) {
            throw new Error("MK.WebAPI.Retrieve entitySetName parameter must be a string.");
        }
        var uri = getWebAPIPath() + entityName + '(' + entityId + ')';
        var req = new XMLHttpRequest();
        req.open("PATCH", encodeURI(uri), true);
        req.setRequestHeader("Accept", "application/json");
        if (callerId) {
            req.setRequestHeader("MSCRMCallerID", callerId);
        }
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.onreadystatechange = function () {
            if (this.readyState == 4 /* complete */) {
                req.onreadystatechange = null;
                if (this.status == 204) {
                    if (successCallback)
                        successCallback(this.getResponseHeader("OData-EntityId"));
                }
                else {
                    if (errorCallback)
                        errorCallback(MK.WebAPI.errorHandler(this));
                }
            }
        };
        req.send(JSON.stringify(updatedEntity));
    },
    Delete: function (entityName, entityId, successCallback, errorCallback, callerId) {
        /// <summary>Delete an entity</summary>
        /// <param name="uri" type="String">The Uri for the entity you want to delete</param>        
        /// <param name="entityId" type="Guid"></param>
        /// <param name="successCallback" type="Function">The function to call when the entity is deleted.</param>
        /// <param name="errorCallback" type="Function">The function to call when there is an error. The error will be passed to this function.</param>
        /// <param name="callerId" type="Guid" optional="true" optional="true">The systemuserid value of the user to impersonate</param>
        if (!MK.Validation.isString(entityId)) {
            throw new Error("MK.WebAPI.Delete entityId parameter must be a string and GUID.");
        }

        if (!MK.Validation.isString(entityName)) {
            throw new Error("MK.WebAPI.Delete entitySetName parameter must be a string.");
        }
        if (successCallback && !MK.Validation.isFunction(successCallback)) {
            throw new Error("MK.WebAPI.Delete successCallback parameter must be a function or null.");
        }
        if (errorCallback && !MK.Validation.isFunction(errorCallback)) {
            throw new Error("MK.WebAPI.Delete errorCallback parameter must be a function or null.");
        }
        if (callerId && !MK.Validation.isGuid(callerId)) {
            throw new Error("MK.WebAPI.Delete callerId parameter must be a string or null.");
        }
        var uri = getWebAPIPath() + entityName + '(' + entityId + ')';
        var req = new XMLHttpRequest();
        req.open("DELETE", encodeURI(uri), true);
        req.setRequestHeader("Accept", "application/json");
        if (callerId) {
            req.setRequestHeader("MSCRMCallerID", callerId);
        }
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.onreadystatechange = function () {
            if (this.readyState == 4 /* complete */) {
                req.onreadystatechange = null;
                if (this.status == 204) {
                    if (successCallback)
                        successCallback();
                }
                else {
                    if (errorCallback)
                        errorCallback(MK.WebAPI.errorHandler(this));
                }
            }
        };
        req.send();

    },
    getId: function (idLength) {
        /// <summary>
        /// Get random id.
        /// </summary>
        /// <param name="idLength" type="type"></param>
        /// <returns type=""></returns>
        if (!idLength)
            idLength = 10;
        if (idLength) {
            if (idLength > 30) {
                throw new Error("Length must be less than 30.");
            }
        }
        else {
            throw new Error("Length must be a number.");
        }

        var returnValue = "";
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < idLength; i++)
            returnValue += characters.charAt(Math.floor(Math.random() * characters.length));

        return returnValue;
    },
    setLookupRequest: function (entityId, entityName, schemaName, tempObject) {
        /// <summary>
        /// Set lookup value used in batch opetaion
        /// </summary>
        /// <param name="entityId" type="Guid"></param>
        /// <param name="entityName" type="String"></param>
        /// <param name="schemaName" type="String"></param>
        /// <param name="tempObject" type="Object"></param>
        /// <returns type="Object"></returns>
        if (entityId && entityName && schemaName && tempObject) {
            if (!MK.Validation.isGuid(entityId)) {
                alert("MK.WebAPI.batch.setLookupRequest required entityId to be Guid");
            }
            tempObject[schemaName + "@odata.bind"] = getWebAPIPath() + entityName + "(" + entityId + ")";
        }
        return tempObject;
    },
    batch: {
        setLookupRequest: function (entityId, entityName, schemaName, tempObject) {
            /// <summary>
            /// Set lookup value used in batch opetaion
            /// </summary>
            /// <param name="entityId" type="Guid"></param>
            /// <param name="entityName" type="String"></param>
            /// <param name="schemaName" type="String"></param>
            /// <param name="tempObject" type="Object"></param>
            /// <returns type="Object"></returns>
            if (entityId && entityName && schemaName && tempObject) {
                if (!MK.Validation.isGuid(entityId)) {
                    alert("MK.WebAPI.batch.setLookupRequest required entityId to be Guid");
                }
                tempObject[schemaName + "@odata.bind"] = getWebAPIPath() + entityName + "(" + entityId + ")";
            }
            return tempObject;
        },
        getRandomId: function () {
            /// <summary>
            /// Random id required for batch operation.
            /// </summary>
            /// <returns type="String"></returns>
            return MK.WebAPI.getId();
        },
        getCreateRequest: function (contentId, changeSetId, data, entityName) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="contentId" type="String"></param>
            /// <param name="changeSetId" type="String"></param>
            /// <param name="data" type="Object"></param>
            /// <param name="entityName" type="String"></param>
            /// <returns type="String"></returns>

            //First item in ChangeSet
            var payload = [];
            payload.push("--changeset_" + changeSetId);
            payload.push("Content-Type: application/http");
            payload.push("Content-Transfer-Encoding:binary");
            payload.push("Content-ID: " + contentId);
            payload.push("");
            payload.push("POST " + getWebAPIPath() + entityName + " HTTP/1.1");
            payload.push("Content-Type: application/json;type=entry");
            payload.push("");
            payload.push(JSON.stringify(data));

            return payload.join("\r\n");
        },
        getAssociateRequest: function (contentId, changeSetId, parentContentId, childContentId, relationshipPropertyName, entityName) {
            /// <summary>
            /// associate parent and child record using relationship name. Update lookup value in child record.
            /// </summary>
            /// <param name="contentId" type="String"></param>
            /// <param name="changeSetId" type="String"></param>
            /// <param name="parentContentId" type="String">Can be Guid.</param>
            /// <param name="childContentId" type="String"></param>
            /// <param name="relationshipPropertyName" type="String"></param>
            /// <param name="entityName" type="String"></param>

            if (MK.Validation.isGuid(parentContentId) || MK.Validation.isGuid(childContentId)) {
                if (!entityName) {
                    throw new Error("Entity name is required if parentContectId or childContentId is GUID.")
                }

            }
            ///associate childContentId or Guid

            var rel = {};
            if (MK.Validation.isGuid(childContentId)) {
                rel["@odata.id"] = getWebAPIPath() + entityName + "(" + childContentId + ")";
            } else {
                if (childContentId.indexOf("$") <= 0) {
                    childContentId = "$" + childContentId;
                }
            }
            rel["@odata.id"] = childContentId;
            var payload = [];

            if (!relationshipPropertyName.indexOf("Referenced") === 0) {
                relationshipPropertyName = "Referenced" + relationshipPropertyName;
            }

            if (MK.Validation.isGuid(parentContentId)) {
                parentContentId = getWebAPIPath() + entityName + "(" + parentContentId + ")";
            }
            else if (parentContentId.indexOf("$") <= 0) {
                parentContentId = "$" + parentContentId;
            }


            payload.push("--changeset_" + changeSetId);
            payload.push("Content-Type: application/http");
            payload.push("Content-Transfer-Encoding:binary");
            payload.push("Content-ID: " + contentId);
            payload.push("");
            payload.push("POST " + parentContentId + "/" + relationshipPropertyName + "/$ref HTTP/1.1");
            payload.push("Content-Type: application/json;type=entry");
            payload.push("");
            payload.push(JSON.stringify(rel));

            return payload.join("\r\n");
        },
        getBoundRequest: function (contentId, changeSetId, data, entityName, entityId, actionName) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="contentId" type="type"></param>
            /// <param name="changeSetId" type="type"></param>
            /// <param name="data" type="type"></param>
            /// <param name="entityName" type="type"></param>
            /// <param name="entityId" type="type"></param>
            /// <param name="actionName" type="type"></param>
            /// <returns type=""></returns>

            if (actionName.indexOf("Microsoft.Dynamics.CRM") < 0) {
                actionName = "Microsoft.Dynamics.CRM." + actionName + "()";
            }

            var uri = getWebAPIPath() + entityName + "(" + entityId + ")/" + actionName;
            var payload = [];
            payload.push("--changeset_" + changeSetId);
            payload.push("Content-Type: application/http");
            payload.push("Content-Transfer-Encoding:binary");
            payload.push("Content-ID: " + contentId);
            payload.push("");
            payload.push("POST " + encodeURI(uri) + " HTTP/1.1");
            payload.push("Content-Type: application/json;type=entry");
            //payload.push("OData-MaxVersion: 4.0");
            //payload.push("OData-Version: 4.0");

            payload.push("");

            if (data) {
                payload.push(JSON.stringify(data));
            }
            return payload.join("\r\n");
        },
        getUpdateRequest: function (contentId, changeSetId, data, previousContentId, entityName) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="contentId" type="String"></param>
            /// <param name="changeSetId" type="String"></param>
            /// <param name="data" type="Object"></param>
            /// <param name="previousContentId" type="String"></param>
            /// <param name="entityName" type="String"></param>
            /// <param name="entityId" type="Guid"></param>
            /// <returns type="String"></returns>

            var uri = "";
            if (MK.Validation.isGuid(previousContentId)) {
                uri = encodeURI(getWebAPIPath() + entityName + "(" + previousContentId + ")");
            }
            else {
                uri = "$" + previousContentId;
            }

            var payload = [];
            payload.push("--changeset_" + changeSetId);
            payload.push("Content-Type: application/http");
            payload.push("Content-Transfer-Encoding:binary");
            payload.push("Content-ID: " + contentId);
            payload.push("");
            payload.push("PATCH " + uri + " HTTP/1.1");
            payload.push("Content-Type: application/json;type=entry");
            payload.push("");
            payload.push(JSON.stringify(data));

            return payload.join("\r\n");
        },
        getDeleteRequest: function (contentId, changeSetId, previousContentId, entityName) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="contentId" type="type"></param>
            /// <param name="changeSetId" type="type"></param>
            /// <param name="previousContentId" type="type"></param>
            /// <param name="entityName" type="type"></param>
            /// <param name="entityId" type="type"></param>
            /// <returns type=""></returns>

            var uri = "";
            if (MK.Validation.isGuid(previousContentId)) {
                uri = encodeURI(getWebAPIPath() + entityName + "(" + previousContentId + ")");
            }
            else {
                uri = "$" + previousContentId;
            }

            var payload = [];
            payload.push("--changeset_" + changeSetId);
            payload.push("Content-Type: application/http");
            payload.push("Content-Transfer-Encoding:binary");
            payload.push("Content-ID: " + contentId);
            payload.push("");
            payload.push("DELETE " + uri + " HTTP/1.1");
            payload.push("Content-Type: application/json;type=entry");
            payload.push("");

            return payload.join("\r\n");

        },
        getRetrieveRequest: function () {
            /// <summary>
            /// 
            /// </summary>
        },
        Execute: function (payload, batchId, changeSetId, successCallback, errorCallback, async) {
            /// <summary>
            /// 
            /// </summary>
            /// <param name="payload" type="Array"></param>
            /// <param name="batchId" type="type"></param>
            /// <param name="successCallback" type="type"></param>
            /// <param name="errorCallback" type="type"></param>



            if (async === undefined) {
                async = true;
            }

            if (!MK.Validation.isBoolean(async)) {
                throw new Error("MK.WebAPI.Retrieve async parameter must be a boolean.");
            }


            ///default header for all request
            var header = ["--batch_" + batchId]
            header.push("Content-Type: multipart/mixed;boundary=changeset_" + changeSetId);
            header.push("\n");

            var footer = ["\n"]
            footer.push("--changeset_" + changeSetId + "--");
            footer.push("");
            footer.push("--batch_" + batchId);

            payload = header.join("\r\n") + payload.join("\r\n") + footer.join("\r\n");


            var currentDate = new Date();
            console.log("Execute Operation (Start of execution) : Current Timestamp :-  Hours : " + currentDate.getHours() + " Minutes : " + currentDate.getMinutes() + " Seconds : " + currentDate.getSeconds() + " Milliseconds : " + currentDate.getMilliseconds());

            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                datatype: "json",
                url: encodeURI(getWebAPIPath() + "$batch"),
                data: payload,
                beforeSend: function (XMLHttpRequest) {


                    XMLHttpRequest.setRequestHeader("Accept", "application/json");
                    XMLHttpRequest.setRequestHeader("Content-Type", "multipart/mixed;boundary=batch_" + batchId);
                    XMLHttpRequest.setRequestHeader("OData-MaxVersion", "4.0");
                    XMLHttpRequest.setRequestHeader("OData-Version", "4.0");

                },
                async: async,

                success: function (data, textStatus, xhr) {

                    if (textStatus === "timeout") {
                        errorCallback(new Error("The operation has timed out. Please try again."));
                    }
                    else {

                        var newDateDiff = currentDate.differenceInTime(new Date());
                        console.log("Execute Operation (End of execution) :-  Timestamp Diff:-  Hours : " + newDateDiff.hh + " Minutes : " + newDateDiff.mm + " Seconds : " + newDateDiff.ss);
                        //Success - No Return Data - Do Something
                        if (successCallback) {
                            successCallback(data);
                        }
                    }
                },
                error: function (xhr, textStatus, errorThrown) {
                    console.error("Error Status : " + textStatus);
                    if (textStatus === "timeout") {
                        errorCallback(new Error("The operation has timed out. Please try again."));
                    }
                    else {
                        // alert(textStatus + " " + errorThrown);
                        errorCallback(MK.WebAPI.errorHandler(xhr));

                    }

                }
            });













            //var req = new XMLHttpRequest();
            //req.open("POST", encodeURI(getWebAPIPath() + "$batch"), async);
            //req.setRequestHeader("Accept", "application/json");
            //req.setRequestHeader("Content-Type", "multipart/mixed;boundary=batch_" + batchId);
            //req.setRequestHeader("OData-MaxVersion", "4.0");
            //req.setRequestHeader("OData-Version", "4.0");

            //if (async) {

            //    req.onreadystatechange = function () {
            //        if (this.readyState == 4 /* complete */) {
            //            req.onreadystatechange = null;
            //            if (this.status == 200) {
            //                if (successCallback) {
            //                    successCallback(this.response);
            //                }
            //            }
            //            else {
            //                if (errorCallback)
            //                    errorCallback(MK.WebAPI.errorHandler(this));
            //            }
            //        }
            //    };

            //    req.send(payload);
            //}
            //else {
            //    req.send(payload);
            //    if (req.status == 200) {
            //        if (successCallback) {
            //            successCallback(req.response);
            //        }
            //    }
            //    else {
            //        if (errorCallback)
            //            errorCallback(MK.WebAPI.errorHandler(req));
            //    }
            //}
        },
        changeSet: function (isStart, chnageSetId) {
        },
    },
    invokeBoundAction: function (entityName, entityId, actionName, parameterObj, successCallback, errorCallback, callerId) {
        /// <summary>Invoke an unbound action</summary>
        /// <param name="actionName" type="String">The name of the unbound action you want to invoke.</param>
        /// <param name="parameterObj" type="Object">An object that defines parameters expected by the action</param>        
        /// <param name="successCallback" type="Function">The function to call when the action is invoked. The results of the action will be passed to this function.</param>
        /// <param name="errorCallback" type="Function">The function to call when there is an error. The error will be passed to this function.</param>
        /// <param name="callerId" type="String" optional="true">The systemuserid value of the user to impersonate</param>
        //if (!isString(actionName)) {
        //    throw new Error("Sdk.WebAPIPreview.invokeUnboundAction actionName parameter must be a string.");
        //}
        //if (isUndefined(parameterObj)) {
        //    throw new Error("Sdk.WebAPIPreview.invokeUnboundAction parameterObj parameter must not be undefined.");
        //}
        //if (!isFunctionOrNull(successCallback)) {
        //    throw new Error("Sdk.WebAPIPreview.invokeUnboundAction successCallback parameter must be a function or null.");
        //}
        //if (!isFunctionOrNull(errorCallback)) {
        //    throw new Error("Sdk.WebAPIPreview.invokeUnboundAction errorCallback parameter must be a function or null.");
        //}
        //if (!isAcceptableCallerId(callerId)) {
        //    throw new Error("Sdk.WebAPIPreview.invokeUnboundAction callerId parameter must be a string or null.");
        //}


        if (actionName.indexOf("Microsoft.Dynamics.CRM") < 0) {
            actionName = "Microsoft.Dynamics.CRM." + actionName
        }
        var uri = getWebAPIPath() + entityName + "(" + entityId + ")/" + actionName;
        var req = new XMLHttpRequest();
        req.open("POST", encodeURI(uri), true);
        req.setRequestHeader("Accept", "application/json");
        if (callerId) {
            req.setRequestHeader("MSCRMCallerID", callerId);
        }
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.onreadystatechange = function () {
            if (this.readyState == 4 /* complete */) {
                req.onreadystatechange = null;
                if (this.status == 200 || this.status == 201 || this.status == 204) {
                    if (successCallback)
                        switch (this.status) {
                            case 200:
                                //When the Action returns a value
                                successCallback(JSON.parse(this.response, dateReviver));
                                break;
                            case 201:
                            case 204:
                                //When the Action does not return a value
                                successCallback();
                                break;
                            default:
                                //Should not happen
                                break;
                        }

                }
                else {
                    if (errorCallback)
                        errorCallback(MK.WebAPI.errorHandler(this));
                }
            }
        };
        if (parameterObj) {
            req.send(JSON.stringify(parameterObj));
        }
        else {
            req.send();
        }


    },
    invokeUnboundAction: function (actionName, parameterObj, successCallback, errorCallback, callerId) {
        /// <summary>Invoke an unbound action</summary>
        /// <param name="actionName" type="String">The name of the unbound action you want to invoke.</param>
        /// <param name="parameterObj" type="Object">An object that defines parameters expected by the action</param>        
        /// <param name="successCallback" type="Function">The function to call when the action is invoked. The results of the action will be passed to this function.</param>
        /// <param name="errorCallback" type="Function">The function to call when there is an error. The error will be passed to this function.</param>
        /// <param name="callerId" type="String" optional="true">The systemuserid value of the user to impersonate</param>
        //if (!isString(actionName)) {
        //    throw new Error("Sdk.WebAPIPreview.invokeUnboundAction actionName parameter must be a string.");
        //}
        //if (isUndefined(parameterObj)) {
        //    throw new Error("Sdk.WebAPIPreview.invokeUnboundAction parameterObj parameter must not be undefined.");
        //}
        //if (!isFunctionOrNull(successCallback)) {
        //    throw new Error("Sdk.WebAPIPreview.invokeUnboundAction successCallback parameter must be a function or null.");
        //}
        //if (!isFunctionOrNull(errorCallback)) {
        //    throw new Error("Sdk.WebAPIPreview.invokeUnboundAction errorCallback parameter must be a function or null.");
        //}
        //if (!isAcceptableCallerId(callerId)) {
        //    throw new Error("Sdk.WebAPIPreview.invokeUnboundAction callerId parameter must be a string or null.");
        //}

        var currentDate = new Date();
        console.log("invokeUnboundAction (Start of execution) : Action Name : " + actionName + "" + "Current Timestamp :-  Hours : " + currentDate.getHours() + " Minutes : " + currentDate.getMinutes() + " Seconds : " + currentDate.getSeconds() + " Milliseconds : " + currentDate.getMilliseconds());

        $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            datatype: "json",
            //async: false,
            url: encodeURI(getWebAPIPath() + actionName),
            data: parameterObj ? JSON.stringify(parameterObj) : null,

            beforeSend: function (xhr) {
                //Specifying this header ensures that the results will be returned as JSON.
                xhr.setRequestHeader("Accept", "application/json");
                xhr.setRequestHeader("Content-Type", "application/json; odata.metadata=minimal");
                xhr.setRequestHeader("OData-MaxVersion", "4.0");
                xhr.setRequestHeader("OData-Version", "4.0");
                ////xhr.setRequestHeader("Prefer", "odata.include-annotations=OData.Community.Display.V1.FormattedValue");
                //  xhr.setRequestHeader("Prefer", "odata.include-annotations=*");
                if (callerId) {
                    xhr.setRequestHeader("MSCRMCallerID", callerId);
                }
            },
            async: true,
            success: function (data, textStatus, xhr) {
                if (textStatus === "timeout") {
                    errorCallback(new Error("The operation has timed out. Please try again."));
                }
                else {
                    var newDateDiff = currentDate.differenceInTime(new Date());
                    console.log("invokeUnboundAction Records (End of execution) : Action Name : " + actionName + "" + " Timestamp Diff:-  Hours : " + newDateDiff.hh + " Minutes : " + newDateDiff.mm + " Seconds : " + newDateDiff.ss);
                    successCallback(data);
                }





            },
            error: function (xhr, textStatus, errorThrown) {

                var newDateDiff = currentDate.differenceInTime(new Date());
                console.log("invokeUnboundAction Records (End of execution) : Action Name : " + actionName + "" + " Timestamp Diff:-  Hours : " + newDateDiff.hh + " Minutes : " + newDateDiff.mm + " Seconds : " + newDateDiff.ss);

                if (textStatus === "timeout") {
                    errorCallback(new Error("The operation has timed out. Please try again."));
                }
                else {
                    errorCallback(MK.WebAPI.errorHandler(xhr));
                }
                //   retrieveUsingFetchError(Inogic.ApiLib.errorHandler(xhr));
            }
        });


    },
    tempCallback: function (response) {
        /// <summary>
        /// Use for temporary data storage for successcallBack.
        /// </summary>
        /// <param name="response" type="type"></param>
        MK.WebAPI.data.tempArray.append(response);

    },
    errorHandler: function (resp) {
        var errorLog = "";
        switch (resp.status) {
            case 503:
                errorLog = resp.statusText + " Status Code:" + resp.status + " The Web API Preview is not enabled.";
                console.log(errorLog);
                return new Error(errorLog);
                break;
            default:
                errorLog = "Status Code:" + resp.status + " " + parseError(resp);
                console.log(errorLog);
                return new Error("Status Code:" + resp.status + " " + parseError(resp));
                break;
        }
    },
}
MK.Validation = MK.Validation || {};
MK.Validation = {
    isString: function (value) {
        /// <summary>
        ///  Checks whether value is type of string or not.
        /// </summary>
        /// <param name="value" type="type"></param>
        /// <returns type=""></returns>
        if (value && typeof value === "string") {
            return true;
        }
        return false;
    },
    isObject: function (value) {
        /// <summary>
        /// Checks whether value is type of Object or not.
        /// </summary>
        /// <param name="value" type="type"></param>
        /// <returns type=""></returns>
        if (value && typeof value === "object") {
            return true;
        }
        return false;
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
        if (value && typeof value === "function") {
            return true;
        }
        return false;
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
        if (typeof value === "number") {
            return true;
        }
        return true;
    },
    isBoolean: function (value) {
        "use strict";
        if (typeof value === "boolean") {
            return true;
        }
        return false;
    }
};
MK.Convert = MK.Convert || {};

MK.Convert = {
    hoursToMinutes: function (value) {
        /// <summary>
        /// This function will convert value from hours to minutes.
        /// </summary>
        /// <param name="value" type="Number"></param>
        /// <returns type="Number"></returns>
        if (MK.Validation.isNumber(value)) {
            return value * 60;
        }
        else {
            Xrm.Utility.alertDialog("Function MK.Convert.hoursToMinutes: parameter should be should be number.", null);
        }
        return null;
    },
    minutesToHours: function (value) {
        /// <summary>
        /// Convert data from minutes to hours
        /// </summary>
        /// <param name="value" type="Number"></param>
        /// <returns type="Number"></returns>
        if (MK.Validation.isNumber(value)) {
            return value / 60;
        }
        else {
            Xrm.Utility.alertDialog("Function MK.Convert.minutesToHours: parameter should be should be number.", null);
        }
        return null;
    },
}

function getContext() {
    if (typeof GetGlobalContext != "undefined")
    { return GetGlobalContext(); }
    else {
        if (typeof Xrm != "undefined") {
            return Xrm.Page.context;
        }
        else { throw new Error("Context is not available."); }
    }
}
function getClientUrl() {
    return getContext().getClientUrl();
}
function getWebAPIPath() {
    return getClientUrl() + "/api/data/v8.0/";
}
function parseError(resp) {
    if (resp && (resp.response || resp.responseText)) {
        var errorObj = JSON.parse(resp.response ? resp.response : resp.responseText);
        if (errorObj.error) {
            return errorObj.error.message;
        }
        if (errorObj.Message) {
            return errorObj.Message;
        }
        return "Unexpected Error";
    }
    return "Unexpected Error";
}
function dateReviver(key, value) {
    var a;
    if (typeof value === 'string') {
        a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);
        if (a) {
            return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
        }
    }
    return value;
};
Array.prototype.append = function (data) {
    if (data) {
        for (var cnt = 0; cnt < data.lengh; cnt++) {
            this.push(data[i]);
        }
    }

};
Array.prototype.contains = function (data, attribute) {
    /// <summary>
    /// Check if value is present or not
    /// </summary>
    /// <param name="data" type="type"></param>
    /// <param name="attribute" type="String">if array is type of object, then it will search in perticular attribute inside object</param>
    if (!attribute) {
        var index = this.indexOf(data);
        return index > -1 ? index : false;
    }
    for (var cnt = 0; cnt < this.length; cnt++) {
        if (this[cnt][attribute] === data) {
            return cnt;
        }
    }
    return false;
}
//Window.prototype.alert = function (message) {
//    Xrm.Utility.alertDialog(message, null);
//};



//// date prototype

Date.monthAbbreviations = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
Date.monthNames = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
Date.prototype.isWeekend = function (weekStart, weekEnd) {
    "use strict";
    var date = this;

    if (weekStart === undefined || weekStart === "" || weekStart === null) {
        //default week start from monday
        weekStart = 1;
    }

    if (weekEnd === undefined || weekEnd === "" || weekEnd === null) {
        //default week end will be friday
        weekEnd = 5;
    }

    var day = date.getDay();
    var weekArray = [0, 1, 2, 3, 4, 5, 6];
    var temp = [];
    if (weekStart <= weekEnd) {
        weekArray = weekArray.slice(weekStart, weekEnd + 1);
    } else {
        weekArray = weekArray.slice(weekStart, 7).concat(weekArray.slice(0, weekEnd + 1));
    }
    if (weekArray.indexOf(day) === -1) {
        return true;
    }
    return false
}
Date.prototype.getFormatedWeek = function (date) {
    /// <summary>
    ///  This function will return data in week format example 
    /// if date is 20/15/2015 then it will return date in following format Dec 14 - Dec 20
    /// </summary>
    /// <param name="date" type="String">Second Date (Week end)</param>
    /// <returns type="String"></returns>
    var self = new Date(this);
    var weekEnd = null;
    if (date) {
        weekEnd = new Date(date);
    }
    else {
        weekEnd = self.addDays(6);
    }
    return self.getDate() + " " + Date.monthAbbreviations[self.getMonth()] + " " + self.getFullYear() + " - " + weekEnd.getDate() + " " + Date.monthAbbreviations[weekEnd.getMonth()] + " " + weekEnd.getFullYear();
}
Date.prototype.addDays = function (days) {
    var dat = new Date(this.valueOf());
    dat.setDate(dat.getDate() + days);
    return dat;
}
Date.prototype.getSpecificDateFromDay = function (dayNo, incrementBy) {
    /// <summary>
    /// It will give specific date from day number.
    /// Example if user pass date 2016-02-02 and day number is 1 and increment by 7
    /// then it will return 2016-02-08 in date object
    /// </summary>
    /// <param name="dayNo" type="Number"></param>
    /// <param name="incrementBy" type="Number">Increment By number of days</param>
    var day = this.getDay();
    var diff = this.getDate() - day + (day == 0 ? dayNo + 1 : dayNo + incrementBy); // adjust when day is sunday
    return new Date(this.setDate(diff));
}
Date.prototype.getDateWithoutTime = function () {
    /// <summary>
    /// This function will remove time information from date
    /// </summary>
    return new Date(this.getFullYear(), this.getMonth(), this.getDate());
}
Date.prototype.difference = function (date) {
    /// <summary>
    ///  return date difference
    /// </summary>
    /// <param name="date" type="Date">
    /// 
    /// </param>

    var startDate = this.getDateWithoutTime();
    var endDate = date.getDateWithoutTime();
    var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

    return startDate > endDate ? 0 - diffDays : diffDays;

}
Date.prototype.differenceInTime = function (date) {

    var startTime = this.getHours().toString() + ":" + this.getMinutes().toString() + ":" + this.getSeconds().toString();
    var endTime = date.getHours().toString() + ":" + date.getMinutes().toString() + ":" + date.getSeconds().toString();

    var startDate = new Date("January 1, 1970 " + startTime);
    var endDate = new Date("January 1, 1970 " + endTime);
    var timeDiff = Math.abs(startDate - endDate);

    var hh = Math.floor(timeDiff / 1000 / 60 / 60);
    if (hh < 10) {
        hh = '0' + hh;
    }
    timeDiff -= hh * 1000 * 60 * 60;
    var mm = Math.floor(timeDiff / 1000 / 60);
    if (mm < 10) {
        mm = '0' + mm;
    }
    timeDiff -= mm * 1000 * 60;
    var ss = Math.floor(timeDiff / 1000);
    if (ss < 10) {
        ss = '0' + ss;
    }

    return {
        hh: hh,
        mm: mm,
        ss: ss
    }
}


function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}



Number.prototype.formatMoney = function (c, d, t) {
    var n = this,
        c = isNaN(c = Math.abs(c)) ? 2 : c,
        d = d == undefined ? "." : d,
        t = t == undefined ? "," : t,
        s = n < 0 ? "-" : "",
        i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
        j = (j = i.length) > 3 ? j % 3 : 0;
    return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
};

//// string prototype
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};

String.prototype.replaceMultiple = function (search, replacement) {
    var target = this;
    return target.split(search).join(replacement);
}

String.prototype.encodeURIAdvanced = function () {
    var target = this;
    target = encodeURIComponent(target);
    return target.replaceMultiple("'", "%27").replaceMultiple("~", "%7E").replaceMultiple("*", "%2A").replaceMultiple("(", "%28").replaceMultiple(")", "%29").replaceMultiple("!", "%21");
}

///below is third party code which will help us to format date// 

/*
    * Date Format 1.2.3
    * (c) 2007-2009 Steven Levithan <stevenlevithan.com>
    * MIT license
    *
    * Includes enhancements by Scott Trenda <scott.trenda.net>
    * and Kris Kowal <cixar.com/~kris.kowal/>
    *
    * Accepts a date, a mask, or a date and a mask.
    * Returns a formatted version of the given date.
    * The date defaults to the current date/time.
    * The mask defaults to dateFormat.masks.default.
    */

var dateFormat = function () {
    var token = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g,
        timezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g,
        timezoneClip = /[^-+\dA-Z]/g,
        pad = function (val, len) {
            val = String(val);
            len = len || 2;
            while (val.length < len) val = "0" + val;
            return val;
        };

    // Regexes and supporting functions are cached through closure
    return function (date, mask, utc) {
        var dF = dateFormat;

        // You can't provide utc if you skip other args (use the "UTC:" mask prefix)
        if (arguments.length == 1 && Object.prototype.toString.call(date) == "[object String]" && !/\d/.test(date)) {
            mask = date;
            date = undefined;
        }

        // Passing date through Date applies Date.parse, if necessary
        date = date ? new Date(date) : new Date;
        if (isNaN(date)) throw SyntaxError("invalid date");

        mask = String(dF.masks[mask] || mask || dF.masks["default"]);

        // Allow setting the utc argument via the mask
        if (mask.slice(0, 4) == "UTC:") {
            mask = mask.slice(4);
            utc = true;
        }

        var _ = utc ? "getUTC" : "get",
            d = date[_ + "Date"](),
            D = date[_ + "Day"](),
            m = date[_ + "Month"](),
            y = date[_ + "FullYear"](),
            H = date[_ + "Hours"](),
            M = date[_ + "Minutes"](),
            s = date[_ + "Seconds"](),
            L = date[_ + "Milliseconds"](),
            o = utc ? 0 : date.getTimezoneOffset(),
            flags = {
                d: d,
                dd: pad(d),
                ddd: dF.i18n.dayNames[D],
                dddd: dF.i18n.dayNames[D + 7],
                m: m + 1,
                mm: pad(m + 1),
                mmm: dF.i18n.monthNames[m],
                mmmm: dF.i18n.monthNames[m + 12],
                yy: String(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: pad(H % 12 || 12),
                H: H,
                HH: pad(H),
                M: M,
                MM: pad(M),
                s: s,
                ss: pad(s),
                l: pad(L, 3),
                L: pad(L > 99 ? Math.round(L / 10) : L),
                t: H < 12 ? "a" : "p",
                tt: H < 12 ? "am" : "pm",
                T: H < 12 ? "A" : "P",
                TT: H < 12 ? "AM" : "PM",
                Z: utc ? "UTC" : (String(date).match(timezone) || [""]).pop().replace(timezoneClip, ""),
                o: (o > 0 ? "-" : "+") + pad(Math.floor(Math.abs(o) / 60) * 100 + Math.abs(o) % 60, 4),
                S: ["th", "st", "nd", "rd"][d % 10 > 3 ? 0 : (d % 100 - d % 10 != 10) * d % 10]
            };

        return mask.replace(token, function ($0) {
            return $0 in flags ? flags[$0] : $0.slice(1, $0.length - 1);
        });
    };
}();

// Some common format strings
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
};

// Internationalization strings
dateFormat.i18n = {
    dayNames: [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat",
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],
    monthNames: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]
};

// For convenience...
Date.prototype.pattern = function (mask, utc) {
    return dateFormat(this, mask, utc);
};


function objectEquals(x, y) {
    'use strict';

    if (x === null || x === undefined || y === null || y === undefined) { return x === y; }
    // after this just checking type of one would be enough
    //   if (x.constructor !== y.constructor) { return false; }
    // if they are functions, they should exactly refer to same one (because of closures)
    if (x instanceof Function) { return x === y; }
    // if they are regexps, they should exactly refer to same one (it is hard to better equality check on current ES)
    if (x instanceof RegExp) { return x === y; }
    if (x === y || x.valueOf() === y.valueOf()) { return true; }
    if (Array.isArray(x) && x.length !== y.length) { return false; }

    // if they are dates, they must had equal valueOf
    if (x instanceof Date) { return false; }

    // if they are strictly equal, they both need to be object at least
    if (!(x instanceof Object)) { return false; }
    if (!(y instanceof Object)) { return false; }

    // recursive object equality check
    var p = Object.keys(x);
    return Object.keys(y).every(function (i) { return p.indexOf(i) !== -1; }) &&
        p.every(function (i) { return objectEquals(x[i], y[i]); });
}


function padLeft(nr, n, str) {
    return Array(n - String(nr).length + 1).join(str || '0') + nr;
}
//or as a Number prototype method:
Number.prototype.padLeft = function (n, str) {
    return Array(n - String(this).length + 1).join(str || '0') + this;
}







