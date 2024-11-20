import axios from 'axios';

const stock = [
  {
    price: 150,
    name: "Adapter 6 USB 200CM",
    ostock: 0
  },
  {
    price: 75,
    name: "Adapter 5ways 3m",
    ostock: 6
  },
  {
    price: 80,
    name: "Adapter 6ways 3m",
    ostock: 1
  },
  {
    price: 80,
    name: "Adapter 5ways 5m",
    ostock: 2
  },
  {
    price: 85,
    name: "Adapter 6ways 5m",
    ostock: 2
  },
  {
    price: 75,
    name: "Adapter 4ways 5m",
    ostock: 3
  },
  {
    price: 60,
    name: "Adapter 3ways 5m",
    ostock: 6
  },
  {
    price: 65,
    name: "Adapter 4ways 3m",
    ostock: 2
  },
  {
    price: 60,
    name: "Adapter 3ways 3m ",
    ostock: 8
  },
  {
    price: 35,
    name: "Adpter 3ways",
    ostock: 0
  },
  {
    price: 25,
    name: "Aradytte solution",
    ostock: 32
  },
  {
    price: 45,
    name: "Arc saw red ",
    ostock: 0
  },
  {
    price: 65,
    name: "Arc saw yellow polland",
    ostock: 9
  },
  {
    price: 70,
    name: "Arran key big ",
    ostock: 16
  },
  {
    price: 45,
    name: "Arran key medium",
    ostock: 0
  },
  {
    price: 40,
    name: "Arran key small",
    ostock: 0
  },
  {
    price: 25,
    name: "Av -cable big",
    ostock: 24
  },
  {
    price: 15,
    name: "Av-cable small",
    ostock: 0
  },
  {
    price: 250,
    name: "Amps 60 3phase",
    ostock: 1
  },
  {
    price: 50,
    name: "Amps 40A",
    ostock: 4
  },
  {
    price: 50,
    name: "Amps 30A ",
    ostock: 4
  },
  {
    price: 45,
    name: "Amps 20A",
    ostock: 17
  },
  {
    price: 40,
    name: "Amps 10A",
    ostock: 15
  },
  {
    price: 40,
    name: "Amps 5A",
    ostock: 7
  },
  {
    price: 85,
    name: "Auto-zed C-40",
    ostock: 0
  },
  {
    price: 17,
    name: "Alloy Hook",
    ostock: 2
  },
  {
    price: 12,
    name: "Air vent",
    ostock: 106
  },
  {
    price: 70,
    name: "ATF OIL/SPEEDOL 1LITER",
    ostock: 44
  },
  {
    price: 25,
    name: "AUX CABLE",
    ostock: 5
  },
  {
    price: 120,
    name: "ALARM LOCK",
    ostock: 4
  },
  {
    price: 20,
    name: "ACKSO BLADE",
    ostock: 2
  },
  {
    price: 25,
    name: "A V CABLES HEADSET",
    ostock: 17
  },
  {
    price: 150,
    name: "ADAPTER USB SMALL",
    ostock: 3
  },
  {
    price: 170,
    name: "ADAPTER USB MEDIUM",
    ostock: 2
  },
  {
    price: 195,
    name: "ADAPTER USB BIG",
    ostock: 1
  },
  {
    price: 55,
    name: "AMPS 60",
    ostock: 10
  },
  {
    price: 40,
    name: "AMPS 15",
    ostock: 11
  },
  {
    price: 35,
    name: "Adapter 513",
    ostock: 20
  },
  {
    price: 180,
    name: "A T F 3 1L",
    ostock: 0
  },
  {
    price: 180,
    name: "A T F LIVO 1L",
    ostock: 0
  },
  {
    price: 180,
    name: "A T F 11-D 1LITER",
    ostock: 0
  },
  {
    price: 70,
    name: "Bloom hard big ",
    ostock: 1
  },
  {
    price: 70,
    name: "Bloom medium soft ",
    ostock: 27
  },
  {
    price: 35,
    name: "Bloom soft small",
    ostock: 13
  },
  {
    price: 12,
    name: "Bolt and nuts ",
    ostock: 26
  },
  {
    price: 1,
    name: "Bolt and screw",
    ostock: 64
  },
  {
    price: 15,
    name: "Bolt and nuts big",
    ostock: 0
  },
  {
    price: 130,
    name: "BICYCLE TIRE 28",
    ostock: 8
  },
  {
    price: 80,
    name: "Battery terminal big ",
    ostock: 8
  },
  {
    price: 30,
    name: "Battery terminal small",
    ostock: 8
  },
  {
    price: 65,
    name: "Bow saw big",
    ostock: 3
  },
  {
    price: 45,
    name: "Brake fluid dot 3 250mls",
    ostock: 45
  },
  {
    price: 50,
    name: "Brake  fluid dot 3 500mls",
    ostock: 8
  },
  {
    price: 85,
    name: "Brake fluid dot 4 500mls",
    ostock: 7
  },
  {
    price: 50,
    name: "Brake fluid dot 4 200mls",
    ostock: 29
  },
  {
    price: 50,
    name: "Brake fluid dot 250mls",
    ostock: 2
  },
  {
    price: 25,
    name: "Battery Energizer AA",
    ostock: 38
  },
  {
    price: 25,
    name: "Battery Energizer AAA",
    ostock: 22
  },
  {
    price: 6,
    name: "Battery T-Head big",
    ostock: 432
  },
  {
    price: 2,
    name: "Battery dura supa ",
    ostock: 428
  },
  {
    price: 8,
    name: "Battery Panasonic ",
    ostock: 52
  },
  {
    price: 35,
    name: "Black Bituminus",
    ostock: 16
  },
  {
    price: 30,
    name: "Battery water 2.5l",
    ostock: 12
  },
  {
    price: 20,
    name: "Battery water 750mls",
    ostock: 10
  },
  {
    price: 15,
    name: "Building line",
    ostock: 27
  },
  {
    price: 15,
    name: "Bulb horder big ",
    ostock: 119
  },
  {
    price: 10,
    name: "Bulb horder small",
    ostock: 94
  },
  {
    price: 80,
    name: "Bath over flow",
    ostock: 5
  },
  {
    price: 40,
    name: "Blass Elbow",
    ostock: 0
  },
  {
    price: 10,
    name: "Bicycle Grease",
    ostock: 0
  },
  {
    price: 12,
    name: "Bicycle Allow Reflector",
    ostock: 2
  },
  {
    price: 30,
    name: "Bicycle Hooter",
    ostock: 1
  },
  {
    price: 100,
    name: "Bicycle folk",
    ostock: 4
  },
  {
    price: 40,
    name: "Bicycle madigar silver",
    ostock: 1
  },
  {
    price: 40,
    name: "Bicycle madigar plastic",
    ostock: 6
  },
  {
    price: 130,
    name: "Bicycle crankle MBT",
    ostock: 6
  },
  {
    price: 130,
    name: "Bicycle tyre 26",
    ostock: 19
  },
  {
    price: 105,
    name: "Bicycle Reem 26",
    ostock: 8
  },
  {
    price: 130,
    name: "Bicycle Reem 28",
    ostock: 4
  },
  {
    price: 50,
    name: "Bicycle Hub",
    ostock: 20
  },
  {
    price: 70,
    name: "Bicycle pedal 28",
    ostock: 1
  },
  {
    price: 20,
    name: "Bicycle bell ",
    ostock: 3
  },
  {
    price: 100,
    name: "Bicycle freewheel big ",
    ostock: 2
  },
  {
    price: 1,
    name: "Bicycle spork",
    ostock: 774
  },
  {
    price: 20,
    name: "Bicycle fitting folk ",
    ostock: 1
  },
  {
    price: 15,
    name: "Bicycle steel bow",
    ostock: 2
  },
  {
    price: 25,
    name: "Bicycle bottom caps ",
    ostock: 8
  },
  {
    price: 15,
    name: "Bicycle bottom front Arxle",
    ostock: 16
  },
  {
    price: 45,
    name: "Bicycle tube 28",
    ostock: 27
  },
  {
    price: 15,
    name: "Bicycle rear Arxle ",
    ostock: 7
  },
  {
    price: 15,
    name: "Bicycle rubber single",
    ostock: 9
  },
  {
    price: 90,
    name: "Bicycle Break sets ",
    ostock: 2
  },
  {
    price: 55,
    name: "Bicycle gear sets",
    ostock: 2
  },
  {
    price: 35,
    name: "Bicycle gear serector",
    ostock: 5
  },
  {
    price: 45,
    name: "Bicycle chain ",
    ostock: 13
  },
  {
    price: 40,
    name: "Brick force wire 6' ",
    ostock: 58
  },
  {
    price: 40,
    name: "Brick force wire 4''",
    ostock: 67
  },
  {
    price: 50,
    name: "BATTERY ACID 2.5LITERS",
    ostock: 8
  },
  {
    price: 20,
    name: "BATTERY ACID 750MLS",
    ostock: 72
  },
  {
    price: 10,
    name: "Bicycle solution gekem big",
    ostock: 28
  },
  {
    price: 7,
    name: "Bicycle solution gekem small",
    ostock: 27
  },
  {
    price: 10,
    name: "BULBLIGHT LONGLIFE 100WATTS",
    ostock: 179
  },
  {
    price: 15,
    name: "BATTERY MICROPHONE",
    ostock: 86
  },
  {
    price: 5,
    name: "BOLT AND NUT ",
    ostock: 52
  },
  {
    price: 10,
    name: "BOLT AND NUT ",
    ostock: 43
  },
  {
    price: 15,
    name: "BOLT AND NUT",
    ostock: 26
  },
  {
    price: 20,
    name: "BOLT AND NUT",
    ostock: 8
  },
  {
    price: 25,
    name: "BOLT AND NUT",
    ostock: 10
  },
  {
    price: 50,
    name: "BICYCLE PEDAl S",
    ostock: 10
  },
  {
    price: 55,
    name: "BLOOM SOFT MEDIUM",
    ostock: 4
  },
  {
    price: 90,
    name: "bloom big",
    ostock: 4
  },
  {
    price: 35,
    name: "BICYCLE FREEWHEEL SMALL",
    ostock: 0
  },
  {
    price: 45,
    name: "BLUETOOTH HEADSET ",
    ostock: 0
  },
  {
    price: 3,
    name: "cable tie long",
    ostock: 176
  },
  {
    price: 140,
    name: "CAR CHARGER USB X2",
    ostock: 0
  },
  {
    price: 160,
    name: "CAR CHAEGER CABLE FM",
    ostock: 4
  },
  {
    price: 7,
    name: "CARD LEADER",
    ostock: 0
  },
  {
    price: 145,
    name: "CEMENT",
    ostock: 0
  },
  {
    price: 18,
    name: "CAR BULB 24-12 V",
    ostock: 218
  },
  {
    price: 10,
    name: "CAR STICKER",
    ostock: 43
  },
  {
    price: 60,
    name: "Ceelling nails",
    ostock: 5
  },
  {
    price: 60,
    name: "Concrete nails 4''",
    ostock: 3
  },
  {
    price: 60,
    name: "Concrete nails 3''",
    ostock: 23
  },
  {
    price: 80,
    name: "CAR CHARGER MANGO",
    ostock: 19
  },
  {
    price: 50,
    name: "Car bulb philips 12-24v",
    ostock: 0
  },
  {
    price: 20,
    name: "Cable clips 6-9mm",
    ostock: 0
  },
  {
    price: 30,
    name: "Coolant 1l",
    ostock: 73
  },
  {
    price: 660,
    name: "Castrol Magnetic Oil 10w-40 5l",
    ostock: 0
  },
  {
    price: 600,
    name: "Castrol GTX Oil 20w-50 5l",
    ostock: 3
  },
  {
    price: 110,
    name: "Castrol GTX Oil 20w-50 1l",
    ostock: 12
  },
  {
    price: 45,
    name: "Car tinty ",
    ostock: 1
  },
  {
    price: 10,
    name: "Car reflector red ",
    ostock: 59
  },
  {
    price: 10,
    name: "Car reflector yellow",
    ostock: 4
  },
  {
    price: 150,
    name: "Car charger fm ",
    ostock: 0
  },
  {
    price: 120,
    name: "Car charger G7 ",
    ostock: 31
  },
  {
    price: 1,
    name: "Cable tie ",
    ostock: 425
  },
  {
    price: 200,
    name: "Chicken medicine ",
    ostock: 20
  },
  {
    price: 170,
    name: "Cutting disc max pawa big",
    ostock: 5
  },
  {
    price: 70,
    name: "Cutting disc max pawa small",
    ostock: 4
  },
  {
    price: 70,
    name: "Cutting disc 3 IN 1",
    ostock: 11
  },
  {
    price: 50,
    name: "Cutting disc steel",
    ostock: 0
  },
  {
    price: 50,
    name: "Chisel steel",
    ostock: 16
  },
  {
    price: 45,
    name: "Chisel wooden retail",
    ostock: 25
  },
  {
    price: 90,
    name: "CPVC Floaters",
    ostock: 1
  },
  {
    price: 120,
    name: "Cooker stove 3x6 ",
    ostock: 4
  },
  {
    price: 330,
    name: "Cooker plate stove big",
    ostock: 0
  },
  {
    price: 180,
    name: "Cooker plates stove small",
    ostock: 1
  },
  {
    price: 45,
    name: "Copper connecter big",
    ostock: 5
  },
  {
    price: 15,
    name: "Corn rubber",
    ostock: 5
  },
  {
    price: 70,
    name: "CPVC Glue 500g ",
    ostock: 4
  },
  {
    price: 40,
    name: "CPVC Glue 250g",
    ostock: 6
  },
  {
    price: 35,
    name: "CPVC Glue 125g",
    ostock: 7
  },
  {
    price: 15,
    name: "Crack filler",
    ostock: 10
  },
  {
    price: 15,
    name: "CPVC Union 3/4",
    ostock: 3
  },
  {
    price: 7,
    name: "CPVC Union 1/2",
    ostock: 7
  },
  {
    price: 6,
    name: "CPVC Socket 3/4",
    ostock: 0
  },
  {
    price: 3,
    name: "Cpvc socket 1/2",
    ostock: 111
  },
  {
    price: 8,
    name: "Cpvc elbow 3/4",
    ostock: 40
  },
  {
    price: 4,
    name: "Cpvc elbow 1/2",
    ostock: 7
  },
  {
    price: 6,
    name: "Cpvc TEE 3/4",
    ostock: 22
  },
  {
    price: 4,
    name: "Cpvc TEE 1/2",
    ostock: 57
  },
  {
    price: 15,
    name: "Cpvc male Adpter 3/4",
    ostock: 14
  },
  {
    price: 6,
    name: "Cpvc male Adpter 1/2",
    ostock: 0
  },
  {
    price: 15,
    name: "Cpvc Female adpter 1/2",
    ostock: 9
  },
  {
    price: 350,
    name: "Cisten ",
    ostock: 3
  },
  {
    price: 50,
    name: "Chain metal 5''",
    ostock: 15
  },
  {
    price: 40,
    name: "Chain metal 4''",
    ostock: 8
  },
  {
    price: 35,
    name: "Chicken wire long",
    ostock: 0
  },
  {
    price: 70,
    name: "Cpvc pipe 3/4",
    ostock: 0
  },
  {
    price: 50,
    name: "Cpvc pipe 1/2",
    ostock: 0
  },
  {
    price: 25,
    name: "Conduit pipe white",
    ostock: 7
  },
  {
    price: 8,
    name: "Conduit pipe Black",
    ostock: 146
  },
  {
    price: 75,
    name: "Cable brown/Red/Green 16mm",
    ostock: 25
  },
  {
    price: 10,
    name: "Cable brown/Red/Green 1.5mm",
    ostock: 570
  },
  {
    price: 12,
    name: "Cable brown/Red/Green 2.5mm",
    ostock: 383
  },
  {
    price: 10,
    name: "CAR REFLECTOR WHITE",
    ostock: 114
  },
  {
    price: 80,
    name: "CAR CHARGER MIX/ /ORIGINAL",
    ostock: 18
  },
  {
    price: 50,
    name: "CABLE 3 IN 1",
    ostock: 0
  },
  {
    price: 110,
    name: "CAR MODULATOR",
    ostock: 3
  },
  {
    price: 100,
    name: "CHARGER TYPE C",
    ostock: 7
  },
  {
    price: 110,
    name: "CHARGER  ORAIMO 3XUSB",
    ostock: 0
  },
  {
    price: 100,
    name: "CHARGER IPHONE",
    ostock: 2
  },
  {
    price: 300,
    name: "COOKER 6X6",
    ostock: 6
  },
  {
    price: 35,
    name: "CPVC BALL VALVE",
    ostock: 16
  },
  {
    price: 30,
    name: "CAR CHARGER 2.4A",
    ostock: 10
  },
  {
    price: 220,
    name: "cooker plate  solid big",
    ostock: 5
  },
  {
    price: 200,
    name: "cooker  plate solid small",
    ostock: 5
  },
  {
    price: 50,
    name: "cooker plate 7''",
    ostock: 9
  },
  {
    price: 45,
    name: "cooker plate 6''",
    ostock: 10
  },
  {
    price: 50,
    name: "CUTTING DISC FIELDEX",
    ostock: 20
  },
  {
    price: 60,
    name: "CAR CHARGER D'KAY K-P 63",
    ostock: 17
  },
  {
    price: 25,
    name: "CAR BULB HALOGENS H4 24V",
    ostock: 0
  },
  {
    price: 60,
    name: "Door guard black lable",
    ostock: 5
  },
  {
    price: 330,
    name: "Diesel Engne oil Speedol 5L",
    ostock: 3
  },
  {
    price: 320,
    name: "Diesel  oil Lubricant 5L",
    ostock: 4
  },
  {
    price: 80,
    name: "Diesel Engine speedol 1L",
    ostock: 0
  },
  {
    price: 80,
    name: " DELTA Diesel Oil  Lubricant 1L",
    ostock: 21
  },
  {
    price: 85,
    name: "Delta  Diesel 2-Strock 1L",
    ostock: 1
  },
  {
    price: 100,
    name: "Dophin AM-40 Big",
    ostock: 1
  },
  {
    price: 70,
    name: "Dophin AM-40 small",
    ostock: 0
  },
  {
    price: 30,
    name: "Data cable d'kay",
    ostock: 8
  },
  {
    price: 25,
    name: "Data cable iphone White",
    ostock: 1
  },
  {
    price: 30,
    name: "Data cable  MIX (TYPE C,IPHONE NORMA)",
    ostock: 46
  },
  {
    price: 20,
    name: "DATA CABLE MIX SMALL",
    ostock: 2
  },
  {
    price: 10,
    name: "Drill bits wall",
    ostock: 27
  },
  {
    price: 45,
    name: "Dpc Building",
    ostock: 1
  },
  {
    price: 70,
    name: "Distribution Box white",
    ostock: 2
  },
  {
    price: 45,
    name: "Distribution Box big",
    ostock: 0
  },
  {
    price: 30,
    name: "Distribution box Small",
    ostock: 9
  },
  {
    price: 150,
    name: "Digtall metre unit tester big",
    ostock: 1
  },
  {
    price: 145,
    name: "Digtall metre unit tester multmated S",
    ostock: 1
  },
  {
    price: 500,
    name: "Double sink  kitchen",
    ostock: 2
  },
  {
    price: 25,
    name: "DATA CABLE TYPE C",
    ostock: 0
  },
  {
    price: 25,
    name: "Data cable ORAIMO",
    ostock: 0
  },
  {
    price: 25,
    name: "Data cable samsung",
    ostock: 0
  },
  {
    price: 40,
    name: "DATA CABLE TYPE C",
    ostock: 3
  },
  {
    price: 20,
    name: "ENERGY BULB 5W",
    ostock: 0
  },
  {
    price: 60,
    name: "Edge guard",
    ostock: 3
  },
  {
    price: 410,
    name: "Enerzed Diesel Engine oil 5L",
    ostock: 2
  },
  {
    price: 50,
    name: "Epox steel Rapid",
    ostock: 0
  },
  {
    price: 25,
    name: "Epoxy star",
    ostock: 35
  },
  {
    price: 85,
    name: "Energy saving bulb 48w",
    ostock: 2
  },
  {
    price: 35,
    name: "Energy saving bulb 18w",
    ostock: 9
  },
  {
    price: 55,
    name: "Energy saving bulb 25w",
    ostock: 0
  },
  {
    price: 30,
    name: "Energy saving bulb 15w",
    ostock: 4
  },
  {
    price: 30,
    name: "Energy saving bulb 12w",
    ostock: 30
  },
  {
    price: 60,
    name: "Energy saving bulb sunda 25W",
    ostock: 11
  },
  {
    price: 20,
    name: "Energy saving bulb 2U",
    ostock: 189
  },
  {
    price: 30,
    name: "Energy saving bulb 13w",
    ostock: 0
  },
  {
    price: 20,
    name: "Energy saving bulb 6w",
    ostock: 15
  },
  {
    price: 170,
    name: "Ear pods i7s",
    ostock: 4
  },
  {
    price: 280,
    name: "Ear pods oraimo Air-303",
    ostock: 3
  },
  {
    price: 220,
    name: "Ear pods i15-R02",
    ostock: 1
  },
  {
    price: 170,
    name: "Ear pods i16max",
    ostock: 1
  },
  {
    price: 105,
    name: "Earth rods big ",
    ostock: 3
  },
  {
    price: 80,
    name: "Earth rods medium",
    ostock: 0
  },
  {
    price: 50,
    name: "Earth rods small",
    ostock: 4
  },
  {
    price: 250,
    name: "EAR POD ORAIMO",
    ostock: 0
  },
  {
    price: 25,
    name: "ENERGY BULB 9W,7W,3U",
    ostock: 123
  },
  {
    price: 40,
    name: "ENERGY BULB 30W",
    ostock: 5
  },
  {
    price: 220,
    name: "Ear pods AIRDOTS",
    ostock: 0
  },
  {
    price: 200,
    name: "EAR PODS I14 TWS / ORAIMO",
    ostock: 4
  },
  {
    price: 90,
    name: "ENERGY BULB 60W",
    ostock: 30
  },
  {
    price: 50,
    name: "Fun belt 3390 ",
    ostock: 7
  },
  {
    price: 80,
    name: "Fun belt 3pk630",
    ostock: 5
  },
  {
    price: 50,
    name: "Fun belt A44",
    ostock: 3
  },
  {
    price: 80,
    name: "Fun belt spk1110/1100",
    ostock: 5
  },
  {
    price: 50,
    name: "Fun belt 580spk",
    ostock: 3
  },
  {
    price: 50,
    name: "Fun belt 4pk820",
    ostock: 5
  },
  {
    price: 50,
    name: "Fun belt 4pk1180",
    ostock: 4
  },
  {
    price: 250,
    name: "Fuel pump rika",
    ostock: 0
  },
  {
    price: 220,
    name: "Fuel pump sy",
    ostock: 0
  },
  {
    price: 230,
    name: "Fuel pump pysy",
    ostock: 0
  },
  {
    price: 35,
    name: "Fisher screw 10mm",
    ostock: 5
  },
  {
    price: 30,
    name: "Fisher screw 12mm",
    ostock: 3
  },
  {
    price: 20,
    name: "Fisher screw 8mm",
    ostock: 3
  },
  {
    price: 15,
    name: "Fisher screw 0.06mm",
    ostock: 6
  },
  {
    price: 40,
    name: "Fx-40 lustry remover 40mm B",
    ostock: 14
  },
  {
    price: 110,
    name: "Flash disc 4gb",
    ostock: 0
  },
  {
    price: 100,
    name: "Flas disc 2gb ",
    ostock: 0
  },
  {
    price: 130,
    name: "Flash disc 8gb",
    ostock: 0
  },
  {
    price: 150,
    name: "Flash disc 16gb",
    ostock: 9
  },
  {
    price: 170,
    name: "Fitting bulb philips 4fit",
    ostock: 2
  },
  {
    price: 160,
    name: "Fitting bulb philips 2fit",
    ostock: 12
  },
  {
    price: 55,
    name: "Flash bands 50mm",
    ostock: 3
  },
  {
    price: 20,
    name: "Flexible connecter big",
    ostock: 9
  },
  {
    price: 20,
    name: "Flexible connecter small",
    ostock: 12
  },
  {
    price: 75,
    name: "Fiedex lock big",
    ostock: 3
  },
  {
    price: 40,
    name: "Foot pump",
    ostock: 8
  },
  {
    price: 160,
    name: "FLASH DISC 32GB",
    ostock: 9
  },
  {
    price: 600,
    name: "FAN METAL STAND",
    ostock: 6
  },
  {
    price: 500,
    name: "FAN PLASTIC STAND",
    ostock: 0
  },
  {
    price: 55,
    name: "fire stop big",
    ostock: 5
  },
  {
    price: 45,
    name: "fire stop small",
    ostock: 2
  },
  {
    price: 850,
    name: "FAN WALL BIG ",
    ostock: 2
  },
  {
    price: 550,
    name: "FAN WALL SMALL",
    ostock: 3
  },
  {
    price: 35,
    name: "Fx-40 lustry remover 30mm S",
    ostock: 14
  },
  {
    price: 25,
    name: "Glass cutter small",
    ostock: 21
  },
  {
    price: 130,
    name: "Gum boot",
    ostock: 10
  },
  {
    price: 90,
    name: "Gear oil spydal scre 904 1litre",
    ostock: 25
  },
  {
    price: 85,
    name: "Gear oil stainely C90",
    ostock: 0
  },
  {
    price: 85,
    name: "Gulf super leet",
    ostock: 0
  },
  {
    price: 40,
    name: "Gun Gum",
    ostock: 17
  },
  {
    price: 30,
    name: "Gasket silicon grey",
    ostock: 30
  },
  {
    price: 35,
    name: "Gasket RTV Silicon black",
    ostock: 57
  },
  {
    price: 85,
    name: "Grass cutter big",
    ostock: 0
  },
  {
    price: 75,
    name: "Grass cutter small",
    ostock: 6
  },
  {
    price: 50,
    name: "Gloves red pair",
    ostock: 29
  },
  {
    price: 30,
    name: "Gloves cotton small",
    ostock: 45
  },
  {
    price: 15,
    name: "G.I.T ",
    ostock: 10
  },
  {
    price: 10,
    name: "G.I.T Elbow 3/4",
    ostock: 14
  },
  {
    price: 7,
    name: "G.I.T Elbow 1/2",
    ostock: 22
  },
  {
    price: 120,
    name: "Garden tap 3/4",
    ostock: 7
  },
  {
    price: 120,
    name: "Garden tap 1/2",
    ostock: 4
  },
  {
    price: 60,
    name: "GREASE-3",
    ostock: 24
  },
  {
    price: 150,
    name: "hand lamp 2.4w/8w",
    ostock: 0
  },
  {
    price: 160,
    name: "HEAD SET KIM KL-02",
    ostock: 0
  },
  {
    price: 300,
    name: "HAIR CLIPPER  WL-11020",
    ostock: 1
  },
  {
    price: 400,
    name: "Hair cliper wl690/WAIKIL",
    ostock: 6
  },
  {
    price: 350,
    name: "Hair cliper HTC",
    ostock: 5
  },
  {
    price: 250,
    name: "HAIR CRIPPER 3IN1",
    ostock: 6
  },
  {
    price: 200,
    name: "Hair dryer sw390",
    ostock: 3
  },
  {
    price: 55,
    name: "Hand saw 24''22''20''18''",
    ostock: 23
  },
  {
    price: 220,
    name: "Head set bluetooth p15",
    ostock: 2
  },
  {
    price: 150,
    name: "Head set bluetooth ",
    ostock: 1
  },
  {
    price: 250,
    name: "Head set JBL",
    ostock: 1
  },
  {
    price: 150,
    name: "Head sets four season",
    ostock: 0
  },
  {
    price: 120,
    name: "Head set P-47",
    ostock: 0
  },
  {
    price: 45,
    name: "Head set techno E13",
    ostock: 0
  },
  {
    price: 45,
    name: "Head sets ORAIMO",
    ostock: 0
  },
  {
    price: 50,
    name: "Head sets Oraimo T122 / AKG B",
    ostock: 9
  },
  {
    price: 120,
    name: "Hammer steel fiedex",
    ostock: 10
  },
  {
    price: 120,
    name: "Hammer steel yellow",
    ostock: 2
  },
  {
    price: 75,
    name: "Hammer steel red",
    ostock: 0
  },
  {
    price: 75,
    name: "Hammer steel yellow",
    ostock: 0
  },
  {
    price: 110,
    name: "Hoe",
    ostock: 0
  },
  {
    price: 40,
    name: "Helmet",
    ostock: 22
  },
  {
    price: 2,
    name: "Hole clip",
    ostock: 296
  },
  {
    price: 15,
    name: "Hand Handle big",
    ostock: 12
  },
  {
    price: 3,
    name: "Hand Handle small",
    ostock: 8
  },
  {
    price: 20,
    name: "Horse pipe ",
    ostock: 76
  },
  {
    price: 30,
    name: "HEAD SET VOTEL",
    ostock: 0
  },
  {
    price: 45,
    name: "HEAD SET MIX (RAINO,AKG,VOTEL)",
    ostock: 133
  },
  {
    price: 45,
    name: "HEAD SET RAINO",
    ostock: 0
  },
  {
    price: 45,
    name: "HEAD SET AKG BS",
    ostock: 0
  },
  {
    price: 45,
    name: "HEAD SET NE-3SUPER",
    ostock: 0
  },
  {
    price: 45,
    name: "HEAD SET PHILIPS BS",
    ostock: 0
  },
  {
    price: 200,
    name: "HEAR POD M10/BLACK/ORAIMO S9",
    ostock: 6
  },
  {
    price: 200,
    name: "HEAR POD COLOR",
    ostock: 1
  },
  {
    price: 40,
    name: "Harmer rubber",
    ostock: 10
  },
  {
    price: 180,
    name: "Indy oil 1litre mono glade",
    ostock: 11
  },
  {
    price: 180,
    name: "Indy oil Quatec 1litre",
    ostock: 8
  },
  {
    price: 80,
    name: "Infra -red bulb ",
    ostock: 16
  },
  {
    price: 12,
    name: "Insulation tape big ",
    ostock: 104
  },
  {
    price: 8,
    name: "Insulation tape small",
    ostock: 129
  },
  {
    price: 70,
    name: "Inspection T 4''",
    ostock: 10
  },
  {
    price: 60,
    name: "Inspection plain bend",
    ostock: 3
  },
  {
    price: 50,
    name: "Inspection bend 4''",
    ostock: 0
  },
  {
    price: 65,
    name: "Inspection bend 4",
    ostock: 5
  },
  {
    price: 15,
    name: "Inspection bend T",
    ostock: 4
  },
  {
    price: 15,
    name: "Inspection bend 50mm",
    ostock: 7
  },
  {
    price: 10,
    name: "Inches 3''",
    ostock: 54
  },
  {
    price: 25,
    name: "Inches 4''",
    ostock: 16
  },
  {
    price: 35,
    name: "INCHES BUTTERFLY",
    ostock: 17
  },
  {
    price: 200,
    name: "Juppers 1000w",
    ostock: 1
  },
  {
    price: 100,
    name: "JUPPERS 400w",
    ostock: 4
  },
  {
    price: 220,
    name: "Juppers 800w",
    ostock: 1
  },
  {
    price: 110,
    name: "Joint kit",
    ostock: 4
  },
  {
    price: 50,
    name: "Junction Y",
    ostock: 1
  },
  {
    price: 250,
    name: "Kamisef light",
    ostock: 4
  },
  {
    price: 30,
    name: "Kaihong lock big",
    ostock: 2
  },
  {
    price: 25,
    name: "Kaihong lock medium",
    ostock: 107
  },
  {
    price: 20,
    name: "Kaihong small",
    ostock: 23
  },
  {
    price: 10,
    name: "knife cutter",
    ostock: 46
  },
  {
    price: 40,
    name: "Light cheel big 350-1",
    ostock: 5
  },
  {
    price: 20,
    name: "Light cheel small Hy210",
    ostock: 4
  },
  {
    price: 300,
    name: "Lap top charger big",
    ostock: 7
  },
  {
    price: 250,
    name: "Lap top charger small",
    ostock: 10
  },
  {
    price: 230,
    name: "L  bar big",
    ostock: 1
  },
  {
    price: 200,
    name: "L bar small",
    ostock: 1
  },
  {
    price: 5,
    name: "Loopes 6mm",
    ostock: 104
  },
  {
    price: 15,
    name: "Loopes 16/18MM",
    ostock: 45
  },
  {
    price: 7,
    name: "Loopes 8mm -y",
    ostock: 0
  },
  {
    price: 12,
    name: "Loopes 14mm-80y",
    ostock: 0
  },
  {
    price: 5,
    name: "Lighter",
    ostock: 8
  },
  {
    price: 100,
    name: "Level spirit 100cm",
    ostock: 15
  },
  {
    price: 65,
    name: "Level spirit 80cm",
    ostock: 6
  },
  {
    price: 55,
    name: "Level spirit 70cm",
    ostock: 4
  },
  {
    price: 65,
    name: "Lightening Arrester",
    ostock: 13
  },
  {
    price: 110,
    name: "Luck tv medium",
    ostock: 7
  },
  {
    price: 140,
    name: "Leakey metal",
    ostock: 11
  },
  {
    price: 40,
    name: "Leakey plastic",
    ostock: 12
  },
  {
    price: 120,
    name: "Luck tv big",
    ostock: 5
  },
  {
    price: 4,
    name: "LOOPES 7X40Y",
    ostock: 144
  },
  {
    price: 10,
    name: "LOOPES 10X40Y",
    ostock: 0
  },
  {
    price: 130,
    name: "LEVEL SPIRIT 100M GREEN",
    ostock: 6
  },
  {
    price: 130,
    name: "LOCK NUT",
    ostock: 7
  },
  {
    price: 60,
    name: "Level spirit light duty 80 cm",
    ostock: 6
  },
  {
    price: 85,
    name: "Level spirit light duty 100 cm",
    ostock: 12
  },
  {
    price: 60,
    name: "Luck tv small",
    ostock: 5
  },
  {
    price: 15,
    name: "LOOPES S",
    ostock: 19
  },
  {
    price: 120,
    name: "METAL SHEET CUTTER",
    ostock: 3
  },
  {
    price: 60,
    name: "MATCHET WOODEN HANDLE",
    ostock: 1
  },
  {
    price: 20,
    name: "Machine blades ",
    ostock: 55
  },
  {
    price: 20,
    name: "Machine oil 100mls",
    ostock: 59
  },
  {
    price: 100,
    name: "Memory card 2gb",
    ostock: 2
  },
  {
    price: 120,
    name: "Memory card 4gb",
    ostock: 4
  },
  {
    price: 130,
    name: "Memory card 8gb",
    ostock: 0
  },
  {
    price: 15,
    name: "MASKING TAPE SMALL",
    ostock: 20
  },
  {
    price: 25,
    name: "Masking tape big",
    ostock: 17
  },
  {
    price: 60,
    name: "Measuring tape 30mm",
    ostock: 7
  },
  {
    price: 150,
    name: "Measuring tape 100m",
    ostock: 4
  },
  {
    price: 40,
    name: "Measuring tape 10m",
    ostock: 15
  },
  {
    price: 40,
    name: "Measuring tape 7.5m",
    ostock: 23
  },
  {
    price: 30,
    name: "Measuring tape 5m",
    ostock: 33
  },
  {
    price: 20,
    name: "Measuring tape 3m",
    ostock: 24
  },
  {
    price: 30,
    name: "Mupeni 9''8''7''",
    ostock: 21
  },
  {
    price: 20,
    name: "Maton cloths",
    ostock: 0
  },
  {
    price: 15,
    name: "Metal box 3x6",
    ostock: 29
  },
  {
    price: 10,
    name: "Metal box 3x3",
    ostock: 62
  },
  {
    price: 150,
    name: "Matok pik",
    ostock: 9
  },
  {
    price: 80,
    name: "Manchester lock",
    ostock: 12
  },
  {
    price: 100,
    name: "Moon lock 90mm",
    ostock: 14
  },
  {
    price: 80,
    name: "Moon lock 80mm",
    ostock: 14
  },
  {
    price: 70,
    name: "Moon lock 70mm",
    ostock: 15
  },
  {
    price: 55,
    name: "Moon lock 60mm",
    ostock: 15
  },
  {
    price: 75,
    name: "Mat floor big",
    ostock: 18
  },
  {
    price: 50,
    name: "Mat floor small",
    ostock: 11
  },
  {
    price: 15,
    name: "MICRO PHONE BATERY",
    ostock: 0
  },
  {
    price: 35,
    name: "MOP SMALL",
    ostock: 12
  },
  {
    price: 270,
    name: "mortice lock fieldex",
    ostock: 2
  },
  {
    price: 80,
    name: "MOPS  BIG",
    ostock: 1
  },
  {
    price: 50,
    name: "machet panga",
    ostock: 9
  },
  {
    price: 220,
    name: "MORTICE LOCK BOVAS",
    ostock: 0
  },
  {
    price: 80,
    name: "MEASURING TAPE 50METERS",
    ostock: 0
  },
  {
    price: 80,
    name: "mortice lock unico",
    ostock: 0
  },
  {
    price: 10,
    name: "mounting tape",
    ostock: 1
  },
  {
    price: 450,
    name: "MIKASA BALL",
    ostock: 5
  },
  {
    price: 10,
    name: "Nipple",
    ostock: 0
  },
  {
    price: 290,
    name: "OIL PAINT 5LITRE",
    ostock: 4
  },
  {
    price: 120,
    name: "oil filter z 212 ",
    ostock: 24
  },
  {
    price: 55,
    name: "PHONE BATTERY ORAIMO BIG",
    ostock: 0
  },
  {
    price: 120,
    name: "PIPE WRENCH 12''",
    ostock: 5
  },
  {
    price: 270,
    name: "PHONE BBB SCREEN/BBS SCREEN",
    ostock: 0
  },
  {
    price: 270,
    name: "PHONE SS BATTERY",
    ostock: 0
  },
  {
    price: 60,
    name: "PHNONE BATTERY ITEL",
    ostock: 12
  },
  {
    price: 50,
    name: "PHONE BATTERY VOTEL",
    ostock: 46
  },
  {
    price: 70,
    name: "PHONE BATTERY EXELLENT",
    ostock: 1
  },
  {
    price: 30,
    name: "Pipe connecter T/socket",
    ostock: 6
  },
  {
    price: 50,
    name: "Plug spark ",
    ostock: 40
  },
  {
    price: 270,
    name: "Petrol engine oil spydal 5litre",
    ostock: 13
  },
  {
    price: 100,
    name: "Prime bond 300/c tube ",
    ostock: 50
  },
  {
    price: 120,
    name: "Prime bond 4in1 180c",
    ostock: 19
  },
  {
    price: 120,
    name: "Plately steel",
    ostock: 16
  },
  {
    price: 70,
    name: "PHONE CHARGER LISA",
    ostock: 2
  },
  {
    price: 90,
    name: "Phone charger ORG/mango mg 01",
    ostock: 19
  },
  {
    price: 80,
    name: "phone charger samsung ir 113",
    ostock: 7
  },
  {
    price: 80,
    name: "Phone charger Infinix QUICK",
    ostock: 7
  },
  {
    price: 70,
    name: "PHONE CHARGER MIX ",
    ostock: 36
  },
  {
    price: 80,
    name: "PHONE CHARGER NEXT",
    ostock: 0
  },
  {
    price: 80,
    name: " PHONE CHARGER power adapter",
    ostock: 4
  },
  {
    price: 100,
    name: "PIPE WRENCH 10''",
    ostock: 8
  },
  {
    price: 100,
    name: "Phone charger D-kay/KAYANGE",
    ostock: 57
  },
  {
    price: 100,
    name: "Phone charger raino",
    ostock: 1
  },
  {
    price: 40,
    name: "Phone battery lisa",
    ostock: 38
  },
  {
    price: 240,
    name: "Power bar slide ",
    ostock: 1
  },
  {
    price: 50,
    name: "Pliers long nose",
    ostock: 13
  },
  {
    price: 200,
    name: "Pipe wrench 24''",
    ostock: 5
  },
  {
    price: 150,
    name: "Pipe wrench 18''",
    ostock: 4
  },
  {
    price: 30,
    name: "Painting brush 6''",
    ostock: 20
  },
  {
    price: 20,
    name: "Painting brush 5''",
    ostock: 35
  },
  {
    price: 20,
    name: "Painting brush 4''",
    ostock: 0
  },
  {
    price: 10,
    name: "Painting brush 2''",
    ostock: 22
  },
  {
    price: 10,
    name: "Painting brush 1''",
    ostock: 6
  },
  {
    price: 30,
    name: "Poronto wooden",
    ostock: 13
  },
  {
    price: 20,
    name: "PVC box 3x6 ",
    ostock: 34
  },
  {
    price: 12,
    name: "PVC box 3x3",
    ostock: 28
  },
  {
    price: 55,
    name: "Pik handle plastic ",
    ostock: 4
  },
  {
    price: 25,
    name: "Pik handle wooden",
    ostock: 21
  },
  {
    price: 70,
    name: "PVC Glue 500g",
    ostock: 11
  },
  {
    price: 40,
    name: "PVC Glue 250g",
    ostock: 3
  },
  {
    price: 35,
    name: "PVC Glue 125g",
    ostock: 12
  },
  {
    price: 120,
    name: "Pillar tap 3/4",
    ostock: 7
  },
  {
    price: 15,
    name: "PVC tap",
    ostock: 41
  },
  {
    price: 90,
    name: "Polly valve 32mm",
    ostock: 3
  },
  {
    price: 160,
    name: "Polly valve 40mm",
    ostock: 5
  },
  {
    price: 40,
    name: "Polly  socket 40mm",
    ostock: 16
  },
  {
    price: 35,
    name: "Polly Elbow 40mm",
    ostock: 9
  },
  {
    price: 30,
    name: "Polly socket 32-25mm",
    ostock: 9
  },
  {
    price: 22,
    name: "Polly male Adapter 25mm",
    ostock: 3
  },
  {
    price: 15,
    name: "Polly female Adapter 25mm",
    ostock: 1
  },
  {
    price: 15,
    name: "Polly Elbow 25mm",
    ostock: 1
  },
  {
    price: 20,
    name: "Polly female Adapter 32mm",
    ostock: 0
  },
  {
    price: 40,
    name: "Polly T 25mm",
    ostock: 5
  },
  {
    price: 15,
    name: "Plain bend 40mm",
    ostock: 35
  },
  {
    price: 15,
    name: "Peg stay",
    ostock: 11
  },
  {
    price: 30,
    name: "Pad bolt 6''",
    ostock: 28
  },
  {
    price: 25,
    name: "Pad bolt 5''",
    ostock: 20
  },
  {
    price: 20,
    name: "Pad bolt 4''",
    ostock: 17
  },
  {
    price: 20,
    name: "Pad bolt 3''",
    ostock: 1
  },
  {
    price: 30,
    name: "Patley rubber big",
    ostock: 5
  },
  {
    price: 25,
    name: "Patley rubber medium",
    ostock: 4
  },
  {
    price: 10,
    name: "Patley rubber small",
    ostock: 4
  },
  {
    price: 260,
    name: "PVA PAINT 20LITRE",
    ostock: 25
  },
  {
    price: 100,
    name: "PVA PAINT 5LITRE",
    ostock: 1
  },
  {
    price: 110,
    name: "Polly pipe 50mm",
    ostock: 1
  },
  {
    price: 70,
    name: "Polly pipe 40mm",
    ostock: 7
  },
  {
    price: 12,
    name: "Plastic roll big ",
    ostock: 222
  },
  {
    price: 120,
    name: "Planks 2by 4",
    ostock: 95
  },
  {
    price: 190,
    name: "planks 5by 100",
    ostock: 1
  },
  {
    price: 10,
    name: "Polly pipe 32mm",
    ostock: 102
  },
  {
    price: 6,
    name: "Plastic roll small",
    ostock: 0
  },
  {
    price: 270,
    name: "POWER BANK    POLYMER",
    ostock: 4
  },
  {
    price: 160,
    name: "POWER BANK M198A",
    ostock: 3
  },
  {
    price: 50,
    name: "PHONE BATTERY  KGTEL",
    ostock: 1
  },
  {
    price: 35,
    name: "poronto plastic",
    ostock: 11
  },
  {
    price: 120,
    name: "pillar tap 1/2",
    ostock: 1
  },
  {
    price: 60,
    name: "pliers red",
    ostock: 15
  },
  {
    price: 60,
    name: "pliers blue",
    ostock: 19
  },
  {
    price: 80,
    name: "petrol oil speedol 1litre",
    ostock: 0
  },
  {
    price: 80,
    name: "PHONE QUICK CHARGER",
    ostock: 11
  },
  {
    price: 100,
    name: "PHONE CHARGER ORAIMO",
    ostock: 2
  },
  {
    price: 100,
    name: "PHONE CHARGER TYPE C",
    ostock: 0
  },
  {
    price: 1650,
    name: "PAINT WASHABLE 20 LITERS",
    ostock: 8
  },
  {
    price: 50,
    name: "POWER BAR 10'",
    ostock: 8
  },
  {
    price: 100,
    name: "Quick start ",
    ostock: 10
  },
  {
    price: 60,
    name: "POWER BAR 14'",
    ostock: 4
  },
  {
    price: 350,
    name: "POWER BANK ORAIMO  B",
    ostock: 1
  },
  {
    price: 300,
    name: "POWER BANK ORAIMO  S",
    ostock: 2
  },
  {
    price: 25,
    name: "PHONE CHARGER S PROTEA/TRAVEL",
    ostock: 14
  },
  {
    price: 300,
    name: "Radio m2022",
    ostock: 2
  },
  {
    price: 300,
    name: "Radio p 823",
    ostock: 3
  },
  {
    price: 300,
    name: "Radio p90",
    ostock: 2
  },
  {
    price: 330,
    name: "RADIO ZQS 8153",
    ostock: 0
  },
  {
    price: 350,
    name: "RADIO ZQS 8137",
    ostock: 0
  },
  {
    price: 400,
    name: "RADIO ZQS8146",
    ostock: 0
  },
  {
    price: 420,
    name: "RADIO ABS 6103",
    ostock: 1
  },
  {
    price: 50,
    name: "Roofing  nails",
    ostock: 56
  },
  {
    price: 45,
    name: "Rediator pressure cap big",
    ostock: 0
  },
  {
    price: 35,
    name: "Rediator pressure cap small",
    ostock: 49
  },
  {
    price: 100,
    name: "Rediator stop leak liquid 350mls",
    ostock: 8
  },
  {
    price: 300,
    name: "Radio sunda sd095BT/sd057BT",
    ostock: 4
  },
  {
    price: 600,
    name: "Radio super box 3",
    ostock: 0
  },
  {
    price: 200,
    name: "Radio v6",
    ostock: 0
  },
  {
    price: 250,
    name: "Radio sunda sd048BT",
    ostock: 1
  },
  {
    price: 110,
    name: "RADIO 113PW",
    ostock: 0
  },
  {
    price: 250,
    name: "Radio sunda sd078BT",
    ostock: 0
  },
  {
    price: 225,
    name: "Radio  sunda sd054BT",
    ostock: 2
  },
  {
    price: 120,
    name: "Roof seal 1litre",
    ostock: 4
  },
  {
    price: 300,
    name: "Roof seal 5litre",
    ostock: 2
  },
  {
    price: 100,
    name: "Red Oxide 1litre",
    ostock: 2
  },
  {
    price: 35,
    name: "Rubber Hammer",
    ostock: 0
  },
  {
    price: 150,
    name: "Rain coat top",
    ostock: 4
  },
  {
    price: 60,
    name: "Roller brush tray",
    ostock: 11
  },
  {
    price: 35,
    name: "Roller brush single",
    ostock: 9
  },
  {
    price: 3,
    name: "Rubbing box",
    ostock: 82
  },
  {
    price: 2,
    name: "Rubbing connecter",
    ostock: 80
  },
  {
    price: 15,
    name: "Reducing bush",
    ostock: 3
  },
  {
    price: 370,
    name: "Round bar y-16",
    ostock: 14
  },
  {
    price: 250,
    name: "Round bar y -12",
    ostock: 5
  },
  {
    price: 220,
    name: "Round bar -10",
    ostock: 5
  },
  {
    price: 1,
    name: "Rivets",
    ostock: 121
  },
  {
    price: 40,
    name: "RUBBER SQUIZER",
    ostock: 1
  },
  {
    price: 200,
    name: "RATCHET SET",
    ostock: 3
  },
  {
    price: 300,
    name: "RADIO RUMWA 0155/ 0276 US",
    ostock: 6
  },
  {
    price: 320,
    name: "RADIO BOAT RS 327",
    ostock: 1
  },
  {
    price: 40,
    name: "REFLECTORS VEST/RED",
    ostock: 15
  },
  {
    price: 90,
    name: "RATCHET BELT",
    ostock: 15
  },
  {
    price: 110,
    name: "RATCHET SPANNER ",
    ostock: 7
  },
  {
    price: 220,
    name: "RADIO  830/218",
    ostock: 3
  },
  {
    price: 250,
    name: "RADIO P 305/v 50 solar",
    ostock: 2
  },
  {
    price: 270,
    name: "RAIN COAT TOP/DOWN",
    ostock: 0
  },
  {
    price: 230,
    name: "RED OXIDE 5LITER",
    ostock: 2
  },
  {
    price: 30,
    name: "sockect spanner 14'' short",
    ostock: 19
  },
  {
    price: 30,
    name: "sockect spanner 11 sohrt",
    ostock: 20
  },
  {
    price: 30,
    name: "sockect spanner 11'' long",
    ostock: 20
  },
  {
    price: 150,
    name: "SPANNER RETAIL 30MM",
    ostock: 8
  },
  {
    price: 55,
    name: "spanner 22'' white",
    ostock: 10
  },
  {
    price: 400,
    name: "safety boots og",
    ostock: 10
  },
  {
    price: 230,
    name: "Safety boot",
    ostock: 2
  },
  {
    price: 1,
    name: "Self driling screw",
    ostock: 94
  },
  {
    price: 45,
    name: "Speed limit 100-80",
    ostock: 15
  },
  {
    price: 5,
    name: "Starter",
    ostock: 35
  },
  {
    price: 80,
    name: "Stelling Cover",
    ostock: 0
  },
  {
    price: 650,
    name: "Shell Helix 5litre 15w-40",
    ostock: 4
  },
  {
    price: 170,
    name: "Shell HELIX 1LITRE 5W-40",
    ostock: 7
  },
  {
    price: 30,
    name: "Stop leak powder 20g",
    ostock: 40
  },
  {
    price: 3,
    name: "self taping crews",
    ostock: 419
  },
  {
    price: 10,
    name: "safety gogles",
    ostock: 13
  },
  {
    price: 170,
    name: "sport light 30W ",
    ostock: 0
  },
  {
    price: 150,
    name: "sport light 20W",
    ostock: 2
  },
  {
    price: 45,
    name: "spray paint",
    ostock: 44
  },
  {
    price: 115,
    name: "sheen 750mls",
    ostock: 10
  },
  {
    price: 75,
    name: "sheen s",
    ostock: 27
  },
  {
    price: 300,
    name: "solar light sunda",
    ostock: 5
  },
  {
    price: 30,
    name: "spanner white 15mm",
    ostock: 3
  },
  {
    price: 150,
    name: "spanner set 8 pieces",
    ostock: 5
  },
  {
    price: 200,
    name: "spanner set 12 pieces",
    ostock: 3
  },
  {
    price: 110,
    name: "spanner close ",
    ostock: 6
  },
  {
    price: 130,
    name: "socket spanner short 36mm",
    ostock: 20
  },
  {
    price: 120,
    name: "socket spanner long 30mm ",
    ostock: 12
  },
  {
    price: 40,
    name: "socket spanner long 21mm",
    ostock: 2
  },
  {
    price: 55,
    name: "socket spanner short 21mm",
    ostock: 9
  },
  {
    price: 40,
    name: "socket spanner long 17mm ",
    ostock: 0
  },
  {
    price: 20,
    name: "socket spanner short 19mm",
    ostock: 8
  },
  {
    price: 30,
    name: "Socket spanner short 16mm",
    ostock: 0
  },
  {
    price: 45,
    name: "Socket spanner long 15mm",
    ostock: 0
  },
  {
    price: 35,
    name: "Socket spanner long 10mm",
    ostock: 16
  },
  {
    price: 20,
    name: "Socket spanner long 14mm",
    ostock: 0
  },
  {
    price: 35,
    name: "Socket spanner long 12mm",
    ostock: 3
  },
  {
    price: 20,
    name: "Socket spanner short 8mm",
    ostock: 6
  },
  {
    price: 20,
    name: "Socket spanner short 13mm",
    ostock: 8
  },
  {
    price: 20,
    name: "Socket spanner short 10mm",
    ostock: 4
  },
  {
    price: 125,
    name: "Socket spanner long 32mm",
    ostock: 8
  },
  {
    price: 20,
    name: "Socket spanner short 17mm",
    ostock: 6
  },
  {
    price: 150,
    name: "Screw driver sets",
    ostock: 13
  },
  {
    price: 20,
    name: "Screw driver usa ",
    ostock: 11
  },
  {
    price: 80,
    name: "Shifting spanner 12'",
    ostock: 5
  },
  {
    price: 60,
    name: "Shifting spanner 10'",
    ostock: 6
  },
  {
    price: 15,
    name: "Spannner red retail 8mm",
    ostock: 31
  },
  {
    price: 25,
    name: "Spanner red retail 11mm",
    ostock: 21
  },
  {
    price: 20,
    name: "Spanner red retail 12mm",
    ostock: 10
  },
  {
    price: 30,
    name: "Spanner red retail 14mm",
    ostock: 0
  },
  {
    price: 35,
    name: "Spanner red retail 15mm",
    ostock: 2
  },
  {
    price: 130,
    name: "Spanner red retail 32mm ",
    ostock: 2
  },
  {
    price: 55,
    name: "Spanner red retail 24mm",
    ostock: 10
  },
  {
    price: 30,
    name: "Spanner red retail 17mm",
    ostock: 14
  },
  {
    price: 70,
    name: "Spanner white retail 21mm",
    ostock: 0
  },
  {
    price: 40,
    name: "SPANNER RETAIL  ORG 13 MM",
    ostock: 0
  },
  {
    price: 35,
    name: "Spanner white retail 17mm",
    ostock: 0
  },
  {
    price: 40,
    name: "Spanner white retail 16mm",
    ostock: 31
  },
  {
    price: 40,
    name: "SPANNER RETAIL RED 19 MM",
    ostock: 14
  },
  {
    price: 35,
    name: "Spanner white 19mm",
    ostock: 5
  },
  {
    price: 40,
    name: "Spanner white 14mm",
    ostock: 0
  },
  {
    price: 30,
    name: "Spanner white 12mm",
    ostock: 6
  },
  {
    price: 45,
    name: "Spanner white 16-18mm",
    ostock: 1
  },
  {
    price: 30,
    name: "Spanner white retail 13mm",
    ostock: 0
  },
  {
    price: 25,
    name: "Spanner white retail 10mm",
    ostock: 4
  },
  {
    price: 330,
    name: "SOCKET SPANNER SET 12 PIECES",
    ostock: 9
  },
  {
    price: 150,
    name: "Socket set 9 pieces",
    ostock: 0
  },
  {
    price: 120,
    name: "Spirit of salt 2.5litre",
    ostock: 0
  },
  {
    price: 30,
    name: "Soap holder ",
    ostock: 26
  },
  {
    price: 70,
    name: "SNIPES",
    ostock: 6
  },
  {
    price: 50,
    name: "Square black 24mm",
    ostock: 3
  },
  {
    price: 20,
    name: "Square black 12mm",
    ostock: 1
  },
  {
    price: 50,
    name: "shakle",
    ostock: 11
  },
  {
    price: 100,
    name: "Sack loopes",
    ostock: 2
  },
  {
    price: 25,
    name: "Scrapers big",
    ostock: 11
  },
  {
    price: 20,
    name: "Scrapers small",
    ostock: 3
  },
  {
    price: 50,
    name: "Shiner America",
    ostock: 5
  },
  {
    price: 70,
    name: "Socket double",
    ostock: 23
  },
  {
    price: 45,
    name: "Socket single",
    ostock: 19
  },
  {
    price: 30,
    name: "Switch single",
    ostock: 29
  },
  {
    price: 35,
    name: "switch Double",
    ostock: 31
  },
  {
    price: 12,
    name: "Sadals condult pipe",
    ostock: 2
  },
  {
    price: 100,
    name: "Stop coke 3/4",
    ostock: 23
  },
  {
    price: 90,
    name: "Stop coke 1/2",
    ostock: 31
  },
  {
    price: 30,
    name: "Solix lock big",
    ostock: 0
  },
  {
    price: 20,
    name: "Solix lock medium",
    ostock: 12
  },
  {
    price: 20,
    name: "Solix lock small",
    ostock: 2
  },
  {
    price: 55,
    name: "Slasher ",
    ostock: 11
  },
  {
    price: 150,
    name: "Shavel /Spade",
    ostock: 21
  },
  {
    price: 430,
    name: "Squart pan ",
    ostock: 2
  },
  {
    price: 200,
    name: "SUWER PIPE",
    ostock: 12
  },
  {
    price: 25,
    name: "SOLDERING WIRE ' B'",
    ostock: 12
  },
  {
    price: 45,
    name: "SOLDERING GUN",
    ostock: 9
  },
  {
    price: 130,
    name: "SPIRIT LEVEL 100CM YELLOW",
    ostock: 0
  },
  {
    price: 10,
    name: " SANDPAPER 1/2METRE",
    ostock: 47
  },
  {
    price: 50,
    name: "SLIDING BAR",
    ostock: 9
  },
  {
    price: 300,
    name: "SOLAR LIGHT 90 P ",
    ostock: 0
  },
  {
    price: 250,
    name: "shovel silver",
    ostock: 5
  },
  {
    price: 250,
    name: "SPAANNR RETAIL 36'",
    ostock: 5
  },
  {
    price: 250,
    name: "SAPNNER RETAIL 38'",
    ostock: 2
  },
  {
    price: 25,
    name: "SPIRIT OF SALT 750MLS ",
    ostock: 4
  },
  {
    price: 50,
    name: "SWITCH TRIPPLE WAYS",
    ostock: 20
  },
  {
    price: 20,
    name: "SOLDERING WIRE ' S '",
    ostock: 10
  },
  {
    price: 7,
    name: "THREAD TAPE DIAMOND",
    ostock: 43
  },
  {
    price: 55,
    name: "Triangl reflector",
    ostock: 3
  },
  {
    price: 30,
    name: "TORCH HEAD GG 2566-J",
    ostock: 10
  },
  {
    price: 15,
    name: "Torch 1 battery 1218",
    ostock: 17
  },
  {
    price: 110,
    name: "Torch potable big kc998",
    ostock: 0
  },
  {
    price: 10,
    name: "Tile Spacer 3.0m",
    ostock: 7
  },
  {
    price: 10,
    name: "Thread tape big ",
    ostock: 52
  },
  {
    price: 5,
    name: "Thread tape small",
    ostock: 59
  },
  {
    price: 15,
    name: "Tester small",
    ostock: 11
  },
  {
    price: 165,
    name: "Thiners 2.5litre",
    ostock: 12
  },
  {
    price: 55,
    name: "Thiners 750mls",
    ostock: 17
  },
  {
    price: 40,
    name: "Tissue holder big",
    ostock: 2
  },
  {
    price: 35,
    name: "Tissue holder small",
    ostock: 20
  },
  {
    price: 90,
    name: "Turff sturf tin",
    ostock: 1
  },
  {
    price: 40,
    name: "Turff sturf tube",
    ostock: 13
  },
  {
    price: 200,
    name: "TV quard",
    ostock: 0
  },
  {
    price: 15,
    name: "Top plug small",
    ostock: 13
  },
  {
    price: 250,
    name: "Toilet cover wooden",
    ostock: 5
  },
  {
    price: 120,
    name: "Toilet cover seat soft",
    ostock: 2
  },
  {
    price: 100,
    name: "Toilet cover Euro",
    ostock: 5
  },
  {
    price: 50,
    name: "Toilet brush",
    ostock: 11
  },
  {
    price: 25,
    name: "Tying wire",
    ostock: 57
  },
  {
    price: 5,
    name: "TC leon ",
    ostock: 12
  },
  {
    price: 600,
    name: "Toilet pan",
    ostock: 5
  },
  {
    price: 45,
    name: "Tile cliper",
    ostock: 62
  },
  {
    price: 250,
    name: "TENTS BLUE",
    ostock: 5
  },
  {
    price: 25,
    name: "TORCH 2 BATTERY",
    ostock: 30
  },
  {
    price: 400,
    name: "TANGO BALL",
    ostock: 5
  },
  {
    price: 20,
    name: "TORCH 1 BATTER BIG",
    ostock: 37
  },
  {
    price: 600,
    name: "TOTAL OIL SEA 40 5LITERS",
    ostock: 0
  },
  {
    price: 35,
    name: "top plug big",
    ostock: 15
  },
  {
    price: 40,
    name: "Tupa BIG",
    ostock: 2
  },
  {
    price: 30,
    name: "Tupa SMALL",
    ostock: 2
  },
  {
    price: 20,
    name: "Tester Big",
    ostock: 8
  },
  {
    price: 25,
    name: "TORCH HEAD GG 2566-J / S",
    ostock: 10
  },
  {
    price: 60,
    name: "TORCH CHARGEABLE",
    ostock: 9
  },
  {
    price: 95,
    name: "TOTAL OIL QUERTZ,15W-40 500MLS",
    ostock: 0
  },
  {
    price: 100,
    name: "Umbrella big",
    ostock: 0
  },
  {
    price: 70,
    name: "Umbrella small",
    ostock: 0
  },
  {
    price: 50,
    name: "Universal charger 8-USB",
    ostock: 22
  },
  {
    price: 40,
    name: "UNIVERSAL Tinty ",
    ostock: 31
  },
  {
    price: 80,
    name: "UNICO LOCK",
    ostock: 9
  },
  {
    price: 90,
    name: "UMBRELLA",
    ostock: 49
  },
  {
    price: 1,
    name: "Valve",
    ostock: 41
  },
  {
    price: 150,
    name: "Vannish",
    ostock: 1
  },
  {
    price: 60,
    name: "VITECH SILLICON 625",
    ostock: 4
  },
  {
    price: 40,
    name: "WIRE NAILS 6''",
    ostock: 20
  },
  {
    price: 40,
    name: "WIRE NAILS 4''",
    ostock: 16
  },
  {
    price: 40,
    name: "Wire nail 3''",
    ostock: 7
  },
  {
    price: 40,
    name: "Wire nail 5''",
    ostock: 32
  },
  {
    price: 45,
    name: "Wire nail 1''",
    ostock: 29
  },
  {
    price: 55,
    name: "Wood fix 850g",
    ostock: 12
  },
  {
    price: 45,
    name: "Wood fix 500g",
    ostock: 4
  },
  {
    price: 45,
    name: "Whippers 22'''20''18''",
    ostock: 34
  },
  {
    price: 10,
    name: "Welding rods",
    ostock: 165
  },
  {
    price: 240,
    name: "Wheel spanner",
    ostock: 0
  },
  {
    price: 70,
    name: "Water heater",
    ostock: 14
  },
  {
    price: 35,
    name: "Water heater small",
    ostock: 23
  },
  {
    price: 65,
    name: "Welding Handle",
    ostock: 8
  },
  {
    price: 15,
    name: "Window Handle",
    ostock: 63
  },
  {
    price: 6,
    name: "Window plate",
    ostock: 4
  },
  {
    price: 2,
    name: "Washaz ",
    ostock: 36
  },
  {
    price: 40,
    name: "Warning Reflector",
    ostock: 4
  },
  {
    price: 220,
    name: "Wheelbarrow tyre",
    ostock: 6
  },
  {
    price: 10,
    name: "Window inches",
    ostock: 122
  },
  {
    price: 35,
    name: "Window fitting",
    ostock: 27
  },
  {
    price: 1800,
    name: "Wheelbarrow big",
    ostock: 3
  },
  {
    price: 750,
    name: "Wheelbarrow small",
    ostock: 4
  },
  {
    price: 30,
    name: "WOOD PRESERVATIVE",
    ostock: 19
  },
  {
    price: 250,
    name: "WORK SUIT",
    ostock: 16
  },
  {
    price: 50,
    name: "WORST SINK BUSH 1/4",
    ostock: 6
  },
  {
    price: 50,
    name: "WORST SINK BUSH 1/2",
    ostock: 6
  },
  {
    price: 300,
    name: "WHEEL SPANNER 21-45MM",
    ostock: 11
  },
  {
    price: 55,
    name: "water heater medium ",
    ostock: 15
  },
  {
    price: 45,
    name: "water heater ms",
    ostock: 15
  },
  {
    price: 25,
    name: "WELDING GLASES SHIELD /GREEN",
    ostock: 19
  },
  {
    price: 1200,
    name: "WINDOW FRAMES 120X90",
    ostock: 10
  },
  {
    price: 40,
    name: "wire nail 2",
    ostock: 22
  },
  {
    price: 300,
    name: "working suits dark blue",
    ostock: 8
  },
  {
    price: 25,
    name: "WINDOW PATTY",
    ostock: 0
  },
  {
    price: 40,
    name: "Y-SPANNER ",
    ostock: 0
  }
]

const apiUrl = 'http://192.168.0.100:9000/api/shopb/65a12f452b76884f26d3d031/addtostock'; // Replace with your API endpoint

async function postDataToApi(item) {
  try {
    const response = await axios.post(apiUrl, item);
    console.log(`Successfully posted data for ${item.name}.`);
  } catch (error) {
    console.error(`Error posting data for ${item.name}:`, error.message);
  }
}

async function postStockData() {
  for (const item of stock) {
    await postDataToApi(item);
  }
}

// Call the function to start posting data
postStockData();
