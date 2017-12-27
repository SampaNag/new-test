$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Facebook.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook functionality",
  "description": "",
  "id": "facebook-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 14507577673,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify facebook link",
  "description": "",
  "id": "facebook-functionality;verify-facebook-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@facebook"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on AbanteCart homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on the link \"Facebook\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should view \"Facebook\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnAbanteCartHomepage()"
});
formatter.result({
  "duration": 313011901,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.userClicksOnTheLink(String)"
});
formatter.result({
  "duration": 202880235,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 18
    }
  ],
  "location": "MyStepdefs.userShouldViewPage(String)"
});
formatter.result({
  "duration": 45464458,
  "status": "passed"
});
formatter.after({
  "duration": 929052895,
  "status": "passed"
});
formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "checking login functionality",
  "description": "",
  "id": "checking-login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10988935120,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify login link",
  "description": "",
  "id": "checking-login-functionality;verify-login-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on AbanteCart homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on \"Login or register\" link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user should land on the \"Account Login\" new page",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnAbanteCartHomepage()"
});
formatter.result({
  "duration": 47012,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login or register",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnLink(String)"
});
formatter.result({
  "duration": 1016339741,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Account Login",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.userShouldLandOnTheNewPage(String)"
});
formatter.result({
  "duration": 25433659,
  "status": "passed"
});
formatter.after({
  "duration": 798386332,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 12,
  "name": "User is not able to login successfully",
  "description": "",
  "id": "checking-login-functionality;user-is-not-able-to-login-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@invalidlogin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on AbanteCart homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicks on \"Login or register\" link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters \"\u003cloginname\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should not be logged in with \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "checking-login-functionality;user-is-not-able-to-login-successfully;",
  "rows": [
    {
      "cells": [
        "loginname",
        "password",
        "error message"
      ],
      "line": 19,
      "id": "checking-login-functionality;user-is-not-able-to-login-successfully;;1"
    },
    {
      "cells": [
        "sampsan",
        "",
        "Incorrect login or password provided"
      ],
      "line": 20,
      "id": "checking-login-functionality;user-is-not-able-to-login-successfully;;2"
    },
    {
      "cells": [
        "",
        "dholak",
        "Incorrect login or password provided"
      ],
      "line": 21,
      "id": "checking-login-functionality;user-is-not-able-to-login-successfully;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 10290643918,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User is not able to login successfully",
  "description": "",
  "id": "checking-login-functionality;user-is-not-able-to-login-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@invalidlogin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on AbanteCart homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicks on \"Login or register\" link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters \"sampsan\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should not be logged in with \"Incorrect login or password provided\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnAbanteCartHomepage()"
});
formatter.result({
  "duration": 36740,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login or register",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnLink(String)"
});
formatter.result({
  "duration": 1192727156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sampsan",
      "offset": 13
    },
    {
      "val": "",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.userEntersAnd(String,String)"
});
formatter.result({
  "duration": 212844869,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clicksOnLoginButton()"
});
formatter.result({
  "duration": 766589024,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect login or password provided",
      "offset": 35
    }
  ],
  "location": "MyStepdefs.userShouldNotBeLoggedInWith(String)"
});
formatter.result({
  "duration": 13639495,
  "status": "passed"
});
formatter.after({
  "duration": 774852919,
  "status": "passed"
});
formatter.before({
  "duration": 10013142509,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User is not able to login successfully",
  "description": "",
  "id": "checking-login-functionality;user-is-not-able-to-login-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 11,
      "name": "@invalidlogin"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "user is on AbanteCart homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "user clicks on \"Login or register\" link",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user enters \"\" and \"dholak\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user should not be logged in with \"Incorrect login or password provided\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnAbanteCartHomepage()"
});
formatter.result({
  "duration": 37135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login or register",
      "offset": 16
    }
  ],
  "location": "MyStepdefs.userClicksOnLink(String)"
});
formatter.result({
  "duration": 1501880492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "dholak",
      "offset": 20
    }
  ],
  "location": "MyStepdefs.userEntersAnd(String,String)"
});
formatter.result({
  "duration": 189879553,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.clicksOnLoginButton()"
});
formatter.result({
  "duration": 751047703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Incorrect login or password provided",
      "offset": 35
    }
  ],
  "location": "MyStepdefs.userShouldNotBeLoggedInWith(String)"
});
formatter.result({
  "duration": 21773415,
  "status": "passed"
});
formatter.after({
  "duration": 873071508,
  "status": "passed"
});
formatter.uri("Makeup.feature");
formatter.feature({
  "line": 1,
  "name": "Makeup functionality working as expected",
  "description": "",
  "id": "makeup-functionality-working-as-expected",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10669723915,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify makeup link",
  "description": "",
  "id": "makeup-functionality-working-as-expected;verify-makeup-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@makeup"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on AbanteCart homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user clicks on Makeup link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks on Eyes link",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Waterproof Protective Undereye Concealer link",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user clicks on Add to Cart link",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user clicks on Remove link",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "the shopping crt should be updated with message \"Your shopping cart is empty!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnAbanteCartHomepage()"
});
formatter.result({
  "duration": 48198,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnMakeupLink()"
});
formatter.result({
  "duration": 1589033016,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnEyesLink()"
});
formatter.result({
  "duration": 1088204572,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnWaterproofProtectiveUndereyeConcealerLink()"
});
formatter.result({
  "duration": 1434351459,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnAddToCartLink()"
});
formatter.result({
  "duration": 1408630986,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.userClicksOnRemoveLink()"
});
formatter.result({
  "duration": 1090804867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your shopping cart is empty!",
      "offset": 49
    }
  ],
  "location": "MyStepdefs.theShoppingCrtShouldBeUpdatedWithMessage(String)"
});
formatter.result({
  "duration": 15150210,
  "status": "passed"
});
formatter.after({
  "duration": 770405317,
  "status": "passed"
});
formatter.uri("Search.feature");
formatter.feature({
  "line": 1,
  "name": "Search box Functionality",
  "description": "",
  "id": "search-box-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 10095989652,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "verify search box",
  "description": "",
  "id": "search-box-functionality;verify-search-box",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@search"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user is on AbanteCart homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user types  \"makeup\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user clicks \"Go\" option",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "\"Search\" page should be display",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnAbanteCartHomepage()"
});
formatter.result({
  "duration": 49778,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "makeup",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userTypesInTheSearchBox(String)"
});
formatter.result({
  "duration": 128716936,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Go",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userClicksOption(String)"
});
formatter.result({
  "duration": 901833164,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Search",
      "offset": 1
    }
  ],
  "location": "MyStepdefs.pageShouldBeDisplay(String)"
});
formatter.result({
  "duration": 17031888,
  "status": "passed"
});
formatter.after({
  "duration": 1309517187,
  "status": "passed"
});
formatter.before({
  "duration": 10204354209,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "verify search box with Invalid data",
  "description": "",
  "id": "search-box-functionality;verify-search-box-with-invalid-data",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@invalidsearch"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "user is on AbanteCart homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "user types  invalid \"asdre\" in the search box",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user clicks \"Go\" option",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "\"There is no product that matches the search criteria\" message page should be display",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.userIsOnAbanteCartHomepage()"
});
formatter.result({
  "duration": 56493,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "asdre",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.userTypesInvalidInTheSearchBox(String)"
});
formatter.result({
  "duration": 104452658,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Go",
      "offset": 13
    }
  ],
  "location": "MyStepdefs.userClicksOption(String)"
});
formatter.result({
  "duration": 1002841282,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There is no product that matches the search criteria",
      "offset": 1
    }
  ],
  "location": "MyStepdefs.messagePageShouldBeDisplay(String)"
});
formatter.result({
  "duration": 32357505,
  "status": "passed"
});
formatter.after({
  "duration": 772898549,
  "status": "passed"
});
});