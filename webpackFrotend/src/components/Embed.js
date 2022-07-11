import ReactEmbedGist from 'react-embed-gist';
import LoadingBox from './LoadingBox';

function Embed(props) {
    return (
        <div style={{maxWidth:"600px"}}>
            <ReactEmbedGist
            gist={props.src}
            loadingFallback={<LoadingBox />}
            /> 
        </div>
    );
};
export default Embed;