import { max as d3max } from "d3-array";
import { create as d3create } from "d3-selection";
import { scaleLinear } from "d3-scale";

/**
 * Generates a word cloud visualization from the provided input data.
 * The word cloud represents word frequency, where the size of each word corresponds to its occurrence in the input data.
 *
 * @param {Array<object>} data - An array of JavaScript objects containing the data for creating the word cloud.
 * Each object should have a 'text' property representing the word and a 'value' property indicating the word's frequency.
 * Example:
 *   [
 *     { text: "apple", value: 10 },
 *     { text: "banana", value: 8 },
 *     // More objects...
 *   ]
 *
 * @param {object} [config] - An optional configuration object that customizes the word cloud generation behavior.
 * @param {string} [config.textProperty='text'] - If provided, specifies the name of the property in the data objects to use as the text for the word cloud.
 * Example: 'description' (uses the 'description' property from each data object).
 * @param {string} [config.valueProperty='value'] - If provided, specifies the name of the property in the data objects to use as the value for scaling the word sizes.
 * Example: 'frequency' (uses the 'frequency' property from each data object).
 * @param {string} [config.colorProperty='color'] - If provided, specifies the name of the property in the data objects to use for individual text colors.
 * The value of this property should be a valid CSS color string for each data object.
 * Example: 'text_color' (uses the 'text_color' property from each data object to define the color of the corresponding word).
 *
 * @returns {HTMLDivElement} The <div> element containing the word cloud visualization.
 *
 * @example
 * // Example 1: Using default behavior
 * const data = [
 *   { text: "apple", value: 10 },
 *   { text: "banana", value: 8 },
 *   // More objects...
 * ];
 * const wordCloudDiv = wordcloud(data);
 * document.getElementById('wordCloudContainer').appendChild(wordCloudDiv);
 *
 * // Example 2: Customizing word and value properties, default color, and individual text colors
 * const customConfig = {
 *   textProperty: 'word_text',
 *   valueProperty: 'word_count',
 *   colorProperty: 'text_color',
 * };
 * const customData = [
 *   { word_text: "sky", word_count: 15, text_color: "#00FF00" },
 *   { word_text: "ocean", word_count: 12, text_color: "#0000FF" },
 *   // More objects...
 * ];
 * const customWordCloudDiv = wordcloud(customData, customConfig);
 * document.getElementById('customWordCloudContainer').appendChild(customWordCloudDiv);
 */
export function wordfest(data: DataItem[], config: WordFestConfig = {}): HTMLDivElement {
  // Default configuration
  const {
    textProperty = "text", // Default property name for word text
    valueProperty = "value", // Default property name for word value
    colorProperty = "color", // Default property name for text color
  } = config;

  // Sort the data by value in descending order
  data = data.sort((a, b) => {
    // if a and b are both strings
    if (b[valueProperty] === a[valueProperty]) {
      // check if both are strings
      if (typeof a[textProperty] === "string" && typeof b[textProperty] === "string")  {
        return a[textProperty].localeCompare(b[textProperty]);
      }
       return 0;
      // If the values are the same, sort by text property in ascending order (A-Z)
    } else {
      // Sort by value property in descending order (larger value first)
      return (b[valueProperty] as number) - (a[valueProperty] as number);
    }
  });

  const domainMax = d3max(data, (d) => d[valueProperty] as number) || 0;
  const x = scaleLinear()
    .domain([0, domainMax])
    .range([0.5, 3]);

  const div = d3create("div")
    .style("display", "flex")
    .style("flex-direction", "row")
    .style("flex-wrap", "wrap")
    .style("column-gap", "1em")
    .style("align-items", "baseline")
    .style("justify-content", "center");

  const groups = div
    .selectAll("span.group")
    .data<DataItem>(data)
    .join((enter) => {
      const g = enter
        .append("span")
        .classed("group", true)
        .style("font-size", (d) => `${x(d[valueProperty] as number)}em`)
        .style("color", (d) => d[colorProperty]);

      g.append("span")
        .classed("text", true)
        .each(function () {
          this.insertAdjacentHTML("afterend", "&nbsp;");
        });

      g.append("span")
        .classed("freq", true)
        .style("font-size", "0.5em");

      return g;
    });

  groups.selectAll<HTMLSpanElement, DataItem>("span.text").text((d) => d[textProperty]);
  groups.selectAll<HTMLSpanElement, DataItem>("span.freq").text((d) => d[valueProperty]);
  return div.node() as HTMLDivElement;
}

export type DataItem = {
  [key: string]: string | number;
};


export type WordFestConfig = {
  textProperty?: string;
  valueProperty?: string;
  colorProperty?: string;
}
