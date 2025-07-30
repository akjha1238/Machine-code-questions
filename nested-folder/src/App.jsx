import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NestedFolder from './NestedFolder'

function App() {
const data =[ {
    type: "folder",
    label: "nested-folder",
    isOpen:true,
    level:0,
    childs: [
      {
        type: "folder",
        label: "node_modules",
            isOpen:false,
                level:1,


        childs: [],
      },
      {
        type: "folder",
        label: "public",
            isOpen:false,
                level:1,


        childs: [
          {
            type: "file",
            label: "index.html",
            level:2,
          },
          {
            type: "file",
            label: "favicon.ico",
            level:2
          },
        ],
      },
      {
        type: "folder",
        label: "src",
        level:1,
            isOpen:false,

        childs: [
          {
            type: "folder",
            label: "components",
                level:3,

                isOpen:false,

            childs: [
              {
                type: "file",
                label: "Header.js",
                    level:3,

              },
              {
                type: "file",
                label: "Footer.js",
                level:3
              },
            ],
          },
          {
            type: "folder",
            label: "utils",
                isOpen:false,
                level:2,

            childs: [
              {
                type: "file",
                label: "helpers.js",
                level:3,
              },
            ],
          },
          {
            type: "file",
            label: "App.js",
            level:2,
          },
          {
            type: "file",
            label: "index.js",
            level:2
          },
        ],
      },
      {
        type: "file",
        label: "package.json",
            level:1,

      },
      {
        type: "file",
        label: "vite.config.js",
            level:1,

      },
      {
        type: "file",
        label: "README.md",
        level:1
      },
      
    ],
  }];
  return (
    <>
      <h3>Nested Folder Rendered</h3>
      <div className='folder-wrapper'> 
<NestedFolder data={data}/>
      </div>
      
    </>
  )
}

export default App
