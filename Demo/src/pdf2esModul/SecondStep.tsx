import React from 'react'
import { FileInput,Button,TextArea } from '@blueprintjs/core'

export default function SecondStep(){

  return(
    <div>
      <div style={{marginLeft:'30%',marginTop:10}}>
        <input type = 'text' defaultValue="(PDF)文件名" style={{height:30}}/>
        <Button style={{marginLeft:100}}>点击转换</Button>
      </div>
        <TextArea
         style={{
           resize:'none',
           height: 400,
           width:'90%',
           position:'absolute',
           marginTop:20,
           marginLeft:20,
           overflow:'auto'
         }
         }
         defaultValue=""
        />
    </div>
  )

}
