# Clean UI
### The cleanest UI library for HTML, CSS and JavaScript on your websites.

Contains handful of useful UI elements that are easy to use. <br>
Our website has transparent contents of our services for users. <br>

_Currently very early work in progress._

### Components:
#### Classic Button
Classic Button is a stock-standard button to use on your websites. It's code is really simple so
it wont drain your resources unnecessarily. Designed to look good on the most of the website
layouts out there.

``` html
<button class="cui-classic-button">Classic Button</button>
```
``` js
CleanUI._Buttons.ClassicButton(
    "#ea596e", // primary color
    "#ffffff" // secondary color
);
```

#### Tooltip
Our tooltip is a classically looking alert that will bring attention to your viewers. It's
simple and can easily convey the information that is important. It uses Material Icon as a icon
in its body.

``` html
<div class="cui-tooltip">Tooltip</div>
```
``` js
CleanUI._Helper.Tooltip(
    "#ea596e" // main color
);
```

#### Percantage
Percantage picker is a native HTML's select inspired component. With it it's really easy to
implement select fields that are highly cutomizable in visual aspects and well as functional
ones.

``` html
<div class="cui-percantage">
    <input class="cui-percantage-input" />
</div>
```
``` js
CleanUI._Pickers.Percantage(
    "#ea596e", // primary color
    "#ffffff", // secondary color
    "true" // close on click
);
```

#### Root
It contains a root element of you websites DOM. Mostly helpful for debugging and previewing your
CSS variables from :root element. It does not produce any visual effects by itself.

``` js
CleanUI._Root();
```
