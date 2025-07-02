function DisplayScreen({expression,result}){
    return(
        <div className="display-wrapper">
            <h4>Display screen</h4>
            {expression}
            <div>
                result  :{result}
            </div>
        </div>
    )
}
export default DisplayScreen;