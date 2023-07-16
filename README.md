# React FollowMouse Component

The `FollowMouse` component is a React component that tracks the mouse cursor position and renders a customizable mouse follower element. It allows you to add interactive and visually appealing mouse effects to your web applications. Also, it understands which element it's hovering and apply the different related impacts on the component (e.g. `button`, `a`, `img`, `span`, `p`, etc...)

![Demo](docs/demo.gif)

(Live Demo)[]

(SandBox)[]

## Installation

You can install the `follow-mouse` package from npm:

```
npm install react-follow-mouse
```

## Usage

Import the `FollowMouse` component in your React application:

```
import React from 'react';
import FollowMouse from 'react-smart-mouse'

const App = () => {
  return (
    <div>
      {/* Your other components */}
      <FollowMouse
        // Props for customizing the mouse follower appearance(optional)
        // Customize the styles for different elements
        pStyle={{ color: 'rgba(191, 75, 30, 1)', height: '40px', width: '40px' }}
        aStyle={{ color: 'rgba(132, 245, 39, 0.8)', height: '20px', width: '20px' }}
        buttonStyle={{ color: 'rgba(118, 39, 245, 0.8)', height: '20px', width: '20px' }}
        // Specify default width and height for the mouse follower
        defaultWidth="35px"
        defaultHeight="35px"
        // Other optional props
        debug={true}
      />
    </div>
  );
};

export default App;
```

## Props

The `FollowMouse` component accepts the following props:

| prop                 | type        | default                                                                                    | description                                                                                        |
| -------------------- | ----------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------- |
| pStyle               | object      | { color: 'rgba(0, 0, 0, 0.125)', height: '35px', width: '35px', top: '-5'. left: '-10'}    | Custom styles for the <p> elements.                                                                |
| aStyle               | object      | { color: 'rgba(0, 0, 0, 0.125)', height: '35px', width: '35px', top: '-5'. left: '-10'}    | Custom styles for the <a> elements.                                                                |
| buttonStyle          | object      | { color: 'rgba(0, 0, 0, 0.125)', height: '35px', width: '35px', top: '-5'. left: '-10'}    | Custom styles for the <button> elements.                                                           |
| spanStyle            | object      | { color: 'rgba(0, 0, 0, 0.125)', height: '35px', width: '35px', top: '-5'. left: '-10'}    | Custom styles for the <span> elements.                                                             |
| imgStyle             | object      | { color: 'rgba(0, 0, 0, 0.125)', height: '35px', width: '35px', top: '-5'. left: '-10'}    | Custom styles for the <img> elements.                                                              |
| inputStyle           | object      | { color: 'rgba(0, 0, 0, 0.125)', height: '35px', width: '35px', top: '-5'. left: '-10'}    | Custom styles for the <input> elements.                                                            |
| textareaStyle        | object      | { color: 'rgba(0, 0, 0, 0.125)', height: '35px', width: '35px', top: '-5'. left: '-10'}    | Custom styles for the <textarea> elements.                                                         |
| labelStyle           | object      | { color: 'rgba(0, 0, 0, 0.125)', height: '35px', width: '35px', top: '-5'. left: '-10'}    | Custom styles for the <label> elements.                                                            |
| liStyle              | object      | { color: 'rgba(0, 0, 0, 0.125)', height: '35px', width: '35px', top: '-5'. left: '-10'}    | Custom styles for the <li> elements.                                                               |
| defaultWidth         | string      | 35px                                                                                       | The default width of the mouse follower.                                                           |
| defaultHeight        | string      | 35px                                                                                       | The default Height of the mouse                                                                    |
| defaultTop           | number      | -5                                                                                         | The default top position of the mouse follower element.                                            |
| defaultLeft          | number      | -5                                                                                         | The default left position of the mouse follower element.                                           |
| defaultColor         | string      | rgba(0, 0, 0, 0.5)                                                                         | The default color of the mouse follower element.                                                   |
| debug                | boolean     | false                                                                                      | Enable debug mode to log element names and custom styles to the console. Useful for debugging.     |


## Customizing Element Styles

You can customize the default hover cursor appearance for different elements by passing style objects as props to the corresponding element style props. Here's an example of how you can customize the styles for different elements:

```
<FollowMouse
  // Customize the styles for different elements
  pStyle={{ color: 'red', height: '40px', width: '40px' }}
  aStyle={{ color: 'blue', height: '20px', width: '20px' }}
  buttonStyle={{ color: 'green', height: '30px', width: '30px' }}
  spanStyle={{ color: 'purple', height: '25px', width: '25px' }}
  imgStyle={{ color: 'yellow', height: '50px', width: '50px' }}
  inputStyle={{ color: 'orange', height: '35px', width: '35px' }}
  textareaStyle={{ color: 'brown', height: '35px', width: '35px' }}
  labelStyle={{ color: 'gray', height: '40px', width: '40px' }}
  liStyle={{ color: 'pink', height: '40px', width: '40px' }}
/>

```

In the example above, we have specified custom styles for the `p`, `a`, `button`, `span`, `img`, `input`, `textarea`, `label`, and `li` elements. You can adjust the color, height, and width values to match your desired appearance.


## Customizing Individual Elements with mousecustom

You can customize the default hover cursor appearance for individual elements by using the mousecustom attribute on the element and passing a JSON string as its value. Here's an example of how you can use the mousecustom prop to customize the height of an element:

```
<input type="text" mousecustom={JSON.stringify({ height: '50px' })} />
```

In the example above, the <input> element has a mousecustom attribute with a JSON string value that specifies a custom height of '50px'. You can apply this approach to other elements as well.


## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/BilVaD1/SmartMouse/blob/main/LICENSE) file for details.

© Copyright 2023 - @BilVaD1
