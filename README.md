# react-customizable-progressbar

Customizable circular SVG progress bar component for React

<br />
<p align="center">
    <img src="https://camo.githubusercontent.com/94b8210b015f99ecdfd206cc5789772e13e0e16c/687474703a2f2f6d617274696e6a757a6c2e636f6d2f66696c65732f72656163742d637573746f6d697a61626c652d70726f67726573736261722e6769663f763d32">
</p>
<br />

Check <a href="https://martinjuzl.com/react-customizable-progressbar">examples</a> or <a href="https://martinjuzl.com/react-customizable-progressbar/generator">generator</a> to play around with all props

### Installation

```bash
npm install --save react-customizable-progressbar
```

or

```bash
yarn add react-customizable-progressbar
```

### Usage

```jsx
import Bar from 'react-customizable-progressbar'

<Bar
    progress={60}
    radius={100}
/>
```


### Props

| Name | Type | Default | Description |
| ---- | ---- | ------- | ----------- |
| `radius` (required) | `number` | `100` | Progress bar radius |
| `progress` (required) | `number` | `0` | Progress value (out of `steps`) |
| `steps` | `number` | `100` | Total steps |
| `cut` | `number` | `0` | Angle of the circle sector |
| `rotate` | `number` | `-90` | Progress rotation |
| `strokeWidth` | `number` | `20` | Stroke width |
| `strokeColor` | `string` | `'indianred'` | Stroke color |
| `strokeLinecap` | `string` | `'round'` | Stroke line cap |
| `transition` | `string` | `'0.3s ease'` | Transition |
| `trackStrokeWidth` | `number` | `20` | Track stroke width |
| `trackStrokeColor` | `string` | `'#e6e6e6'` | Track stroke color |
| `trackStrokeLinecap` | `string` | `'round'` | Track stroke line cap |
| `trackTransition` | `string` | `'1s ease'` | Track transition |
| `pointerRadius` | `number` | `0` | Pointer radius |
| `pointerStrokeWidth` | `number` | `20` | Pointer stroke width |
| `pointerStrokeColor` | `string` | `'indianred'` | Pointer stroke color |
| `pointerFillColor` | `string` | `'white'` | Pointer fill color |
| `initialAnimation` | `bool` | `false` | Initial animation |
| `initialAnimationDelay` | `number` | `500` | Initial animation delay |
| `inverse` | `bool` | `false` | Inverse |
| `counterClockwise` | `bool` | `false` | Counter-clockwise |
| `children` | `node` | `null` | Children - pass anything to show inside progress bar |
| `className` | `string` | `''` | Progress bar class name |


### Styles

```css
.progress-bar {}
.progress-bar-track {}
.progress-bar-progress {}
.progress-bar-pointer {}
```

### Development

```bash
npm install
npm run dev
```
