import { Button, Container } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (<Container>
        {options.map(option => (
            <Button
                type='button'
                key={option}
                onClick={() => onLeaveFeedback(option)}>
                {option}
            </Button>
        ))}
    </Container>
    );
};

export default FeedbackOptions;

