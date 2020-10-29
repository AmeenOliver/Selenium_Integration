$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/SawvlogsLogin.feature");
formatter.feature({
  "name": "Test Check for Google Search",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "check Google Search successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.step({
  "name": "user is navigated to search page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "bouchta",
        "henda"
      ]
    },
    {
      "cells": [
        "amine",
        "el youbi"
      ]
    },
    {
      "cells": [
        "Soufiane",
        "tutu"
      ]
    }
  ]
});
formatter.scenario({
  "name": "check Google Search successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.googleSearch.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter bouchta and henda",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.googleSearch.user_enter_the_keywords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.googleSearch.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.googleSearch.user_is_navigated_to_search_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Von.local\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.safari.SafariDriver\nCapabilities {acceptInsecureCerts: false, browserName: Safari, browserVersion: 13.1, javascriptEnabled: true, platform: MAC, platformName: MAC, safari:automaticInspection: false, safari:automaticProfiling: false, safari:diagnose: false, safari:platformBuildVersion: 19E287, safari:platformVersion: 10.15.4, safari:useSimulator: false, setWindowRect: true, strictFileInteractability: false, webkit:WebRTC: {DisableICECandidateFiltering: false, DisableInsecureMediaCapture: false}}\nSession ID: AB933A71-1109-43CD-873C-50BDA98CE23B\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:452)\n\tat StepDefenition.googleSearch.user_is_navigated_to_search_page(googleSearch.java:52)\n\tat ✽.user is navigated to search page(file:///Users/mac/Desktop/CucumberProjects/Cucumber/src/test/resources/Features/SawvlogsLogin.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "check Google Search successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.googleSearch.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter amine and el youbi",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.googleSearch.user_enter_the_keywords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.googleSearch.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.googleSearch.user_is_navigated_to_search_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Von.local\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.safari.SafariDriver\nCapabilities {acceptInsecureCerts: false, browserName: Safari, browserVersion: 13.1, javascriptEnabled: true, platform: MAC, platformName: MAC, safari:automaticInspection: false, safari:automaticProfiling: false, safari:diagnose: false, safari:platformBuildVersion: 19E287, safari:platformVersion: 10.15.4, safari:useSimulator: false, setWindowRect: true, strictFileInteractability: false, webkit:WebRTC: {DisableICECandidateFiltering: false, DisableInsecureMediaCapture: false}}\nSession ID: 9F50ED9D-AE75-4EB3-8B9E-684654F6EC96\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:452)\n\tat StepDefenition.googleSearch.user_is_navigated_to_search_page(googleSearch.java:52)\n\tat ✽.user is navigated to search page(file:///Users/mac/Desktop/CucumberProjects/Cucumber/src/test/resources/Features/SawvlogsLogin.feature:7)\n",
  "status": "failed"
});
formatter.scenario({
  "name": "check Google Search successfully",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "Browser is open",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefenition.googleSearch.browser_is_open()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter Soufiane and tutu",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefenition.googleSearch.user_enter_the_keywords(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on search button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefenition.googleSearch.click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is navigated to search page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefenition.googleSearch.user_is_navigated_to_search_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: \nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Von.local\u0027, ip: \u0027127.0.0.1\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.4\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.safari.SafariDriver\nCapabilities {acceptInsecureCerts: false, browserName: Safari, browserVersion: 13.1, javascriptEnabled: true, platform: MAC, platformName: MAC, safari:automaticInspection: false, safari:automaticProfiling: false, safari:diagnose: false, safari:platformBuildVersion: 19E287, safari:platformVersion: 10.15.4, safari:useSimulator: false, setWindowRect: true, strictFileInteractability: false, webkit:WebRTC: {DisableICECandidateFiltering: false, DisableInsecureMediaCapture: false}}\nSession ID: E061EB16-1E76-45A1-80CA-69D1F5591844\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.quit(RemoteWebDriver.java:452)\n\tat StepDefenition.googleSearch.user_is_navigated_to_search_page(googleSearch.java:52)\n\tat ✽.user is navigated to search page(file:///Users/mac/Desktop/CucumberProjects/Cucumber/src/test/resources/Features/SawvlogsLogin.feature:7)\n",
  "status": "failed"
});
});