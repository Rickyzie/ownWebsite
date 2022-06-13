import Frame from 'react-frame-component';


function Embed(props) {
    return (
        <div >
            <Frame  style={{width:"100%",height:"100%"}} initialContent={`
                    <!DOCTYPE html>
                    <html>
                        <head>
                        </head>
                        <body>
                            ${props.src}
                        </body>
                    </html>`}/>
        </div>
    );
  }
  
  export default Embed;