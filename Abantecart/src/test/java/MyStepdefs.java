import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import static org.junit.Assert.assertTrue;

public class MyStepdefs {
    public static WebDriver driver;

    @Before
    public void open() {
        System.out.println("opening the browser");
        System.setProperty("webdriver.chrome.driver", "chromedriver.exe");
        driver = new ChromeDriver();
        driver.get("http://demos1.softaculous.com/AbanteCart/");
    }
    @Given("^user is on AbanteCart homepage$")
    public void userIsOnAbanteCartHomepage() {
        System.out.println("user is on home page");
    }

    @When("^user clicks on the link \"([^\"]*)\"$")
    public void userClicksOnTheLink(String arg0) {
        driver.findElement(By.xpath("html/body/div/header/div[2]/div/div[4]/div/div/a[1]")).click();

    }

    @Then("^user should view \"([^\"]*)\" page$")
    public void userShouldViewPage(String fac) {
        boolean isTextPresent = driver.getPageSource().contains(fac);
        assertTrue(isTextPresent);
    }

    @When("^user clicks on \"([^\"]*)\" link$")
    public void userClicksOnLink(String arg0) {
        driver.findElement(By.xpath(".//*[@id='customer_menu_top']/li/a")).click();

    }

    @Then("^user should land on the \"([^\"]*)\" new page$")
    public void userShouldLandOnTheNewPage(String log) {
        boolean isTheTestPresent = driver.getPageSource().contains(log);
        assertTrue(isTheTestPresent);

    }


    @And("^clicks on login button$")
    public void clicksOnLoginButton() {
        driver.findElement(By.xpath(".//*[@id='loginFrm']/fieldset/button")).click();
    }


    @And("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userEntersAnd(String logname, String passwrd) throws InterruptedException {
        driver.findElement(By.id("loginFrm_loginname")).sendKeys(logname);
        driver.findElement(By.id("loginFrm_password")).sendKeys(passwrd);
        Thread.sleep(30);
    }

    @Then("^user should not be logged in with \"([^\"]*)\"$")
    public void userShouldNotBeLoggedInWith(String error) {
        boolean isTextPresent = driver.getPageSource().contains(error);
        assertTrue(isTextPresent);
    }

    @When("^user clicks on Makeup link$")
    public void userClicksOnMakeupLink() {
        System.out.println("user clicks on makeup link");
        driver.findElement(By.xpath(".//*[@id='categorymenu']/nav/ul/li[3]/a")).click();
    }

    @And("^user clicks on Eyes link$")
    public void userClicksOnEyesLink() {
        System.out.println("user clicks on eyes link");
        driver.findElement(By.xpath(".//*[@id='maincontainer']/div/div/div/div/ul/li[2]/div/a")).click();
    }

    @And("^user clicks on Waterproof Protective Undereye Concealer link$")
    public void userClicksOnWaterproofProtectiveUndereyeConcealerLink() {
        System.out.println("user clicks on waterproof protective undereye concealer link");
        driver.findElement(By.xpath(".//*[@id='maincontainer']/div/div/div/div/div[2]/div[1]/div[1]/div/a")).click();
    }

    @And("^user clicks on Add to Cart link$")
    public void userClicksOnAddToCartLink() {
        System.out.println("user clicks on add to cart link");
        driver.findElement(By.xpath(".//*[@id='product']/fieldset/div[5]/ul/li/a")).click();
    }





    @When("^user clicks on Remove link$")
    public void userClicksOnRemoveLink() throws InterruptedException {
        System.out.println("user clicks on remove link");
        driver.findElement(By.xpath(".//*[@id='cart']/div/div[1]/table/tbody/tr[2]/td[7]/a")).click();
        Thread.sleep(30);
    }

    @Then("^the shopping crt should be updated with message \"([^\"]*)\"$")
    public void theShoppingCrtShouldBeUpdatedWithMessage(String rem) {
        System.out.println("The shopping crt should be updated");
        boolean isTheTextPresent = driver.getPageSource().contains(rem);
        assertTrue(isTheTextPresent);
    }


    @When("^user types  \"([^\"]*)\" in the search box$")
    public void userTypesInTheSearchBox(String text) throws InterruptedException {
        System.out.println("user Types In The Search Box");
        Thread.sleep(30);
        driver.findElement(By.xpath(".//*[@id='filter_keyword']")).sendKeys(text);

    }

    @And("^user clicks \"([^\"]*)\" option$")
    public void userClicksOption(String arg0) throws InterruptedException {
        System.out.println("user clicks option");
        driver.findElement(By.xpath(".//*[@id='search_form']/div/div/i")).click();
        Thread.sleep(30);
    }

    @Then("^\"([^\"]*)\" page should be display$")
    public void pageShouldBeDisplay(String ser) {
        System.out.println("Page should be display");
        boolean isTheTestPresent = driver.getPageSource().contains(ser);
        assertTrue(isTheTestPresent);

    }


    @When("^user types  invalid \"([^\"]*)\" in the search box$")
    public void userTypesInvalidInTheSearchBox(String text1) {
        System.out.println("user types invalid data");
        driver.findElement(By.xpath(".//*[@id='filter_keyword']")).sendKeys(text1);
    }

    @Then("^\"([^\"]*)\" message page should be display$")
    public void messagePageShouldBeDisplay(String ser1) {
        System.out.println("Message page should be display");
        boolean isTheTestPresent = driver.getPageSource().contains(ser1);
        assertTrue(isTheTestPresent);

    }
    @After
    public void close(){
        driver.quit();
    }

}

