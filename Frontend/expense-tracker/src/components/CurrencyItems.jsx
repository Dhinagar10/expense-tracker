const CurrencyItems = (props)=>{
    return (
        <div className="currency-items">
            <div className="currency-item">
                <div className="title">Income</div>
                <div className="amount">{props.income}</div>
            </div>
            <div className="currency-item">
                <div className="title">Expense</div>
                <div className="amount">{ props.expense}</div>
            </div>
            <div className="currency-item">
                <div className="title">Balance</div>
                <div className="amount">{ props.balance}</div>
            </div>
        </div>
    )
}
export default CurrencyItems;