const MyButton = ({text,type,onClick})=>{

    const btnType = ['positive','negative'].includes(type)?type:'default';

    return(
        <div>
            <button className={["MyButton",`MyButton_${btnType}`].join(" ")} onClick={onClick}>
                {text}
            </button>
        </div>
    )
}

MyButton.defaultProps={
    type:'default',
}

export default MyButton;