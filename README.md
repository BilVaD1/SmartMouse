# React SmartMouse Component

The `SmartMouse` component is a React component that tracks the mouse cursor position and renders a customizable mouse follower element. It allows you to add interactive and visually appealing mouse effects to your web applications. Also, it understands which element it's hovering and apply the different related impacts on the component (e.g. `button`, `a`, `img`, `span`, `p`, etc...)

![](https://github.com/BilVaD1/SmartMouse/blob/main/HoverDemo.gif)

[Live Demo](https://myportfoliobilvad.netlify.app)

## Installation

You can install the `smart-mouse` package from npm:

```
npm i react-smart-mouse
```

## Usage

Import the `SmartMouse` component in your React application:

```
import React from 'react';
import SmartMouse from 'react-smart-mouse'

const App = () => {
  return (
    <div>
      {/* Your other components */}
      <SmartMouse
        // Props for customizing the mouse follower appearance(optional)
        // Customize the styles for different elements
        pStyle={{ color: 'rgba(191, 75, 30, 1)', height: '40px', width: '40px' }}
        aStyle={{ color: 'rgba(132, 245, 39, 0.8)', height: '20px', width: '20px' }}
        buttonStyle={{ color: 'rgba(118, 39, 245, 0.8)', height: '20px', width: '20px' }}
        // Apply style to className
        'some-class': { width: '50px', height: '50px', color: '#996099' },
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

You can use color as HEX/RGBA or text('red')

## Props

The `SmartMouse` component accepts the following props:

| prop                 | type        | default                                                                                             | description                                                                                        |
| -------------------- | ----------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| pStyle               | object      | { color: 'rgba(255, 0, 0, 0.5)', height: '35px', width: '35px', top: '-5px', left: '-10px' }      | Custom styles for the `p` elements.                                                                |
| aStyle               | object      | { color: 'rgba(0, 128, 0, 1)', height: '15px', width: '15px', top: '-5px', left: '-10px' }        | Custom styles for the `a` elements.                                                                |
| buttonStyle          | object      | { color: 'rgba(248, 246, 15, 1)', height: '15px', width: '15px', top: '-5px', left: '-10px' }     | Custom styles for the `button` elements.                                                           |
| spanStyle            | object      | { color: 'rgba(255, 165, 0, 0.5)', height: '35px', width: '35px', top: '-5px', left: '-10px' }    | Custom styles for the `span` elements.                                                             |
| imgStyle             | object      | { color: 'rgba(248, 246, 15, 0.7)', height: '15px', width: '15px', top: '-5px', left: '-10px' }   | Custom styles for the `img` elements.                                                              |
| inputStyle           | object      | { color: 'rgba(67, 39, 245, 1)', height: '30px', width: '2px', top: '-15px', left: '0px' }        | Custom styles for the `input` elements.                                                            |
| textareaStyle        | object      | { color: 'rgba(227, 104, 133, 1)', height: '30px', width: '3px', top: '-15px', left: '0px' }      | Custom styles for the `textarea` elements.                                                         |
| labelStyle           | object      | { color: 'rgba(128, 128, 0, 0.5)', height: '35px', width: '35px', top: '-5px', left: '-10px' }    | Custom styles for the `label` elements.                                                            |
| liStyle              | object      | { color: 'rgba(204, 147, 198, 0.5)', height: '35px', width: '35px', top: '-5px', left: '-10px' }  | Custom styles for the `li` elements.                                                               |
| checkboxStyle        | object      | { color: 'rgba(129, 242, 63, 1)', height: '10px', width: '10px', top: '-5px', left: '-5px' }      | Custom styles for the `checkbox` elements.                                                         |
| radioButtonStyle     | object      | { color: 'rgba(150, 63, 242, 1)', height: '10px', width: '10px', top: '-5px', left: '-5px' }      | Custom styles for the `radio button` elements.                                                     |
| classStyle           | object      | none                                                                                                | Custom styles for the element by className: { [key: string]: ElementStyle }.                       | 
| defaultWidth         | string      | 35px                                                                                                | The default width of the mouse follower.                                                           |
| defaultHeight        | string      | 35px                                                                                                | The default Height of the mouse                                                                    |
| defaultTop           | number      | -5                                                                                                  | The default top position of the mouse follower element.                                            |
| defaultLeft          | number      | -5                                                                                                  | The default left position of the mouse follower element.                                           |
| defaultColor         | string      | rgba(0, 0, 0, 0.5)                                                                                | The default color of the mouse follower element.                                                   |
| debug                | boolean     | false                                                                                               | Enable debug mode to log element names and custom styles to the console. Useful for debugging.     |

*ElementStyle {
  width?: string;
  height?: string;
  color?: string;
  top?: number;
  left?: number;
}

## Customizing Element Styles

You can customize the default hover cursor appearance for different elements by passing style objects as props to the corresponding element style props. Here's an example of how you can customize the styles for different elements:

```
<SmartMouse
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
  classStyle={{
    'some-class': { width: '100px', height: '100px', color: 'red' },
    'another-class': { width: '50px', height: '20px', color: 'green' },
  }}
/>

```

In the example above, we have specified custom styles for the `p`, `a`, `button`, `span`, `img`, `input`, `textarea`, `label`, and `li` elements. You can adjust the color, height, and width values to match your desired appearance.
Also, we applied custom styles to the elements with classNames: some-class, another-class


## Customizing Individual Elements with mousecustom

You can customize the default hover cursor appearance for individual elements by using the mousecustom attribute on the element and passing a JSON string as its value. Here's an example of how you can use the mousecustom prop to customize the height of an element:

```
<input type="text" mousecustom={JSON.stringify({ height: '50px', color: '#e1e89e' })} />
```

In the example above, the <input> element has a mousecustom attribute with a JSON string value that specifies a custom height of '50px'. You can apply this approach to other elements as well.

## Next.js

For using this component with Next.js you should create the client component and import SmartMouse to this component:

```
"use client"

import React from 'react'
import SmartMouse from 'react-smart-mouse'

const SmartMouseMouseComponent = () => {
  return (
    <SmartMouse />
  )
}

export default SmartMouseMouseComponent
```

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/BilVaD1/SmartMouse/blob/main/LICENSE) file for details.

© Copyright 2025 - @BilVaD1
