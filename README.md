# Snow Hunters - Progressive Web App

<img width="742" alt="Schermafbeelding 2020-03-13 om 15 10 46" src="https://user-images.githubusercontent.com/43657951/76628366-e30dd880-653c-11ea-9fe7-101b5df99a66.png">

## Table of Contents
* [Concept](#Concept)
* [Live Demo](#Live-Demo)
* [Research](#Research)
* [Installation](#Installation)
* [API's](#API's)
* [Data](#Data)
* [Features](#Features)
* [Wishlist](#Wishlist)
* [Learning goals](#Learning-goals)
* [Credits](#Credits)
* [License](#License)

## Concept
This is a weather forecast application for skilocations. I converted this [client side web application](https://github.com/marissaverdonck/web-app-from-scratch-1920) into a server side rendered application. I'll add functionalities based on the Service Worker and turn the application into a Progressive Web App. Ultimately I'm going to implement a series of optimisations to improve the performance of the application.  


## Live Demo
https://tranquil-dawn-22628.herokuapp.com/

## Research
Find my research in the [Wiki](https://github.com/marissaverdonck/progressive-web-apps-1920/wiki)

* [1. Install NPM](https://github.com/marissaverdonck/progressive-web-apps-1920/wiki/Install-npm-and-dependencies)
 
* [2. Deploy with Heroku](https://github.com/marissaverdonck/progressive-web-apps-1920/wiki/Deploying-with-Heroku)

* [3. Manifest & Service worker](https://github.com/marissaverdonck/progressive-web-apps-1920/wiki/Manifest-&-Service-worker)

* [4. Install App](https://github.com/marissaverdonck/progressive-web-apps-1920/wiki/Install-app)

* [5. Building](https://github.com/marissaverdonck/progressive-web-apps-1920/wiki/Building)

* [6. Critical Rendering Path](https://github.com/marissaverdonck/progressive-web-apps-1920/wiki/Critical-Rendering-Path)

* [7. Conclusion](https://github.com/marissaverdonck/progressive-web-apps-1920/wiki/Conclusion)

## Installation
1. Open up your terminal

2. Go to the file in your computer where you want to install the application

3. Clone the repository. Typ in your terminal:
```
Git clone https://github.com/marissaverdonck/progressive-web-apps-1920.git
```
4. Install dependencies

```
npm install
```

5. Start the app
```
node server.js
```


## API's 
### Dark Sky weather API
Website: https://darksky.net/dev


<details>
    <summary>Weather data</summary>

```
latitude: 52.30798332035149
longitude: 5.237298870086647
timezone: "Europe/Amsterdam"
currently:
time: 1582864905
summary: "Clear"
icon: "clear-night"
precipIntensity: 0.005
precipProbability: 0.02
precipType: "rain"
temperature: 2.94
apparentTemperature: -0.85
dewPoint: 2.56
humidity: 0.97
pressure: 1014
windSpeed: 4.29
windGust: 8.39
windBearing: 165
cloudCover: 0.09
uvIndex: 0
visibility: 16.093
ozone: 396.6
__proto__: Object
hourly:
summary: "Light rain starting this evening."
icon: "rain"
data: Array(49)
0:
time: 1582862400
summary: "Clear"
icon: "clear-night"
precipIntensity: 0.0124
precipProbability: 0.08
precipType: "rain"
temperature: 3.37
apparentTemperature: -0.47
dewPoint: 2.99
humidity: 0.97
pressure: 1013.6
windSpeed: 4.56
windGust: 9.29
windBearing: 350
cloudCover: 0.03
uvIndex: 0
visibility: 16.093
ozone: 399.3
```

</details>

### Ski area's around the world
Website: https://skimap.org/pages/Developers#skiArea

<details>
    <summary>Skiarea data</summary>

 ```
    "skiAreas": {
    "skiArea": [{
        "name": {
          "__cdata": " Smokey Mountain Ski Club "
        },
        "officialWebsite": {
          "__cdata": " http://www.skismokey.ca/ "
        },
        "georeferencing": {
          "_lat": "52.977947",
          "_lng": "-66.92094"
        },
        "regions": {
          "region": {
            "_id": "335",
            "__cdata": " Newfoundland and Labrador "
          }
        },
        "_id": "1"
      },
 ```
</details>

## Features
* Retrieving data from 2 API's
* Installable version
* Offline version

## WishList
* Weather icons

## Learning goals
* Server-side rendering
* Deployment
* Tooling
* Installable version
* Manifest/ service worker

## Credits
* [Declan Rek](https://github.com/decrek) Explanations, presentations
* [Manouk Kappé ](https://github.com/ManoukK) Working together with server setup
* [Maikel Sleebos](https://github.com/Senpaizuri) Bug resolving
* [Robin Stut](https://github.com/RobinStut) Feedback

## Sources
* [NPM](https://www.npmjs.com/)
* [Heroku](https://devcenter.heroku.com/)
* [web.dev - Manifest](https://web.dev/add-manifest/)
* [Codelabs - PWA](https://codelabs.developers.google.com/codelabs/pwa-offline-quickstart/index.html?index=..%2F..dev-pwa-training#2)
* [CMD, critical rendering path](https://github.com/cmda-minor-web/progressive-web-apps-1920/blob/master/course/cmd-2020-critical-rendering-path.pdf)
* [Imagekit, Lazy loading](https://imagekit.io/blog/lazy-loading-images-complete-guide/)
* [Jake Archibald, Best practices](https://jakearchibald.com/2016/caching-best-practices/)
* [Declan Rek - Repository](https://github.com/decrek/progressive-web-apps-1920)

## License
[MIT License](https://github.com/marissaverdonck/progressive-web-apps-1920/blob/master/license)
