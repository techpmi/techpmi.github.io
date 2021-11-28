import { MouseEventHandler } from 'react';
import { Button as BaseButton} from 'react-bootstrap';
import './Button.css';

type TButtonProps = {
    onClick: MouseEventHandler<Element>;
    caption: string;
    className?: string;
}

export default ({onClick, caption, className}: TButtonProps) => {
    return (
        <BaseButton className={className} bsPrefix="Button" onClick={onClick}>{caption}</BaseButton>
    );
}