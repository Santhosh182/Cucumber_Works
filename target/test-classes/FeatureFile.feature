Feature: Booking a hotel in Addactin Website
Scenario: Credential Details
Given user Launch The Application
When user Enters "iamnothuman" In Field Box
And user Enters User "0L8MKL"  In Field box
Then user Clicks On Login Button And It Navigates To Hotel Search Page
#Examples:
#|UserName|Password|
#|santhosh|123|
#|abcd|123|
#|iamnothuman|0L8MKL|

Scenario: User Searhing Hotel
When user Selecting Hotel Location "Sydney" From Dropdown
And user Selecting Hotel Name "2" From Dropdown
And user Selecting Room Type "Deluxe" From Dropdown
And user Selecting Room Nos "2" From Dropdown
And user Selecting Check In Date "18-Feb-22"
And user Selecting Check Out Date "22-Feb-22"
And user Selecting Adults Per Room "1" From Dropdown
And user Selecting Childs Per Room "0" From Dropdown
Then user Clicks On Submit Button And It Navigates To Hotel Selection Page

Scenario: Conforming Hotel
When user Clicks On Radio Button 
Then user Clicks On Submit Button and It Navigates To Transaction Page
@personal
Scenario: Transaction Details
When user Entering First Name "Iam" In Field Box
And user Entering Second Name "Nothuman" In Field Box
And user Entering Address "NO.420, Dubai main road, Dubai short street,Dubai Bus Stand, Dubai" In Field Box
And user Entering Credit Card No "1234567891011120" In Field Box
And user Selecting Credit Card Type "AMEX" From Dropdown
And user Selecting Credit Card Expiry Year "2022" From Dropdown
And user Selecting Credit Card Expiry Month "April" From Dropdown
And user Entering Credit Card CCV No "000" From Dropdown
Then user Clicks Submit Button And It Navigates To Booking Confirmation Page

Scenario: Booking Confirmation 
Then user Clicks Logout Button And It Navigates To Click Here To Again Page