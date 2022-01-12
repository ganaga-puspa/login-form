import React from 'react'
import {Button} from 'react-bootstrap'

export default function MyButton(props) {
    return (
        <div>
            <Button
        type={props.btType}
        onClick={props.btOnClick}
        
        style={{
          backgroundColor: `${props.btbackColor}`,
          fontSize: `${props.btfontsize}`,
          color: `${props.btfontColor} `,
          fontStyle: `${props.btfontStyle} `,
          fontFamily: `${props.btfontfamily} `,
          borderRadius: `${props.btborderRadius}`,
          width: `${props.btwidth}`,
          height: `${props.btheight} `,
          borderColor: `${props.btbordercolor} `,
          margin: `${props.btmargin} `,
        }}
      >
        {props.bttxtLabel}
      </Button>
        </div>
    )
}
