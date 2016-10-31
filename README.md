# Form Script Generator for Dynamics CRM 2016 update 1 and above.
[![ghit.me](https://ghit.me/badge.svg?repo=mihirkadam/Form-Script-Generator)](https://ghit.me/repo/mihirkadam/Form-Script-Generator)
>Helps you to write Dynamics CRM form scripts in more efficient and easy way with the help of VS IntelliSense. :sparkles: :boom:
  

##The Library is designed for 
- An easy and faster way to write Form Scripts for Dynamics CRM.
- Visual Studio IntelliSense for Dynamics CRM functions.
- Field validations.

###Following are some screen capture 
![Alt text](https://github.com/mihirkadam/Form-Script-Generator/blob/master//Form%20Script%20Generator/Form%20Script%20Generator/Images/VSIntelliSense-Field-1.png?raw=true "Visual Studio IntelliSense")
![Alt text](https://github.com/mihirkadam/Form-Script-Generator/blob/master//Form%20Script%20Generator/Form%20Script%20Generator/Images/VSIntelliSense-Property-1.png?raw=true "Visual Studio IntelliSense")


###Example:
```javascript
     	///set value to name field
        MK.FSGEntity.field.name.value = "Form Script Generator Example";

        //get value from name field
        var nameValue = MK.FSGEntity.field.name.value; 
```

###Some interesting features 
- No need to remember the logical name of the field.
- Field properties will be filtered by data type.
- Auto field validation if selected field is not present the form.

##Get started
The wiki has a great section on how to get started
- Documentation: Github wiki
- Feedback: Open an issue

##Compatibility Matrix
### CRM Online 
| <img src="https://github.com/mihirkadam/Form-Script-Generator/blob/master/Form%20Script%20Generator/Form%20Script%20Generator/Images/dynamics-crm-logo.png?raw=true" alt="2016 Update 1" width="16px" height="16px" /><br />2016 Update 1 | <img src="https://github.com/mihirkadam/Form-Script-Generator/blob/master/Form%20Script%20Generator/Form%20Script%20Generator/Images/dynamics-crm-logo.png?raw=true" alt="Dynamics 365" width="16px" height="16px" /><br />Dynamics 365 | 
| --------- | --------- | 
| v8.1| v8.2 | 

### Browsers 

| [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/edge.png?" alt="Edge" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)<br />Edge | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/firefox.png" alt="Firefox" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)<br />Firefox | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/chrome.png" alt="Chrome" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)<br />Chrome | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/safari.png" alt="Safari" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)<br />Safari | [<img src="https://raw.githubusercontent.com/godban/browsers-support-badges/master/src/images/opera.png" alt="Opera" width="16px" height="16px" />](http://godban.github.io/browsers-support-badges/)<br />Opera | 
| --------- | --------- | --------- | --------- | --------- |
| v38.0| v49.0 | v54.0 |v5.1| v41.0

### Phones 
| <img src="https://github.com/mihirkadam/Form-Script-Generator/blob/master/Form%20Script%20Generator/Form%20Script%20Generator/Images/android_logo.jpg?raw=true" alt="Android" width="20px" height="20px" /><br />Android | <img src="https://github.com/mihirkadam/Form-Script-Generator/blob/master/Form%20Script%20Generator/Form%20Script%20Generator/Images/apple-logo.png?raw=true" alt="iOS" width="16px" height="16px" /><br />iOS | <img src="https://github.com/mihirkadam/Form-Script-Generator/blob/master/Form%20Script%20Generator/Form%20Script%20Generator/Images/windows-logo.jpg?raw=true" alt="Windows" width="20px" height="20px" /><br />Windows | 
| --------- | --------- | --------- | 
| v6| v10 | v10 

### Tablets 
| <img src="https://github.com/mihirkadam/Form-Script-Generator/blob/master/Form%20Script%20Generator/Form%20Script%20Generator/Images/android_logo.jpg?raw=true" alt="Android" width="20px" height="20px" /><br />Android | <img src="https://github.com/mihirkadam/Form-Script-Generator/blob/master/Form%20Script%20Generator/Form%20Script%20Generator/Images/apple-logo.png?raw=true" alt="iOS" width="16px" height="16px" /><br />iOS | <img src="https://github.com/mihirkadam/Form-Script-Generator/blob/master/Form%20Script%20Generator/Form%20Script%20Generator/Images/windows-logo.jpg?raw=true" alt="Windows" width="20px" height="20px" /><br />Windows | 
| --------- | --------- | --------- | 
| v6| v10 | v10 

##Features 
Following are SDK functions are supported by latest release 
###Version: 1.0
- Date: 1 Nov, 2016

      - [Field Properties](https://github.com/mihirkadam/FormScriptGenerator/wiki/Field-Properties)

                       1. setValue 
                       2. getValue 
                       3. getAttributeType 
                       4. getFormat
                       5. getIsDirty
                       6. getIsPartyList
                       7. getMaxLength
                       8. getName
                       9. getUserPrivilege 
                       10. getMax
                       11. getMin
                       12. getPrecision
                       13. getRequiredLevel
                       14. setRequiredLevel
                       15. getSubmitMode
                       16. setSubmitMode
                       17. getDisabled
                       18. setDisabled
                       19. getLabel
                       20. setLabel
                       21. setFocus
                       22. getVisible
                       23. setVisible
                       24. fireOnChange
                       25. addCustomView
                       26. getDefaultView
                       27. setDefaultView
                       28. setNotification
                       29. clearNotification
                       30. addPreSearch
                       31. removePreSearch
                       32. addCustomFilter
                       33. getInitialValue
                       34. getSelectedOption
                       35. getOptions
                       36. getText
                       37. getShowTime
                       38. setShowTime 
                       39. addOnKeyPress
                       40. removeOnKeyPress
                       41. fireOnKeyPress
                       42. showAutoComplete
                       43. hideAutoComplete
                       44. getAttribute

      - [Form Properties](https://github.com/mihirkadam/FormScriptGenerator/wiki/Form-Properties)

                       1. close
                       2. getFormType
                       3. clearFormNotification
                       4. setFormNotification
                       5. getViewPortHeight
                       6. getViewPortWidth
                       7. refreshRibbon
                       8. getCurrentControl

      - [Entity Properties](https://github.com/mihirkadam/FormScriptGenerator/wiki/Entity-Properties)

                       1. getEntityName
                       2. getId
                       3. getIsDirty
                       4. allAttributes
                       5. getDataXml
                       6. getPrimaryAttributeValue

      - [Context Properties](https://github.com/mihirkadam/FormScriptGenerator/wiki/Context-Properties)

                       1. getClientUrl
                       2. getUserId
                       3. getUserName
                       4. getUserLcid
                       5. getUserRoles
                       6. getClient
                       7. getClientState
                       8. getFormFactor
                       9. getIsAutoSaveEnabled
                       10. getOrgLcid 
                       11. getOrgUniqueName
                       12. getQueryStringParameters
                       13. getTimeZoneOffsetMinutes

##What’s coming in Next Release  
1. Utility functions from Dynamics CRM SDK.
2. Access business process fields.

##Planned Features 
1. Access tab and section present of the form.
2. Access grid , web resources and iFrame. 

##Feature Request
Take charge and [add your idea](http://feathub.com/mihirkadam/Form-Script-Generator) or [vote on your favorite feature](http://feathub.com/mihirkadam/Form-Script-Generator) to be implemented:


##Minimum Software Requirement 
- Visual Studio 2013 or above.

##License
MIT - see [ MIT licence information](LICENSE)

----
© 2016, Mihir Kadam (mihirkadam16@gmail.com)
