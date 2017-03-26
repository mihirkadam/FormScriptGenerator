/// <reference path="MGBusinessLayer.js" />



/**
* MSCRM 2016 Model Kit for JavaScript
* @author Mihir M. Kadam
* @current version : 1.0

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
*       New Function - modelGeneration.BindData
*       New Function - modelGeneration.BindEvents
*       New Function - errorHandler
**********************************************************************************************************
*/


$(function () {
    $(".msgloading").show();
    BL.MG.FetchMasterData(modelGeneration.BindData, modelGeneration.errorHandler);

});


var modelGeneration = {
    data: { entityName: "", fileName: "", attributeMetadata: [], formMetadata: [], fileBlob: [] },
    BindData: function (data) {
        /// <summary>
        /// Bind all data to HTML
        /// </summary>
        "use strict";
        var combo = $("<select id='entityId'></select>");

        for (var cnt = 0; cnt < data.value.length; cnt++) {
            if (!data.value[cnt]["DisplayName"]["LocalizedLabels"][0]) {
                continue;
            }
            combo.append("<option value='" + data.value[cnt]["MetadataId"] + "'>" + data.value[cnt]["DisplayName"]["LocalizedLabels"][0]["Label"] + "</option>");

        }

        $("#dropDownEntities").append(combo);
        modelGeneration.sortSelect('#entityId', 'text', 'asc');
        combo.prepend("<option value='0' selected>Select</option>");
        modelGeneration.BindEvents();
        $(".msgloading").hide();
    },
    BindEvents: function () {
        /// <summary>
        /// Bind all  the HTML events
        /// </summary>
        "use strict";



        $("div.container .section").on("change", "#entityId", function () {
            if ($(this).val() !== "0") {
                $(".msgloading").show();
                modelGeneration.data.entityName = $(this).find("option:selected").text();
                BL.MG.FetchAttributeMetadata($(this).val(), modelGeneration.createModelFile, modelGeneration.errorHandler);
            }
        })
    },

    createModelFile: function () {
        /// <summary>
        /// get all attributes for selected entity.
        /// </summary>
        "use strict";
        var data = modelGeneration.data.attributeMetadata;
        var tempData = data.LogicalName.toLowerCase() + "Model";


        var modelFile = '"use strict"\n';
        modelFile += 'var MK = MK || {};\n';
        modelFile += 'MK.FSG = MK.FSG || {};\n';
        modelFile += 'MK.FSG.Model = function (value) {\n';
        modelFile += '    "use strict";\n'
        modelFile += '    var ' + tempData + "={};\n";
        modelFile += '    if (!MK.FSG.Main) {\n';
        modelFile += '    Xrm.Utility.alertDialog("Form Script Generator library not found.");\n';
        modelFile += '    return;\n'
        modelFile += '    };\n';
        modelFile += '    MK.FSG.Main.UserSettings(value);\n\n';
        modelFile += '    MK.FSG.Main.EntityProperties(' + tempData + ');\n\n';
        modelFile += '    ' + tempData + '.form = {};\n';
        modelFile += '    MK.FSG.Main.FormProperties(' + tempData + '.form);\n\n';
        modelFile += '    ' + tempData + '.context = {};\n';
        modelFile += '    MK.FSG.Main.ContextProperties(' + tempData + '.context);\n\n\n';

        ///fields

        modelFile += '    ' + tempData + '.field = {\n';
        var desc = "", displayName = "";
        for (var cnt = 0; cnt < data.Attributes.length; cnt++) {
            if (!data.Attributes[cnt].IsLogical && data.Attributes[cnt].IsValidForAdvancedFind.Value) {
                if (data.Attributes[cnt]["Description"] && data.Attributes[cnt]["Description"]["UserLocalizedLabel"] && data.Attributes[cnt]["Description"]["UserLocalizedLabel"]["Label"]) {
                    desc = data.Attributes[cnt]["Description"]["UserLocalizedLabel"]["Label"];
                }
                if (data.Attributes[cnt]["DisplayName"] && data.Attributes[cnt]["DisplayName"]["UserLocalizedLabel"] && data.Attributes[cnt]["DisplayName"]["UserLocalizedLabel"]["Label"]) {
                    displayName = data.Attributes[cnt]["DisplayName"]["UserLocalizedLabel"]["Label"]
                }
                modelFile += '        /// <field name="' + data.Attributes[cnt].LogicalName + '" type="' + data.Attributes[cnt].AttributeType + '"> DisplayName: ' + displayName + '\n ';
                modelFile += '        /// <para />Description: ' + desc + ' </field>\n';
                modelFile += '        ' + data.Attributes[cnt].LogicalName + ':{\n';
                modelFile += '            dataType:"' + data.Attributes[cnt].AttributeType + '"\n';
                modelFile += '        },\n';
                desc = "";
                displayName = "";
            }
        }
        modelFile += '      }\n\n'

        //tabs 
        var tabNames = [];
        var x2js = new X2JS();
        var forms = modelGeneration.data.formMetadata;
        var formJSON = [];

        var tabArray = []



        for (var fcnt = 0; fcnt < forms.length; fcnt++) {
            formJSON.push({ form: x2js.xml_str2json(forms[fcnt]["formxml"]).form, name: forms[fcnt]["name"] });
        }



        //sections
        var sectionNames = [];
        var tabObject = {};
        var sectionObject = {};

        //loop for forms
        for (var fcnt = 0; fcnt < formJSON.length; fcnt++) {
            //loop for tabs
            for (var tcount = 0; tcount < formJSON[fcnt].form.tabs.tab.length; tcount++) {
                var tab = formJSON[fcnt].form.tabs.tab[tcount];
                var tabIndex = tabNames.indexOf(tab["_name"]);
                if (tabIndex > -1) {
                    tabObject = tabArray[tabIndex];
                    tabObject.form.push(formJSON[fcnt].name);
                }
                else {
                    tabObject = modelGeneration.getTabObject();
                    tabObject.description = tab["labels"]["label"]["_description"];
                    tabObject.forms.push(formJSON[fcnt].name);
                    tabObject.tabName = tab["_name"];
                }


                //loop for multiple columns
                for (var columncount = 0; columncount < tab["columns"]["column"].length; columncount++) {
                    var column = tab["columns"]["column"][columncount];
                    //loop for section
                    for (var scount = 0; scount < column["sections"]["section"].length; scount++) {

                        var section = column["sections"]["section"][scount];
                        var sectionIndex = tabObject.section.contains(section["_name"], "sectionName");
                        if (MK.Validation.isNumber(sectionIndex)) {
                            tabObject.section[sectionIndex].forms.push(formJSON[fcnt].name);
                        }
                        sectionObject = modelGeneration.getSectionObject();
                        sectionObject.description = section["labels"]["label"]["_description"];
                        sectionObject.forms.push(formJSON[fcnt].name);
                        sectionObject.sectionName = section["_name"];
                        tabObject.section.push(sectionObject);
                    }
                }
                if (!(tabIndex > -1)) {
                    tabArray.push(tabObject)
                    tabNames.push(tabObject.tabName);
                }
                tabObject = null;
            }
        }

        modelFile += '    ' + tempData + '.tab = {\n';
        for (var tcount = 0; tcount < tabArray.length; tcount++) {
            modelFile += '        /// <field name="' + tabArray[tcount]["tabName"].split(" ").join("_") + '"> Label: ' + tabArray[tcount]["description"] + '\n ';
            modelFile += '        /// <para />Name: ' + tabArray[tcount]["tabName"].toString() + ' \n';
            modelFile += '        /// <para />Form Name: ' + tabArray[tcount]["forms"].toString() + ' </field>\n';
            modelFile += '        ' + tabArray[tcount]["tabName"].split(" ").join("_") + ':{\n';
            modelFile += '          name :"' + tabArray[tcount]["tabName"] + '",\n';
            modelFile += '          section:{\n';
            for (var scount = 0; scount < tabArray[tcount].section.length; scount++) {
                modelFile += '                /// <field name="' + tabArray[tcount].section[scount]["sectionName"].split(" ").join("_") + '" > Label: ' + tabArray[tcount].section[scount]["description"] + '\n ';
                modelFile += '                /// <para />Name: ' + tabArray[tcount].section[scount]["sectionName"] + '\n';
                modelFile += '                /// <para />Form Name: ' + tabArray[tcount].section[scount]["forms"].toString() + ' </field>\n';
                modelFile += '                ' + tabArray[tcount].section[scount]["sectionName"].split(" ").join("_") + ':{\n'
                modelFile += '                 name :"' + tabArray[tcount].section[scount]["sectionName"] + '"\n';
                modelFile += '                },\n';
            }
            modelFile += '           },\n';
            modelFile += '        },\n';
        }
        modelFile += '      }\n\n'

        //header
        var headerNames = [];
        modelFile += '    ' + tempData + '.header = {\n';
        //for headers

        for (var fcount = 0; fcount < formJSON.length; fcount++) {

            if (!MK.Validation.isArray(formJSON[fcount].form["header"]["rows"]["row"])) {
                for (var hcount = 0; hcount < formJSON[fcount].form["header"]["rows"]["row"]["cell"].length; hcount++) {
                    var cell = formJSON[fcount].form["header"]["rows"]["row"]["cell"][hcount];
                    if (!cell["control"] || headerNames.indexOf(cell["control"]["_datafieldname"]) > -1) {
                        continue;
                    }
                    modelFile += '        ' + cell["control"]["_datafieldname"] + ':' + tempData + '.field.' + [cell["control"]["_datafieldname"]] + ',\n';
                    headerNames.push(cell["control"]["_datafieldname"]);
                }
            }
            else {
                for (var rcount = 0; rcount < formJSON[fcount].form["header"]["rows"]["row"].length; rcount++) {
                    for (var hcount = 0; hcount < formJSON[fcount].form["header"]["rows"]["row"][rcount]["cell"].length; hcount++) {
                        var cell = formJSON[fcount].form["header"]["rows"]["row"][rcount]["cell"][hcount];
                        if (!cell["control"] || headerNames.indexOf(cell["control"]["_datafieldname"]) > -1) {
                            continue;
                        }
                        modelFile += '        ' + cell["control"]["_datafieldname"] + ':' + tempData + '.field.' + [cell["control"]["_datafieldname"]] + ',\n';
                        headerNames.push(cell["control"]["_datafieldname"]);
                    }
                }

            }
        }
        modelFile += '      }\n\n'

        modelFile += '    var dataType={};\n';
        modelFile += '    for (var key in ' + tempData + '.field) {\n';
        modelFile += '        dataType=' + tempData + '.field[key].dataType ;\n';
        modelFile += '        ' + tempData + '.field[key] = {};\n';
        modelFile += '         MK.FSG.Main.FieldProperties(' + tempData + '.field[key],key, dataType);\n';
        modelFile += '      }\n\n\n';

        modelFile += '    dataType={};\n';
        modelFile += '    for (var key in ' + tempData + '.header) {\n';
        modelFile += '        dataType=' + tempData + '.header[key].dataType ;\n';
        modelFile += '        ' + tempData + '.header[key] = {};\n';
        modelFile += '         MK.FSG.Main.FieldProperties(' + tempData + '.header[key],' + '"header_"+' + 'key, dataType);\n';
        modelFile += '      }\n\n\n';

        modelFile += '    var sectionObj = {};\n';
        modelFile += '    for (var key in ' + tempData + '.tab) {\n';
        modelFile += '        sectionObj = ' + tempData + '.tab[key].section;\n';
        modelFile += '        MK.FSG.Main.TabProperties(' + tempData + '.tab[key], ' + tempData + '.tab[key].name);\n';
        modelFile += '        for (var keySection in sectionObj) {\n';
        modelFile += '            MK.FSG.Main.SectionProperties(' + tempData + '.tab[key].section[keySection], key, ' + tempData + '.tab[key].section[keySection].name);\n';
        modelFile += '        }\n';
        modelFile += '    }\n\n\n';

        modelFile += '    ' + tempData + '.userSetting = {}\n';
        modelFile += '    MK.FSG.Main.UserSettings(' + tempData + '.userSetting);\n';

        modelFile += '    return ' + tempData + ';\n';
        modelFile += '}\n\n\n';
        modelFile += 'if (MK.FSG.Main && !MK.FSGEntity) {\n';
        modelFile += '    MK.FSGEntity = new MK.FSG.Model();\n';
        modelFile += '}\n';
        modelFile += 'var currentDate = new Date();';
        modelFile += 'console.log("MK.FSG.Model successfully loaded on " + currentDate.toLocaleDateString() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds())';

        var a = document.getElementById("downloadModelLink");
        var file = new Blob([modelFile], { type: "text/plain" });
        modelGeneration.data.fileBlob = file;

        $(".msgloading").hide();
    },

    getTabObject: function () {
        "use strict";
        return {
            tabName: "",
            description: "",
            forms: [],
            section: []
        }
    },
    getSectionObject: function () {
        "use strict";
        return {
            sectionName: "",
            description: "",
            forms: []
        }
    },
    errorHandler: function (error) {
        "use strict";
        $(".msgloading").hide();
        Xrm.Utility.alertDialog(error.message, null);
    },
    donloadFile: function (value) {
        "use strcit";
        switch (value) {
            case "FormScriptGenerator":
                document.getElementById("downloadFSGLink").click();
                break;
            case "ExampleFSG":
                document.getElementById("downloadFSGExampleLink").click();
                break;
            case "entityModel":
                var a = document.getElementById("downloadModelLink");
                var data = modelGeneration.data.attributeMetadata;
                var tempData = data.LogicalName.toLowerCase() + "Model";
                if (!modelGeneration.data.fileBlob) {
                    alert("Please select entity.");
                    return;
                }
                if (window.navigator.msSaveBlob) {
                    window.navigator.msSaveBlob(modelGeneration.data.fileBlob, tempData + ".js");
                }
                else {
                    a.download = tempData + ".js";
                    a.href = URL.createObjectURL(modelGeneration.data.fileBlob);
                    document.getElementById("downloadModelLink").click();

                }
                break;
        }
    },
    sortSelect: function (select, attr, order) {
        if (attr === 'text') {
            if (order === 'asc') {
                $(select).html($(select).children('option').sort(function (x, y) {
                    return $(x).text().toUpperCase() < $(y).text().toUpperCase() ? -1 : 1;
                }));
                $(select).get(0).selectedIndex = 0;
                // e.preventDefault();
            }// end asc
            if (order === 'desc') {
                $(select).html($(select).children('option').sort(function (y, x) {
                    return $(x).text().toUpperCase() < $(y).text().toUpperCase() ? -1 : 1;
                }));
                $(select).get(0).selectedIndex = 0;
                // e.preventDefault();
            }// end desc
        }

    }
}

// Auto-log uncaught JS errors
window.onerror = function (msg, url, lineNo, columnNo, error) {

    $(".msgloading").hide();
    var string = msg.toLowerCase();
    var substring = "script error";
    if (string.indexOf(substring) > -1) {
        alert('Script Error: See Browser Console for Detail');
    } else {
        var message = [
            'Message: ' + msg,
            'URL: ' + url,
            'Line: ' + lineNo,
            'Column: ' + columnNo,
            'Error object: ' + JSON.stringify(error)
        ].join(' - ');

        alert(message);
    }

    return false;
}