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

![image](https://github.com/keckelt/wordfest/assets/10337788/e93ae622-f80f-4dee-bb13-3b8ac4c0bc1e)

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
document.getElementById('wordCloudContainer').appendChild(wordCloudDiv);
```

**Result:**

![image](https://github.com/keckelt/wordfest/assets/10337788/c29c385d-8633-4ad8-a04e-c1b32cea7dbd)


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

![image](https://github.com/keckelt/wordfest/assets/10337788/6c194b3b-6d9e-428e-b5f4-05499b2a5617)


## API Reference
`wordfest(data: DataItem[], config?: WordFestConfig): HTMLDivElement`

Generates a word cloud visualization from the provided input data.

* `data`: An array of JavaScript objects containing word data.
* `config` (optional): An object that customizes word cloud behavior. Available options:
    * `textProperty`: Specifies the name of the property in data objects to use as word text (default: 'text').
    * `valueProperty`: Specifies the name of the property to use for scaling word sizes (default: 'value').
    * `colorProperty`: Specifies the name of the property for individual text colors (default: 'color'). If no color is specified, the the default text color is used.
