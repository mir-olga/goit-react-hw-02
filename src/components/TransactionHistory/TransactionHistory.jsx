import css from './TransactionHistory.module.css';

export const TransactionHistory = ( {items} ) => 
{
    return (
        <table className={css.transactionHistory}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
        {items.map(item => (
          <tr className={css.tbody} key={item.id}>
            <td className={css.tbItem}>{item.type}</td>
            <td className={css.tbItem}>{item.amount}</td>
            <td className={css.tbItem}>{item.currency}</td>
          </tr>)
        )}
        </tbody>
      </table>
    )
}