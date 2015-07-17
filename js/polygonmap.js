        var geocoder;
        var map;
        function initialize() {
          geocoder = new google.maps.Geocoder();
          var latlng = new google.maps.LatLng(36.9902778, -86.4436111);
          var mapOptions = {
            streetViewControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            zoom: 6,
            center: latlng,
            styles: [
    {
        "featureType": "administrative.locality",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 0
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 0
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 0
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 0
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 0
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": 0
            },
            {
                "lightness": 0
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": 0
            },
            {
                "lightness": 0
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "hue": "#000000"
            },
            {
                "saturation": 0
            },
            {
                "lightness": 0
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#33b8ff"
            },
            {
                "saturation": 100
            },
            {
                "lightness": 60
            },
            {
                "visibility": "simplified"
            }
        ]
    }
]


          }

        var louisvillePolygon;
        var greensboroPolygon;
        var cincinnatiPolygon;
        var nashvillePolygon;
        var knoxvillePolygon;
        var memphisPolygon;
        var florencePolygon;
        var etownPolygon;
        var newalbanyPolygon;

        map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);

        var louisvilleCoords = [
          new google.maps.LatLng(38.3746399, -85.6301070),
          new google.maps.LatLng(38.3116290, -85.6562151),
          new google.maps.LatLng(38.2631148, -85.7427488),
          new google.maps.LatLng(38.2781992, -85.7729686),
          new google.maps.LatLng(38.2846680, -85.8231902),
          new google.maps.LatLng(38.2328860, -85.8372947),
          new google.maps.LatLng(38.1983641, -85.8841405),
          new google.maps.LatLng(38.1562537, -85.9075531),
          new google.maps.LatLng(38.0962154, -85.9011069),
          new google.maps.LatLng(38.0221454, -85.9246455),
          new google.maps.LatLng(37.9410185, -86.0091811),
          new google.maps.LatLng(37.9361276, -85.7898009),
          new google.maps.LatLng(37.9228511, -85.7032866),
          new google.maps.LatLng(37.8908788, -85.5841514),
          new google.maps.LatLng(37.9046908, -85.5161662),
          new google.maps.LatLng(37.9271648, -85.3884337),
          new google.maps.LatLng(37.9605121, -85.3533469),
          new google.maps.LatLng(38.0560149, -85.1868127),
          new google.maps.LatLng(38.1724519, -85.0865483),
          new google.maps.LatLng(38.3436578, -85.0168636),
          new google.maps.LatLng(38.4426898, -85.1116338),
          new google.maps.LatLng(38.5146179, -85.1775204),
          new google.maps.LatLng(38.6803764, -85.1926576),
          new google.maps.LatLng(38.7287798, -85.2545354),
          new google.maps.LatLng(38.7400773, -85.3026174),
          new google.maps.LatLng(38.7275044, -85.3691947),
          new google.maps.LatLng(38.7351576, -85.4147924),
          new google.maps.LatLng(38.7197020, -85.4430473),
          new google.maps.LatLng(38.6894849, -85.4544132),
          new google.maps.LatLng(38.6583114, -85.4381302),
          new google.maps.LatLng(38.6041080, -85.4327592),
          new google.maps.LatLng(38.5587586, -85.4122464),
          new google.maps.LatLng(38.5337933, -85.4179041),
          new google.maps.LatLng(38.5118173, -85.4548144),
          new google.maps.LatLng(38.4607912, -85.4985757),
          new google.maps.LatLng(38.4371276, -85.6048521),
          new google.maps.LatLng(38.3746399, -85.6301070)
        ];

          louisvillePolygon = new google.maps.Polygon({
            paths: louisvilleCoords,
            strokeColor: '#000000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#0011A8',
            fillOpacity: 0.35
          });

          var greensboroCoords =  [
            new google.maps.LatLng(36.4146518, -79.6179199),
            new google.maps.LatLng(36.2907770, -79.9365234),
            new google.maps.LatLng(36.1999581, -80.2963257),
            new google.maps.LatLng(36.0646419, -80.5957031),
            new google.maps.LatLng(35.8534396, -80.7989502),
            new google.maps.LatLng(35.7910828, -80.6588745),
            new google.maps.LatLng(35.6037187, -80.4309082),
            new google.maps.LatLng(35.4405333, -80.2221680),
            new google.maps.LatLng(35.4159149, -79.8760986),
            new google.maps.LatLng(35.6014856, -79.6289062),
            new google.maps.LatLng(35.8890501, -79.4187927),
            new google.maps.LatLng(36.1511825, -79.2333984),
            new google.maps.LatLng(36.4146518, -79.6179199)
          ];

            greensboroPolygon = new google.maps.Polygon({
              paths: greensboroCoords,
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#0011A8',
              fillOpacity: 0.35
            });

          var cincinnatiCoords =  [
            new google.maps.LatLng(39.4712011, -84.2815943),
            new google.maps.LatLng(39.4488094, -84.4680348),
            new google.maps.LatLng(39.2835718, -84.7519620),
            new google.maps.LatLng(39.2162523, -84.8185557),
            new google.maps.LatLng(39.1319273, -84.8178855),
            new google.maps.LatLng(39.1160822, -84.8192047),
            new google.maps.LatLng(39.1045538, -84.8184968),
            new google.maps.LatLng(39.1142465, -84.7903067),
            new google.maps.LatLng(39.1453022, -84.7542225),
            new google.maps.LatLng(39.1422324, -84.7262447),
            new google.maps.LatLng(39.1047071, -84.6955278),
            new google.maps.LatLng(39.0949226, -84.6594678),
            new google.maps.LatLng(39.0731769, -84.6259968),
            new google.maps.LatLng(39.0735667, -84.5943669),
            new google.maps.LatLng(39.0845499, -84.5664016),
            new google.maps.LatLng(39.0982698, -84.5517423),
            new google.maps.LatLng(39.0973789, -84.5375427),
            new google.maps.LatLng(39.0907959, -84.5201576),
            new google.maps.LatLng(39.1005549, -84.4932923),
            new google.maps.LatLng(39.1176621, -84.4802177),
            new google.maps.LatLng(39.1216621, -84.4596003),
            new google.maps.LatLng(39.0954085, -84.4345460),
            new google.maps.LatLng(39.0615010, -84.4337378),
            new google.maps.LatLng(39.0485696, -84.4192846),
            new google.maps.LatLng(39.0359734, -84.3489077),
            new google.maps.LatLng(39.0157885, -84.3175551),
            new google.maps.LatLng(38.9870217, -84.2995054),
            new google.maps.LatLng(38.9606354, -84.2953073),
            new google.maps.LatLng(38.9220803, -84.2602591),
            new google.maps.LatLng(38.9828950, -84.1895780),
            new google.maps.LatLng(39.0650490, -84.0755832),
            new google.maps.LatLng(39.1833119, -84.0000569),
            new google.maps.LatLng(39.4298425, -84.0604846),
            new google.maps.LatLng(39.4712011, -84.2815943)

          ];

            cincinnatiPolygon = new google.maps.Polygon({
              paths: cincinnatiCoords,
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#0011A8',
              fillOpacity: 0.35
            });


          var nashvilleCoords =  [
            new google.maps.LatLng(36.5890684, -86.9622803),
            new google.maps.LatLng(36.3593750, -87.3907471),
            new google.maps.LatLng(35.9268687, -88.2669067),
            new google.maps.LatLng(35.7545850, -88.1840137),
            new google.maps.LatLng(35.6617594, -87.3687744),
            new google.maps.LatLng(35.4830381, -86.7205811),
            new google.maps.LatLng(35.5545745, -86.1218262),
            new google.maps.LatLng(36.0645309, -85.3555622),
            new google.maps.LatLng(36.1911525, -85.3227232),
            new google.maps.LatLng(36.4919735, -86.1602783),
            new google.maps.LatLng(36.6331621, -86.7315674),
            new google.maps.LatLng(36.5890684, -86.9622803)
          ];

            nashvillePolygon = new google.maps.Polygon({
              paths: nashvilleCoords,
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#0011A8',
              fillOpacity: 0.35
            });

          var knoxvilleCoords =  [
            new google.maps.LatLng(36.3284027, -83.9739990),
            new google.maps.LatLng(36.2841353, -84.3420410),
            new google.maps.LatLng(36.1356565, -84.7540283),
            new google.maps.LatLng(36.1690097, -85.1688997),
            new google.maps.LatLng(36.1911525, -85.3227232),
            new google.maps.LatLng(36.0645309, -85.3555622),
            new google.maps.LatLng(35.9579935, -85.2303533),
            new google.maps.LatLng(35.8289482, -84.8062134),
            new google.maps.LatLng(35.6394411, -84.3145752),
            new google.maps.LatLng(35.5668634, -83.7007142),
            new google.maps.LatLng(35.5719153, -83.6550557),
            new google.maps.LatLng(35.5693848, -83.6294335),
            new google.maps.LatLng(35.5798282, -83.6063026),
            new google.maps.LatLng(35.5638214, -83.5816608),
            new google.maps.LatLng(35.5664015, -83.4862479),
            new google.maps.LatLng(35.6106463, -83.4473798),
            new google.maps.LatLng(35.6121323, -83.4203394),
            new google.maps.LatLng(35.6926557, -83.2591693),
            new google.maps.LatLng(35.7284702, -83.2409609),
            new google.maps.LatLng(35.7279973, -83.1858506),
            new google.maps.LatLng(35.7628819, -83.1596468),
            new google.maps.LatLng(35.7736531, -83.1012330),
            new google.maps.LatLng(35.7918747, -83.0781965),
            new google.maps.LatLng(35.7727005, -82.9941558),
            new google.maps.LatLng(35.8240595, -82.9448938),
            new google.maps.LatLng(35.8414470, -82.9188698),
            new google.maps.LatLng(35.8679744, -82.9195798),
            new google.maps.LatLng(35.8779178, -82.8938621),
            new google.maps.LatLng(35.9285156, -82.9187570),
            new google.maps.LatLng(35.9521556, -82.8763282),
            new google.maps.LatLng(35.9206468, -82.8166575),
            new google.maps.LatLng(35.9977348, -82.7764591),
            new google.maps.LatLng(36.0651851, -82.6355771),
            new google.maps.LatLng(36.2658676, -82.9460907),
            new google.maps.LatLng(36.3239771, -83.3752441),
            new google.maps.LatLng(36.3284027, -83.9739990)
          ];

            knoxvillePolygon = new google.maps.Polygon({
              paths: knoxvilleCoords,
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#0011A8',
              fillOpacity: 0.35
            });

          var memphisCoords =  [
            new google.maps.LatLng(35.9268687, -88.2614135),
            new google.maps.LatLng(35.9085611, -88.8379100),
            new google.maps.LatLng(35.7732576, -89.3023681),
            new google.maps.LatLng(35.7197579, -89.7033691),
            new google.maps.LatLng(35.6081849, -89.9945068),
            new google.maps.LatLng(35.5277558, -90.4284668),
            new google.maps.LatLng(35.3890500, -90.7965088),
            new google.maps.LatLng(35.0839556, -90.8239746),
            new google.maps.LatLng(34.8092932, -90.6866455),
            new google.maps.LatLng(34.5653830, -90.4229736),
            new google.maps.LatLng(34.4884478, -90.0054931),
            new google.maps.LatLng(34.6693585, -89.6923828),
            new google.maps.LatLng(34.7822276, -89.4396972),
            new google.maps.LatLng(35.1064281, -89.3408203),
            new google.maps.LatLng(35.1962560, -89.0936279),
            new google.maps.LatLng(35.2725318, -88.8574218),
            new google.maps.LatLng(35.4024836, -88.6157226),
            new google.maps.LatLng(35.5724486, -88.2861328),
            new google.maps.LatLng(35.7545850, -88.1785205),
            new google.maps.LatLng(35.9268687, -88.2614135)
            ];

            memphisPolygon = new google.maps.Polygon({
              paths: memphisCoords,
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#0011A8',
              fillOpacity: 0.35
            });

          var florenceCoords =  [
            new google.maps.LatLng(39.0575836, -84.8951340),
            new google.maps.LatLng(39.0405196, -84.8875809),
            new google.maps.LatLng(39.0215843, -84.8618317),
            new google.maps.LatLng(38.9732896, -84.8288727),
            new google.maps.LatLng(38.9599426, -84.8305893),
            new google.maps.LatLng(38.9193527, -84.8779678),
            new google.maps.LatLng(38.9059957, -84.8735046),
            new google.maps.LatLng(38.8971787, -84.8583984),
            new google.maps.LatLng(38.8982475, -84.8247528),
            new google.maps.LatLng(38.8846192, -84.7859573),
            new google.maps.LatLng(38.8693845, -84.7838974),
            new google.maps.LatLng(38.8504034, -84.7993469),
            new google.maps.LatLng(38.8303354, -84.8278073),
            new google.maps.LatLng(38.8200452, -84.8265855),
            new google.maps.LatLng(38.7926956, -84.8091565),
            new google.maps.LatLng(38.7833013, -84.8152195),
            new google.maps.LatLng(38.7815506, -84.8312997),
            new google.maps.LatLng(38.7924545, -84.8949564),
            new google.maps.LatLng(38.7727689, -84.9425614),
            new google.maps.LatLng(38.7765999, -84.9907473),
            new google.maps.LatLng(38.7257961, -85.0955120),
            new google.maps.LatLng(38.6934906, -85.1465769),
            new google.maps.LatLng(38.6864861, -85.1924176),
            new google.maps.LatLng(38.5146179, -85.1775204),
            new google.maps.LatLng(38.7406952, -84.7073364),
            new google.maps.LatLng(38.7353393, -84.5603942),
            new google.maps.LatLng(38.8814122, -84.4903564),
            new google.maps.LatLng(38.8969115, -84.3461609),
            new google.maps.LatLng(38.9220803, -84.2602591),
            new google.maps.LatLng(38.9606354, -84.2953073),
            new google.maps.LatLng(38.9870217, -84.2995054),
            new google.maps.LatLng(39.0157885, -84.3175551),
            new google.maps.LatLng(39.0359734, -84.3489077),
            new google.maps.LatLng(39.0485696, -84.4192846),
            new google.maps.LatLng(39.0615010, -84.4337378),
            new google.maps.LatLng(39.0954085, -84.4345460),
            new google.maps.LatLng(39.1216621, -84.4596003),
            new google.maps.LatLng(39.1176621, -84.4802177),
            new google.maps.LatLng(39.1005549, -84.4932923),
            new google.maps.LatLng(39.0907959, -84.5201576),
            new google.maps.LatLng(39.0973789, -84.5375427),
            new google.maps.LatLng(39.0982698, -84.5517423),
            new google.maps.LatLng(39.0845499, -84.5664016),
            new google.maps.LatLng(39.0731778, -84.5954132),
            new google.maps.LatLng(39.0731769, -84.6259968),
            new google.maps.LatLng(39.0949226, -84.6594678),
            new google.maps.LatLng(39.1047071, -84.6955278),
            new google.maps.LatLng(39.1422324, -84.7262447),
            new google.maps.LatLng(39.1453022, -84.7542225),
            new google.maps.LatLng(39.1142465, -84.7903067),
            new google.maps.LatLng(39.1012901, -84.8283673),
            new google.maps.LatLng(39.0820448, -84.8494171),
            new google.maps.LatLng(39.0679830, -84.8783103),
            new google.maps.LatLng(39.0575836, -84.8951340)

            ];

            florencePolygon = new google.maps.Polygon({
              paths: florenceCoords,
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#0011A8',
              fillOpacity: 0.35
            });

          var etownCoords =  [
            new google.maps.LatLng(37.9241594, -86.0366821),
            new google.maps.LatLng(37.9095336, -86.0888672),
            new google.maps.LatLng(37.8206329, -86.1355591),
            new google.maps.LatLng(37.6022643, -86.1774445),
            new google.maps.LatLng(37.4612334, -86.0435486),
            new google.maps.LatLng(37.4094372, -85.7908630),
            new google.maps.LatLng(37.5200740, -85.6686402),
            new google.maps.LatLng(37.7663723, -85.7015991),
            new google.maps.LatLng(37.8908788, -85.5841514),
            new google.maps.LatLng(37.9228511, -85.7032866),
            new google.maps.LatLng(37.9361276, -85.7898009),
            new google.maps.LatLng(37.9410185, -86.0091811),
            new google.maps.LatLng(37.9241594, -86.0366821)
            ];

            etownPolygon = new google.maps.Polygon({
              paths: etownCoords,
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#0011A8',
              fillOpacity: 0.35
            });

          var newalbanyCoords =  [
            new google.maps.LatLng(38.4514378, -85.6404877),
            new google.maps.LatLng(38.4697185, -85.7352448),
            new google.maps.LatLng(38.4600411, -85.7949829),
            new google.maps.LatLng(38.4164765, -85.8650208),
            new google.maps.LatLng(38.3502725, -85.9391785),
            new google.maps.LatLng(38.2823911, -85.9865570),
            new google.maps.LatLng(38.2257747, -85.9680176),
            new google.maps.LatLng(38.1858471, -85.9158325),
            new google.maps.LatLng(38.1983641, -85.8841405),
            new google.maps.LatLng(38.2328860, -85.8372947),
            new google.maps.LatLng(38.2846680, -85.8231902),
            new google.maps.LatLng(38.2781992, -85.7729686),
            new google.maps.LatLng(38.2631148, -85.7427488),
            new google.maps.LatLng(38.3116290, -85.6562151),
            new google.maps.LatLng(38.4371276, -85.6048521),
            new google.maps.LatLng(38.4514378, -85.6404877)              
            ];

            newalbanyPolygon = new google.maps.Polygon({
              paths: newalbanyCoords,
              strokeColor: '#000000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#0011A8',
              fillOpacity: 0.35
            });

          louisvillePolygon.setMap(map);
          greensboroPolygon.setMap(map);
          cincinnatiPolygon.setMap(map);
          nashvillePolygon.setMap(map);
          knoxvillePolygon.setMap(map);
          memphisPolygon.setMap(map);
          florencePolygon.setMap(map);
          etownPolygon.setMap(map);
          newalbanyPolygon.setMap(map);
        }

        function codeAddress() {
          var address = document.getElementById('address').value;
          geocoder.geocode( { 'address': address}, function(results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
              map.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
                map: map,
                position: results[0].geometry.location
            });
          } else {
            alert('Geocode was not successful for the following reason: ' + status);
          }
        });

      var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      'sandstone rock formation in the southern part of the '+
      'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
      'south west of the nearest large town, Alice Springs; 450&#160;km '+
      '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
      'features of the Uluru - Kata Tjuta National Park. Uluru is '+
      'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
      'Aboriginal people of the area. It has many springs, waterholes, '+
      'rock caves and ancient paintings. Uluru is listed as a World '+
      'Heritage Site.</p>'+
      '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
      'https://en.wikipedia.org/w/index.php?title=Uluru</a> '+
      '(last visited June 22, 2009).</p>'+
      '</div>'+
      '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
  var myLatlng = google.maps.LatLng(36.9902778, -86.4436111);
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Uluru (Ayers Rock)'
  });
  google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
      }

          google.maps.event.addDomListener(window, 'load', initialize);
/* nav bar drop down */

          (function($){
  $(document).ready(function(){
    $('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      $(this).parent().siblings().removeClass('open');
      $(this).parent().toggleClass('open');
    });
  });
})(jQuery);