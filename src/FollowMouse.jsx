"use client"

import React, { useEffect, useState, forwardRef } from 'react'

const FollowMouse = forwardRef(({pStyle, aStyle, buttonStyle, spanStyle, imgStyle, inputStyle, textareaStyle, labelStyle, liStyle, defaultWidth, defaultHeight, defaultTop, defaultLeft, defaultColor, debug}, ref) => {

  const [mouseWidth, setMouseWidth] = useState(defaultWidth ? defaultWidth : '35px');
  const [mouseHeight, setMouseHeight] = useState(defaultHeight ? defaultHeight :'35px');
  const [mouseTop, setMouseTop] = useState(defaultTop ? defaultTop : -5);
  const [mouseLeft, setMouseLeft] = useState(defaultLeft ? defaultLeft : -10);
  const [mouseColor, setMouseColor] = useState(defaultColor ? defaultColor : 'rgba(0, 0, 0, 0.5)');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [elementName, setElementName] = useState('');
  const [turnElStyle, setTurnElStyle] = useState(false);
  const [elStyle, setElStyle] = useState({});

  useEffect(() => {
    function handleMouseMove(event) {
      setPosition({ x: event.clientX, y: event.clientY });
      const element = document.elementFromPoint(event.clientX, event.clientY);
      if (element) {
        if(!debug){
          element.style.cursor = 'none'
        }
        setElementName(element.nodeName.toLowerCase());

        if(element.getAttribute('mousecustom')){
          const attr  = JSON.parse(element.getAttribute('mousecustom'));
          if(debug){
            console.log(attr)
          }
          setTurnElStyle(true)
          setElStyle(attr)
        } else {
          setTurnElStyle(false)
          setElStyle({})
        }
      } else {
        setElementName('');
      }
    }

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [debug]);

  useEffect(() => {
    if(!debug) {
      document.body.style.cursor = 'none';
      return () => {
        document.body.style.cursor = 'auto';
      };
    }
  }, [debug]);

  useEffect(() => {
    if(debug){
      console.log('Element name:', elementName);
    }

    if (elementName === 'body' || elementName === 'div') {
      setMouseHeight(defaultWidth ? defaultWidth : '35px'); 
      setMouseWidth(defaultHeight ? defaultHeight :'35px'); 
      setMouseColor(defaultColor ? defaultColor : 'rgba(0, 0, 0, 0.5)');
      setMouseTop(defaultTop ? defaultTop : -5);
      setMouseLeft(defaultLeft ? defaultLeft : -10);
    }
   
    if (elementName === 'a' && !turnElStyle) {
      setMouseColor(aStyle?.color ?? 'rgba(0, 0, 0, 0.125)')
      setMouseHeight(aStyle?.height ?? '15px'); 
      setMouseWidth(aStyle?.width ?? '15px'); 
      setMouseTop(aStyle?.top ?? -5);
      setMouseLeft(aStyle?.left ?? -10);
    } else if (elementName === 'a' && turnElStyle) {
      setMouseHeight(elStyle?.height ?? '15px'); 
      setMouseWidth(elStyle?.width ?? '15px'); 
      setMouseColor(elStyle?.color ?? 'rgba(0, 0, 0, 0.125)');
      setMouseTop(elStyle?.top ?? -5);
      setMouseLeft(elStyle?.left ?? -10);
    }
    
    if (elementName === 'p' && !turnElStyle) {
      setMouseColor(pStyle?.color ?? 'rgba(0, 0, 0, 0.125)')
      setMouseHeight(pStyle?.height ?? '35px'); 
      setMouseWidth(pStyle?.width ?? '35px'); 
      setMouseTop(pStyle?.top ?? -5);
      setMouseLeft(pStyle?.left ?? -10);
    } else if (elementName === 'p' && turnElStyle) {
      setMouseHeight(elStyle?.height ?? '35px'); 
      setMouseWidth(elStyle?.width ?? '35px'); 
      setMouseColor(elStyle?.color ?? 'rgba(0, 0, 0, 0.125)');
      setMouseTop(elStyle?.top ?? -5);
      setMouseLeft(elStyle?.left ?? -10);
    }
    
    if (elementName === 'span' && !turnElStyle) {
      setMouseColor(spanStyle?.color ?? 'rgba(0, 0, 0, 0.125)')
      setMouseHeight(spanStyle?.height ?? '35px'); 
      setMouseWidth(spanStyle?.width ?? '35px'); 
      setMouseTop(spanStyle?.top ?? -5);
      setMouseLeft(spanStyle?.left ?? -10);
    } else if (elementName === 'span' && turnElStyle) {
      setMouseHeight(elStyle?.height ?? '15px'); 
      setMouseWidth(elStyle?.width ?? '15px'); 
      setMouseColor(elStyle?.color ?? 'rgba(0, 0, 0, 0.125)');
      setMouseTop(elStyle?.top ?? -5);
      setMouseLeft(elStyle?.left ?? -10);
    }
    
    if (elementName === 'h1' || elementName === 'h2' || elementName === 'h3' || elementName === 'h4' || elementName === 'h5' || elementName === 'h6') {
      setMouseColor('rgba(0, 0, 0, 0.125)')
    }
    
    if (elementName === 'img' && !turnElStyle) {
      setMouseColor(imgStyle?.color ?? 'rgba(248, 246, 15, 1)')
      setMouseHeight(imgStyle?.height ?? '15px'); 
      setMouseWidth(imgStyle?.width ?? '15px'); 
      setMouseTop(imgStyle?.top ?? -5);
      setMouseLeft(imgStyle?.left ?? -10);
    } else if (elementName === 'img' && turnElStyle) {
      setMouseHeight(elStyle?.height ?? '15px'); 
      setMouseWidth(elStyle?.width ?? '15px'); 
      setMouseColor(elStyle?.color ?? 'rgba(248, 246, 15, 1)');
      setMouseTop(elStyle?.top ?? -5);
      setMouseLeft(elStyle?.left ?? -10);
    }
    
    if (elementName === 'button' && !turnElStyle) {
      setMouseHeight(buttonStyle?.height ?? '15px'); 
      setMouseWidth(buttonStyle?.width ?? '15px'); 
      setMouseColor(buttonStyle?.color ?? 'rgba(248, 246, 15, 1)');
      setMouseTop(buttonStyle?.top ?? -5);
      setMouseLeft(buttonStyle?.left ?? -10);
    } else if (elementName === 'button' && turnElStyle) {
      setMouseHeight(elStyle?.height ?? '15px'); 
      setMouseWidth(elStyle?.width ?? '15px'); 
      setMouseColor(elStyle?.color ?? 'rgba(248, 246, 15, 1)');
      setMouseTop(elStyle?.top ?? -5);
      setMouseLeft(elStyle?.left ?? -10);
    }
    
    if (elementName === 'input' && !turnElStyle) {
      setMouseHeight(inputStyle?.height ?? '30px'); 
      setMouseWidth(inputStyle?.width ?? '2px'); 
      setMouseColor(inputStyle?.color ?? 'rgba(67, 39, 245, 1)');
      setMouseTop(inputStyle?.top ?? -10);
      setMouseLeft(inputStyle?.left ?? -10);
    } else if (elementName === 'input' && turnElStyle) {
      setMouseHeight(elStyle?.height ?? '30px'); 
      setMouseWidth(elStyle?.width ?? '2px'); 
      setMouseColor(elStyle?.color ?? 'rgba(67, 39, 245, 1)');
      setMouseTop(elStyle?.top ?? -10);
      setMouseLeft(elStyle?.left ?? -10);
    }
    
    if (elementName === 'textarea' && !turnElStyle) {
      setMouseHeight(textareaStyle?.height ?? '30px'); 
      setMouseWidth(textareaStyle?.width ?? '2px'); 
      setMouseColor(textareaStyle?.color ?? 'rgba(67, 39, 245, 1)');
      setMouseTop(textareaStyle?.top ?? -10);
      setMouseLeft(textareaStyle?.left ?? -10);
    } else if (elementName === 'textarea' && turnElStyle) {
      setMouseHeight(elStyle?.height ?? '30px'); 
      setMouseWidth(elStyle?.width ?? '2px'); 
      setMouseColor(elStyle?.color ?? 'rgba(67, 39, 245, 1)');
      setMouseTop(elStyle?.top ?? -10);
      setMouseLeft(elStyle?.left ?? -10);
    }

    if (elementName === 'label' && !turnElStyle) {
      setMouseHeight(labelStyle?.height ?? '35px'); 
      setMouseWidth(labelStyle?.width ?? '35px'); 
      setMouseColor(labelStyle?.color ?? 'rgba(0, 0, 0, 0.5)');
      setMouseTop(labelStyle?.top ?? -5);
      setMouseLeft(labelStyle?.left ?? -10);
    } else if (elementName === 'label' && turnElStyle) {
      setMouseHeight(elStyle?.height ?? '35px'); 
      setMouseWidth(elStyle?.width ?? '35px'); 
      setMouseColor(elStyle?.color ?? 'rgba(0, 0, 0, 0.5)');
      setMouseTop(elStyle?.top ?? -5);
      setMouseLeft(elStyle?.left ?? -10);
    }

    if (elementName === 'li' && !turnElStyle) {
      setMouseHeight(liStyle.height ?? '35px'); 
      setMouseWidth(liStyle.width ?? '35px'); 
      setMouseColor(liStyle.color ?? 'rgba(0, 0, 0, 0.5)');
      setMouseTop(liStyle.top ?? -5);
      setMouseLeft(liStyle.left ?? -10);
    } else if (elementName === 'li' && turnElStyle) {
      setMouseHeight(elStyle.height ?? '35px'); 
      setMouseWidth(elStyle.width ?? '35px'); 
      setMouseColor(elStyle.color ?? 'rgba(0, 0, 0, 0.5)');
      setMouseTop(elStyle.top ?? -5);
      setMouseLeft(elStyle.left ?? -10);
    }



  }, [elementName]);


  return (
    <div ref={ref} style={{ zIndex: '3000', position: 'fixed', top: mouseTop, left: mouseLeft, pointerEvents: 'none' }} test-id='mouse'>
      <div style={{ position: 'absolute', 
        top: 0, 
        left: 0, 
        transform: `translate(${position.x + scrollPosition/3}px, ${position.y}px)`, 
        width: mouseWidth, 
        height: mouseHeight, 
        borderRadius: '50%', 
        backgroundColor: mouseColor, 
        transition: 'background-color 0.7s, width 0.7s, height 0.7s' 
        }} 
      />
    </div>
  );
})

export default FollowMouse;