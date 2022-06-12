import Frame from 'react-frame-component';
import { useEffect, useState } from "react";


function Embed(props) {
    return (
        <div >
            <Frame  style={{width:"100%",height:"100%"}} initialContent={`
                    <!DOCTYPE html>
                    <html>
                        <head>
                        </head>
                        <body style=>
                    ${props.src}
                        </body>
                    </html>`}/>
                    <div>
            </div>
        </div>
    );
  }
  
  export default Embed;