import Frame from 'react-frame-component';
import ReactEmbedGist from 'react-embed-gist';
import LoadingBox from './LoadingBox';

function Embed(props) {
    console.log(props.src)
    return (
        <div >
             <ReactEmbedGist
            gist="Rickyzie/8677c26e5cf97ad2ed4e2735ccd6f77d"
            loadingFallback={<LoadingBox />}
            /> 
        </div>
    );
  }
  
  export default Embed;