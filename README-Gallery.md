![mobile.de](https://github.corp.ebay.com/mobile-de/mobile-platform/raw/master/mobile-static-resources-webapp/src/main/webapp/images/shared/mobile-logo.svg)

# Coding Challenge - Front-end Engineering
## Introduction
Thank you for applying for a Front-end Engineer position at [mobile.de](http://www.mobile.de), and
congratulations on the previous successful steps. Prior to your in-person interviews, we
kindly ask you to complete the following assignment. This exercise is designed to assess
your development skills.

We will evaluate the work you send us against the criteria explained below.

This is not a timed assignment. However, please make sure that you send back the
assignment by the deadline agreed upon with your interviewer.

### First step

Navigate to this URL:

https://suchen.mobile.de/fahrzeuge/details.html?id=252163447

This is a page belonging to a car sold on the mobile.de platform. In eBay terminology, this
page is called a VIP (View Item Page).

For our mobile applications, we have an API that serves the same data to build this page in
JSON format. The API endpoint for the same car can be accessed via this URL:

https://www.mobile.de/hiring-challenge.json

Please open this URL and check the JSON structure.
In this JSON, you will see an array named “images” and content like this:
```
"images":[
    {
    "uri":
        "i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$",
        "set": "fe4cfedffdffffffff"
    }, {
    "uri":
        "i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$",
        "set": "fe4cfedffdffffffff"
    },
    …
]
```

Inside this array, you will see some strings that we use to build the URL for that photo in
different sizes. For instance, to create a small thumbnail, we take the “url” value, and build
the URL as follows:

**https**:// i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$ _**2.jpg**

Note that we prepend “https://” and append “_2.jpg” to build the URL. You can navigate now
to this URL and make sure that the image loads.

For a larger photo, we would replace “_2” with “_27” and then have the URL for a larger
photo:

https:// i.ebayimg.com/00/s/NjgyWDEwMjQ=/z/znIAAOxynwlTcg-F/$ _**27.jpg**

### Second step
Create a webapp that renders a photo gallery of a car, based on the API data given above.

#### Constraints
1. UI rendering should be based on React
2. Webserver should be based on Node.js
3. Webapp should be tested
4. Layout should be responsive, from mobile to desktop
5. Your application should fetch the data from the URL shared above

#### Webapp specs
* The first page should render image thumbnails of a car
* The second page should render larger images when the user clicks a thumbnail

#### Layout
Below are examples of simple wireframes to show how the UI might look. Feel free to add
design as you like.

![First example](./images/1.png)

![Second example](./images/2.png)

![Third example](./images/3.png)

## Next steps
Please zip your code and any instructions the reviewer might need to run your application.
Send the zip file back to the person you received this challenge from by replying to his/her e-mail.
**Please add your name to the subject line.**

We will review your code and evaluate it against criteria such as functional completeness,
code structure and architecture. Complete this assignment like you would complete a task at
your workplace. After reviewing your assignment, we will share our feedback with you and
communicate our decision on whether or not to proceed with in-person interviews.

When you come in for your interview, please be prepared to discuss your experience and
answer questions regarding the work you provided and your approach to complete this
project. We look forward to meeting you!
