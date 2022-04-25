import React, {useState} from 'react';
import Cards from './Cards';
import shuffle from './helper/shuffle';
import '../style/style.css';


const Content = () => {
    const [all, setAll] = useState(Cards);
    const [history, setHistory] = useState([]);
    const [highScore, setHighScore] = useState(0);

    return(
        <div className='background'>
            <div className='scoreBoard'>
                <h4>Current Score: {history.length}</h4>
                <h4>High Score: {highScore}</h4>
            </div>
            <div className='cardStack'>
                {all.map(card => {
                    return(
                        <div key={card.key} id={card.key} className='cardContainer'>
                            <img src={card.img} alt='wand photos' className='card' onClick={() => {
                                setAll([...shuffle(all)]);
                                if(history.includes(card.key)){
                                    // if there are duplicates in history
                                    setHistory([]);
                                }else{
                                    let temp = history.concat(card.key).length; 
                                    setHistory(history.concat(card.key)); 
                                    // value of the state "history" is not updated til the next render, bc it is async
                                    // therefore we need a variable temp to store the value
                                    // useEffect only runs after a render
                                    if(temp > highScore){
                                        setHighScore(temp);
                                    }
                                }
                            }}/>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
export default Content;