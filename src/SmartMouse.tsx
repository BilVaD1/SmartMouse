/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
"use client";

import React, { useEffect, useState, forwardRef } from "react";

interface FollowMouseProps {
  pStyle?: ElementStyle;
  aStyle?: ElementStyle;
  buttonStyle?: ElementStyle;
  spanStyle?: ElementStyle;
  imgStyle?: ElementStyle;
  inputStyle?: ElementStyle;
  textareaStyle?: ElementStyle;
  labelStyle?: ElementStyle;
  liStyle?: ElementStyle;
  checkboxStyle?: ElementStyle;
  radioButtonStyle?: ElementStyle;
  classStyle?: { [key: string]: ElementStyle };
  defaultWidth?: string;
  defaultHeight?: string;
  defaultTop?: number;
  defaultLeft?: number;
  defaultColor?: string;
  debug?: boolean;
}

interface ElementStyle {
  width?: string;
  height?: string;
  color?: string;
  top?: number;
  left?: number;
}

const SmartMouse = forwardRef<HTMLDivElement, FollowMouseProps>(
  (
    {
      pStyle,
      aStyle,
      buttonStyle,
      spanStyle,
      imgStyle,
      inputStyle,
      textareaStyle,
      labelStyle,
      liStyle,
      checkboxStyle,
      radioButtonStyle,
      classStyle,
      defaultWidth = "35px",
      defaultHeight = "35px",
      defaultTop = -5,
      defaultLeft = -10,
      defaultColor = "rgba(0, 0, 0, 0.5)",
      debug = false,
    },
    ref
  ) => {
    const [mouseWidth, setMouseWidth] = useState(defaultWidth);
    const [mouseHeight, setMouseHeight] = useState(defaultHeight);
    const [mouseTop, setMouseTop] = useState(defaultTop);
    const [mouseLeft, setMouseLeft] = useState(defaultLeft);
    const [mouseColor, setMouseColor] = useState(defaultColor);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [elementName, setElementName] = useState("");
    const [elementClassName, setElementClassName] = useState("");
    const [turnElStyle, setTurnElStyle] = useState(false);
    const [elStyle, setElStyle] = useState({});


    /* Default styles */
    const defaultButtonStyle = { color: 'rgba(248, 246, 15, 1)', height: '15px', width: '15px', top: '-5px', left: '-10px' };
    const finalButtonStyle = { 
      ...defaultButtonStyle, 
      ...buttonStyle // Merging passed buttonStyle prop
    };

    const defaultPStyle = { color: 'rgba(255, 0, 0, 0.5)', height: '35px', width: '35px', top: '-5px', left: '-10px' };
    const finalPStyle = { 
      ...defaultPStyle, 
      ...pStyle // Merging passed pStyle prop
    };

    const defaultAStyle = { color: 'rgba(0, 128, 0, 1)', height: '15px', width: '15px', top: '-5px', left: '-10px' };
    const finalAStyle = { 
      ...defaultAStyle, 
      ...aStyle // Merging passed aStyle prop
    };

    const defaultSpanStyle = { color: 'rgba(255, 165, 0, 0.5)', height: '35px', width: '35px', top: '-5px', left: '-10px' };
    const finalSpanStyle = { 
      ...defaultSpanStyle, 
      ...spanStyle // Merging passed spanStyle prop
    };

    const defaultImgStyle = { color: 'rgba(248, 246, 15, 0.7)', height: '15px', width: '15px', top: '-5px', left: '-10px' };
    const finalImgStyle = { 
      ...defaultImgStyle, 
      ...imgStyle // Merging passed imgStyle prop
    };

    const defaultInputStyle = { color: 'rgba(67, 39, 245, 1)', height: '30px', width: '2px', top: '-15px', left: '0px' };
    const finalInputStyle = { 
      ...defaultInputStyle, 
      ...inputStyle // Merging passed inputStyle prop
    };

    const defaultTextareaStyle = { color: 'rgba(227, 104, 133, 1)', height: '30px', width: '3px', top: '-15px', left: '0px' };
    const finalTextareaStyle = { 
      ...defaultTextareaStyle, 
      ...textareaStyle // Merging passed textareaStyle prop
    };

    const defaultLabelStyle = { color: 'rgba(128, 128, 0, 0.5)', height: '35px', width: '35px', top: '-5px', left: '-10px' };
    const finalLabelStyle = { 
      ...defaultLabelStyle, 
      ...labelStyle // Merging passed labelStyle prop
    };

    const defaultLiStyle = { color: 'rgba(204, 147, 198, 0.5)', height: '35px', width: '35px', top: '-5px', left: '-10px' };
    const finalLiStyle = { 
      ...defaultLiStyle, 
      ...liStyle // Merging passed liStyle prop
    };

    const defaultCheckboxStyle = { color: 'rgba(129, 242, 63, 1)', height: '10px', width: '10px', top: '-5px', left: '-5px' };
    const finalCheckboxStyle = { 
      ...defaultCheckboxStyle, 
      ...checkboxStyle // Merging passed checkboxStyle prop
    };

    const defaultRadioButtonStyle = { color: 'rgba(150, 63, 242, 1)', height: '10px', width: '10px', top: '-5px', left: '-5px' };
    const finalRadioButtonStyle = { 
      ...defaultRadioButtonStyle, 
      ...radioButtonStyle // Merging passed radioStyle prop
    };

    /* Assign cursor style */
    useEffect(() => {
      const hideCursor = () => {
        document.querySelectorAll("*").forEach((el) => {
          (el as HTMLElement).style.cursor = debug ? "auto" : "none";
        });
      };
    
      window.addEventListener("mousemove", hideCursor);
    
      return () => {
        window.removeEventListener("mousemove", hideCursor);
        document.querySelectorAll("*").forEach((el) => {
          (el as HTMLElement).style.cursor = "auto";
        });
      };
    }, [debug]);
    
    /* Assign element name */
    useEffect(() => {
      const handleMouseMove = (event: MouseEvent) => {
        setPosition({ x: event.clientX, y: event.clientY });

        const element = document.elementFromPoint(event.clientX, event.clientY);
        if (!element) {
          setElementName("");
          return;
        }

        setElementClassName(element.className);

        if (element.nodeName.toLowerCase() === "input" && element.getAttribute("type") === "checkbox") {
          setElementName("input_checkbox");
        } else if (element.nodeName.toLowerCase() === "input" && element.getAttribute("type") === "radio") {
          setElementName("input_radio");
        } else {
          setElementName(element.nodeName.toLowerCase());
        }

        const attr = element.getAttribute("mousecustom");
        if (attr) {
          try {
            const parsedAttr = JSON.parse(attr);
            if (debug) console.log(parsedAttr);

            setTurnElStyle(true);
            setElStyle(parsedAttr);
          } catch (error) {
            console.error("Invalid mousecustom JSON:", error);
          }
        } else {
          setTurnElStyle(false);
          setElStyle({});
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        document.body.style.cursor = "auto";
      };
    }, [debug]);

    /* Assign element style */
    useEffect(() => {
      if (debug) console.log("Element name:", elementName);
    
      const updateMouseStyle = (style?: ElementStyle) => {
        setMouseWidth(style?.width ?? defaultWidth);
        setMouseHeight(style?.height ?? defaultHeight);
        setMouseColor(style?.color ?? defaultColor);
        setMouseTop(style?.top ?? defaultTop);
        setMouseLeft(style?.left ?? defaultLeft);
      };
    
      if (elementName === "body" || elementName === "div") {
        updateMouseStyle();
      } else {
        // Look for classStyle match
        const classNamesProps = Object.keys(classStyle || {});
        let matchingClass: string = '';
        const hasClassNames = classNamesProps.some((className) => {
          const matching = elementClassName?.includes(className);
          if (matching) matchingClass = className;
          return matching
        });
        if (classStyle && hasClassNames) {
          updateMouseStyle(classStyle[matchingClass]);
        } else {
          // Use predefined styles if no classStyle match
          const stylesMap: Record<string, any> = {
            a: finalAStyle,
            p: finalPStyle,
            span: finalSpanStyle,
            img: finalImgStyle,
            button: finalButtonStyle,
            input: finalInputStyle,
            input_checkbox: finalCheckboxStyle,
            input_radio: finalRadioButtonStyle,
            textarea: finalTextareaStyle,
            label: finalLabelStyle,
            li: finalLiStyle,
          };
    
          updateMouseStyle(turnElStyle ? elStyle : stylesMap[elementName]);
        }
      }
    }, [
      elementName,
      turnElStyle,
      elStyle,
      defaultWidth,
      defaultHeight,
      defaultColor,
      defaultTop,
      defaultLeft,
      JSON.stringify(finalAStyle),
      JSON.stringify(finalPStyle),
      JSON.stringify(finalSpanStyle),
      JSON.stringify(defaultImgStyle),
      JSON.stringify(finalButtonStyle),
      JSON.stringify(finalInputStyle),
      JSON.stringify(finalTextareaStyle),
      JSON.stringify(finalLabelStyle),
      JSON.stringify(finalLiStyle),
      JSON.stringify(finalCheckboxStyle),
      JSON.stringify(finalRadioButtonStyle),
      JSON.stringify(classStyle), // Ensure classStyle change triggers this effect
    ]);
    

    return (
      <div
        ref={ref}
        style={{
          zIndex: 3000,
          position: "fixed",
          top: mouseTop,
          left: mouseLeft,
          pointerEvents: "none",
        }}
        data-testid="mouse"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            transform: `translate(${position.x}px, ${position.y}px)`,
            width: mouseWidth,
            height: mouseHeight,
            borderRadius: "50%",
            backgroundColor: mouseColor,
            transition: "background-color 0.7s, width 0.7s, height 0.7s",
          }}
        />
      </div>
    );
  }
);

export default SmartMouse;
