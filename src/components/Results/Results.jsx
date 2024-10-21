import {
  calculateInvestmentResults,
  formatCurrency,
  initialInvestment,
  totalInterest,
  totalAmountInvested,
} from "../../utils";

import styles from "./Results.module.css";

const Results = ({ userInput }) => {
  const resultsData = calculateInvestmentResults({ ...userInput });

  const initialInvestments = initialInvestment(resultsData[0]);

  return (
    <table id={styles["result"]}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
          const totalInterests = totalInterest(yearData, initialInvestments);

          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatCurrency.format(yearData.valueEndOfYear)}</td>
              <td>{formatCurrency.format(yearData.interest)}</td>
              <td>{formatCurrency.format(totalInterests)}</td>
              <td>
                {formatCurrency.format(
                  totalAmountInvested(yearData, totalInterests)
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Results;
