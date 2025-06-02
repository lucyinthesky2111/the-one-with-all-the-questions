# Testing

The The one with all the questions - 'Friends' interactive trivia website has been tested using the following methods:
- [Code Validation](#code-validation)
    - [W3C HTML Validator](#w3c-html-validator) 
        - [Homepage](#homepage)
        - [Play Page](#play-page)
        - [help Page](#help-page)
        - [404 Error Page](#404-error-page)
    - [W3C CSS Validator](#w3c-css-validator)
    - [JSHint JavaScript Validator](#jshint-javascript-validator)
- [Lighthouse](#lighthouse)
- [Responsiveness](#responsiveness)
- [WAVE Web Accessibility Evaluation Tools Checker](#wave-web-accessibility-evaluation-tools-checker)
- [Browser Compatibility](#browser-compatibility)
- [Testing User Stories](#testing-user-stories)
- [Testing User Expectations and Requirements](#testing-user-expectations-and-requirements)
- [Peer Review](#peer-review)
- [Bugs](#bugs)
    - [Resolved](#resolved)
    - [Unresolved](#unresolved)

# Code Validation
## W3C HTML Validator
The one with all the questions - 'Friends' interactive trivia website returned no errors or warnings when tested using the W3C HTML Validator tool.
There was orginally a contrast error on the Play Page caused by the blue and yellow coloured dots in the site title, which was subsequently resolved (SEE RESOLVED BUGS). 

### Homepage 
<h2 align="center"><img src="../assets/readme-images/homepage-html-validation.png" alt="screenshot of Homepage html validation"></h2>

### Play Page
<h2 align="center"><img src="../assets/readme-images/html-validation-play-page.png" alt="screenshot of Play Page html validation"></h2>

### Help Page
<h2 align="center"><img src="../assets/readme-images/html-validation-help-page.png" alt="screenshot of Help Page html validation"></h2>

### 404 Error Page
<h2 align="center"><img src="../assets/readme-images/html-validation-404-page.png" alt="screenshot of 404 Error Page html validation"></h2>

## W3C CSS Validator
The The one with all the questions - 'Friends' interactive trivia website returned no errors or warnings when tested using the W3C CSS Validator tool.
### CSS Stylesheet
<h2 align="center"><img src="../assets/readme-images/css-validation.png" alt="screenshot of CSS validation"></h2>

## JSHint JavaScript Validator
The The one with all the questions - 'Friends' interactive trivia website returned no errors or warnings when tested using the JSHint JavaScript Validator tool.
### JS Script File
<h2 align="center"><img src="../assets/readme-images/js-hint.png" alt="screenshot JS validation"></h2>

# Lighthouse
* I ran Lighthouse reports in Google Devtools to test for :- Performance, Accessibility, Best Practices and SEO.
* All pages ....... SEE UNRESOLVED BUGS

## Homepage (Desktop)
<h2 align="center"><img src="../assets/readme-images/lighthouse-home-desktop.png" alt="Lighthouse results Homepage (Desktop)"></h2>

## Play Page (Desktop)
<h2 align="center"><img src="../assets/readme-images/lighthouse-play-desktop.png" alt="Lighthouse results Play Page (Desktop)"></h2>

## Help Page (Desktop)
<h2 align="center"><img src="../assets/readme-images/lighthouse-help-desktop.png" alt="Lighthouse results Help Page (Desktop)"></h2>

## 404 Error Page (Desktop) 
<h2 align="center"><img src="../assets/readme-images/lighthouse-404-desktop.png" alt="Lighthouse results 404 Error Page (Desktop)"></h2>

* On mobile, results were ...... Details can be found in [Unresolved Bugs](#unresolved).
## Homepage (Mobile)
<h2 align="center"><img src="../assets/readme-images/lighthouse-home-mobile.png" alt="Lighthouse results Homepage (Mobile)"></h2>

## Play Page (Mobile)
<h2 align="center"><img src="../assets/readme-images/lighthouse-play-mobile.png" alt="Lighthouse results Play Page (Mobile)"></h2>

## Help Page (Mobile)
<h2 align="center"><img src="../assets/readme-images/lighthouse-help-mobile.png" alt="Lighthouse results Help Page (Mobile)"></h2>

## 404 Error Page (Mobile)
<h2 align="center"><img src="../assets/readme-images/lighthouse-404-mobile.png" alt="Lighthouse results 404 Error Page (Mobile)"></h2>

# Responsiveness
 CSS media queries were used to make this website responsive. When writing media queries, I used the same breakpoints as Bootstrap. Details of these breakpoints can be found [here](https://getbootstrap.com/docs/5.0/layout/breakpoints/). Responsivity at the Bootstrap breakpoints, and on different device screen sizes, was tested using Google Chrome Devtools. Device screen sizes tested include:
* iPhone SE
* iPhone XR
* iPhone 12 Pro
* iPhone 14 Pro Max
* Pixel 7
* Samsung Galaxy S8+
* Samsung Galaxy S20 Ultra
* iPad Mini
* iPad Air
* iPad Pro
* Surface Pro 7
* Surface Duo
* Galaxy Z Fold 5
* Asus Zenbook Fold
* Samsung Galaxy A51/71
* Nest Hub
* Nest Hub Max
* Galaxy Fold

* I personally tested the website on a Samsung Galaxy S22 (See [Resolved Bugs](#resolved) for details), an Asus Tuf Gaming A15 laptop and a Samsung Odyssey G5 34" curved monitor.

# WAVE Web Accessibility Evaluation Tools Checker
The one with all the questions - 'Friends' interactive trivia website returned no errors or contrast errors when tested using the WAVE Web Accessibility Evaluation Tools Checker. 
## Homepage 
<h2 align="center"><img src="../assets/readme-images/wave-homepage.png" alt="Wave Homepage results"></h2>

## Play Page 
<h2 align="center"><img src="../assets/readme-images/wave-play-page.png" alt="Wave Play Page results"></h2>

## Help Page 
<h2 align="center"><img src="../assets/readme-images/wave-help-page.png" alt="Wave Help Page results"></h2>

## 404 Error Page  
<h2 align="center"><img src="../assets/readme-images/wave-404-page.png" alt="Wave 404 Error Page results"></h2>

# Browser Compatibility
* The site was tested and performed as expected on Google Chrome, Microsoft Edge, and Internet Explorer.
* The site was also tested on Samsung Internet, on which there were some issues which were subsequently rectified. (see [Resolved Bugs](#resolved) for details).

# Testing User Stories
* All tasks are completed and all acceptance criteria are met for user stories ..... 
* Due to time constraints, no tasks have been attempted for user stories .....

# Testing User Goals
### Must Have
  

 ### Should Have
  

 ### Could Have
  * Due to time constraints, none of the features relating to the 'could have' user goals have been implemented.

# Testing User Expectations and Requirements
All user expectations and requirements have been satisfied (evidenced by looking at the deployed site as a whole).


# Peer Review
* Whilst still in progress, this project was submitted for peer review by Code Institute students and alumni on Slack. This resulted in ........

# Bugs 
## Resolved

* There was orginally a contrast error on the Play Page caused by the blue and yellow coloured dots in the site title, which was subsequently resolved .....

* On first run of the W3C HTML Validator, the error shown below was flagged on all pages of the site. This was resolved by replacing the p element with a span element. All pages of the site subsequently passed validation. 
<h2 align="center"><img src="../assets/readme-images/p-html-error.png" alt="p html error"></h2>

* When playing the game on mobile devices, there was an issue with the timer box distorting at 27 seconds remaining, whereby the text displayed on two lines rather than one. This issue was resolved by increasing the width of the timer box. 


## Unresolved
* I received some feedback in my last project that html files should be organized into a folder. I tried to implement this for this project however, having html files in folders works on the live server but not in the deployed site. There are only 4 html files in the project. This was too time-consuming to try and fix for such a small number of html files and a minor annoyance caused by the lack of folder. I would have spent the time to rectify this issue had there been a vast number of html files. Therefore html files are not placed in a folder for this project. 

* 

Back to [README.md](./README.md)