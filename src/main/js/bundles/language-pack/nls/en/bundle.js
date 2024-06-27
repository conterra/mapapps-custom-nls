/*
 * Copyright (C) 2024 con terra GmbH (info@conterra.de)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
module.exports = {
    "agssearch": {
        "metadataError": "Error retrieving metadata from store '${id}'. Message: ${error}",
        "defaults": {
            "name": "Feature",
            "description": "Find features in an ArcGIS Server layer",
            "placeHolder": "Feature name..."
        }
    },
    "agssearch-config": {
        "menu": {
            "title": "ArcGIS Server Search & Selection"
        },
        "autoregistration": {
            "title": "Automatic ArcGIS Server Store Registration",
            "description": "Configuration for automatic ArcGIS Server store registration",
            "enableTitle": "Enable auto-registration",
            "enableTooltip": "Check to activate automatic ArcGIS Server store registration",
            "omnisearchTitle": "Use stores in Omnisearch",
            "omnisearchTooltip": "Check to use stores in Omnisearch",
            "selectionTitle": "Use stores in selection",
            "selectionTooltip": "Check to use stores in Selection"
        }
    },
    "app-portal-registration": {
        "window": {
            "title": "Register App '${title}' in ArcGIS"
        },
        "action": {
            "title": "Register App in ArcGIS"
        },
        "widget": {
            "registerButton": "Register app",
            "cancelButton": "Cancel",
            "closeButton": "Close",
            "removeButton": "Delete app registration",
            "saveButton": "Save",
            "yesButton": "Yes",
            "noButton": "No",
            "appTitlePlaceholder": "Title",
            "appDescriptionPlaceholder": "Description",
            "thumbnailLabel": "Thumbnail",
            "registrationHint": "This dialog registers the app as an item in ArcGIS Enterprise portal respectively ArcGIS Online. After the registration the app is available at: <a target='_blank' href='${portalBaseUrl}'>${portalBaseUrlNoSchema}</a>",
            "registrationHintWithPortalIdentityProvider": "map.apps is connected to the ArcGIS Enterprise portal, which is available at <a target='_blank' href='${portalBaseUrl}'>${portalBaseUrlNoSchema}</a>. The app is registered there as a portal item.",
            "portalUrlDoesNotMatchIdPUrl": "The configuration property <i>esri.api.arcgisPortalUrl</i> does not point to the ArcGIS Enterprise portal configured in the <i>con terra Technologies Identity Service</i>. Please change the value to <i>${correctPortalBase}</i> to avoid incorrect behavior.",
            "registeredHint": "The app is registered as an item in ArcGIS Enterprise portal/ArcGIS Online.",
            "accessDeniedHint": "This app was registered by another user. You cannot perform any changes. The reported error was:</br> <small>${errorMessage}</small>",
            "portalItemLinkLabel": "Open associated ArcGIS element in new window.",
            "loadingMessage": "Your request is being processed...",
            "removeItemQuestion": {
                "title": "Delete app registration",
                "message": "Do you really want to delete the app registration? The associated ArcGIS item will also be deleted.",
                "okButton": "Delete",
                "cancelButton": "Cancel"
            },
            "appHasBeenCleaned": "Your app has been cleaned up.",
            "removeBundlesQuestion": {
                "title": "Hint",
                "message": " <p>The following bundles are usually not needed anymore and will be removed from the app: </p><strong>${bundles}</strong>",
                "okButton": "Ok",
                "cancelButton": "Keep bundles"
            },
            "portalItemNotFoundTitle": "ArcGIS item could not be found.",
            "warningMessage": "The app may not be able to be opened by everyone because it is not yet published in map.apps."
        },
        "messages": {
            "portalRegistrationSuccess": "The app '${title}' has been registered as an ArcGIS item.",
            "portalRegistrationError": "The app '${title}' could not be registered as an ArcGIS item.",
            "portalDeregistrationSuccess": "The registration of the app '${title}' has been deleted. The associated ArcGIS item has also been removed.",
            "portalDeregistrationError": "The registration of the app '${title}' could not be deleted.",
            "portalUpdateSuccess": "The app '${title}' has been updated.",
            "portalUpdateError": "The app '${title}' could not be updated.",
            "appJsonSaveError": "The ID of the ArcGIS item could not be saved for this app. The app was not registered."
        },
        "appColumnExtender": {
            "portalItem": "The app is registered as an ArcGIS item.",
            "portalItemOauth": "The app is registered as an ArcGIS item and only accessible if the item is shared with the user."
        }
    },
    "appbundlemanagement": {
        "bundleVersionReplacerTool": {
            "title": "Versionize",
            "tooltip": "Manage product versions in selected apps"
        },
        "wizard": {
            "title": "Manage versions",
            "doneLabel": "Apply",
            "product": "Product",
            "productVersion": "Please choose the products for that the versions should be managed.",
            "productVersionInfo": "<div>The <strong>minimal version</strong> describes the minimal version of the bundles to use inside the apps. <strong>Update policy</strong> describes that newer bundles inside a specific range are automatically applied.</div>",
            "productVersionLabel": "Minimal version",
            "previewSelectProductVersion": "Please select a version.",
            "previewRemoveProductVersion": "The latest version is always used. Any existing restrictions will be removed.",
            "previewWithModifier": "Will be changed to: <strong>${value}</strong>.<br/>Allowed are: <strong>${range}</strong>.",
            "previewConcreteVersion": "Exactly version <strong>${value}</strong> will be used.",
            "autoupdatesTitle": "<strong>Update policy</strong>",
            "applyText": "<span>On clicking <strong>Apply</strong> the following settings will be applied to the previously selected apps.</span>",
            "versionLoadText": "Please wait...",
            "fetchingProductInfo": "Collecting information about installed products ...",
            "productVersionConcrete": "No Updates",
            "productVersionConcreteDesc": "The selected version is used.",
            "productVersionBugfix": "Bugfixes",
            "productVersionBugfixDesc": "Newer versions which differ in the third position are used (e.g: 1.1.x)",
            "productVersionMinor": "Minor Updates",
            "productVersionMinorDesc": "Newer versions which differ in the second or third position are used (e.g: 1.x.x)",
            "latestVersionTitle": "Always the newest",
            "columnProduct": "Product",
            "columnVersion": "Version",
            "rangeEmpty": "Always the newest",
            "rangeExpression": "{value} ({range})"
        },
        "report": {
            "title": "Replacement report",
            "info": "Click on an app to get more details.",
            "close": "Close",
            "columnBundleName": "Bundle",
            "columnProduct": "Product",
            "columnOldRange": "Old",
            "columnRange": "New",
            "columnSuccess": "Success",
            "successYes": "Yes",
            "successNo": "No",
            "noChanges": "There were no changes needed",
            "rangeEmpty": "Always the newest",
            "rangeExpression": "{value} ({range})"
        }
    },
    "appmanagement": {
        "commonDelete": {
            "title": "Delete selected Apps?",
            "saveQuery": "Do you really want to delete {number} App(s)? This action cannot be undone.",
            "okButton": "Delete Apps",
            "cancelButton": "Cancel",
            "error": "Deletion of Apps '{items}' failed.",
            "partialSuccess": "Some Apps could not be deleted.",
            "errorFinish": "No App could be deleted.",
            "success": "Apps successfully deleted."
        },
        "dataViewCommon": {
            "DGRID": {
                "noDataMessage": "No apps available."
            },
            "ICON": {
                "noDataMessage": "No apps available."
            },
            "filter": {
                "menuDefaultLabel": "All fields",
                "textBoxPlaceHolder": "Filter view"
            },
            "pager": {
                "backButtonTooltip": "Previous page",
                "forwardButtonTooltip": "Next page",
                "firstButtonTooltip": "First page",
                "lastButtonTooltip": "Last page",
                "pageLabeltext": "Page:",
                "pageSizeLabelText": "Items ${pageStartItemNumber}-${pageEndItemNumber} of ${itemCount}",
                "zeroResultsText": ""
            }
        },
        "appsTool": {
            "title": "Apps"
        },
        "removeSelectedAppsTool": {
            "title": "Delete",
            "desc": "Delete selected App(s)"
        },
        "createAppTool": {
            "title": "Create",
            "desc": "Create a new App"
        },
        "appsView": {
            "noDataMessage": "There are no apps available.",
            "id": "App ID",
            "title": "Title",
            "desc": "Description",
            "filename": "File",
            "modifiedBy": "Modified By",
            "modifiedAt": "Modified At",
            "editorState": "State",
            "preoptimized": "Pre-optimized"
        },
        "appBundlesMgmt": {
            "updateError": "Update of App '${id}' failed. ${error}",
            "updateSuccess": "App '${id}' successfully saved.",
            "appBundlesView": {
                "name": "Name",
                "version": "Version",
                "windowTitle": "Bundles used in this app",
                "noDataMessage": "No bundles available",
                "safetyQuestionRemove": {
                    "title": "Remove bundle from app",
                    "message": "Removing the selected bundles also deletes the associated configurations from the app. This action cannot be undone. Should the bundles really be removed?",
                    "okButton": "Remove Bundle",
                    "cancelButton": "Cancel"
                },
                "defaultBundlesRemoveWarning": "The bundle selection contains system bundles, which cannot be removed. These bundles are <b>${appserviceDefaultBundles}</b>.",
                "okButton": "Save",
                "cancelButton": "Cancel"
            },
            "availableBundlesView": {
                "name": "Name",
                "version": "Version",
                "windowTitle": "Select bundles to add",
                "noDataMessage": "No bundles available",
                "addBundlesDefaultConfigHint": "The following list contains all bundles provided by this map.apps instance. New bundles can be uploaded in the tab 'Bundles' of the map.apps Manager. It might be necessary to add initial configuration when adding bundles.",
                "okButton": "Add"
            },
            "changeBundleVersionRange": {
                "info": "A version can be selected or a version range can be entered. (Samples: 3.x, 3.1.x, 3.1.0. More details can be found in the documentation.)",
                "invalidMessage": "Invalid version range",
                "title": "Select version"
            }
        },
        "appBundlesRemoveTool": {
            "title": "Remove",
            "desc": "Remove selected bundle(s)"
        },
        "initAdditionalBundleSelection": {
            "title": "Add",
            "desc": "Add bundle(s)"
        },
        "changeVersionRangeTool": {
            "title": "Set bundle version",
            "desc": "Set bundle version"
        },
        "appColumnExtender": {
            "launchApp": "Launch",
            "launchAppTooltip": "Launch App"
        },
        "appDetailsView": {
            "windowTitle": "App '${id}'",
            "createWindowTitle": "New App",
            "title": "Title",
            "description": "Description",
            "createdAt": "Created at:",
            "createdBy": "Created by:",
            "modifiedAt": "Modified at:",
            "modifiedBy": "Modified by:",
            "id": "App ID:",
            "templateId": "App Template:",
            "templateModifiedAt": "App Template modified at:",
            "templateUpload": "Here you have the possibility to upload a zip file to replace the app configuration.",
            "fileName": "File:",
            "editorState": "State",
            "editorStateValues": {
                "DRAFT": "Draft",
                "EDITED": "Edited",
                "VERIFIED": "Verified",
                "PUBLISHED": "Published",
                "DEPRECATED": "Deprecated"
            },
            "updateError": "Update of App '${id}' failed. ${error}",
            "updateSuccess": "App '${id}' saved successfully.",
            "updateStarted": "Saving of App '${id}' started...",
            "choseFileLabel": "Choose a file",
            "createAppInfo": {
                "id": "Please enter a title and an app ID for your new app. The ID will be used in the URL with which your app will be opened later.",
                "template": "Choose an App Template:",
                "title": "Please enter a title and a description for your app.",
                "idInUse": "This app ID is already in use. Please choose another one.",
                "idValidationInProcess": "Validating ID...",
                "upload": "Upload app",
                "uploadInfo": "Please upload the app.",
                "uploadDescription": "A ZIP-archive that contains an app can be uploaded. It will be used to create a new app.",
                "uploadOnDone": "Confirm by clicking \"Done\" and upload an app in the next step.",
                "uploaded": "100% - Process App",
                "uploadStart": "Upload Started",
                "uploadError": "Upload Error: ",
                "uploadFinished": "Upload Finished",
                "createDefaultApp": "Default app",
                "createDefaultAppDescription": "An app that includes frequently used features will be created. Content and other functions can be added to the app afterwards.",
                "createAppWithTemplate": "Use app template",
                "createAppWithTemplateDescription": "Contents, functions and their configuration are taken from an app template. They can be adapted later.",
                "appCreationMode": "Please choose, how the new app should be created."
            },
            "panelDefaultTitle": "<strong>Common Information</strong>",
            "panelEditorTitle": "<strong>Edit Information</strong>",
            "panelTemplateTitle": "<strong>App Template Information</strong>",
            "panelConfigureTitle": "<strong>Configuration</strong>",
            "panelConfigureTitle2": "<strong>Further Actions</strong>",
            "panelShareTitle": "<strong>Share with:</strong>",
            "panelThumbnailTitle": "<strong>Thumbnail for Apps Overview</strong>",
            "thumbnailUploadTitle": "Upload Thumbnail",
            "thumbnailUploadedTitle": "100%",
            "configurePreviewBtn": "Live Configuration",
            "configurePreviewBtnTooltip": "Starts the app and provides a graphical configuration interface. <br/>Changes to the configuration can be checked directly.",
            "configureFilesBtn": "App Editor",
            "configureFilesBtnTooltip": "Opens a text editor in which the configuration and other files used in the app can be changed.",
            "configureExportBtn": "Export App",
            "configureExportBtnTooltip": "Exports the app as a zip file. This can be uploaded as a new app template.",
            "configureBundlesBtn": "Manage bundles",
            "configureBundlesBtnTooltip": "Allows to add or remove bundles in this app.",
            "configureActivatePreoptimizedStateBtn": "Enable pre-optimization",
            "configureDeactivatePreoptimizedStateBtn": "Disable pre-optimization",
            "warningAppPreOptimized": "This app is pre-optimized. Some actions are not available in this state.",
            "shareWithAnyone": "Everyone",
            "command": {
                "Add": "Add new file",
                "Replace": "Replace content",
                "Save": "Save",
                "Delete": "Delete file",
                "Preview": "Preview app"
            },
            "deleteWarning": {
                "title": "Confirm file delete",
                "message": "Do you really want to delete this file? This action cannot be undone.",
                "okButton": "Delete file",
                "cancelButton": "Cancel"
            },
            "unsavedChangesWarning": {
                "title": "Unsaved Changes",
                "message": "The file '${file}' includes unsaved changes!",
                "discardChangesButton": "Discard",
                "backToEditorButton": "Back to Editor"
            },
            "ardChangesButton": "Discard",
            "addFileTitle": "Create File",
            "fileNamePlaceHolder": "File Name",
            "fileExistsError": "A file named ${file} already exists.",
            "invalidError": "The file is invalid.",
            "saveChanges": {
                "okButton": "Yes",
                "cancelButton": "No"
            },
            "fileUpload": {
                "windowTitle": "Replace File Content",
                "warning": "Please note that the contents of the existing file will be replaced by the uploaded content without any verification.",
                "upload": "Upload File",
                "uploaded": "100%"
            }
        },
        "preoptimized_onError": "Pre-optimizing app failed. Error: ${error}",
        "preoptimized_onSuccess": "Pre-optimizing app successful.",
        "preoptimized_onInfo": "Pre-optimizing an app may take some time. Are you sure you want to start it now?",
        "preoptimized_onRunningInfo": "Pre-optimizing app...",
        "preoptimized_offError": "Disabling pre-optimization failed. Error: ${error}",
        "preoptimized_offSuccess": "Disabling pre-optimization successful.",
        "preoptimized_offInfo": "Disabling pre-optimization of an app may take some time. Are you sure you want to start it now?",
        "preoptimized_offRunningInfo": "Disabling pre-optimization..."
    },
    "appsoverview": {
        "dataViewCommon": {
            "noDataMessage": "No apps available.",
            "filter": {
                "menuDefaultLabel": "All",
                "textBoxPlaceHolder": "Filter view"
            },
            "pager": {
                "backButtonTooltip": "Previous page",
                "forwardButtonTooltip": "Next page",
                "firstButtonTooltip": "First page",
                "lastButtonTooltip": "Last page",
                "pageLabeltext": "Page:",
                "pageSizeLabelText": "Items ${pageStartItemNumber}-${pageEndItemNumber} of ${itemCount}"
            }
        },
        "appsTool": {
            "title": "Apps Overview",
            "desc": "List of Apps"
        },
        "appsView": {
            "id": "Name",
            "title": "Title",
            "desc": "Description",
            "filename": "File",
            "modifiedBy": "Modified By",
            "modifiedAt": "Modified At"
        }
    },
    "appsstore": {
        "editorStateValues": {
            "DRAFT": "Draft",
            "EDITED": "Edited",
            "VERIFIED": "Verified",
            "PUBLISHED": "Published",
            "DEPRECATED": "Deprecated"
        },
        "preoptimized": {
            "enabled": "Yes",
            "disabled": "No"
        }
    },
    "apptemplatemanagement": {
        "commonDelete": {
            "title": "Delete selected App Templates?",
            "saveQuery": "Do you really want to delete {number} App Template(s)? This action cannot be undone.",
            "okButton": "Delete templates",
            "cancelButton": "Cancel",
            "error": "Deletion of App Templates '{items}' failed.",
            "partialSuccess": "Some App Templates could not be deleted.",
            "errorFinish": "No App Template could be deleted.",
            "success": "App Templates successfully deleted."
        },
        "templatesTool": {
            "title": "App Templates"
        },
        "removeSelectedTemplatesTool": {
            "title": "Delete",
            "desc": "Delete App Template(s)"
        },
        "createTemplateTool": {
            "title": "Create",
            "desc": "Create a new App Template"
        },
        "dataViewCommon": {
            "DGRID": {
                "noDataMessage": "No App Templates available."
            },
            "ICON": {
                "noDataMessage": "No App Templates available."
            },
            "filter": {
                "menuDefaultLabel": "All fields",
                "textBoxPlaceHolder": "Filter view"
            },
            "pager": {
                "backButtonTooltip": "Previous page",
                "forwardButtonTooltip": "Next page",
                "firstButtonTooltip": "First page",
                "lastButtonTooltip": "Last page",
                "pageLabeltext": "Page:",
                "pageSizeLabelText": "Items ${pageStartItemNumber}-${pageEndItemNumber} of ${itemCount}",
                "zeroResultsText": ""
            }
        },
        "templatesView": {
            "noDataMessage": "No App Templates available.",
            "title": "Title",
            "desc": "Description",
            "filename": "File",
            "modifiedBy": "Modified By",
            "modifiedAt": "Modified At"
        },
        "templatesDetailsView": {
            "windowTitle": "App Template '${title}'",
            "createWindowTitle": "New App Template",
            "title": "Title",
            "description": "Description",
            "createdAt": "Created at:",
            "createdBy": "Created by:",
            "modifiedAt": "Modified at:",
            "modifiedBy": "Modified by:",
            "id": "ID:",
            "fileName": "File:",
            "upload": "Upload",
            "uploaded": "100% - Optimize App Template",
            "updateError": "Update of App Template '${id}' failed. ${error}",
            "updateSuccess": "App Template '${id}' successfully saved.",
            "uploadError": "Upload Error: ",
            "uploadFinished": "Upload Finished",
            "createTemplateInfo": "Enter a name of your new App Template. After the new template was created successfully, you can upload data to it.",
            "panelDefaultTitle": "<strong>Common Information</strong>",
            "panelFileTitle": "<strong>App Template File</strong>"
        }
    },
    "authentication": {
        "ui": {
            "usernameLabel": "${name}",
            "logout": "Logout",
            "logoutTooltip": "Logout current user",
            "login": "Login",
            "loginTooltip": "Login with user credentials",
            "cancel": "Cancel",
            "username": "User",
            "password": "Password",
            "logonProcessing": "Perform Login",
            "logonSuccess": "Login successful",
            "logonError": "Login failed",
            "logoutAt": "Logout in {timerMin}:{timerSec}",
            "blockWindowTitle": "Authenticate",
            "blockWindowMsg": "Please wait...",
            "openUsermenu": "Open user menu"
        }
    },
    "banner-config": {
        "title": "Banner",
        "description": "Modify the visual appearance of the banner.",
        "dataform": {
            "imageUpload": "Upload image",
            "imageUploadedTitle": "Upload finished",
            "imageUrl": "Define the link to an image",
            "imageAltText": "Alternative text",
            "imageWidth": "Image Width",
            "label": "Banner text",
            "link": "Banner link",
            "imagePosition": {
                "selectLabel": "Image position",
                "aboveText": "Above text",
                "belowText": "Below text"
            },
            "enableBackground": "Show background",
            "uploadError": "Error: "
        }
    },
    "basemaptoggler": {
        "labelTitle": "Basemap",
        "ariaLabel": "Basemap selection. Selected basemap is ${currentValue}"
    },
    "bundlemanagement": {
        "commonDelete": {
            "title": "Delete selected bundles",
            "saveQuery": "Do you really want to delete {number} bundle(s)?",
            "okButton": "Delete bundles",
            "cancelButton": "Cancel",
            "error": "Deletion of items '${items}' failed!",
            "partialSuccess": "Some items could not be deleted!",
            "errorFinish": "No item could be deleted!",
            "success": "Items successfully deleted!"
        },
        "bundleListTool": {
            "title": "Bundles"
        },
        "removeSelectedBundlesTool": {
            "title": "Delete",
            "desc": "Delete Bundle(s)"
        },
        "createBundleTool": {
            "title": "Upload",
            "desc": "Upload Bundles"
        },
        "filterDomainBundlesTool": {
            "title": "Domain Bundles",
            "desc": "Only show domain bundles."
        },
        "dataViewCommon": {
            "filter": {
                "menuDefaultLabel": "All",
                "textBoxPlaceHolder": "Filter view"
            },
            "pager": {
                "backButtonTooltip": "Previous page",
                "forwardButtonTooltip": "Next page",
                "firstButtonTooltip": "First page",
                "lastButtonTooltip": "Last page",
                "pageLabeltext": "Page:",
                "pageSizeLabelText": "Items ${pageStartItemNumber}-${pageEndItemNumber} of ${itemCount}",
                "zeroResultsText": ""
            }
        },
        "bundlesView": {
            "noDataMessage": "No bundles available...",
            "name": "Name",
            "version": "Version",
            "title": "Title",
            "desc": "Description",
            "modifiedBy": "Modified By",
            "modifiedAt": "Modified At",
            "productName": "Product Name"
        },
        "bundleDetailsView": {
            "windowTitle": "Bundle '${id}'",
            "createWindowTitle": "Bundle Upload",
            "name": "Name",
            "version": "Version",
            "dependencies": "Dependencies",
            "main": "Main File",
            "layer": "Layer File",
            "location": "Location",
            "title": "Title:",
            "description": "Description:",
            "createdAt": "Created At:",
            "createdBy": "Created By:",
            "modifiedAt": "Modified At:",
            "modifiedBy": "Modified By:",
            "productName": "Product Name:",
            "id": "ID:",
            "upload": "Upload",
            "uploaded": "100% - Extract and Import Bundles",
            "updateError": "Update of Bundle '${id}' failed! ${error}",
            "updateSuccess": "Bundle '${id}' successfully saved!",
            "uploadStart": "Upload Started",
            "uploadError": "Upload Error: ",
            "uploadFinished": "Upload Finished",
            "createBundleInfo": "<strong>Upload your bundles</strong><br/><ul><li>Allowed are zip or jar files</li><li>A file can contain multiple bundles.</li></ul>",
            "panelDefaultTitle": "<strong>Common Information</strong>",
            "panelExtendedTitle": "<strong>Extended Information</strong>",
            "panelJsonInfoTitle": "<strong>package.json</strong>"
        }
    },
    "bundleupdatechecker": {
        "updateCheckerWidget": {
            "unassigned": "unassigned",
            "newUpdatesAvailable": "New updates available",
            "contact": "For further information contact ",
            "mail": "support@conterra.de",
            "suspendUpdateCheck": "Suspend update check:",
            "never": "never",
            "day": "one day",
            "week": "one week",
            "month": "one month",
            "apply": "Apply"
        }
    },
    "coordinateconversion": {
        "tool": {
            "title": "Coordinates",
            "tooltip": "Show, transform, copy and search coordinates"
        },
        "formats": {
            "gauss-krueger": "DHDN Gauss-Krueger",
            "gauss-krueger-2": "DHDN Gauss-Krueger zone 2",
            "gauss-krueger-3": "DHDN Gauss-Krueger zone 3",
            "gauss-krueger-4": "DHDN Gauss-Krueger zone 4",
            "gauss-krueger-5": "DHDN Gauss-Krueger zone 5",
            "utm-32": "ETRS89/UTM zone 32N",
            "utm-33": "ETRS89/UTM zone 33N",
            "wgs84-pseudo-mercator": "WGS 84 (pseudo-mercator)",
            "wgs84-decimal-degrees": "WGS 84 (decimal degrees)",
            "wgs84-lat-lon": "WGS 84 (lat/lon)"
        },
        "directionAbbreviations": {
            "north": "N",
            "east": "E",
            "south": "S",
            "west": "W"
        },
        "easting": "Easting",
        "northing": "Northing"
    },
    "coordinateconversion-config": {
        "title": "Coordinate Conversion",
        "description": "Configuration of the Coordinate Conversion tool.",
        "defaultFormat": "Default Format",
        "availableFormats": "Available Formats",
        "multipleConversions": "Allow multiple conversions",
        "orientation": "Orientation",
        "auto": "Automatic",
        "expand-up": "Expand up (new conversions on top)",
        "expand-down": "Expand down (new conversions at bottom)"
    },
    "coordinatetransformer": {
        "EPSG_25832": "ETRS89 / UTM zone 32N",
        "EPSG_25833": "ETRS89 / UTM zone 33N",
        "EPSG_31466": "DHDN / 3-degree Gauss-Kruger zone 2",
        "EPSG_31467": "DHDN / 3-degree Gauss-Kruger zone 3",
        "EPSG_31468": "DHDN / 3-degree Gauss-Kruger zone 4",
        "EPSG_31469": "DHDN / 3-degree Gauss-Kruger zone 5",
        "EPSG_32632": "WGS 84 / UTM zone 32N",
        "EPSG_32633": "WGS 84 / UTM zone 33N",
        "EPSG_26591": "Monte Mario (Rome) / Italy zone 1",
        "EPSG_26912": "NAD83 / UTM zone 12N"
    },
    "coordinateviewer": {
        "scale": "Scale: ",
        "hemispheres": {
            "north": "N",
            "south": "S",
            "east": "E",
            "west": "W"
        }
    },
    "coordinateviewer-config": {
        "menu": {
            "title": "Coordinate Viewer"
        },
        "widget": {
            "description": "Configuration for the Coordinate Viewer tool.",
            "showScale": "Show Scale",
            "showCoordinates": "Show coordinates",
            "degreeFormat": "Show coordinates in degree",
            "degreeFormatTooltip": "The degree format is only possible if the coordinates are based on a lat/lon SRS",
            "decimalPlaces": "Decimal places of coordinates",
            "transformSrs": "Transform coordinates",
            "targetSrs": "Target SRS of the transformation",
            "targetSrsTooltip": "This SRS is only used if 'Transform coordinates' is enabled."
        }
    },
    "custominfo-config": {
        "menu": {
            "title": "Custom Info"
        },
        "widget": {
            "window": {
                "title": "Name",
                "editCustomInfoDefinitionTitle": "Edit custom info",
                "newCustomInfoDefinitionTitle": "Create new custom info"
            },
            "confirmDelete": {
                "title": "Confirm delete",
                "message": "Do you really want to delete {number} item(s)?",
                "okButton": "Delete items",
                "cancelButton": "Cancel"
            },
            "wizard": {
                "types": {
                    "copyright": {
                        "title": "Copyright",
                        "tooltip": "Show copyright information"
                    },
                    "disclaimer": {
                        "title": "Disclaimer",
                        "tooltip": "Show disclaimer"
                    },
                    "imprint": {
                        "title": "Imprint",
                        "tooltip": "Show imprint"
                    },
                    "info": {
                        "title": "Info",
                        "tooltip": "Show information"
                    },
                    "help": {
                        "title": "Help",
                        "tooltip": "Show help"
                    },
                    "legend": {
                        "title": "Legend",
                        "tooltip": "Show legend"
                    },
                    "link": {
                        "title": "Link",
                        "tooltip": "Show link"
                    },
                    "custom": {
                        "title": "Custom"
                    }
                },
                "generalPane": {
                    "paneTitle": "Tool settings",
                    "type": "Type",
                    "typeTooltip": "Choose a type for the predefined info",
                    "title": "Title",
                    "titleTooltip": "Define a title for the tool",
                    "tooltip": "Tooltip",
                    "tooltipTooltip": "Define the tooltip text",
                    "toolClass": "Tool CSS class",
                    "toolClassTooltip": "Choose an optional CSS class for the tool button",
                    "iconClass": "CSS class for Icon",
                    "iconClassTooltip": "Choose an optional CSS class icon"
                },
                "windowPane": {
                    "paneTitle": "Define window options",
                    "title": "Title",
                    "titleTooltip": "Define a title for the window",
                    "windowWidth": "Width",
                    "windowWidthTooltip": "Width of the window",
                    "windowHeight": "Height",
                    "windowHeightTooltip": "Height of the window",
                    "positionX": "Horizontal position",
                    "positionY": "Vertical position",
                    "positionTooltip": "Choose the position",
                    "center": "center",
                    "left": "left",
                    "right": "right",
                    "top": "top",
                    "bottom": "bottom",
                    "modal": "Modal",
                    "modalTooltip": "Choose if window is modal",
                    "draggable": "Draggable",
                    "draggableTooltip": "Choose if window is draggable",
                    "resizable": "Resizable",
                    "resizableTooltip": "Choose to allow resizing of window",
                    "closable": "Closable",
                    "closableTooltip": "Choose if window is closable",
                    "maximizable": "Maximizable",
                    "maximizableTooltip": "Choose if window is maximizable"
                },
                "contentPane": {
                    "paneTitle": "Select if arbitrary content or link is to be shown",
                    "content": "Arbitrary content",
                    "link": "Link",
                    "linkWidget": {
                        "url": "URL",
                        "urlTooltip": "Enter a URL to open",
                        "newTab": "Open in new tab/window",
                        "newTabTooltip": "Check to open link in a new tab or window"
                    }
                }
            },
            "grid": {
                "removeCustomInfoTool": "Remove custom info",
                "addCustomInfoTool": "Add new custom info",
                "title": "Title",
                "dataView": {
                    "DGRID": {
                        "noDataMessage": "No custom info(s) found..."
                    },
                    "pager": {
                        "pageSizeLabelText": "Custom infos ${pageStartItemNumber}-${pageEndItemNumber} of ${itemCount}"
                    }
                }
            }
        }
    },
    "editing": {
        "tool": {
            "title": "Editing",
            "tooltip": "Create or update features"
        },
        "edititem": {
            "label": "Edit item",
            "tooltip": "Edit selected item"
        }
    },
    "editing-config": {
        "menu": {
            "title": "Editing"
        },
        "widget": {
            "description": "Configuration for the editing widget.",
            "visibleElements": {
                "title": "Visible elements",
                "create": "Create features",
                "edit": "Edit features"
            },
            "allowFeatureTemplateFiltering": {
                "title": "Allow feature template filtering",
                "tooltip": "Show a text input field that allows users to filter feature templates when adding new features."
            },
            "groupFeatureTemplatesBy": {
                "title": "Group feature templates by",
                "layer": "layer",
                "geometry": "geometry",
                "none": "none"
            },
            "initialGeometryEditMode": {
                "title": "Initial geometry edit mode",
                "reshape": "Edit vertices",
                "transform": "Scale, rotate and move",
                "move": "move"
            },
            "toggleGeometryEditModeOnClick": {
                "title": "Allow to toggle edit mode on click",
                "tooltip": "Indicates if the geometry editing mode can be toggled between `transform` and `reshape` update options."
            }
        }
    },
    "languagetoggler": {
        "title": "Language",
        "ariaLabel": "Language selection. Selected language is ${currentValue}"
    },
    "legend": {
        "tool": {
            "title": "Legend",
            "tooltip": ""
        }
    },
    "locateme": {
        "locatemeTool": {
            "title": "Locate",
            "tooltip": "Display my current location on the map"
        },
        "error": {
            "timeout": "Timeout during localization",
            "unknown": "Unknown error during localization"
        }
    },
    "locateme-config": {
        "menu": {
            "title": "LocateMe"
        },
        "widget": {
            "description": "Configuration for the locateme widget.",
            "mode": {
                "title": "Location mode",
                "track": "Track location changes",
                "locate": "Locate only once"
            },
            "zoommode": {
                "title": "Zoom mode",
                "disabled": "Disabled",
                "center": "Center only",
                "zoomAndCenter": "Zoom and center"
            },
            "scaleLimitForZooming": {
                "title": "Scale limit for zooming",
                "tooltip": "Defines a minimum scale for zooming. Requires zoom."
            },
            "draw": {
                "title": "Draw location on the map",
                "tooltip": "If enabled, the location is drawn on the map."
            },
            "showAccuracy": {
                "title": "Show accuracy circle",
                "tooltip": "If enabled, a circle is drawn to show the accuracy. Requires drawing."
            },
            "logError": {
                "title": "Log errors",
                "tooltip": "If enabled, you will be notified on location errors."
            }
        }
    },
    "locator-store": {
        "locator": {
            "name": "Addresses and places",
            "description": "Find addresses or places.",
            "placeHolder": "Address or place..."
        }
    },
    "locator-store-config": {
        "menuTitle": "Esri Geolocation Service",
        "description": "Overwrite the configuration of the Esri Geolocation Service. Empty values apply the defaults.",
        "titleLabel": "Title",
        "titleLabelTooltip": "Defines the title of the store.",
        "descriptionLabel": "Description",
        "descriptionLabelTooltip": "Defines the description of the store.",
        "defaultLabel": "Placeholder",
        "defaultLabelTooltip": "Defines the place holder that will be put in the search input field.",
        "url": "LocationFinder service URL",
        "urlTooltip": "URL of the search service REST endpoint. If empty then the World Geocode Server is used.",
        "countryCodeLabel": "Country code (e.g. DEU or GBR)",
        "countryCodeLabelTooltip": "Defines the 3 digit country code to restrict the search results.",
        "categoriesLabel": "Categories (e.g. City, District)",
        "categoriesLabelTooltip": "Defines the categories to restrict the search results."
    },
    "map-init": {
        "configLoadError": "Unexpected error during loading of the map configuration: ${error}"
    },
    "map-init-config": {
        "initialView": {
            "title": "Initial View",
            "explanation": "Change the map or 3D scene to the view you want to display when the app starts. You can close this window and return here at any time via the 'Live Configuration' button to save the settings.",
            "previewPanelLabel": "Changed configuration",
            "currentPanelLabel": "Current configuration",
            "copyClipboardLabel": "Copy"
        },
        "mapContent": {
            "title": "Content",
            "layersTitle": "Layers",
            "basemapsTitle": "Basemaps",
            "unknownService": "Unknown Service",
            "addLabel": "Add map",
            "removeLabel": "Remove",
            "selectedBasemap": "Selected on app startup.",
            "selectedLayer": "Activated on app startup.",
            "editPlaceholder": "Select a map to show further details.",
            "openServiceUrlTooltip": "Open URL in new window.",
            "dndList": {
                "listActivator": "Show settings for layer ${itemId}",
                "moveToTop": "Move to top",
                "moveUp": "Move up",
                "moveDown": "Move down",
                "moveToBottom": "Move to bottom",
                "delete": "Remove"
            }
        },
        "addServiceDialog": {
            "heading": "Add Map",
            "title": "Title",
            "explanation": "Please enter the URL of an ArcGIS map service (.../MapServer), an ArcGIS feature layer (e.g. .../FeatureServer/0) or a WMS. With the help of the button `Request metadata' type, title and description can be retrieved automatically.",
            "url": "URL",
            "requestMetadata": "Request Metadata",
            "type": "Type",
            "description": "Description",
            "add": "Add",
            "close": "Close",
            "validation": {
                "requestFailed": "Request for service metadata failed",
                "responseError": "Server responded with error",
                "unknownError": "Could not retrieve metadata",
                "layerIdMissing": "FeatureServer URL must contain layer ID",
                "fieldRequired": "This field is required.",
                "invalidUrl": "The entered value is not a valid URL."
            },
            "serviceTypes": {
                "AGS_DYNAMIC": "ArcGIS map service (dynamic)",
                "AGS_TILED": "ArcGIS map service (cached)",
                "AGS_FEATURE": "ArcGIS feature layer",
                "WMS": "Web Map Service (WMS)"
            }
        },
        "deleteServiceDialog": {
            "title": "Remove layer",
            "message": "Do you really want to remove this layer? This action cannot be undone.",
            "okButton": "Remove layer",
            "cancelButton": "Cancel"
        }
    },
    "map-widget": {
        "layerLoadError": "Unexpected error during loading of layer: {layerId}",
        "webmapLoadError": "Unexpected error during loading of webmap: {webmap}",
        "webgl": {
            "unavailable": "WebGL is not supported by this device. The map cannot be displayed correctly.",
            "partlyUnavailable": "WebGL is only available with reduced performance on this device. The map will therefore respond very slowly.",
            "closeText": "Close"
        }
    },
    "mapdraw-api": {},
    "mapnavigation": {
        "zoomInTool": {
            "title": "Zoom in",
            "tooltip": "Zoom in"
        },
        "zoomOutTool": {
            "title": "Zoom out",
            "tooltip": "Zoom out"
        },
        "restoreInitialViewTool": {
            "title": "Initial view",
            "tooltip": "Restore initial view"
        },
        "compassTool": {
            "title": "Map orientation",
            "tooltip": "Align map to north"
        },
        "moveToPreviousViewTool": {
            "title": "Previous View",
            "tooltip": "Move to previous view"
        },
        "moveToNextViewTool": {
            "title": "Next View",
            "tooltip": "Move to next view"
        }
    },
    "measurement-2d": {
        "tools": {
            "distanceMeasurement2D": {
                "title": "Measure distance",
                "tooltip": "Measure direct line distance between two points."
            },
            "areaMeasurement2D": {
                "title": "Measure area",
                "tooltip": "Measure an area and its circumference."
            }
        },
        "widget": {
            "introText": "Click on the map to start a measurement.",
            "finishMeasurementText": "End the measurement by double-clicking on the last point.",
            "availableUnitsLabel": "Unit",
            "resultLabel": "Result",
            "emptyResults": "-",
            "startMeasurementButton": "Start new measurement",
            "distanceResultLabel": "Distance",
            "areaResultLabel": "Area",
            "areaPerimeterResultLabel": "Perimeter",
            "copyResultToClipboard": "Copy measurement result to clipboard",
            "units": {
                "metric": "Metric (automatic)",
                "imperial": "Imperial (automatic)",
                "inches": "Inches",
                "feet": "Feet",
                "yards": "Yards",
                "miles": "Miles",
                "nautical-miles": "Nautical Miles",
                "us-feet": "Feet (US)",
                "meters": "Meters",
                "kilometers": "Kilometers",
                "square-inches": "Square Inches",
                "square-feet": "Square Feet",
                "square-yards": "Square Yards",
                "square-miles": "Square Miles",
                "square-us-feet": "Square Feet (US)",
                "square-meters": "Square Meters",
                "square-kilometers": "Square Kilometers",
                "acres": "Acres",
                "ares": "Ares",
                "hectares": "Hectares"
            }
        }
    },
    "measurement-2d-config": {
        "title": "Measurement 2D",
        "description": "Configuration of tools for measurement (in 2D maps).",
        "distance": "Distances",
        "area": "Areas",
        "unit": "Default unit",
        "unitOptions": "Available units",
        "units": {
            "metric": "Metric (automatic)",
            "imperial": "Imperial (automatic)",
            "inches": "Inches",
            "feet": "Feet",
            "yards": "Yards",
            "miles": "Miles",
            "nautical-miles": "Nautical Miles",
            "us-feet": "Feet (US)",
            "meters": "Meters",
            "kilometers": "Kilometers",
            "square-inches": "Square Inches",
            "square-feet": "Square Feet",
            "square-yards": "Square Yards",
            "square-miles": "Square Miles",
            "square-us-feet": "Square Feet (US)",
            "square-meters": "Square Meters",
            "square-kilometers": "Square Kilometers",
            "acres": "Acres",
            "ares": "Ares",
            "hectares": "Hectares"
        }
    },
    "measurement-3d": {
        "tools": {
            "lineMeasurement3D": {
                "title": "Measure distance",
                "tooltip": "Measure direct line distance between two points."
            },
            "areaMeasurement3D": {
                "title": "Measure area",
                "tooltip": "Measure an area and its circumference."
            }
        }
    },
    "measurement-3d-config": {
        "title": "Measurement 3D",
        "description": "Configuration of tools for measurement (in 3D scenes).",
        "line": "Lines",
        "area": "Areas",
        "unit": "Default unit",
        "unitOptions": "Available units",
        "units": {
            "metric": "Metric",
            "imperial": "Imperial",
            "inches": "Inches",
            "feet": "Feet",
            "yards": "Yards",
            "miles": "Miles",
            "nautical-miles": "Nautical Miles",
            "us-feet": "Feet (US)",
            "meters": "Meters",
            "kilometers": "Kilometers",
            "square-inches": "Square Inches",
            "square-feet": "Square Feet",
            "square-yards": "Square Yards",
            "square-miles": "Square Miles",
            "square-us-feet": "Square Feet (US)",
            "square-meters": "Square Meters",
            "square-kilometers": "Square Kilometers",
            "acres": "Acres",
            "ares": "Ares",
            "hectares": "Hectares"
        }
    },
    "native-app-exporter": {
        "window": {
            "title": "Prepare Download"
        },
        "action": {
            "title": "Export for Native App"
        },
        "widget": {
            "loadingMessage": "This may take a while. Download will start automatically.",
            "errorMessage": "Export of app data failed.",
            "generalHint": "This dialog allows to export a ZIP archive containing all resources of an app required to package it as a native app.",
            "advancedConfig": "Expert configuration (optional)",
            "layerMidsPlaceholder": "Additional modules to be included into the layer file",
            "resourcesPlaceholder": "Additional files to be included into the archive",
            "triggerExport": "Start Export",
            "sample": "Sample:",
            "sampelCodeFiles": "myBundle/*.gif,myBundle/*.svg",
            "sampelCodeModules": "myBundle/someModule,myBundle/anotherModule"
        }
    },
    "notifier": {
        "tooltips": {
            "close": "Close this message",
            "glue": "Pin this message"
        }
    },
    "omnisearch": {
        "ui": {
            "tooltips": {
                "reset": "Remove result",
                "magnifier": "Zoom to result",
                "submit": "Submit query",
                "settings": "Change search topic"
            },
            "settings": "Settings",
            "settingsWidget": {
                "title": "Available search topics"
            },
            "error": "Error while performing search!"
        },
        "tool": {
            "title": "Search",
            "tooltip": "Opens the Search Window"
        }
    },
    "omnisearch-config": {
        "menu": {
            "title": "Omni Search",
            "searchUI": "Search Interface",
            "zoomHandler": "Zoom Options"
        },
        "widget": {
            "description": "With this menu, you can just configure the Omni Search User Interface. Single search topics may also need to be configured.",
            "hint": "The Omni Search is only visible if at least one search topic is active.",
            "displayLoadingIcon": "Show loading icon",
            "ignoreCase": "Ignore case",
            "autoComplete": "Enable auto-complete",
            "autoSelect": "Select highlighted item in dropdown",
            "selectFirstResultOnEnter": "Select first result when pressing 'ENTER'"
        },
        "zoomHandler": {
            "description": "Configuration of the Omni Search zoom behaviour.",
            "label": "If option 'Always use a fixed scale' is selected map.apps always zooms to the configured scale (or the next available LOD). If the option is set to false the given scale is only used for point geometries.",
            "fixedScale": "Always use a fixed scale",
            "scale": "Scale"
        }
    },
    "popups": {},
    "popups-default": {
        "defaultTitle": "Object"
    },
    "portal-app-security": {
        "denyMessage": "You don't have permission to access the app '${app}'."
    },
    "portal-search": {
        "store": {
            "title": "ArcGIS Online Portal Item",
            "description": "Search ArcGIS Online Portal Items"
        },
        "ui": {
            "omnisearch": "Search for items...",
            "created": "Created",
            "title": "Title",
            "owner": "Owner",
            "id": "ID",
            "snippet": "Snippet",
            "description": "Description",
            "image": "image"
        }
    },
    "portal-security-config": {
        "menu": {
            "title": "ArcGIS Online Account"
        },
        "accountwidget": {
            "notsignedin": "You are currently not signed in!",
            "login": "Sign In",
            "logout": "Sign Out",
            "username": "Account name:",
            "fullname": "Full name:"
        }
    },
    "portal-webitem-map": {
        "configLoadError": "Unexpected error during loading of the map configuration: ${error}"
    },
    "portal-webitem-map-config": {
        "menu": {
            "title": "ArcGIS web maps and web scenes"
        },
        "store": {
            "title": "Title",
            "id": "ID",
            "icon": "Icon",
            "description": "Description",
            "owner": "Owner",
            "type": "Type"
        },
        "widget": {
            "description": "Configuration of ArcGIS web map and web scene content.",
            "browser": {
                "loginTool": "ArcGIS Enterprise portal Login"
            },
            "item": {
                "title": "ID",
                "tooltip": "ID of a web map or web scene."
            },
            "find": {
                "title": "Find web maps and web scenes..."
            }
        }
    },
    "portal-webscene-slides": {
        "window": {
            "title": "WebScene slides",
            "toggleTool": "WebScene slides",
            "toogleTooltip": "Open WebScene slides"
        }
    },
    "printing": {
        "tool": {
            "title": "Printing",
            "tooltip": "Create a printout of the map"
        }
    },
    "printing-config": {
        "menu": {
            "title": "ArcGIS for Server Printing"
        },
        "widget": {
            "description": "Configuration for the ags printing functionality.",
            "url": {
                "title": "The URL to the AGS print service",
                "tooltip": "AGS URL to print service."
            }
        }
    },
    "reportmanagement": {
        "commonDelete": {
            "title": "Delete selected templates",
            "saveQuery": "Do you really want to delete {number} item(s)?",
            "okButton": "Delete templates",
            "cancelButton": "Cancel",
            "error": "Deletion of items '{items}' failed!",
            "partialSuccess": "Some items could not be deleted!",
            "errorFinish": "No item could be deleted!",
            "success": "Items successfully deleted!"
        },
        "reportsTool": {
            "title": "Report Templates"
        },
        "removeSelectedReportTool": {
            "title": "Delete",
            "desc": "Delete Report Template(s)"
        },
        "createReportTool": {
            "title": "Create",
            "desc": "Create Report Template"
        },
        "dataViewCommon": {
            "filter": {
                "menuDefaultLabel": "All",
                "textBoxPlaceHolder": "Filter view"
            },
            "pager": {
                "backButtonTooltip": "Previous page",
                "forwardButtonTooltip": "Next page",
                "firstButtonTooltip": "First page",
                "lastButtonTooltip": "Last page",
                "pageLabeltext": "Page:",
                "pageSizeLabelText": "Items ${pageStartItemNumber}-${pageEndItemNumber} of ${itemCount}"
            }
        },
        "reportsView": {
            "noDataMessage": "No report templates available...",
            "id": "ID",
            "title": "Title",
            "desc": "Description",
            "filename": "File",
            "enabled": "Usable",
            "trueEnabled": "yes",
            "falseEnabled": "no",
            "modifiedBy": "Modified By",
            "modifiedAt": "Modified At"
        },
        "reportDetailsView": {
            "windowTitle": "Report Template '${title}'",
            "createWindowTitle": "New Report Template",
            "title": "Title",
            "enabled": "Usable:",
            "uploaded": "Uploaded",
            "description": "Description",
            "createdAt": "Created At:",
            "createdBy": "Created By:",
            "modifiedAt": "Modified At:",
            "modifiedBy": "Modified By:",
            "id": "ID",
            "fileName": "File:",
            "upload": "Upload",
            "uploadedMsg": "100%",
            "updateError": "Update of Report Template '${id}' failed! ${error}",
            "updateErrorAllreadyExists": "Report Template already exists!",
            "updateSuccess": "Report '${id}' successfully saved!",
            "uploadStart": "Upload Started",
            "uploadError": "Upload Error: ",
            "uploadFinished": "Upload Finished",
            "createInfo": "Enter an ID of your new report template. After the new report template was created successfully, you can upload data to it.",
            "panelDefaultTitle": "<strong>Common Information</strong>",
            "panelFileTitle": "<strong>Report Template</strong>"
        }
    },
    "reporttool": {
        "toolTitle": "Create Report",
        "windowTitle": "Report",
        "reportNoItemSelected": "At least one item in the result center must be selected.",
        "reportDatasourceUnavailable": "Unable to determine datasource for report.",
        "reportDataSourceHasNoUrl": "Datasource has no URL and is therefore unsuitable for report generation.",
        "reportRequestedError": "Report could not be generated!",
        "reportRequestedErrorReeportId": "Could not determine the report to be generated! Is a mapping defined?",
        "reportQueryError": "Failed to query feature IDs from store.",
        "reportRequestedOpen": "Report is being generated...",
        "reportRequestedDownload": "Report is being downloaded...",
        "action": {
            "label": "Create report",
            "tooltip": "Create a report as a PDF file"
        }
    },
    "result-api": {
        "geometryFetchError": "Geometries of '${name} could not be fetched. Error: ${error}",
        "datasetUpdateError": "Update of '${name}' data failed. Error: ${error}",
        "actions": {
            "zoomto": {
                "label": "Zoom to selection",
                "tooltip": "Zoom to selected items"
            },
            "export": {
                "label": "Download CSV",
                "tooltip": "Download selected items as CSV file"
            },
            "zoomtoitem": {
                "label": "Zoom to item",
                "tooltip": "Zoom to item"
            },
            "removeitem": {
                "label": "Remove item",
                "tooltip": "Remove item from result display"
            },
            "removeselected": {
                "label": "Remove items",
                "tooltip": "Remove selected items from result display"
            },
            "openpopup": {
                "label": "Open popup",
                "tooltip": "Open popup for selected item"
            }
        }
    },
    "result-ui": {
        "window": {
            "title": "Results"
        },
        "dockTool": {
            "title": "Results",
            "tooltip": "Show results"
        },
        "general": {
            "loadError": "Error while loading the results",
            "loadingMessage": "Loading results...",
            "maxRecordCountExceeded": "Result limit exceeded",
            "maxRecordCountExceededTooltip": "More results were found than displayed here. If possible, refine your query to see all results relevant to you.",
            "noItemsFound": "No results were found."
        },
        "dataTableSelection": {
            "deleteButtonTooltip": "Remove topic from result display",
            "ariaItemCount": "Topic has ${count} results.",
            "collapseTopicSelection": "Hide topics",
            "expandTopicSelection": "Show topics"
        },
        "actionsBar": {
            "moreActions": "More actions",
            "moreActionsTooltip": "show more actions"
        },
        "dataTableView": {
            "result": "result",
            "results": "results",
            "filteredResultsLabel": "${filtered} of ${total} results",
            "selected": "selected",
            "markedItemsChipAria": "${count} results selected",
            "filterActive": "Filter active",
            "closeButton": "Close"
        },
        "filterInput": {
            "filterPlaceholder": "Filter results ...",
            "ariaLabel": "Input for result filtering",
            "resetFilter": "Reset result filter"
        },
        "dataTableContent": {
            "pageTextOf": "of",
            "selectRow": "Select result",
            "selectPage": "Select all results on this page",
            "selectMoreTools": "More selection options",
            "selectAllItems": "Select all results",
            "deselectAllItems": "Clear selection",
            "sortBySelectionState": "Sort by selection",
            "invertSelection": "Invert selection"
        },
        "longStringValue": {
            "ariaLabelTextPrefix": "Shortened text, starting with",
            "ariaLabelBtn": "Show full text"
        }
    },
    "resultcenter": {
        "bundleName": "Result Center",
        "bundleDescription": "The central widget for displaying search results.",
        "ui": {
            "window": {
                "title": "Result Center"
            },
            "dockTool": {
                "title": "Result Center",
                "tooltip": ""
            },
            "rectangleSelectBtn": {
                "title": "Select Results in Map"
            },
            "selectAllBtn": {
                "title": "Select All"
            },
            "removeAllBtn": {
                "title": "Empty Result Center"
            },
            "removeSelectedBtn": {
                "title": "Remove Selected Features from Result Center"
            },
            "searchStoreTool": {
                "title": "Search a Store"
            },
            "exportTool": {
                "title": "Export"
            },
            "dataView": {
                "filter": {
                    "menuDefaultLabel": "All",
                    "textBoxPlaceHolder": "Filter view"
                },
                "pager": {
                    "backButtonTooltip": "Previous page",
                    "forwardButtonTooltip": "Next page",
                    "firstButtonTooltip": "First page",
                    "lastButtonTooltip": "Last page",
                    "pageLabeltext": "Page:",
                    "pageSizeLabelText": "Items ${pageStartItemNumber}-${pageEndItemNumber} of ${itemCount}",
                    "zeroResultsText": "No Items."
                }
            },
            "popupCannotBeDisplayed": "The popup for this item cannot be displayed.",
            "newDataAvailable": "New Data Available"
        }
    },
    "scalebar-config": {
        "title": "Scalebar",
        "description": "Configuration for the scalebar.",
        "unit": "Unit",
        "hint": "If unit is set to 'Meters & Miles (Feet)' the style will always be 'Line'.",
        "metric": "Meters",
        "non-metric": "Miles (Feet)",
        "dual": "Meters & Miles (Feet)",
        "style": "Style",
        "ruler": "Ruler",
        "line": "Line"
    },
    "search-ui": {
        "search": {
            "placeholder": "Search for ...",
            "noResultsMessage": "No results found",
            "noEmptyAllowed": "Enter a search term first",
            "totalResultsHint": "${total} results",
            "resetSearch": "Reset search input",
            "resultItemAriaLabel": "${itemLabel} in ${groupName}",
            "enterTooltip": "Search for ..."
        }
    },
    "selection-resultcenter": {
        "ui": {
            "title": "Results",
            "subtitle": "of spatial selection",
            "abortExecutions": "Abort queries",
            "deleteExecutions": "Clear all results",
            "defaultErrorMessage": "Selection failed",
            "filterTooltip": "Hide empty, failed or pending results"
        }
    },
    "selection-services": {
        "actions": {
            "point": {
                "title": "Point",
                "description": "Trigger selection by clicking on the map."
            },
            "rectangle": {
                "title": "Rectangle",
                "description": "Trigger selection by drawing a rectangle on the map."
            },
            "polygon": {
                "title": "Polygon",
                "description": "Trigger selection by drawing a polygon on the map."
            }
        }
    },
    "selection-ui": {
        "ui": {
            "tool": {
                "selectionListToggleToolTitle": "Spatial Selection",
                "tooltip": "Select features in map"
            },
            "widget": {
                "labelFilterButton": "Restrict to topics (${selectedCount} out of ${itemCount})",
                "labelNoToolsAvailable": "There are no selection tools configured. Please contact the Administrator.",
                "labelNoToolSelected": "Activate a selection tool to continue.",
                "labelNoStoreSelected": "Activate at least one selection topic to continue.",
                "labelCloseSelectionList": "Close topic restriction",
                "labelReplaceExistingSelection": "Replace existing results.",
                "labelStartNonInteractiveAction": "Execute selection",
                "ariaLabelSelectAllTopics": "Select all topics",
                "ariaLabelToggleButtonbar": "Choose a selection method"
            }
        }
    },
    "selection-ui-config": {
        "menu": {
            "title": "Selection"
        },
        "widget": {
            "description": "In this section, you can set the default properties for spatial selection.",
            "respectLayerVisibility": "Show topics with corresponding map layers only when visible in map",
            "selectAllStoresByDefault": "Select all topics initially",
            "startSelectionInitially": "Activate first selection tool initially",
            "deactivateOnSelectionEnd": "Deactivate selection tool after selection",
            "selectionTools": "Selection tools that can be used",
            "selectAll": "Provide all available tools",
            "noSelectionMethodHint": "Please select at least one selection tool."
        }
    },
    "share-link": {
        "encoderBtn": "Share App",
        "encoderBtnTooltip": "Share this app by link",
        "copyLabel": "Copy",
        "shareLabel": "Share"
    },
    "share-link-shim": {
        "encoderBtn": "Share App",
        "encoderBtnTooltip": "Share this app by link",
        "copyLabel": "Copy"
    },
    "sketching": {
        "toggleTool": {
            "title": "Sketching",
            "tooltip": "Sketch objects on the map"
        },
        "pointTool": {
            "title": "Sketch point",
            "tooltip": "Sketch a point on the map"
        },
        "lineTool": {
            "title": "Sketch line",
            "tooltip": "Sketch a line on the map"
        },
        "rectangleTool": {
            "title": "Sketch rectangle",
            "tooltip": "Sketch a rectangle on the map"
        },
        "polygonTool": {
            "title": "Sketch polygon",
            "tooltip": "Sketch a polygon on the map"
        },
        "circleTool": {
            "title": "Sketch circle",
            "tooltip": "Sketch a circle on the map"
        },
        "deleteAllTool": {
            "title": "Delete all sketches",
            "tooltip": "Delete all sketches"
        },
        "deleteSelectedTool": {
            "title": "Delete selected sketches",
            "tooltip": "Delete selected sketches"
        },
        "deleteAll": {
            "title": "Confirm delete",
            "message": "Do you really want to delete all sketches? This action cannot be undone.",
            "okButton": "Delete sketches",
            "cancelButton": "Cancel"
        },
        "deleteSelected": {
            "title": "Confirm delete",
            "message": "Do you really want to delete selected sketches? This action cannot be undone.",
            "okButton": " Delete sketches",
            "cancelButton": "Cancel"
        }
    },
    "sketching-config": {
        "menu": {
            "title": "Sketching"
        },
        "widget": {
            "description": "Configuration for the sketching widget.",
            "graphicsLayerTitle": "Graphics layer title",
            "graphicsLayerListMode": {
                "title": "Graphics layer list mode",
                "hide": "Hide",
                "show": "Show"
            },
            "initialGeometryEditMode": {
                "title": "Initial geometry edit mode",
                "reshape": "Edit vertices",
                "transform": "Scale, rotate and move",
                "move": "move"
            },
            "toggleGeometryEditModeOnClick": {
                "title": "Allow to toggle edit mode on click",
                "tooltip": "Indicates if the geometry editing mode can be toggled between `transform` and `reshape` update options."
            },
            "pointSymbol": "Point symbol",
            "polylineSymbol": "Polyline symbol",
            "polygonSymbol": "Polygon symbol"
        }
    },
    "splashscreen": {
        "loadTitle": "Starting App '${appName}'",
        "loadBundle": "${percent}% - ${startedBundles}/${maxBundlesToStart} - Load ${name} "
    },
    "toc": {
        "zoomToExtent": "Zoom to extent",
        "description": "Description",
        "labelMore": "more",
        "copyright": "Copyright",
        "showLayerGroup": "Activate all layers",
        "hideLayerGroup": "Deactivate all layers",
        "opacity": "Opacity",
        "visible": "visible",
        "invisible": "invisible",
        "basemapsSectionTitle": "Basemaps",
        "ground": "Ground",
        "layersSectionTitle": "Layers",
        "noLayersAvailable": "No map contents available",
        "operationalLayerOptions": "Options",
        "showAllLayer": "Activate all layers",
        "hideAllLayer": "Deactivate all layers",
        "openAllLayer": "Open all layers",
        "closeAllLayer": "Close all layers",
        "showChildren": "Show child elements of ${itemTitle}",
        "hideChildren": "Hide child elements of ${itemTitle}",
        "close": "Close menu",
        "backToMap": "Back to map",
        "service": "Service",
        "layer": "Layer",
        "generalHint": "Content is not visible due to the following restriction(s):",
        "notVisibleInScaleHints": {
            "notVisibleInScale": "Content is only shown in scale 1:${minScale} to 1:${maxScale}.",
            "notVisibleInScaleMax": "Content shown until scale is below 1:${maxScale}.",
            "notVisibleInScaleMin": "Content is only shown when scale is at least 1:${minScale}."
        },
        "noSublayersVisible": "No associated contents are shown.",
        "notLoadedHint": "Initialization failed.",
        "toggleToolTitle": "Map Content",
        "toggleToolTooltip": "",
        "showLegend": "Show legend for layer ${layerTitle}",
        "hideLegend": "Hide legend for layer ${layerTitle}",
        "actionMenuToggle": "More options",
        "actionMenuToggleAria": "Show options for layer ${layerTitle}",
        "activateLayer": "Show ${itemTitle} on map",
        "deactivateLayer": "Hide ${itemTitle} on map"
    },
    "viewmodeswitcher": {
        "tool2d": {
            "title": "2D Map",
            "tooltip": "Switch to 2D Map"
        },
        "tool3d": {
            "title": "3D Map",
            "tooltip": "Switch to 3D map"
        }
    },
    "wizard": {
        "ui": {
            "title": "Live Configuration",
            "entry": "entry",
            "entries": "entries",
            "noEntries": "Currently there are no items in this category",
            "chooseCategory": "Please choose an option",
            "buttons": {
                "back": "Back",
                "apply": "Update Preview",
                "save": "Save App"
            },
            "dataFormBuilderWidget": {
                "defaultValidationErrorMessage": "Please check your input(s)!"
            },
            "saveStart": "Saving started...",
            "saveError": "Saving failed: ${message}",
            "saveSuccess": "App saved",
            "unknownError": "Reason unknown",
            "notAppliedConfigChanges": {
                "title": "Unsaved changes",
                "message": "Not applied configuration changes detected. Should they be applied?",
                "okButton": "Apply changes",
                "cancelButton": "Discard"
            },
            "configChangesCanNotBeReverted": "The current configuration changes cannot be reverted! You have to apply them!",
            "loadConfigBundles": "Initializing configuration bundles (${pos}/${count}). Please be patient.",
            "configureBtn": "Live Configuration"
        },
        "menu": {
            "main": {
                "title": "Live Configuration"
            },
            "map": {
                "title": "Map",
                "description": "Define map content and map settings"
            },
            "widgets": {
                "title": "Widgets",
                "description": "Choose a widget"
            },
            "search": {
                "title": "Search & Selection",
                "description": "Choose a search and selection option"
            },
            "tools": {
                "title": "Tools",
                "description": "Defines tools that can be used in this app"
            },
            "design": {
                "title": "Layout & Design",
                "description": "Defines the visual layout and design of the app."
            },
            "agol": {
                "title": "ArcGIS Online and ArcGIS Enterprise portal",
                "description": "Defines webmap and portal login configuration."
            }
        }
    }
};
