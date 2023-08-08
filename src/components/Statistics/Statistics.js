import { Item, TotalStat } from "./Statistics.styled";


export const Statistics = ({ goodCounter, neutralCounter, badCounter, total, positivePercentage }) => {
    return (<>
            <ul>
                <Item>Good: {goodCounter}</Item>
                <Item>Neutral: {neutralCounter}</Item>
                <Item>Bed: {badCounter}</Item>
            </ul>
            <TotalStat>Total feedbacks: {total}</TotalStat>
            <TotalStat>Positive Feedbacks: {positivePercentage} %</TotalStat>
        </>);
};