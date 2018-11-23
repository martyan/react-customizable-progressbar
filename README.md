# react-customizable-progressbar

Customizable circular SVG progress bar component for React

<br />
<p align="center">
    <img src="http://martinjuzl.com/files/react-customizable-progressbar.gif?v=2">
</p>
<br />

Check <a href="http://martinjuzl.com/react-customizable-progressbar-examples.html">examples</a> or <a href="http://martinjuzl.com/react-customizable-progressbar-generator.html">generator</a> to play around with all props

### Installation

```bash
npm install --save react-customizable-progressbar
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
| `strokeWidth` | `number` | `2` | Stroke width |
| `strokeColor` | `string` | `'indianred'` | Stroke color |
| `strokeLinecap` | `string` | `'round'` | Stroke line cap |
| `transition` | `string` | `'0.3s ease'` | Transition |
| `trackStrokeWidth` | `number` | `2` | Track stroke width |
| `trackStrokeColor` | `string` | `'#e6e6e6'` | Track stroke color |
| `trackStrokeLinecap` | `string` | `'round'` | Track stroke line cap |
| `trackTransition` | `string` | `'1s ease'` | Track transition |
| `pointerRadius` | `number` | `5` | Pointer radius |
| `pointerStrokeWidth` | `number` | `22` | Pointer stroke width |
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