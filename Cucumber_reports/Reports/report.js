$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/FeatureFile.feature");
formatter.feature({
  "line": 1,
  "name": "Booking a hotel in Addactin Website",
  "description": "",
  "id": "booking-a-hotel-in-addactin-website",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Credential Details",
  "description": "",
  "id": "booking-a-hotel-in-addactin-website;credential-details",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "user Enters UserName \"iamnothuman\" In Field Box",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "user Enters User Password \"0L8MKL\" In Field box",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user Clicks On Login Button And It Navigates To Hotel Search Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_defination.user_Launch_The_Application()"
});
formatter.result({
  "duration": 3651671700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "iamnothuman",
      "offset": 22
    }
  ],
  "location": "Step_defination.user_Enters_UserName_In_Field_Box(String)"
});
formatter.result({
  "duration": 130827100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0L8MKL",
      "offset": 27
    }
  ],
  "location": "Step_defination.user_Enters_User_Password_In_Field_box(String)"
});
formatter.result({
  "duration": 87205900,
  "status": "passed"
});
formatter.match({
  "location": "Step_defination.user_Clicks_On_Login_Button_And_It_Navigates_To_Hotel_Search_Page()"
});
formatter.result({
  "duration": 911794000,
  "status": "passed"
});
formatter.scenario({
  "comments": [
    {
      "line": 7,
      "value": "#Examples:"
    },
    {
      "line": 8,
      "value": "#|UserName|Password|"
    },
    {
      "line": 9,
      "value": "#|santhosh|123|"
    },
    {
      "line": 10,
      "value": "#|abcd|123|"
    },
    {
      "line": 11,
      "value": "#|iamnothuman|0L8MKL|"
    }
  ],
  "line": 13,
  "name": "User Searhing Hotel",
  "description": "",
  "id": "booking-a-hotel-in-addactin-website;user-searhing-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "user Selecting Hotel Location \"Sydney\" From Dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user Selecting Hotel Name \"2\" From Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Selecting Room Type \"Deluxe\" From Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Selecting Room Nos \"2\" From Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Selecting Check In Date \"18-Feb-22\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user Selecting Check Out Date \"22-Feb-22\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Selecting Adults Per Room \"1\" From Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Selecting Childs Per Room \"0\" From Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Clicks On Submit Button And It Navigates To Hotel Selection Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney",
      "offset": 31
    }
  ],
  "location": "Step_defination.user_Selecting_Hotel_Location_From_Dropdown(String)"
});
formatter.result({
  "duration": 131285000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 27
    }
  ],
  "location": "Step_defination.user_Selecting_Hotel_Name_From_Dropdown(String)"
});
formatter.result({
  "duration": 136797500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deluxe",
      "offset": 26
    }
  ],
  "location": "Step_defination.user_Selecting_Room_Type_From_Dropdown(String)"
});
formatter.result({
  "duration": 105404400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 25
    }
  ],
  "location": "Step_defination.user_Selecting_Room_Nos_From_Dropdown(String)"
});
formatter.result({
  "duration": 104559500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "18-Feb-22",
      "offset": 30
    }
  ],
  "location": "Step_defination.user_Selecting_Check_In_Date(String)"
});
formatter.result({
  "duration": 79656800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22-Feb-22",
      "offset": 31
    }
  ],
  "location": "Step_defination.user_Selecting_Check_Out_Date(String)"
});
formatter.result({
  "duration": 79991100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 32
    }
  ],
  "location": "Step_defination.user_Selecting_Adults_Per_Room_From_Dropdown(String)"
});
formatter.result({
  "duration": 94895600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 32
    }
  ],
  "location": "Step_defination.user_Selecting_Childs_Per_Room_From_Dropdown(String)"
});
formatter.result({
  "duration": 83703200,
  "status": "passed"
});
formatter.match({
  "location": "Step_defination.user_Clicks_On_Submit_Button_And_It_Navigates_To_Hotel_Selection_Page()"
});
formatter.result({
  "duration": 667035700,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Conforming Hotel",
  "description": "",
  "id": "booking-a-hotel-in-addactin-website;conforming-hotel",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "user Clicks On Radio Button",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Clicks On Submit Button and It Navigates To Transaction Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_defination.user_Clicks_On_Radio_Button()"
});
formatter.result({
  "duration": 70607300,
  "status": "passed"
});
formatter.match({
  "location": "Step_defination.user_Clicks_On_Submit_Button_and_It_Navigates_To_Transaction_Page()"
});
formatter.result({
  "duration": 620835100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Transaction Details",
  "description": "",
  "id": "booking-a-hotel-in-addactin-website;transaction-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 27,
      "name": "@personal"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "user Entering First Name \"Iam\" In Field Box",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "user Entering Second Name \"Nothuman\" In Field Box",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Entering Address \"NO.420, Dubai main road, Dubai short street,Dubai Bus Stand, Dubai\" In Field Box",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Entering Credit Card No \"1234567891011120\" In Field Box",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Selecting Credit Card Type \"AMEX\" From Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Selecting Credit Card Expiry Year \"2022\" From Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Selecting Credit Card Expiry Month \"April\" From Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Entering Credit Card CCV No \"000\" From Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Clicks Submit Button And It Navigates To Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Iam",
      "offset": 26
    }
  ],
  "location": "Step_defination.user_Entering_First_Name_In_Field_Box(String)"
});
formatter.result({
  "duration": 96173600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nothuman",
      "offset": 27
    }
  ],
  "location": "Step_defination.user_Entering_Second_Name_In_Field_Box(String)"
});
formatter.result({
  "duration": 84107300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NO.420, Dubai main road, Dubai short street,Dubai Bus Stand, Dubai",
      "offset": 23
    }
  ],
  "location": "Step_defination.user_Entering_Address_In_Field_Box(String)"
});
formatter.result({
  "duration": 133823200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567891011120",
      "offset": 30
    }
  ],
  "location": "Step_defination.user_Entering_Credit_Card_No_In_Field_Box(String)"
});
formatter.result({
  "duration": 89939400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AMEX",
      "offset": 33
    }
  ],
  "location": "Step_defination.user_Selecting_Credit_Card_Type_From_Dropdown(String)"
});
formatter.result({
  "duration": 100568100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2022",
      "offset": 40
    }
  ],
  "location": "Step_defination.user_Selecting_Credit_Card_Expiry_Year_From_Dropdown(String)"
});
formatter.result({
  "duration": 108800800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "April",
      "offset": 41
    }
  ],
  "location": "Step_defination.user_Selecting_Credit_Card_Expiry_Month_From_Dropdown(String)"
});
formatter.result({
  "duration": 104255900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "000",
      "offset": 34
    }
  ],
  "location": "Step_defination.user_Entering_Credit_Card_CCV_No_From_Dropdown(String)"
});
formatter.result({
  "duration": 82570600,
  "status": "passed"
});
formatter.match({
  "location": "Step_defination.user_Clicks_Submit_Button_And_It_Navigates_To_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 76246600,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Booking Confirmation",
  "description": "",
  "id": "booking-a-hotel-in-addactin-website;booking-confirmation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 40,
  "name": "user Clicks Logout Button And It Navigates To Click Here To Again Page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});