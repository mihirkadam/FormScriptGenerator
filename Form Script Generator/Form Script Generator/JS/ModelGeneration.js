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
*   Somesh Siripuram (Sr.Developer at CloudFronts)
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
    data: { entityName: "", fileName: "" },
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
            $(".msgloading").show();
            modelGeneration.data.entityName = $(this).find("option:selected").text();
            BL.MG.FetchAttributeMetadata($(this).val(), modelGeneration.createModelFile, modelGeneration.errorHandler);

        })
    },

    createModelFile: function (data) {
        /// <summary>
        /// get all attributes for selected entity.
        /// </summary>
        "use strict";
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


        modelFile += '    ' + tempData + '.field = {\n';
        var desc = "", displayName = "";
        for (var cnt = 0; cnt < data.Attributes.length; cnt++) {
            if (!data.Attributes[cnt].IsLogical) {
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
        modelFile += '    var dataType={};\n';
        modelFile += '    for (var key in ' + tempData + '.field) {\n';
        modelFile += '   dataType=' + tempData + '.field[key].dataType ;\n';
        modelFile += '   ' + tempData + '.field[key] = {};\n';
        modelFile += '         MK.FSG.Main.FieldProperties(' + tempData + '.field[key],key, dataType);\n';
        modelFile += '      }\n\n\n';



        modelFile += '    return ' + tempData + ';\n';
        modelFile += '}\n\n\n';
        modelFile += '    if (MK.FSG.Main && !MK.FSGEntity) {\n';
        modelFile += '         MK.FSGEntity = new MK.FSG.Model();\n';
        modelFile += '    }\n';
        modelFile += 'var currentDate = new Date();';
        modelFile += 'console.log("MK.FSG.Model successfully loaded on " + currentDate.toLocaleDateString() + " " + currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds() + ":" + currentDate.getMilliseconds())';

        var a = document.getElementById("downloadModelLink");
        var file = new Blob([modelFile], { type: "text/plain" });
        a.href = URL.createObjectURL(file);
        a.download = tempData + ".js";
        $(".msgloading").hide();
    },

    errorHandler: function (error) {
        "use strict";
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
                document.getElementById("downloadModelLink").click();
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