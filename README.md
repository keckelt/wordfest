# WordFest

WordFest is a npm package to create word clouds. However, unlike most word clouds, Wordfest does not rotate the words but aligns them in reading direction.
Thereby it appears similar to festival lineups.

## Installation

You can install WordFest using npm:

```bash
npm install wordfest
```

## Usage
### Quick Start

```js
import { wordfest } from "wordfest";

const data = [
  { text: "apple", value: 10 },
  { text: "banana", value: 8 },
  { text: "orange", value: 6 },
  { text: "cherry", value: 3 },
  { text: "blueberry", value: 2 },
];

const wordCloudDiv = wordfest(data);
document.getElementById('wordCloudContainer').appendChild(wordCloudDiv);
```
**Result:**
<div style="display: flex; flex-flow: row wrap; align-items: baseline; justify-content: center;"><span class="group" style="font-size: 3em;"><span class="text">apple</span>&nbsp;<span class="freq" style="margin-right: 1em; font-size: 0.5em;">10</span></span><span class="group" style="font-size: 2.5em;"><span class="text">banana</span>&nbsp;<span class="freq" style="margin-right: 1em; font-size: 0.5em;">8</span></span><span class="group" style="font-size: 2em;"><span class="text">orange</span>&nbsp;<span class="freq" style="margin-right: 1em; font-size: 0.5em;">6</span></span><span class="group" style="font-size: 1.25em;"><span class="text">cherry</span>&nbsp;<span class="freq" style="margin-right: 1em; font-size: 0.5em;">3</span></span><span class="group" style="font-size: 1em;"><span class="text">blueberry</span>&nbsp;<span class="freq" style="margin-right: 1em; font-size: 0.5em;">2</span></span></div>

### Advanced Usage
WordFest provides flexibility through configuration options:

```js
import { wordfest } from "wordfest";

const data = [
  { fruit: "apple", quantity: 10, fruitColor: 'green' },
  { fruit: "banana", quantity: 8, fruitColor: 'gold' },
  { fruit: "orange", quantity: 6, fruitColor: 'orange' },
  { fruit: "cherry", quantity: 3, fruitColor: 'red' },
  { fruit: "blueberry", quantity: 2, fruitColor: 'darkslateblue' },
];

const fruitConfig = {
  textProperty: 'fruit',
  valueProperty: 'quantity',
  colorProperty: 'fruitColor',
};

const wordCloudDiv = wordfest(data, fruitConfig);
document.getElementById('wordCloudContainer').appendChild(customWordCloudDiv);
```
**Result:**
<div style="display: flex; flex-flow: row wrap; align-items: baseline; justify-content: center;"><span class="group" style="font-size: 3em; color: green;"><span class="text">apple</span>&nbsp;<span class="freq" style="margin-right: 1em; font-size: 0.5em;">10</span></span><span class="group" style="font-size: 2.5em; color: gold;"><span class="text">banana</span>&nbsp;<span class="freq" style="margin-right: 1em; font-size: 0.5em;">8</span></span><span class="group" style="font-size: 2em; color: orange;"><span class="text">orange</span>&nbsp;<span class="freq" style="margin-right: 1em; font-size: 0.5em;">6</span></span><span class="group" style="font-size: 1.25em; color: red;"><span class="text">cherry</span>&nbsp;<span class="freq" style="margin-right: 1em; font-size: 0.5em;">3</span></span><span class="group" style="font-size: 1em; color: darkslateblue;"><span class="text">blueberry</span>&nbsp;<span class="freq" style="margin-right: 1em; font-size: 0.5em;">2</span></span></div>


### Styling

Wordfest's output is pure HTML and can therefore be styled via CSS.

```js
import { wordfest } from "wordfest";

const data = [
  { text: "apple", value: 10 },
  { text: "banana", value: 8 },
  { text: "orange", value: 6 },
  { text: "cherry", value: 3 },
  { text: "blueberry", value: 2 },
];

const wordCloudDiv = wordfest(data);
const container = document.getElementById('wordCloudContainer')
container.appendChild(wordCloudDiv);
container.style.background = "linear-gradient(0deg, #00DBDE 0%, #FC00FF 100%)";
container.style.webkitTextFillColor = "transparent";
container.style.backgroundClip = "text";
container.style.width = "25em";
```



**Result:**
<div id="wordCloudContainer" style="background: linear-gradient(0deg, rgb(0, 219, 222) 0%, rgb(252, 0, 255) 100%) padding-box text; -webkit-text-fill-color: transparent; width: 25em;background-clip: text;"><div style="display: flex; flex-flow: row wrap; column-gap: 1em; align-items: baseline; justify-content: center;"><span class="group" style="font-size: 3em;"><span class="text">apple</span>&nbsp;<span class="freq" style="font-size: 0.5em;">10</span></span><span class="group" style="font-size: 2.5em;"><span class="text">banana</span>&nbsp;<span class="freq" style="font-size: 0.5em;">8</span></span><span class="group" style="font-size: 2em;"><span class="text">orange</span>&nbsp;<span class="freq" style="font-size: 0.5em;">6</span></span><span class="group" style="font-size: 1.25em;"><span class="text">cherry</span>&nbsp;<span class="freq" style="font-size: 0.5em;">3</span></span><span class="group" style="font-size: 1em;"><span class="text">blueberry</span>&nbsp;<span class="freq" style="font-size: 0.5em;">2</span></span></div></div>

## API Reference
`wordfest(data: DataItem[], config?: WordFestConfig): HTMLDivElement``

Generates a word cloud visualization from the provided input data.

* `data`: An array of JavaScript objects containing word data.
* `config` (optional): An object that customizes word cloud behavior. Available options:
    * `textProperty`: Specifies the name of the property in data objects to use as word text (default: 'text').
    * `valueProperty`: Specifies the name of the property to use for scaling word sizes (default: 'value').
    * `colorProperty`: Specifies the name of the property for individual text colors (default: 'color').