# Custom nls
This bundle allows to customize the default nls strings that are used in map.apps (e.g. for tool titles or other ui elements).

If you want to change the title of a ui element in map.apps, you can simply do this by adding nls files to your app. But if you want to apply text changes to multiple apps, using a custom nls bundle is a better solution. Adding or changing strings in the future can be done in that bundle and once you have uploaded the new version of this bundle, all apps use the new text strings immediately.

Installation Guide
------------------
To add your own nls customizations, at first download the bundle and extract the zip file. In the zip file you will find two bundle.js files in the folder "nls" (for English) and in "nls/de" (for German).

Open this files in a text editor and add the nls strings that you want to customize. Sample:
```
define({
    root:
    ({
        "basemaptoggler": {
            "ui": {
                "labelTitle": "Background"
            }
        },
        "mapflow": {
            "tool": {
                "title": "Topics"
            }
        }
    }),
    "de": true
});
```

A full list of all available nls string can be found here:
http://developernetwork.conterra.de/en/documentation/mapapps/33/nls-strings

After saving your changes, zip all contents of the bundle folder and upload the zip file via the map.apps Manager bundle management tab.

Now add the bundle to all of your apps, that should use the customized nls strings.

Adding a completely new language to map.apps
------------------
If you want to add a completely new language to your map.apps installation, please have a look at this tool: http://developernetwork.conterra.de/en/downloads/tools/how-generate-additional-language-bundles-mapapps

Development Guide
------------------
### Define the mapapps remote base
Before you can run the project you have to define the mapapps.remote.base property in the pom.xml-file:
`<mapapps.remote.base>http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%</mapapps.remote.base>`

##### Other methods to to define the mapapps.remote.base property.
1. Goal parameters
`mvn install -Dmapapps.remote.base=http://%YOURSERVER%/ct-mapapps-webapp-%VERSION%`

2. Build properties
Change the mapapps.remote.base in the build.properties file and run:
`mvn install -Denv=dev -Dlocal.configfile=%ABSOLUTEPATHTOPROJECTROOT%/build.properties`

