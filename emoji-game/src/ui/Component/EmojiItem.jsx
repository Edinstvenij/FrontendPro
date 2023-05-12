import React from "react";

export default class EmojiItem extends React.Component {




    render() {
        const {emoji,onClick,likes,emojiname, ...props} = this.props;

        return (
            <li
                className="list-group-item list-group-item-action  d-flex justify-content-between" {...props}
                onClick={()=>{onClick(emojiname)}}
            >
                <span>{emoji}</span>
                <span>{likes}</span>
            </li>
        )
    }

}