import Wrapper from "../Component/Wrapper";
import EmojiItem from "../Component/EmojiItem";
import ButtonResult from "../Component/ButtonResult";
import React from "react";

export default class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            emoji1: {
                emoji: '🍔',
                like: 0
            },
            emoji2: {
                emoji: '😀',
                like: 0
            },
            emoji3: {
                emoji: '😂',
                like: 0
            },
        }
        this.addLike = this.addLike.bind(this)
        this.showWin = this.showWin.bind(this)
    }

    addLike(emojiName) {
        this.setState((state) => {
            return {
                [emojiName]: {
                    emoji: state[emojiName].emoji,
                    like: state[emojiName].like + 1
                }
            }
        })
    }

    showWin(state) {
        let maxEmoji = {
            like: 0,
            emoji: 'friendship'
        };

        for (const key in state) {
            const emoji = state[key];

            if (emoji.like > maxEmoji.like) {
                maxEmoji = emoji;
            }
        }
        alert(`Win ${maxEmoji.emoji}`)
    }

    render() {
        return (
            <Wrapper>
                <ul className="list-group mt-3 ">
                    <EmojiItem emoji={this.state.emoji1.emoji} likes={this.state.emoji1.like} onClick={this.addLike}
                               emojiname={'emoji1'}/>
                    <EmojiItem emoji={this.state.emoji2.emoji} likes={this.state.emoji2.like} onClick={this.addLike}
                               emojiname={'emoji2'}/>
                    <EmojiItem emoji={this.state.emoji3.emoji} likes={this.state.emoji3.like} onClick={this.addLike}
                               emojiname={'emoji3'}/>
                </ul>
                <ButtonResult showWin={this.showWin} state={this.state}/>
            </Wrapper>
        );

    }

}
