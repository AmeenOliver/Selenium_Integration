package StepDefenition;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="src/test/resources/Features", glue={"StepDefenition"},
monochrome = true,
plugin= {"pretty","html:target/HTMLReport"}
		)
public class runner {

}