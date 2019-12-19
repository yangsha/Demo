import React,{useState}from 'react'
import { FileInput,Button,Label } from '@blueprintjs/core'

export default function FirstStep(){
    
  const [fileInputText,setFileInputText] = useState("请选择文件")
  function onFileChange(e: React.FormEvent<HTMLInputElement>) {
    const input = e.target as HTMLInputElement
    const file = input.files[0]
    if (file) {
      setFileInputText(`${file.name}`)
    } else {
      setFileInputText("请选择文件")
    }
  }
  return(
    <div style={{ marginLeft:'30%',position:'absolute',marginTop:200}} >
      <FileInput
          text={fileInputText}
          onInputChange={onFileChange}
        />
      <Button style={{marginLeft:50}} >上传PDF文件</Button>
    </div>
  )
}
