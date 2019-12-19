import './App.styl'
import React from 'react'
import {Button,FileInput} from '@blueprintjs/core'
import Pdf2Es from './pdf2esModul/Pdf2Es'
import {Tab,Tabs} from '@blueprintjs/core'

export default function App() {
  return (
    <div style={{marginLeft:50,marginRight:50}} >
      <div className="header" style={{height:50,backgroundColor:"#CED9E0"}}>
        
        <Button style={{marginLeft:'70%',marginTop:10}}>注册</Button>
        <Button style={{marginLeft:10,marginTop:10}} >登录</Button>
      </div>
      <div style={{marginTop:10}}>
      <Tabs id ="demo">
        <Tab id="ng" title="PDF2ES" className="PDF" panel={<Pdf2Es/>}/>
        <Tab id="mb" title="TXT2ES"   panelClassName="ember-panel" />
        <Tab id="rx" title="SearchES"   />
        <Tab id="bb" title="TBD"   />
      </Tabs>
      </div>
    </div>
  )
}


