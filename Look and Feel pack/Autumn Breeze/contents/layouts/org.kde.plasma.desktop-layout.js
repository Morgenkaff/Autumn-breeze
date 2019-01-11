var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "56"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "geometry.height": 15,
                    "geometry.width": 15,
                    "geometry.x": 84,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.analogclock",
                    "title": "Analogue Clock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "540",
                    "DialogWidth": "720"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "1890",
                    "pressToMoveHelp": "false",
                    "showToolbox": "true",
                    "url": "activities:/current/"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/emil/.local/share/wallpapers/16713-autumn-lake_1600x1200.jpg"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "100",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "100"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "showRecentApps": "false",
                            "showRecentDocs": "false"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "showRecentApps": "false",
                            "showRecentDocs": "false"
                        },
                        "/Configuration/Shortcuts": {
                            "global": "Alt+F1"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kicker"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        },
                        "/Configuration/Configuration/General": {
                            "iconSize": "medium",
                            "launchers": "[c7ca2fd6-86f8-4fc7-aaa1-efac942c601a]\napplications:firefox.desktop,[c7ca2fd6-86f8-4fc7-aaa1-efac942c601a]\napplications:franz.desktop",
                            "maxStripes": "1",
                            "wheelEnabled": "false"
                        },
                        "/Configuration/General": {
                            "iconSize": "small",
                            "launchers": "[c7ca2fd6-86f8-4fc7-aaa1-efac942c601a]\napplications:firefox.desktop\\,[c7ca2fd6-86f8-4fc7-aaa1-efac942c601a]\napplications:franz.desktop",
                            "maxStripes": "1",
                            "wheelEnabled": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.icontasks"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "60",
                            "immutability": "1"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "96"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "immutability": "1"
                        },
                        "/Configuration/Appearance": {
                            "dateFormat": "isoDate",
                            "displayTimezoneAsCode": "false",
                            "showDate": "true",
                            "showWeekNumbers": "true",
                            "use24hFormat": "2"
                        },
                        "/Configuration/Configuration": {
                            "PreloadWeight": "24"
                        },
                        "/Configuration/Configuration/Appearance": {
                            "dateFormat": "isoDate",
                            "displayTimezoneAsCode": "false",
                            "showDate": "true",
                            "showWeekNumbers": "true",
                            "use24hFormat": "2"
                        },
                        "/Configuration/Configuration/ConfigDialog": {
                            "DialogHeight": "540",
                            "DialogWidth": "720"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "81",
                    "DialogWidth": "1920"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 2,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
