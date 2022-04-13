package com.step_defination;

import java.util.concurrent.TimeUnit;

import javax.print.DocFlavor.INPUT_STREAM;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.SendKeysAction;

import com.BaseClass.Base_Class;
import com.FileReader_manager.File_Reader_Manager;
import com.Page_Object_Manager.PageObjectManager;
import com.cucumber_runner.Test_runner;

import cucumber.api.PendingException;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class Step_defination extends Base_Class {

public static WebDriver driver = Test_runner.driver;

public static PageObjectManager pom = new PageObjectManager(driver);

	@Given("^user Launch The Application$")
	public void user_Launch_The_Application() throws Throwable
	{
	  getUrl("https://adactinhotelapp.com/");
	}
	
	@When("user Enters {string} In Field Box")
	public void user_enters_in_field_box(String username) throws Throwable {
	enterInput(pom.get_Instance_Hp().getuser_Name(), username); 
	}
	@When("user Enters User {string}  In Field box")
	public void user_enters_user_in_field_box(String password) throws Throwable  {
	  enterInput(pom.get_Instance_Hp().getPass_Word(),password);
	}

	@Then("^user Clicks On Login Button And It Navigates To Hotel Search Page$")
	public void user_Clicks_On_Login_Button_And_It_Navigates_To_Hotel_Search_Page() throws Throwable {
	   clickOnElement(pom.get_Instance_Hp().getLogin_Btn());
	}

	@When("^user Selecting Hotel Location \"([^\"]*)\" From Dropdown$")
	public void user_Selecting_Hotel_Location_From_Dropdown(String hotellocation) throws Throwable{
		dropDown("bytext", pom.get_Instance_shd().getLocation(), hotellocation);
	}

	@When("^user Selecting Hotel Name \"([^\"]*)\" From Dropdown$")
	public void user_Selecting_Hotel_Name_From_Dropdown(String hotelname) throws Throwable  {
	  dropDown("byindex", pom.get_Instance_shd().getHotel_Name(), hotelname);
	}

	@When("^user Selecting Room Type \"([^\"]*)\" From Dropdown$")
	public void user_Selecting_Room_Type_From_Dropdown(String roomtype) throws Throwable  {
	   dropDown("byvalue", pom.get_Instance_shd().getRoom_Type(), roomtype);
	}

	@When("^user Selecting Room Nos \"([^\"]*)\" From Dropdown$")
	public void user_Selecting_Room_Nos_From_Dropdown(String roomnos) throws Throwable{
		dropDown("byvalue", pom.get_Instance_shd().getRoom_Nos(), roomnos);
	}

	@When("^user Selecting Check In Date \"([^\"]*)\"$")
	public void user_Selecting_Check_In_Date(String checkin) throws Throwable {
		enterInput(pom.get_Instance_shd().getDate_Cin(), checkin);
	}

	@When("^user Selecting Check Out Date \"([^\"]*)\"$")
	public void user_Selecting_Check_Out_Date(String checkout) throws Throwable  {
		enterInput(pom.get_Instance_shd().getDate_Cout(), checkout);
	}

	@When("^user Selecting Adults Per Room \"([^\"]*)\" From Dropdown$")
	public void user_Selecting_Adults_Per_Room_From_Dropdown(String adult) throws Throwable {
	  dropDown("byindex", pom.get_Instance_shd().getAdult_Room(), adult);
	}

	@When("^user Selecting Childs Per Room \"([^\"]*)\" From Dropdown$")
	public void user_Selecting_Childs_Per_Room_From_Dropdown(String child) throws Throwable {
	  dropDown("byindex", pom.get_Instance_shd().getChild_Room(), child);
	}

	@Then("^user Clicks On Submit Button And It Navigates To Hotel Selection Page$")
	public void user_Clicks_On_Submit_Button_And_It_Navigates_To_Hotel_Selection_Page() throws Throwable {
		clickOnElement(pom.get_Instance_shd().getSubmit_Btn());
	}

	@When("^user Clicks On Radio Button$")
	public void user_Clicks_On_Radio_Button() throws Throwable {
		clickOnElement(pom.get_Instance_dc().getRadio_btn());
	}

	@Then("^user Clicks On Submit Button and It Navigates To Transaction Page$")
	public void user_Clicks_On_Submit_Button_and_It_Navigates_To_Transaction_Page() throws Throwable {
		clickOnElement(pom.get_Instance_dc().getContinue_Btn());
	}
	
	@When("^user Entering First Name \"([^\"]*)\" In Field Box$")
	public void user_Entering_First_Name_In_Field_Box(String firstname) throws Throwable{
		enterInput(pom.get_Instance_pd().getFirst_Name(), firstname);
	}
	@When("^user Entering Second Name \"([^\"]*)\" In Field Box$")
	public void user_Entering_Second_Name_In_Field_Box(String lastname) throws Throwable{
		enterInput(pom.get_Instance_pd().getLast_Name(),lastname);	
	}
	@When("^user Entering Address \"([^\"]*)\" In Field Box$")
	public void user_Entering_Address_In_Field_Box(String address) throws Throwable {
		enterInput(pom.get_Instance_pd().getAddress_Box(),address);

	}

	@When("^user Entering Credit Card No \"([^\"]*)\" In Field Box$")
	public void user_Entering_Credit_Card_No_In_Field_Box(String creditcardno) throws Throwable {
		enterInput(pom.get_Instance_pd().getCredit_Card(),creditcardno);
	}

	@When("^user Selecting Credit Card Type \"([^\"]*)\" From Dropdown$")
	public void user_Selecting_Credit_Card_Type_From_Dropdown(String creditcardtype) throws Throwable {
		dropDown("byvalue", pom.get_Instance_pd().getCard_Type(),creditcardtype);
	}

	@When("^user Selecting Credit Card Expiry Year \"([^\"]*)\" From Dropdown$")
	public void user_Selecting_Credit_Card_Expiry_Year_From_Dropdown(String expiryyear) throws Throwable  {
		dropDown("bytext", pom.get_Instance_pd().getExpiry_Year(),expiryyear);
	}

	@When("^user Selecting Credit Card Expiry Month \"([^\"]*)\" From Dropdown$")
	public void user_Selecting_Credit_Card_Expiry_Month_From_Dropdown(String expirymonth) throws Throwable {
		dropDown("bytext", pom.get_Instance_pd().getExpiry_Month(),expirymonth); 
	}

	@When("^user Entering Credit Card CCV No \"([^\"]*)\" From Dropdown$")
	public void user_Entering_Credit_Card_CCV_No_From_Dropdown(String CardCCV) throws Throwable {
		enterInput(pom.get_Instance_pd().getCard_Ccv(),CardCCV);
	}

	@Then("^user Clicks Submit Button And It Navigates To Booking Confirmation Page$")
	public void user_Clicks_Submit_Button_And_It_Navigates_To_Booking_Confirmation_Page() throws Throwable {
		clickOnElement(pom.get_Instance_pd().getBooknow_Btn());
	}

	@Then("user Clicks Logout Button And It Navigates To Click Here To Again Page")
	public void user_clicks_logout_button_and_it_navigates_to_click_here_to_again_page() throws Throwable {
		clickOnElement(pom.get_Instance_lp().getLogout_btn_alter());
	}

}

