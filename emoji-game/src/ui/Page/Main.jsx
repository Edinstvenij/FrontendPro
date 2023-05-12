import Wrapper from "../Component/Wrapper";
import EmojiItem from "../Component/EmojiItem";
import ButtonResult from "../Component/ButtonResult";
import React from "react";

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emoji1: 0,
            emoji2: 0,
            emoji3: 0,
        }
        this.addLike = this.addLike.bind(this)
        this.showWin = this.showWin.bind(this)
    }

    addLike(emojiName) {
        this.setState((state, props) => {
            return {
                [emojiName]: state[emojiName] + 1
            }
        })
    }

    showWin(state) {
        // Логика показа смайлика который выиграл
    }

    render() {


        return (
            <Wrapper>
                <ul className="list-group mt-3 ">
                    <EmojiItem emoji={'🍔'} likes={this.state.emoji1} onClick={this.addLike} emojiname={'emoji1'}/>
                    <EmojiItem emoji={'😀'} likes={this.state.emoji2} onClick={this.addLike} emojiname={'emoji2'}/>
                    <EmojiItem emoji={'😂'} likes={this.state.emoji3} onClick={this.addLike} emojiname={'emoji3'}/>
                </ul>
                <ButtonResult showWin={this.showWin}/>
            </Wrapper>
        );

    }

}
