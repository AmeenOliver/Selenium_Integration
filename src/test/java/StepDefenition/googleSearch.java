package StepDefenition;

import java.util.concurrent.TimeUnit;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.safari.SafariDriver;

import io.cucumber.java.en.*;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features", glue={"StepDefenition"},
monochrome = true,
plugin= {"pretty","html:target/HTMLReport"}
		)
public class googleSearch {

	WebDriver driver = null;

	@Given("Browser is open")
	public void browser_is_open() {
		//System.setProperty("webdriver.gecko.driver","/Users/mac/eclipse-workspace/Cucumber/src/test/resources/WebDriver/geckodriver");
		driver = new SafariDriver();
		driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(30,TimeUnit.SECONDS);
		driver.manage().window().maximize();

	}
	@When("^user enter (.*) and (.*)$")
	public void user_enter_the_keywords(String username, String password) throws InterruptedException {
		driver.navigate().to("https://www.saucedemo.com");
		driver.findElement(By.id("user-name")).sendKeys(username);
		driver.findElement(By.id("password")).sendKeys(password);
		Thread.sleep(1000);
	}
	
	@And("click on search button")
	public void click_on_search_button() {
		//driver.findElement(By.name("login-button")).sendKeys(Keys.ENTER);
		driver.findElement(By.id("login-button")).click();

	}

	@Then("user is navigated to search page")
	public void user_is_navigated_to_search_page() throws InterruptedException {
		//driver.findElement(By.href("/watch?v=J2SfoRgV3V0")).Click();
		driver.close();
		driver.quit();

	}
}
