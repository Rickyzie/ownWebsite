import Frame from 'react-frame-component';
import ReactEmbedGist from 'react-embed-gist';
import LoadingBox from './LoadingBox';

function Embed(props) {
    console.log(props.src)
    return (
        <div style={{maxWidth:"600px"}}>
             <ReactEmbedGist
            gist={props.src}
            loadingFallback={<LoadingBox />}
            /> 
        </div>
    );
  }
  
  export default Embed;