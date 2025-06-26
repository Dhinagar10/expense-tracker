import CurrencyItems from "./CurrencyItems";
const BalanceContainer = (props) => {
  const {expenseArr} = props;
  const incomeArr = expenseArr.filter((item) => item.expense > 0);
  const expenseArr1 = expenseArr.filter((item) => item.expense < 0);
  let income = 0;
  let expensess = 0;
  incomeArr.forEach((item) => { income += item.expense; });
  expenseArr1.forEach((item) => { expensess += item.expense; });
  let balance = income + expensess;
  console.log("Income "+income,"Expense "+ expensess);
  return (
    <div className="balance-container">
          <CurrencyItems
            income={income}
            expense={Math.abs(expensess)}
            balance={balance}/>
    </div>
  );
}
export default BalanceContainer;