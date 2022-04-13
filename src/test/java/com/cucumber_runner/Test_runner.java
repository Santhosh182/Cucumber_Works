package com.cucumber_runner;
import java.util.concurrent.TimeUnit;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.BaseClass.Base_Class;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions (
features = "src\\test\\java\\FeatureFile.feature" ,
glue = "com.step_defination" ,
monochrome = true,
dryRun=false,
strict=true,
plugin = {"com.aventstack.extentreports.cucumber.adapter.ExtentCucumberAdapter:Extent_report/Extent.html",
		"html:Report/Html_Report",
		"pretty",
		"json:Json_Report/Report.json"}
)
public class Test_runner {
	public static WebDriver driver;
	@BeforeClass
	public static void set_Up()
	{
	driver = Base_Class.browserConfiguration("Chrome");	
	driver.manage().window().maximize();
	driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);

	}
@AfterClass
public static void tear_Down() {
	// TODO Auto-generated method stub
Base_Class.close();
}
}
