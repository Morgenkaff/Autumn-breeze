var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "480",
                    "DialogWidth": "640"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "1892",
                    "showToolbox": "false",
                    "url": "activities:/current/"
                },
                "/Wallpaper/org.kde.image/General": {
                    "FillMode": "1",
                    "Image": "file:///home/emil/Pictures/Wallpapers/emlba_rain_cropped.jpg"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Blur": "true",
                    "SlideInterval": "7200",
                    "SlidePaths": "/home/emil/Pictures/Wallpapers/8bit DayNight"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "480",
                    "DialogWidth": "640"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topright",
                    "ToolBoxButtonX": "772",
                    "iconSize": "5",
                    "showToolbox": "false",
                    "sortMode": "-1"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "file:///home/emil/Pictures/Wallpapers/linux_terminal_wallpaper.png"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "SlideInterval": "7200",
                    "SlidePaths": "/home/emil/Pictures/Wallpapers/8bit DayNight"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        },
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "2",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
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
                            "PreloadWeight": "100"
                        },
                        "/Configuration/General": {
                            "favoritesPortedToKAstats": "true",
                            "showRecentApps": "false",
                            "showRecentDocs": "false"
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
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/Configuration/General": {
                            "maxStripes": "1",
                            "showOnlyCurrentActivity": "false"
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
                            "PreloadWeight": "59"
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
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Appearance": {
                            "customDateFormat": "dd/MM",
                            "dateFormat": "custom",
                            "showDate": "true",
                            "showWeekNumbers": "true",
                            "use24hFormat": "2"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
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
            "height": 1.6666666666666667,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 106.66666666666667,
            "minimumLength": 106.66666666666667,
            "offset": 0
        },
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/Configuration/General": {
                            "maxStripes": "1",
                            "showOnlyCurrentDesktop": "true",
                            "showOnlyCurrentScreen": "true",
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
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Appearance": {
                            "customDateFormat": "dd/MM",
                            "dateFormat": "custom",
                            "showDate": "true",
                            "showWeekNumbers": "true",
                            "use24hFormat": "2"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "1",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "82",
                    "DialogWidth": "800"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 4,
            "location": "bottom"
        },
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "immutability": "1"
                        },
                        "/Configuration": {
                            "PreloadWeight": "0"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        },
                        "/Configuration/General": {
                            "maxStripes": "1",
                            "showOnlyCurrentScreen": "true"
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
                            "PreloadWeight": "0"
                        },
                        "/Configuration/Appearance": {
                            "customDateFormat": "dd/MM",
                            "dateFormat": "custom",
                            "showDate": "true",
                            "use24hFormat": "2"
                        },
                        "/Configuration/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "2",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "79",
                    "DialogWidth": "800"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                }
            },
            "height": 1.6666666666666667,
            "hiding": "normal",
            "location": "bottom",
            "maximumLength": 44.44444444444444,
            "minimumLength": 44.44444444444444,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
