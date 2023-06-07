import {Button} from "@mui/material";
function Answer(props) {
    const {stickers, response, onClick} = props;
    return (
        <div className="answer-box border rounded-2 p-2">
            <div className="row">
                <div className="col">{stickers}</div>
            </div>
            <div className="answer">
                <pre>
                {response}
                </pre>
            </div>
            {
                response ? <Button onClick={onClick}>Clear</Button> : null
            }
        </div>
    );
}

export default Answer;